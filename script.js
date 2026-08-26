const splash = document.getElementById("splash");
const homeBtn = document.getElementById("homeBtn");
const homeScreen = document.getElementById("homeScreen");
const resultScreen = document.getElementById("resultScreen");
const loading = document.getElementById("loading");

const classSelect = document.getElementById("classSelect");
const analyzeBtn = document.getElementById("analyzeBtn");
const classImage = document.getElementById("classImage");
const classVideo = document.getElementById("classVideo");
const frameCanvas = document.getElementById("frameCanvas");
const planShell = document.querySelector(".planShell");
const classroomMapSection = document.getElementById("classroomMapSection");
const classroomMapSeats = document.getElementById("classroomMapSeats");
const classroomMapCount = document.getElementById("classroomMapCount");

const modeButtons = document.querySelectorAll(".modeButton");
const videoSetup = document.getElementById("videoSetup");
const photoSetup = document.getElementById("photoSetup");
const videoDropZone = document.getElementById("videoDropZone");
const videoInput = document.getElementById("videoInput");
const videoClassSelect = document.getElementById("videoClassSelect");
const videoAnalyzeBtn = document.getElementById("videoAnalyzeBtn");
const videoFileSummary = document.getElementById("videoFileSummary");
const videoFileName = document.getElementById("videoFileName");
const videoFileMeta = document.getElementById("videoFileMeta");
const removeVideoBtn = document.getElementById("removeVideoBtn");

const overallScore = document.getElementById("overallScore");
const scoreLabel = document.getElementById("scoreLabel");
const recommendations = document.getElementById("recommendations");
const overlay = document.getElementById("overlay");
const liveStatus = document.getElementById("liveStatus");
const liveStatusText = document.getElementById("liveStatusText");
const frameNotice = document.getElementById("frameNotice");
const videoAnalysisBar = document.getElementById("videoAnalysisBar");
const toggleLiveBtn = document.getElementById("toggleLiveBtn");
const toggleLiveText = document.getElementById("toggleLiveText");
const frameTimestamp = document.getElementById("frameTimestamp");
const liveMetrics = document.getElementById("liveMetrics");
const occupiedMetric = document.getElementById("occupiedMetric");
const attentiveMetric = document.getElementById("attentiveMetric");
const frameMetric = document.getElementById("frameMetric");

const recommendationTab = document.getElementById("recommendationTab");
const bestsTab = document.getElementById("bestsTab");
const seatTab = document.getElementById("seatTab");
const framesTab = document.getElementById("framesTab");
const framesTabCount = document.getElementById("framesTabCount");
const recommendationPanel = document.getElementById("recommendationPanel");
const bestsPanel = document.getElementById("bestsPanel");
const seatPanel = document.getElementById("seatPanel");
const framesPanel = document.getElementById("framesPanel");
const bestsInfo = document.getElementById("bestsInfo");
const seatInfo = document.getElementById("seatInfo");
const framesInfo = document.getElementById("framesInfo");
const currentDate = document.getElementById("currentDate");
const loadingTitle = document.getElementById("loadingTitle");
const loadingDetail = document.getElementById("loadingDetail");

const classrooms = {
    class8a: "assets/class8a.jpg",
    class8b: "assets/class8b.jpg",
    class8c: "assets/class8c.jpg",
    class8d: "assets/class8d.jpg"
};

const seatMaps = {
    class8a: [
        { id: "T1", x: 0.08, y: 0.38 },
        { id: "T2", x: 0.08, y: 0.47 },
        { id: "T3", x: 0.08, y: 0.58 },
        { id: "T4", x: 0.08, y: 0.68 },
        { id: "T5", x: 0.14, y: 0.84 },
        { id: "T6", x: 0.25, y: 0.84 },
        { id: "T7", x: 0.36, y: 0.84 },
        { id: "T8", x: 0.47, y: 0.84 },
        { id: "T9", x: 0.58, y: 0.84 },
        { id: "T10", x: 0.70, y: 0.84 },
        { id: "T11", x: 0.81, y: 0.84 },
        { id: "T12", x: 0.93, y: 0.25 },
        { id: "T13", x: 0.93, y: 0.35 },
        { id: "T14", x: 0.93, y: 0.46 },
        { id: "T15", x: 0.93, y: 0.57 },
        { id: "T16", x: 0.93, y: 0.68 }
    ],
    class8b: [
        { id: "T1", x: 0.18, y: 0.31 },
        { id: "T2", x: 0.28, y: 0.32 },
        { id: "T3", x: 0.38, y: 0.32 },
        { id: "T4", x: 0.18, y: 0.52 },
        { id: "T5", x: 0.28, y: 0.52 },
        { id: "T6", x: 0.39, y: 0.52 },
        { id: "T7", x: 0.60, y: 0.34 },
        { id: "T8", x: 0.70, y: 0.36 },
        { id: "T9", x: 0.80, y: 0.39 },
        { id: "T10", x: 0.57, y: 0.53 },
        { id: "T11", x: 0.68, y: 0.56 },
        { id: "T12", x: 0.78, y: 0.58 },
        { id: "T13", x: 0.17, y: 0.66 },
        { id: "T14", x: 0.28, y: 0.67 },
        { id: "T15", x: 0.39, y: 0.68 },
        { id: "T16", x: 0.17, y: 0.88 },
        { id: "T17", x: 0.28, y: 0.88 },
        { id: "T18", x: 0.39, y: 0.88 },
        { id: "T19", x: 0.60, y: 0.70 },
        { id: "T20", x: 0.70, y: 0.68 },
        { id: "T21", x: 0.80, y: 0.66 },
        { id: "T22", x: 0.60, y: 0.87 },
        { id: "T23", x: 0.70, y: 0.85 },
        { id: "T24", x: 0.80, y: 0.83 }
    ],
    class8c: [
        { id: "T1", x: 0.08, y: 0.20 },
        { id: "T2", x: 0.08, y: 0.31 },
        { id: "T3", x: 0.08, y: 0.43 },
        { id: "T4", x: 0.08, y: 0.54 },
        { id: "T5", x: 0.08, y: 0.65 },
        { id: "T6", x: 0.08, y: 0.77 },
        { id: "T7", x: 0.08, y: 0.88 },
        { id: "T8", x: 0.32, y: 0.35 },
        { id: "T9", x: 0.32, y: 0.46 },
        { id: "T10", x: 0.32, y: 0.57 },
        { id: "T11", x: 0.32, y: 0.65 },
        { id: "T12", x: 0.55, y: 0.70 },
        { id: "T13", x: 0.62, y: 0.70 },
        { id: "T14", x: 0.70, y: 0.45 },
        { id: "T15", x: 0.70, y: 0.56 },
        { id: "T16", x: 0.89, y: 0.21 },
        { id: "T17", x: 0.89, y: 0.32 },
        { id: "T18", x: 0.89, y: 0.43 },
        { id: "T19", x: 0.89, y: 0.54 },
        { id: "T20", x: 0.89, y: 0.65 },
        { id: "T21", x: 0.89, y: 0.76 },
        { id: "T22", x: 0.89, y: 0.88 },
        { id: "T23", x: 0.29, y: 0.92 },
        { id: "T24", x: 0.40, y: 0.92 },
        { id: "T25", x: 0.66, y: 0.92 },
        { id: "T26", x: 0.78, y: 0.92 }
    ],
    class8d: [
        { id: "T1", x: 0.09, y: 0.39 },
        { id: "T2", x: 0.20, y: 0.39 },
        { id: "T3", x: 0.31, y: 0.39 },
        { id: "T4", x: 0.42, y: 0.39 },
        { id: "T5", x: 0.62, y: 0.39 },
        { id: "T6", x: 0.73, y: 0.39 },
        { id: "T7", x: 0.84, y: 0.39 },
        { id: "T8", x: 0.95, y: 0.39 },
        { id: "T9", x: 0.08, y: 0.60 },
        { id: "T10", x: 0.20, y: 0.60 },
        { id: "T11", x: 0.32, y: 0.60 },
        { id: "T12", x: 0.43, y: 0.60 },
        { id: "T13", x: 0.62, y: 0.59 },
        { id: "T14", x: 0.73, y: 0.59 },
        { id: "T15", x: 0.85, y: 0.59 },
        { id: "T16", x: 0.95, y: 0.59 },
        { id: "T17", x: 0.09, y: 0.87 },
        { id: "T18", x: 0.20, y: 0.87 },
        { id: "T19", x: 0.32, y: 0.87 },
        { id: "T20", x: 0.43, y: 0.87 },
        { id: "T21", x: 0.62, y: 0.86 },
        { id: "T22", x: 0.73, y: 0.86 },
        { id: "T23", x: 0.85, y: 0.86 },
        { id: "T24", x: 0.95, y: 0.86 }
    ]
};

