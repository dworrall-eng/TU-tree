// data.js - Contains all the logic for your process tree
const steps = {
    "step1": {
        text: "Is this incident a PSE, Collision or both?",
        options: [
            { label: "PSE", next: "pse_investigate" },
            { label: "Collision", next: "step3" },
            { label: "Both", next: "step4" }
        ]
    },
    "pse_investigate": {
        text: "1) Use the WebRAD Panorama Camera Replay and recordings in Webviz to investigate the event. Is the event a true or false positive?",
        options: [
            { label: "True Positive", next: "pse_severity" },
            { label: "False Positive", next: "pse_false_positive" }
        ]
    },
    // ... Add the rest of your large steps object here ...
    "pse_complete": {
        text: "PSE Workflow Complete.",
        options: [{ label: "Return to Start", next: "step1" }]
    }
};
