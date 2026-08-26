async function imageToBase64(imagePath) {
    const response = await fetch(imagePath);

    if (!response.ok) {
        throw new Error("Failed to load classroom image.");
    }

    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result.split(",")[1]);
        };

        reader.onerror = reject;

        reader.readAsDataURL(blob);
    });
}


async function analyzeClassroom(
    imagePath,
    classroomId = "",
    expectedSeats = []
) {

    try {

        // Convert classroom image to Base64
        const base64 = await imageToBase64(imagePath);


        // Known classroom layout information
        const seatHint = expectedSeats.length
            ? `
KNOWN LAYOUT FOR THIS SELECTED CLASSROOM

Classroom id: ${classroomId}

Expected visible student seats: ${expectedSeats.length}

Return exactly these seat ids, in this order, one object per id:

${expectedSeats
    .map(
        (seat) =>
            `- ${seat.id}: x=${seat.x}, y=${seat.y}`
    )
    .join("\n")}

Use these coordinates exactly for each returned seat.
Analyze the image to score and explain each seat,
but do not change the ids or coordinates.
`
            : "";


        // AI analysis prompt
        const prompt = `
You are Understandably AI.

Analyze the classroom image carefully.
${seatHint}

IMPORTANT RULES

1. Detect EVERY visible student seat/chair/bench position in the classroom layout.

2. Double-check seat detection before answering:

- First scan the full image from top-left to bottom-right.
- Then scan the classroom perimeter clockwise and verify no visible seat was missed.
- If a seat label is visible, copy it EXACTLY as written.
- If no label is visible, assign ids in reading order as T1, T2, T3, etc.
- Never skip, merge, rename, or invent seats that are not visible.
- If a known layout is provided above, return exactly that known layout seat count and exactly those ids.

3. Return seat coordinates as normalized image percentages.

x = 0.0 to 1.0

y = 0.0 to 1.0

4. For EVERY visible seat return:

- id
- x
- y
- score (0-100)
- visibility
- visibilityScore (0-100)
- lighting
- lightingScore (0-100)
- distance
- distanceScore (0-100)
- comfort
- comfortScore (0-100)
- reason

5. Give an overall classroom score.

6. Give exactly THREE recommendations.

7. Return a seatDetectionAudit object with:

- visibleSeatCount
- detectedSeatIds
- doubleCheckPassed
- auditNote

8. Return ONLY valid JSON.

9. Do NOT wrap JSON inside markdown.

Example:

{
  "classroomScore": 92,

  "recommendations": [
    "Improve lighting near the back benches.",
    "Reduce glare from the left windows.",
    "Front benches are best for board visibility."
  ],

  "seatDetectionAudit": {
    "visibleSeatCount": 2,
    "detectedSeatIds": ["T1", "T2"],
    "doubleCheckPassed": true,
    "auditNote": "All visible seats were checked in two passes."
  },

  "seats": [
    {
      "id": "T1",
      "x": 0.18,
      "y": 0.34,
      "score": 95,
      "visibility": "Excellent",
      "visibilityScore": 96,
      "lighting": "Good",
      "lightingScore": 88,
      "distance": "Near",
      "distanceScore": 94,
      "comfort": "Excellent",
      "comfortScore": 95,
      "reason": "Clear view of the smart board."
    },

    {
      "id": "T2",
      "x": 0.26,
      "y": 0.34,
      "score": 88,
      "visibility": "Very Good",
      "visibilityScore": 90,
      "lighting": "Good",
      "lightingScore": 86,
      "distance": "Near",
      "distanceScore": 91,
      "comfort": "Good",
      "comfortScore": 84,
      "reason": "Slight side angle."
    }
  ]
}
`;


        // Send image + prompt to our Netlify backend
        const response = await fetch(
            "/.netlify/functions/analyze",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt,
                    base64: base64,
                    mimeType: "image/jpeg"
                })
            }
        );


        // Read and validate the backend response.
        const result = await readAnalysisResponse(response);

        console.log("Backend response:", result);


        // Backend already parsed Gemini's JSON
        return result;


    } catch (error) {

        console.error(
            "Classroom analysis failed:",
            error
        );

        throw error;
    }
}


