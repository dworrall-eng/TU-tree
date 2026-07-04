// --- Resolution Flow --- 
    "pse_resolution": {
        text: "RESOLUTION STAGE: Are there riders present?",
        options: [
            { label: "Yes", next: "pse_rider_transfer" },
            { label: "No", next: "pse_eri_update" } // Go directly to ERI update
        ]
    },
    "pse_rider_transfer": {
        text: "Use 'Cases' to transfer the case to Waymo Support.",
        options: [{ label: "Continue", next: "pse_eri_update" }]
    },
    "pse_eri_update": {
        text: "1) Update the ERI form with any additional details and close the event.<br><br>Was this event an incident?",
        options: [
            { label: "Yes", next: "pse_complete" },
            { label: "No", next: "pse_complete" }
        ]
    },
    "pse_complete": {
        text: "PSE Workflow Complete.",
        options: [{ label: "Return to Start", next: "step1" }]
    },
    "pse_check_mission_control": {
        text: "PSE Post-Event: Check if a Mission Control event has been set up. If yes, change it to False Positive and complete the workflow.",
        options: [{ label: "Finish", next: "step1" }]
    },