let activeClassroom = "";
let splashDismissed = false;
let analysisMode = "video";
let selectedVideoFile = null;
let selectedVideoUrl = "";
let liveAnalysisEnabled = false;
let frameAnalysisInFlight = false;
let frameAnalysisTimer = null;
let videoSeatLayout = [];
let analysisFrameCount = 0;
let lastAnalyzedVideoTime = -Infinity;
let selectedSeatId = "";
let selectedFrameId = "";
let videoPlaybackCompleted = false;
let reviewingSavedFrame = false;
let videoAnalysisRevision = 0;
let latestLiveData = null;
let analyzedFrames = [];
const seatTrends = new Map();
const VIDEO_ANALYSIS_INTERVAL = 7000;
const VIDEO_SEAT_DISCOVERY_DISTANCE = 0.035;

window.addEventListener("load", () => {
    updateDate();
    setInterval(updateDate, 1000);
    setAnalysisMode("video");

    if (splash) {
        splash.addEventListener("click", dismissSplash);
    }
    window.addEventListener("keydown", dismissSplash);

    setTimeout(dismissSplash, 4800);
});

function dismissSplash() {
    if (splashDismissed || !splash || !splash.isConnected) {
        return;
    }

    splashDismissed = true;
    splash.classList.add("hide");

    setTimeout(() => {
        if (splash.isConnected) {
            splash.remove();
        }
    }, 850);
}

function updateDate() {
    const now = new Date();

    currentDate.textContent = now.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

homeBtn.addEventListener("click", showHome);

modeButtons.forEach((button) => {
    button.addEventListener("click", () => setAnalysisMode(button.dataset.mode));
});

videoInput.addEventListener("change", () => {
    const [file] = videoInput.files;

    if (file) {
        prepareVideoFile(file);
    }
});

["dragenter", "dragover"].forEach((eventName) => {
    videoDropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        videoDropZone.classList.add("dragging");
    });
});

["dragleave", "drop"].forEach((eventName) => {
    videoDropZone.addEventListener(eventName, (event) => {
        event.preventDefault();
        videoDropZone.classList.remove("dragging");
    });
});

videoDropZone.addEventListener("drop", (event) => {
    const [file] = event.dataTransfer.files;

    if (file) {
        prepareVideoFile(file);
    }
});

removeVideoBtn.addEventListener("click", clearVideoFile);

classVideo.addEventListener("loadedmetadata", updateVideoFileMeta);

videoAnalyzeBtn.addEventListener("click", startVideoAnalysis);

analyzeBtn.addEventListener("click", async () => {
    const classroom = classSelect.value;

    if (!classroom) {
        alert("Please select a classroom.");
        return;
    }

    analysisMode = "photo";
    configureLoading("Analyzing classroom...", "Building the classroom twin");
    loading.hidden = false;
    homeScreen.hidden = true;
    resultScreen.hidden = true;
    clearSeatSelection();
    stopLiveAnalysis();

    activeClassroom = classroom;
    classImage.src = classrooms[classroom];
    classImage.hidden = false;
    classVideo.hidden = true;
    planShell.classList.remove("videoFrame");
    videoAnalysisBar.hidden = true;
    liveMetrics.hidden = true;
    framesTab.hidden = true;
    classroomMapSection.hidden = true;
    classroomMapSeats.innerHTML = "";
    scoreLabel.textContent = "Overall";
    setLiveStatus("ready", "Photo analysis");

    try {
        const data = await analyzeClassroom(
            classrooms[classroom],
            classroom,
            seatMaps[classroom] || []
        );
        window.latestData = data;

        displayResults(data, { resetTab: true });
        loading.hidden = true;
        resultScreen.hidden = false;
        resultScreen.classList.remove("fadeIn");
        void resultScreen.offsetWidth;
        resultScreen.classList.add("fadeIn");
    } catch (err) {
        console.error(err);
        loading.hidden = true;
        homeScreen.hidden = false;
        alert("AI Analysis Failed.");
    }
});

function showHome() {
    videoAnalysisRevision += 1;
    stopLiveAnalysis();
    classVideo.pause();
    homeScreen.hidden = false;
    resultScreen.hidden = true;
    loading.hidden = true;
    clearSeatSelection();
}

function setAnalysisMode(mode) {
    analysisMode = mode === "photo" ? "photo" : "video";

    modeButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.mode === analysisMode);
    });

    videoSetup.hidden = analysisMode !== "video";
    photoSetup.hidden = analysisMode !== "photo";
}

function prepareVideoFile(file) {
    if (!file.type.startsWith("video/")) {
        alert("Please choose a supported video file.");
        return;
    }

    clearVideoObjectUrl();
    selectedVideoFile = file;
    selectedVideoUrl = URL.createObjectURL(file);
    classVideo.src = selectedVideoUrl;
    classVideo.load();

    videoFileName.textContent = file.name;
    videoFileMeta.textContent = `${formatFileSize(file.size)} · Reading video details`;
    videoDropZone.hidden = true;
    videoFileSummary.hidden = false;
    videoAnalyzeBtn.disabled = false;
}