async function analyzeVideoFrame(base64, frameContext = {}) {
    const {
        timestamp = 0,
        duration = 0,
        classroomId = "",
        expectedSeats = [],
        analysisNumber = 1
    } = frameContext;

    const seatHint = expectedSeats.length
        ? `
TRACKED SEAT MAP

Keep these anonymous seat ids attached to the same physical seats between frames:

${expectedSeats
    .map((seat) => `- ${seat.id}: previous frame x=${seat.x}, y=${seat.y}; classroom map x=${seat.mapX}, y=${seat.mapY}`)
    .join("\n")}

Treat the tracked list as the minimum known layout, not the maximum seat count. Return one object for every tracked seat, including empty seats, then add an object for every newly visible student or seat that is not already tracked. Give new seats the next unused T-number. Keep each existing id attached to the same physical seat. Re-detect x and y on this current frame so the marker remains on the visible student or seat; do not blindly repeat a previous frame coordinate. Keep mapX and mapY stable unless the first estimate was clearly wrong. Never remove or rename a tracked seat.
`
        : `
INITIAL SEAT MAPPING

Detect every visible student and every visible physical student seat, chair, desk position, or bench position. The first frame is only the start of the map; later frames may add seats that become clearer.
Assign stable anonymous ids in reading order as T1, T2, T3, and so on.
For an occupied seat, place x and y at the center of the visible student's head/upper torso, not on the desk, wall, or background. For an empty seat, place x and y at the center of the visible chair or sitting position.
Also infer a top-down classroom layout and return mapX and mapY from 0.0 to 1.0, where mapX runs left to right and mapY runs from the front/teaching wall to the back of the room.
Include empty seats as well as occupied seats.
`;

    const prompt = `
You are Understandably AI analyzing one frame from uploaded classroom video.

Frame number: ${analysisNumber}
Video timestamp: ${timestamp.toFixed(1)} seconds of ${duration.toFixed(1)} seconds
Selected classroom layout: ${classroomId || "auto-detect"}
${seatHint}

Analyze only visible, observable classroom behavior. Never identify a student, infer identity or demographics, recognize faces, or infer emotions. Use anonymous seat ids only. Attention estimates must be based on observable cues such as head direction, posture, visible gaze direction, note-taking, and participation.

Before returning JSON, do a strict detection pass: count visible student bodies first, including small background students and partially occluded students; scan left-to-right across the front, middle, and back of the room; then verify that every counted student has a corresponding occupied seat object with a valid personBox and x/y anchor. Do not stop after detecting only the largest foreground students. After that, add clearly visible empty seats.

For every seat return:

- id
- x and y normalized from 0.0 to 1.0 at the visible student/seat anchor in this exact video frame
- mapX and mapY normalized from 0.0 to 1.0 for the inferred top-down classroom map
- personBox as an object with left, top, right, and bottom normalized from 0.0 to 1.0 when a student is visible; otherwise null
- occupied as a boolean
- occupancyConfidence from 0 to 100
- attentionState as exactly one of "Attentive", "Partially attentive", "Not attentive", or "Unknown"
- attentionScore from 0 to 100; use 0 for an empty seat
- attentionConfidence from 0 to 100
- attentionReason with a brief observable explanation
- score from 0 to 100 for overall learning suitability at this moment
- visibility and visibilityScore
- lighting and lightingScore
- distance and distanceScore
- comfort and comfortScore
- reason with a brief overall explanation

Also return:

- classroomScore from 0 to 100 representing current whole-class attention among occupied seats
- exactly three concise recommendations based on this frame
- occupancySummary with totalSeats, occupiedSeats, emptySeats, attentiveSeats, lowAttentionSeats, and notAttentiveSeats
- seatDetectionAudit with visibleStudentCount, visibleSeatCount, returnedSeatCount, detectedSeatIds, doubleCheckPassed, and auditNote

Return only valid JSON without markdown.
`;

    const response = await fetch("/.netlify/functions/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt,
            base64,
            mimeType: "image/jpeg"
        })
    });

    return readAnalysisResponse(response);
}


async function readAnalysisResponse(response) {
    const responseText = await response.text();
    let result;

    try {
        result = responseText ? JSON.parse(responseText) : {};
    } catch (error) {
        const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

        if (isLocalhost) {
            throw new Error("The AI function is not running on this local server. Start CodetFinal with Netlify Dev, then open its Netlify Dev URL.");
        }

        throw new Error("The AI service returned an invalid response. Please try again.");
    }

    if (!response.ok) {
        throw new Error(result.error || `AI analysis failed (${response.status}).`);
    }

    return result;
}