function clearVideoFile() {
    videoAnalysisRevision += 1;
    stopLiveAnalysis();
    classVideo.pause();
    classVideo.removeAttribute("src");
    classVideo.load();
    clearVideoObjectUrl();
    selectedVideoFile = null;
    videoPlaybackCompleted = false;
    reviewingSavedFrame = false;
    videoInput.value = "";
    videoDropZone.hidden = false;
    videoFileSummary.hidden = true;
    videoAnalyzeBtn.disabled = true;
}

function clearVideoObjectUrl() {
    if (selectedVideoUrl) {
        URL.revokeObjectURL(selectedVideoUrl);
        selectedVideoUrl = "";
    }
}

function updateVideoFileMeta() {
    if (!selectedVideoFile || !Number.isFinite(classVideo.duration)) {
        return;
    }

    videoFileMeta.textContent = `${formatFileSize(selectedVideoFile.size)} · ${formatTime(classVideo.duration)}`;
}

function formatFileSize(bytes) {
    const megabytes = bytes / (1024 * 1024);
    return megabytes >= 1
        ? `${megabytes.toFixed(megabytes >= 10 ? 0 : 1)} MB`
        : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function configureLoading(title, detail) {
    loadingTitle.textContent = title;
    loadingDetail.textContent = detail;
}

async function startVideoAnalysis() {
    if (!selectedVideoFile) {
        alert("Please upload a classroom video first.");
        return;
    }

    analysisMode = "video";
    activeClassroom = videoClassSelect.value;
    videoSeatLayout = [];
    analysisFrameCount = 0;
    lastAnalyzedVideoTime = -Infinity;
    videoPlaybackCompleted = false;
    reviewingSavedFrame = false;
    videoAnalysisRevision += 1;
    latestLiveData = null;
    analyzedFrames = [];
    seatTrends.clear();
    selectedSeatId = "";
    selectedFrameId = "";
    window.latestData = null;
    framesTab.hidden = false;
    renderAnalyzedFrames();

    stopLiveAnalysis();
    configureLoading("Reading the first frame...", "Locating seats and observable attention cues");
    loading.hidden = false;
    homeScreen.hidden = true;
    resultScreen.hidden = true;

    classImage.hidden = true;
    classVideo.hidden = false;
    planShell.classList.add("videoFrame");
    videoAnalysisBar.hidden = false;
    liveMetrics.hidden = false;
    classroomMapSection.hidden = true;
    classroomMapSeats.innerHTML = "";
    scoreLabel.textContent = "Attention";
    frameTimestamp.textContent = "Waiting for first frame";
    frameMetric.textContent = "0";
    occupiedMetric.textContent = "--";
    attentiveMetric.textContent = "--";
    overlay.innerHTML = "";
    setLiveStatus("analyzing", "Reading first frame");

    try {
        await ensureVideoReady();

        if (classVideo.currentTime === 0 && classVideo.duration > 0.2) {
            classVideo.currentTime = 0.1;
            await waitForVideoEvent("seeked", 1800);
        }

        const succeeded = await analyzeCurrentVideoFrame({ initial: true });

        if (!succeeded) {
            throw new Error("The first video frame could not be analyzed.");
        }

        loading.hidden = true;
        resultScreen.hidden = false;
        resultScreen.classList.remove("fadeIn");
        void resultScreen.offsetWidth;
        resultScreen.classList.add("fadeIn");

        liveAnalysisEnabled = true;
        updateLiveControl();

        try {
            await classVideo.play();
        } catch (error) {
            setLiveStatus("ready", "Press play to continue");
        }

        scheduleVideoAnalysis();
    } catch (error) {
        console.error(error);
        loading.hidden = true;
        homeScreen.hidden = false;
        resultScreen.hidden = true;
        setLiveStatus("error", "Analysis unavailable");
        alert(error.message || "AI video analysis failed.");
    }
}

function ensureVideoReady() {
    if (classVideo.readyState >= 2 && classVideo.videoWidth && classVideo.videoHeight) {
        return Promise.resolve();
    }

    return waitForVideoEvent("loadeddata", 5000);
}

function waitForVideoEvent(eventName, timeout) {
    return new Promise((resolve, reject) => {
        let timeoutId;

        const handleEvent = () => {
            clearTimeout(timeoutId);
            resolve();
        };

        classVideo.addEventListener(eventName, handleEvent, { once: true });

        timeoutId = setTimeout(() => {
            classVideo.removeEventListener(eventName, handleEvent);
            reject(new Error("The selected video could not be read by this browser."));
        }, timeout);
    });
}

async function analyzeCurrentVideoFrame({ initial = false } = {}) {
    if (frameAnalysisInFlight || !selectedVideoFile || classVideo.readyState < 2) {
        return false;
    }

    frameAnalysisInFlight = true;
    const capturedAt = classVideo.currentTime;
    const requestRevision = videoAnalysisRevision;
    setLiveStatus("analyzing", "Analyzing frame");

    try {
        const capturedFrame = captureVideoFrame();
        const data = await analyzeVideoFrame(capturedFrame.base64, {
            timestamp: capturedAt,
            duration: Number.isFinite(classVideo.duration) ? classVideo.duration : 0,
            classroomId: activeClassroom,
            expectedSeats: videoSeatLayout,
            analysisNumber: analysisFrameCount + 1
        });

        if (requestRevision !== videoAnalysisRevision) {
            return false;
        }

        analysisFrameCount += 1;
        lastAnalyzedVideoTime = capturedAt;
        displayResults(data, { resetTab: initial, videoTimestamp: capturedAt });
        saveAnalyzedFrame(capturedAt, capturedFrame.preview, window.latestData);
        setLiveStatus(classVideo.paused ? "ready" : "live", classVideo.paused ? "Playback paused" : "Live AI active");
        frameNotice.hidden = true;
        return true;
    } catch (error) {
        console.error("Video frame analysis failed:", error);
        setLiveStatus("error", "AI connection paused");
        frameNotice.textContent = error.message || "This frame could not be analyzed. Live AI will retry.";
        frameNotice.hidden = false;

        if (initial) {
            throw error;
        }

        return false;
    } finally {
        frameAnalysisInFlight = false;
    }
}

function captureVideoFrame() {
    const sourceWidth = classVideo.videoWidth;
    const sourceHeight = classVideo.videoHeight;
    const maxWidth = 1600;
    const scale = Math.min(1, maxWidth / sourceWidth);
    const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
    const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
    const context = frameCanvas.getContext("2d", { alpha: false });

    frameCanvas.width = targetWidth;
    frameCanvas.height = targetHeight;
    context.drawImage(classVideo, 0, 0, targetWidth, targetHeight);

    const dataUrl = frameCanvas.toDataURL("image/jpeg", 0.9);
    const previewCanvas = document.createElement("canvas");
    const previewWidth = Math.min(320, targetWidth);
    const previewScale = previewWidth / targetWidth;
    previewCanvas.width = previewWidth;
    previewCanvas.height = Math.max(1, Math.round(targetHeight * previewScale));
    previewCanvas.getContext("2d", { alpha: false }).drawImage(
        frameCanvas,
        0,
        0,
        previewCanvas.width,
        previewCanvas.height
    );

    return {
        base64: dataUrl.split(",")[1],
        preview: previewCanvas.toDataURL("image/jpeg", 0.72)
    };
}

function saveAnalyzedFrame(timestamp, preview, data) {
    const existingIndex = analyzedFrames.findIndex((frame) => Math.abs(frame.timestamp - timestamp) < 0.35);
    const previousFrame = existingIndex >= 0 ? analyzedFrames[existingIndex] : null;
    const frame = {
        id: previousFrame?.id || `frame-${analysisFrameCount}`,
        number: previousFrame?.number || 0,
        timestamp,
        preview,
        data: cloneAnalysisData(data)
    };

    if (existingIndex >= 0) {
        analyzedFrames.splice(existingIndex, 1, frame);
    } else {
        analyzedFrames.push(frame);
    }

    analyzedFrames.sort((a, b) => a.timestamp - b.timestamp);
    analyzedFrames.forEach((savedFrame, index) => {
        savedFrame.number = index + 1;
    });

    renderAnalyzedFrames();
}

function renderAnalyzedFrames() {
    framesTabCount.textContent = String(analyzedFrames.length);
    frameMetric.textContent = String(analyzedFrames.length);
    framesInfo.innerHTML = "";

    if (!analyzedFrames.length) {
        const emptyState = document.createElement("p");
        emptyState.className = "emptyFrames";
        emptyState.textContent = "No analyzed frames yet.";
        framesInfo.appendChild(emptyState);
        return;
    }

    analyzedFrames.forEach((frame) => {
        const seats = Array.isArray(frame.data?.seats) ? frame.data.seats : [];
        const occupiedCount = seats.filter((seat) => seat.occupied).length;
        const card = document.createElement("button");
        const preview = document.createElement("span");
        const image = document.createElement("img");
        const timestamp = document.createElement("span");
        const details = document.createElement("span");
        const title = document.createElement("strong");
        const summary = document.createElement("small");

        card.type = "button";
        card.className = "frameCard";
        card.dataset.frameId = frame.id;
        card.classList.toggle("selected", frame.id === selectedFrameId);
        card.setAttribute("aria-label", `Review analyzed frame ${frame.number} at ${formatTime(frame.timestamp)}`);

        preview.className = "framePreview";
        image.src = frame.preview;
        image.alt = `Analyzed frame ${frame.number} at ${formatTime(frame.timestamp)}`;
        timestamp.className = "frameTimeBadge";
        timestamp.textContent = formatTime(frame.timestamp);
        preview.append(image, timestamp);

        seats.forEach((seat) => {
            const x = parseCoordinate(seat.x);
            const y = parseCoordinate(seat.y);

            if (x === null || y === null) {
                return;
            }

            const dot = document.createElement("i");
            dot.className = `frameSeatDot ${attentionClass(seat)}`;
            dot.style.left = `${x * 100}%`;
            dot.style.top = `${y * 100}%`;
            preview.appendChild(dot);
        });

        details.className = "frameCardDetails";
        title.textContent = `Frame ${frame.number}`;
        summary.textContent = `${occupiedCount}/${seats.length} occupied · ${frame.data?.classroomScore ?? "--"}% attention`;
        details.append(title, summary);
        card.append(preview, details);
        card.addEventListener("click", () => reviewAnalyzedFrame(frame));
        framesInfo.appendChild(card);
    });
}

async function reviewAnalyzedFrame(frame) {
    selectedFrameId = frame.id;
    reviewingSavedFrame = true;
    videoPlaybackCompleted = false;
    videoAnalysisRevision += 1;
    stopLiveAnalysis();
    classVideo.pause();
    renderAnalyzedFrames();

    const duration = Number.isFinite(classVideo.duration) ? classVideo.duration : frame.timestamp;
    const reviewTime = Math.min(Math.max(0, frame.timestamp), Math.max(0, duration - 0.01));

    if (Math.abs(classVideo.currentTime - reviewTime) > 0.04) {
        const seekComplete = waitForVideoEvent("seeked", 2500).catch(() => undefined);
        classVideo.currentTime = reviewTime;
        await seekComplete;
    }

    displayResults(cloneAnalysisData(frame.data), {
        historical: true,
        videoTimestamp: frame.timestamp
    });
    frameTimestamp.textContent = `Reviewing frame at ${formatTime(frame.timestamp)}`;
    setLiveStatus("ready", `Reviewing frame ${frame.number}`);
}

function cloneAnalysisData(value) {
    return value ? JSON.parse(JSON.stringify(value)) : value;
}

function scheduleVideoAnalysis(delay = VIDEO_ANALYSIS_INTERVAL) {
    clearTimeout(frameAnalysisTimer);

    if (!liveAnalysisEnabled || classVideo.paused || classVideo.ended) {
        return;
    }

    frameAnalysisTimer = setTimeout(async () => {
        await analyzeCurrentVideoFrame();
        scheduleVideoAnalysis();
    }, delay);
}

function stopLiveAnalysis() {
    liveAnalysisEnabled = false;
    clearTimeout(frameAnalysisTimer);
    frameAnalysisTimer = null;
    updateLiveControl();
}

function updateLiveControl() {
    toggleLiveBtn.classList.toggle("paused", !liveAnalysisEnabled);
    toggleLiveText.textContent = liveAnalysisEnabled ? "Pause live AI" : "Resume live AI";
}

function setLiveStatus(state, label) {
    liveStatus.classList.remove("ready", "live", "analyzing", "error");
    liveStatus.classList.add(state);
    liveStatusText.textContent = label;
}

toggleLiveBtn.addEventListener("click", async () => {
    liveAnalysisEnabled = !liveAnalysisEnabled;

    if (liveAnalysisEnabled && (classVideo.ended || videoPlaybackCompleted)) {
        videoPlaybackCompleted = false;
        reviewingSavedFrame = false;
        videoAnalysisRevision += 1;
        lastAnalyzedVideoTime = -Infinity;
        classVideo.currentTime = 0;
    }

    updateLiveControl();

    if (!liveAnalysisEnabled) {
        clearTimeout(frameAnalysisTimer);
        setLiveStatus("ready", "Live AI paused");
        return;
    }

    if (classVideo.paused) {
        try {
            await classVideo.play();
        } catch (error) {
            setLiveStatus("ready", "Press play to continue");
        }
    }

    if (Math.abs(classVideo.currentTime - lastAnalyzedVideoTime) > 1.5) {
        await analyzeCurrentVideoFrame();
    }

    scheduleVideoAnalysis();
});

classVideo.addEventListener("play", () => {
    const restartingCompletedVideo = videoPlaybackCompleted;

    if (
        restartingCompletedVideo &&
        Number.isFinite(classVideo.duration) &&
        classVideo.currentTime >= classVideo.duration - 0.05
    ) {
        classVideo.currentTime = 0;
    }

    if (restartingCompletedVideo || reviewingSavedFrame) {
        videoPlaybackCompleted = false;
        reviewingSavedFrame = false;
        liveAnalysisEnabled = true;
        lastAnalyzedVideoTime = -Infinity;

        if (latestLiveData) {
            window.latestData = cloneAnalysisData(latestLiveData);
        }

        updateLiveControl();
    }

    if (!liveAnalysisEnabled) {
        return;
    }

    setLiveStatus("live", "Live AI active");
    scheduleVideoAnalysis(Math.abs(classVideo.currentTime - lastAnalyzedVideoTime) > 2 ? 250 : VIDEO_ANALYSIS_INTERVAL);
});

classVideo.addEventListener("pause", () => {
    clearTimeout(frameAnalysisTimer);

    if (!classVideo.ended && analysisMode === "video") {
        setLiveStatus("ready", "Playback paused");
    }
});

classVideo.addEventListener("ended", () => {
    videoPlaybackCompleted = true;
    reviewingSavedFrame = false;
    stopLiveAnalysis();
    setLiveStatus("ready", "Analysis complete · Replay ready");
});

classVideo.addEventListener("seeked", () => {
    if (!liveAnalysisEnabled || resultScreen.hidden) {
        return;
    }

    scheduleVideoAnalysis(350);
});

function displayResults(data, options = {}) {
    if (!activeClassroom && analysisMode !== "video") {
        activeClassroom = classSelect.value || inferClassroomFromImage();
    }

    const aiSeats = Array.isArray(data.seats) ? data.seats : [];
    const mappedSeats = analysisMode === "video"
        ? options.historical
            ? aiSeats.map((seat) => ({ ...seat }))
            : mapVideoSeats(aiSeats)
        : mapSeatsToClassroom(aiSeats, activeClassroom);

    if (analysisMode === "video" && !options.historical) {
        recordVideoFrame(mappedSeats);
    }

    window.latestData = {
        ...data,
        seats: mappedSeats
    };

    if (analysisMode === "video" && !options.historical) {
        latestLiveData = cloneAnalysisData(window.latestData);
    }

    syncMediaFrame();
    overallScore.textContent = data.classroomScore ?? "--";
    setScoreTone(overallScore, data.classroomScore);

    if (options.resetTab) {
        recommendationTab.click();
    }

    recommendations.innerHTML = "";

    if (Array.isArray(data.recommendations) && data.recommendations.length) {
        data.recommendations.slice(0, 3).forEach((rec) => {
            const item = document.createElement("p");
            item.textContent = rec;
            recommendations.appendChild(item);
        });
    } else {
        const item = document.createElement("p");
        item.textContent = "No recommendations.";
        recommendations.appendChild(item);
    }

    renderBests(mappedSeats);
    drawSeats(mappedSeats);
    renderClassroomMap(mappedSeats);

    if (analysisMode === "video") {
        updateLiveMetrics(mappedSeats, options.videoTimestamp);

        if (selectedSeatId) {
            const selectedSeat = mappedSeats.find((seat) => seat.id === selectedSeatId);

            if (selectedSeat && seatTab.classList.contains("active")) {
                showSeat(selectedSeat, selectedSeatId);
            }
        }
    }
}

function inferClassroomFromImage() {
    const imageSource = classImage.getAttribute("src") || "";
    const match = imageSource.match(/class8[a-d]/i);

    return match ? match[0].toLowerCase() : "";
}

function mapSeatsToClassroom(aiSeats, classroom) {
    const map = seatMaps[classroom];

    if (!Array.isArray(map) || !map.length) {
        return aiSeats;
    }

    const seatsById = new Map(
        aiSeats
            .filter((seat) => seat && seat.id)
            .map((seat) => [String(seat.id).trim().toLowerCase(), seat])
    );

    return map.map((mappedSeat, index) => {
        const aiSeat = seatsById.get(mappedSeat.id.toLowerCase()) || aiSeats[index] || {};

        return {
            ...aiSeat,
            id: mappedSeat.id,
            x: mappedSeat.x,
            y: mappedSeat.y,
            score: aiSeat.score ?? 60,
            visibility: aiSeat.visibility || "Pending",
            lighting: aiSeat.lighting || "Pending",
            distance: aiSeat.distance || "Pending",
            comfort: aiSeat.comfort || "Pending",
            reason: aiSeat.reason || "Mapped from the classroom layout. AI score details were not returned for this seat."
        };
    });
}

function mapVideoSeats(aiSeats) {
    const previousSeats = Array.isArray(window.latestData?.seats) ? window.latestData.seats : [];

    if (!videoSeatLayout.length) {
        const detectedSeats = discoverVideoSeats(aiSeats);

        videoSeatLayout = detectedSeats.map((seat) => ({
            id: seat.id,
            x: seat.x,
            y: seat.y,
            mapX: seat.mapX,
            mapY: seat.mapY
        }));
        return detectedSeats;
    }

    const aiSeatsById = new Map(
        aiSeats
            .filter((seat) => seat && seat.id)
            .map((seat) => [String(seat.id).trim().toLowerCase(), seat])
    );
    const previousById = new Map(previousSeats.map((seat) => [String(seat.id).toLowerCase(), seat]));
    const consumedAiIds = new Set();

    const trackedSeats = videoSeatLayout.map((mappedSeat, index) => {
        const key = mappedSeat.id.toLowerCase();
        const previousSeat = previousById.get(key) || {};
        const aiSeat = aiSeatsById.get(key) || {};

        if (aiSeatsById.has(key)) {
            consumedAiIds.add(key);
        }

        return normalizeVideoSeat({
            ...previousSeat,
            ...aiSeat,
            id: mappedSeat.id
        }, index, {
            ...mappedSeat,
            ...previousSeat
        });
    });

    const discoveredSeats = discoverVideoSeats(aiSeats, trackedSeats, consumedAiIds);
    const allSeats = [...trackedSeats, ...discoveredSeats];

    videoSeatLayout = allSeats.map((seat) => ({
        id: seat.id,
        x: seat.x,
        y: seat.y,
        mapX: seat.mapX,
        mapY: seat.mapY
    }));

    return allSeats;
}

function discoverVideoSeats(aiSeats, existingSeats = [], consumedIds = new Set()) {
    const discoveredSeats = [];
    const usedIds = new Set(
        existingSeats.map((seat) => String(seat.id || "").trim().toLowerCase())
    );

    aiSeats.forEach((seat, index) => {
        if (!seat || typeof seat !== "object") {
            return;
        }

        const sourceId = String(seat.id || "").trim();
        const sourceKey = sourceId.toLowerCase();

        if (sourceKey && consumedIds.has(sourceKey)) {
            return;
        }

        const normalizedSeat = normalizeVideoSeat(seat, existingSeats.length + index);

        if (!hasVideoAnchor(normalizedSeat)) {
            return;
        }

        const duplicatesKnownSeat = [...existingSeats, ...discoveredSeats].some(
            (knownSeat) => videoSeatDistance(normalizedSeat, knownSeat) < VIDEO_SEAT_DISCOVERY_DISTANCE
        );

        if (duplicatesKnownSeat) {
            return;
        }

        normalizedSeat.id = createUniqueVideoSeatId(sourceId, usedIds);
        usedIds.add(normalizedSeat.id.toLowerCase());
        discoveredSeats.push(normalizedSeat);
    });

    return discoveredSeats;
}

function createUniqueVideoSeatId(proposedId, usedIds) {
    const cleanId = String(proposedId || "").trim();

    if (cleanId && !usedIds.has(cleanId.toLowerCase())) {
        return cleanId;
    }

    const highestNumber = [...usedIds].reduce((highest, id) => {
        const match = id.match(/^t(\d+)$/i);
        return match ? Math.max(highest, Number(match[1])) : highest;
    }, 0);
    let nextNumber = highestNumber + 1;

    while (usedIds.has(`t${nextNumber}`)) {
        nextNumber += 1;
    }

    return `T${nextNumber}`;
}

function videoSeatDistance(firstSeat, secondSeat) {
    const firstX = parseCoordinate(firstSeat?.x);
    const firstY = parseCoordinate(firstSeat?.y);
    const secondX = parseCoordinate(secondSeat?.x);
    const secondY = parseCoordinate(secondSeat?.y);

    if ([firstX, firstY, secondX, secondY].some((value) => value === null)) {
        return Infinity;
    }

    return Math.hypot(firstX - secondX, firstY - secondY);
}

function normalizeVideoSeat(seat, index, previousSeat = {}) {
    const occupied = normalizeBoolean(seat.occupied, Number(seat.attentionScore) > 0);
    const attentionScore = occupied ? clampScore(seat.attentionScore) : 0;
    const attentionState = occupied
        ? normalizeAttentionState(seat.attentionState, attentionScore)
        : "Empty";
    const detectedAnchor = resolveVideoAnchor(seat);
    const previousX = parseCoordinate(previousSeat.x);
    const previousY = parseCoordinate(previousSeat.y);
    const x = trackCoordinate(detectedAnchor.x, previousX, detectedAnchor.y, previousY);
    const y = trackCoordinate(detectedAnchor.y, previousY, detectedAnchor.x, previousX);
    const detectedMapX = parseCoordinate(seat.mapX ?? seat.map?.x);
    const detectedMapY = parseCoordinate(seat.mapY ?? seat.map?.y);
    const mapX = parseCoordinate(previousSeat.mapX) ?? detectedMapX ?? x;
    const mapY = parseCoordinate(previousSeat.mapY) ?? detectedMapY ?? y;

    return {
        ...seat,
        id: String(seat.id || `T${index + 1}`).trim(),
        x,
        y,
        mapX,
        mapY,
        occupied,
        occupancyConfidence: clampScore(seat.occupancyConfidence),
        attentionScore,
        attentionConfidence: clampScore(seat.attentionConfidence),
        attentionState,
        attentionReason: seat.attentionReason || (occupied
            ? "Attention estimate is based on visible posture and head direction."
            : "No student is visible at this seat."),
        score: clampScore(seat.score ?? attentionScore),
        visibility: seat.visibility || "Pending",
        lighting: seat.lighting || "Pending",
        distance: seat.distance || "Pending",
        comfort: seat.comfort || "Pending",
        reason: seat.reason || "Current frame analysis for this seat."
    };
}

function hasVideoAnchor(seat) {
    return parseCoordinate(seat?.x) !== null && parseCoordinate(seat?.y) !== null;
}

function resolveVideoAnchor(seat) {
    const x = parseCoordinate(seat?.x);
    const y = parseCoordinate(seat?.y);
    const box = seat?.personBox || seat?.boundingBox || seat?.studentBox || seat?.seatBox;

    if (!box || typeof box !== "object") {
        return { x, y };
    }

    const left = parseCoordinate(box.left ?? box.xMin ?? box.x);
    const top = parseCoordinate(box.top ?? box.yMin ?? box.y);
    const right = parseCoordinate(box.right ?? box.xMax ?? (
        left !== null && Number.isFinite(Number(box.width))
            ? left + normalizeCoordinateSpan(box.width)
            : null
    ));
    const bottom = parseCoordinate(box.bottom ?? box.yMax ?? (
        top !== null && Number.isFinite(Number(box.height))
            ? top + normalizeCoordinateSpan(box.height)
            : null
    ));

    if ([left, top, right, bottom].some((value) => value === null)) {
        return { x, y };
    }

    const boxAnchor = {
        x: Math.min(0.98, Math.max(0.02, (left + right) / 2)),
        y: Math.min(0.98, Math.max(0.02, top + ((bottom - top) * 0.42)))
    };

    return normalizeBoolean(seat?.occupied, false) || x === null || y === null
        ? boxAnchor
        : { x, y };
}

function normalizeCoordinateSpan(value) {
    const numericValue = Number(value);

    if (!Number.isFinite(numericValue)) {
        return 0;
    }

    return numericValue > 1 && numericValue <= 100 ? numericValue / 100 : numericValue;
}

function trackCoordinate(nextValue, previousValue, nextPair, previousPair) {
    if (nextValue === null) {
        return previousValue;
    }

    if (previousValue === null) {
        return nextValue;
    }

    const pairIsValid = nextPair !== null && previousPair !== null;
    const jump = pairIsValid
        ? Math.hypot(nextValue - previousValue, nextPair - previousPair)
        : Math.abs(nextValue - previousValue);

    if (jump > 0.28) {
        return previousValue;
    }

    return previousValue + ((nextValue - previousValue) * 0.55);
}

function normalizeBoolean(value, fallback = false) {
    if (typeof value === "boolean") {
        return value;
    }

    if (typeof value === "string") {
        return ["true", "yes", "occupied", "1"].includes(value.toLowerCase());
    }

    return Number.isFinite(Number(value)) ? Number(value) > 0 : fallback;
}

function clampScore(value) {
    const numericValue = Number(value);
    return Number.isFinite(numericValue) ? Math.min(100, Math.max(0, Math.round(numericValue))) : 0;
}

function normalizeAttentionState(value, score) {
    const state = String(value || "").toLowerCase();

    if (state.includes("not") || state.includes("distract")) {
        return "Not attentive";
    }

    if (state.includes("partial") || state.includes("low")) {
        return "Partially attentive";
    }

    if (state.includes("attentive")) {
        return "Attentive";
    }

    if (score >= 70) {
        return "Attentive";
    }

    if (score >= 40) {
        return "Partially attentive";
    }

    return score > 0 ? "Not attentive" : "Unknown";
}

function recordVideoFrame(seats) {
    seats.forEach((seat) => {
        const trend = seatTrends.get(seat.id) || {
            samples: 0,
            occupiedSamples: 0,
            attentionSamples: 0,
            attentionTotal: 0
        };

        trend.samples += 1;

        if (seat.occupied) {
            trend.occupiedSamples += 1;
            trend.attentionSamples += 1;
            trend.attentionTotal += seat.attentionScore;
        }

        seatTrends.set(seat.id, trend);
        seat.attentionAverage = trend.attentionSamples
            ? Math.round(trend.attentionTotal / trend.attentionSamples)
            : 0;
        seat.occupancyRate = Math.round((trend.occupiedSamples / trend.samples) * 100);
        seat.trackedFrames = trend.samples;
    });
}

function syncMediaFrame() {
    const width = analysisMode === "video" ? classVideo.videoWidth : classImage.naturalWidth;
    const height = analysisMode === "video" ? classVideo.videoHeight : classImage.naturalHeight;

    if (!width || !height) {
        return;
    }

    planShell.style.setProperty(
        "--classroom-ratio",
        `${width} / ${height}`
    );
}

function updateLiveMetrics(seats, analyzedAt = classVideo.currentTime) {
    const occupiedSeats = seats.filter((seat) => seat.occupied);
    const attentiveSeats = occupiedSeats.filter((seat) => seat.attentionState === "Attentive");
    const attentionPercent = occupiedSeats.length
        ? Math.round((attentiveSeats.length / occupiedSeats.length) * 100)
        : 0;

    occupiedMetric.textContent = `${occupiedSeats.length}/${seats.length}`;
    attentiveMetric.textContent = `${attentionPercent}%`;
    frameMetric.textContent = String(analyzedFrames.length);
    frameTimestamp.textContent = `Frame analyzed at ${formatTime(analyzedAt)}`;
}

function formatTime(seconds) {
    const safeSeconds = Number.isFinite(Number(seconds)) ? Math.max(0, Math.floor(Number(seconds))) : 0;
    const minutes = Math.floor(safeSeconds / 60);
    const remainder = safeSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function drawSeats(seats) {
    overlay.innerHTML = "";

    seats.forEach((seat, index) => {
        const fallback = fallbackSeatPosition(index);
        const x = analysisMode === "video"
            ? parseCoordinate(seat.x)
            : normalizeCoordinate(seat.x, fallback.x);
        const y = analysisMode === "video"
            ? parseCoordinate(seat.y)
            : normalizeCoordinate(seat.y, fallback.y);

        if (x === null || y === null) {
            return;
        }

        const marker = document.createElement("button");
        const markerState = analysisMode === "video" ? attentionClass(seat) : scoreClass(seat.score);
        const markerDescription = analysisMode === "video"
            ? `${seat.id || `T${index + 1}`} · ${seat.occupied ? seat.attentionState : "Empty"} · ${seat.attentionScore ?? 0}% attention`
            : `${seat.id || `T${index + 1}`} - ${seat.score ?? "--"}`;
        marker.type = "button";
        marker.className = `seat ${markerState}`;
        marker.setAttribute("aria-label", markerDescription);
        marker.title = markerDescription;
        marker.dataset.id = seat.id || `T${index + 1}`;

        marker.style.left = `${x * 100}%`;
        marker.style.top = `${y * 100}%`;

        if (marker.dataset.id === selectedSeatId) {
            marker.classList.add("selected");
        }

        marker.addEventListener("click", () => showSeat(seat, marker.dataset.id));
        overlay.appendChild(marker);
    });
}

function renderClassroomMap(seats) {
    classroomMapSeats.innerHTML = "";

    if (analysisMode !== "video") {
        classroomMapSection.hidden = true;
        return;
    }

    classroomMapSection.hidden = false;
    const mappedSeats = seats.filter((seat) => {
        const mapX = parseCoordinate(seat.mapX ?? seat.x);
        const mapY = parseCoordinate(seat.mapY ?? seat.y);
        return mapX !== null && mapY !== null;
    });

    classroomMapCount.textContent = `${mappedSeats.length} mapped seat${mappedSeats.length === 1 ? "" : "s"}`;

    mappedSeats.forEach((seat, index) => {
        const marker = document.createElement("button");
        const markerId = seat.id || `T${index + 1}`;
        const markerState = attentionClass(seat);
        const mapX = parseCoordinate(seat.mapX ?? seat.x);
        const mapY = parseCoordinate(seat.mapY ?? seat.y);
        const markerDescription = `${markerId} · ${seat.occupied ? seat.attentionState : "Empty"} · ${seat.attentionScore ?? 0}% attention`;

        marker.type = "button";
        marker.className = `mapSeat ${markerState}`;
        marker.dataset.id = markerId;
        marker.setAttribute("aria-label", markerDescription);
        marker.title = markerDescription;
        marker.textContent = markerId;
        marker.style.left = `${mapX * 100}%`;
        marker.style.top = `${mapY * 100}%`;

        if (markerId === selectedSeatId) {
            marker.classList.add("selected");
        }

        marker.addEventListener("click", () => showSeat(seat, markerId));
        classroomMapSeats.appendChild(marker);
    });
}

function attentionClass(seat) {
    if (!seat.occupied) {
        return "empty";
    }

    if (seat.attentionState === "Attentive" || Number(seat.attentionScore) >= 70) {
        return "attentive";
    }

    if (seat.attentionState === "Not attentive" || Number(seat.attentionScore) < 40) {
        return "distracted";
    }

    return "partial";
}

function scoreClass(score) {
    const numericScore = Number(score);

    if (numericScore > 70) {
        return "best";
    }

    if (numericScore < 50) {
        return "bad";
    }

    return "medium";
}

function setScoreTone(element, score) {
    element.classList.remove("best", "medium", "bad");
    element.classList.add(scoreClass(score));
}

function normalizeCoordinate(value, fallback) {
    const numericValue = Number(value);

    if (!Number.isFinite(numericValue)) {
        return fallback;
    }

    if (numericValue > 1 && numericValue <= 100) {
        return Math.min(0.95, Math.max(0.05, numericValue / 100));
    }

    return Math.min(0.95, Math.max(0.05, numericValue));
}

function parseCoordinate(value) {
    if (value === null || value === undefined || value === "") {
        return null;
    }

    const numericValue = Number(value);

    if (!Number.isFinite(numericValue) || numericValue < 0 || numericValue > 100) {
        return null;
    }

    const normalizedValue = numericValue > 1 ? numericValue / 100 : numericValue;
    return Math.min(0.98, Math.max(0.02, normalizedValue));
}

function fallbackSeatPosition(index) {
    const positions = [
        { x: 0.27, y: 0.37 },
        { x: 0.27, y: 0.56 },
        { x: 0.27, y: 0.75 },
        { x: 0.80, y: 0.31 },
        { x: 0.80, y: 0.50 },
        { x: 0.80, y: 0.69 },
        { x: 0.36, y: 0.86 },
        { x: 0.45, y: 0.86 },
        { x: 0.54, y: 0.86 },
        { x: 0.63, y: 0.86 },
        { x: 0.72, y: 0.86 },
        { x: 0.81, y: 0.86 }
    ];

    return positions[index % positions.length];
}

recommendationTab.addEventListener("click", () => activateTab("recommendation"));
bestsTab.addEventListener("click", () => activateTab("bests"));
seatTab.addEventListener("click", () => activateTab("seat"));
framesTab.addEventListener("click", () => activateTab("frames"));

function activateTab(activeTab) {
    const tabs = {
        recommendation: {
            button: recommendationTab,
            panel: recommendationPanel
        },
        bests: {
            button: bestsTab,
            panel: bestsPanel
        },
        seat: {
            button: seatTab,
            panel: seatPanel
        },
        frames: {
            button: framesTab,
            panel: framesPanel
        }
    };

    Object.entries(tabs).forEach(([key, tab]) => {
        tab.button.classList.toggle("active", key === activeTab);
        tab.panel.classList.toggle("hidden", key !== activeTab);
    });

    if (activeTab !== "seat") {
        clearSeatSelection(false);
    }
}

function showSeat(seat, fallbackId) {
    seatTab.click();
    selectedSeatId = seat.id || fallbackId || "";

    document.querySelectorAll(".seat, .mapSeat").forEach((marker) => {
        marker.classList.toggle("selected", marker.dataset.id === selectedSeatId);
    });

    const seatId = escapeHtml(seat.id || fallbackId || "Seat");
    const score = escapeHtml(seat.score ?? "--");
    const scoreTone = scoreClass(seat.score);
    const attentionScore = clampScore(seat.attentionScore);
    const attentionTone = attentionClass(seat);
    const attentionColor = attentionTone === "attentive"
        ? "var(--green)"
        : attentionTone === "distracted"
            ? "var(--red)"
            : attentionTone === "empty"
                ? "#718096"
                : "var(--yellow)";
    const videoDetails = analysisMode === "video"
        ? `
            <div class="seatStatusLine">
                <span>Occupancy</span>
                <strong>${seat.occupied ? "Occupied" : "Empty"}</strong>
            </div>
            <div class="metric">
                <strong>Attention</strong>
                <span>${escapeHtml(seat.attentionState || "Unknown")} · ${attentionScore}%</span>
            </div>
            <div class="attentionBar" style="--attention-width: ${attentionScore}%; --attention-color: ${attentionColor}">
                <span></span>
            </div>
            <div class="metric">
                <strong>Average</strong>
                <span>${escapeHtml(seat.attentionAverage ?? attentionScore)}% across ${escapeHtml(seat.trackedFrames || 1)} frame${seat.trackedFrames === 1 ? "" : "s"}</span>
            </div>
            <div class="metric">
                <strong>Observed cue</strong>
                <span>${escapeHtml(seat.attentionReason || "No visible attention cue returned.")}</span>
            </div>
        `
        : "";

    seatInfo.innerHTML = `
        <h2>${seatId}</h2>
        <span class="seatScore ${scoreTone}">${score}</span>
        <hr>
        ${videoDetails}
        <div class="metric">
            <strong>Visibility</strong>
            <span>${escapeHtml(seat.visibility || "Good")}</span>
        </div>
        <div class="metric">
            <strong>Lighting</strong>
            <span>${escapeHtml(seat.lighting || "Good")}</span>
        </div>
        <div class="metric">
            <strong>Distance</strong>
            <span>${escapeHtml(seat.distance || "Normal")}</span>
        </div>
        <div class="metric">
            <strong>Comfort</strong>
            <span>${escapeHtml(seat.comfort || "Good")}</span>
        </div>
        <div class="seatReason">
            <strong>Reason</strong>
            <p>${escapeHtml(seat.reason || "No reason provided.")}</p>
        </div>
    `;
}

function renderBests(seats) {
    if (!seats.length) {
        bestsInfo.textContent = "No seats detected.";
        return;
    }

    const categories = [
        {
            label: "Overall",
            scoreKey: "score",
            textKey: "reason"
        },
        {
            label: "Visibility",
            scoreKey: "visibilityScore",
            textKey: "visibility"
        },
        {
            label: "Lighting",
            scoreKey: "lightingScore",
            textKey: "lighting"
        },
        {
            label: "Distance",
            scoreKey: "distanceScore",
            textKey: "distance"
        },
        {
            label: "Comfort",
            scoreKey: "comfortScore",
            textKey: "comfort"
        }
    ];

    if (analysisMode === "video") {
        categories.unshift({
            label: "Attention",
            scoreKey: "attentionScore",
            textKey: "attentionReason"
        });
    }

    bestsInfo.innerHTML = categories.map((category) => {
        const result = findBestSeat(seats, category);
        const seat = result.seat;
        const displayScore = Number.isFinite(result.score)
            ? Math.round(result.score)
            : "--";
        const tone = Number.isFinite(result.score) ? scoreClass(result.score) : "medium";
        const detail = category.label === "Overall"
            ? seat.reason || "Highest total classroom suitability score."
            : `${category.label}: ${seat[category.textKey] || "Best available rating."}`;

        return `
            <article class="bestItem">
                <div class="bestItemTop">
                    <span>Best ${escapeHtml(category.label)}</span>
                    <strong>${escapeHtml(seat.id || "Seat")}</strong>
                    <em class="bestScore ${tone}">${escapeHtml(displayScore)}</em>
                </div>
                <p>${escapeHtml(detail)}</p>
            </article>
        `;
    }).join("");
}

function findBestSeat(seats, category) {
    return seats.reduce((best, seat) => {
        const score = categoryScore(seat, category);

        if (!best || score > best.score) {
            return {
                seat,
                score
            };
        }

        if (score === best.score && Number(seat.score) > Number(best.seat.score)) {
            return {
                seat,
                score
            };
        }

        return best;
    }, null);
}

function categoryScore(seat, category) {
    const numericScore = Number(seat[category.scoreKey]);

    if (Number.isFinite(numericScore)) {
        return numericScore;
    }

    if (category.scoreKey === "score") {
        const overall = Number(seat.score);
        return Number.isFinite(overall) ? overall : 0;
    }

    return qualitativeScore(seat[category.textKey]);
}

function qualitativeScore(value) {
    const text = String(value || "").toLowerCase();

    if (text.includes("excellent")) {
        return 95;
    }

    if (text.includes("very good") || text.includes("near")) {
        return 88;
    }

    if (text.includes("good") || text.includes("normal")) {
        return 76;
    }

    if (text.includes("average") || text.includes("fair")) {
        return 60;
    }

    if (text.includes("weak") || text.includes("low") || text.includes("far") || text.includes("poor")) {
        return 35;
    }

    return 0;
}

function clearSeatSelection(resetText = true) {
    document.querySelectorAll(".seat, .mapSeat").forEach((marker) => {
        marker.classList.remove("selected");
    });

    if (resetText) {
        selectedSeatId = "";
        seatInfo.textContent = "Click a seat to view analytics.";
    }
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.addEventListener("resize", () => {
    if (window.latestData) {
        drawSeats(Array.isArray(window.latestData.seats) ? window.latestData.seats : []);
    }
});

classImage.addEventListener("load", () => {
    syncMediaFrame();

    if (window.latestData) {
        drawSeats(Array.isArray(window.latestData.seats) ? window.latestData.seats : []);
    }
});

classVideo.addEventListener("loadedmetadata", syncMediaFrame);

window.addEventListener("beforeunload", clearVideoObjectUrl);

clearSeatSelection();
