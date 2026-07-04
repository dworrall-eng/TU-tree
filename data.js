const steps = {
    "step1": {
        text: "[Is this incident a PSE, Collision or both?][blue]",
        options: [
            { label: "PSE", next: "pse_investigate" },
            { label: "Collision", next: "step3" },
            { label: "Both", next: "step4" }
        ]
    },
    "pse_investigate": {
        text: "[Use the][blue] [WebRAD Panorama Camera Replay][tool] [and recordings in][blue] [Webviz][tool] [to investigate the event.][blue]<br><br>[Is the event a true or false positive?][white]",
        options: [
            { label: "True Positive", next: "pse_severity" },
            { label: "False Positive", next: "pse_false_positive" }
        ]
    },
    "pse_false_positive": {
        text: "Event confirmed as False Positive. No further action required.",
        options: [{ label: "Return to Start", next: "step1" }]
    },
    "pse_severity": {
        text: "Determine the severity of the event. Is this an urgent PSE?",
        options: [
            { label: "Yes", next: "pse_urgent_steps" },
            { label: "No", next: "pse_safety_deescalation" }
        ]
    },
    "pse_urgent_steps": {
        text: "<strong>URGENT PSE ESCALATION</strong><br><br>1) Find EM on shift<br>1a) <a href='http://go/emschedule' target='_blank'>Click this link go/emschedule</a><br>2) Send a ping in the 'Escalation to EM' space to contact the Escalation manager, and add LDN AVOS contacts.",
        options: [{ label: "Continue", next: "pse_safety_deescalation" }]
    },
    "pse_safety_deescalation": {
        text: "<strong>SAFETY & DE-ESCALATION</strong><br><br>[1) Talk to rider to ensure safety/comfort.][blue]<br>[2) Try to de-escalate using][blue] [audio alerts][tool][.][blue]<br>[3) Escape the scene if necessary using][blue] [unsticking tools][tool]",
        options: [{ label: "Next", next: "pse_es_required" }]
    },
    "pse_es_required": {
        text: "Are Emergency Services (ES) required?",
        options: [
            { label: "Yes", next: "pse_es_process" },
            { label: "No", next: "pse_evaluate" }
        ]
    },
    "pse_es_process": {
        text: "[EMERGENCY SERVICES CALL PROTOCOL:][blue]<br><br>[Call emergency services,][blue]<br><br>[1) Quote][blue] [incident type (fire, police or ambulance).][tool]<br>[2) Introduce yourself from Waymo and explain you remotely guide autonomous vehicles.][blue]<br>[3) Explain the situation clearly and succinctly.][blue]<br>[4) Request services.][blue]<br>[5) Get an][blue] [incident number][tool][,][blue] [ETA][tool] [and offer our callback number (tbc).][blue]",
        options: [{ label: "Continue", next: "pse_evaluate" }]
    },
    "pse_evaluate": {
        text: "Once the threat is no longer active, please respond to the EVALUATE PSE request:",
        options: [
            { label: "1) Yes there is blocking damage, dispatch recovery immediately", next: "pse_rescue_flow_1" },
            { label: "2) Yes there is blocking damage, complete trip and RTB", next: "pse_rescue_flow_2" },
            { label: "3) Yes, but no blocking damage", next: "pse_escalation_details" },
            { label: "4) No, there is no damage", next: "pse_escalation_details" },
            { label: "5) No, there is no damage but there was a PSE", next: "pse_check_mission_control" }
        ]
    },
    "pse_rescue_flow_1": {
        text: "RESCUE FLOW (Dispatch Recovery): Complete rescue form, arrange rehail, create Ops chat, monitor until pickup.<br><br><div class='template'><strong>Ops chat template:</strong><br>- Potential damage / severity<br>- Cyber event detected?<br>- ES contacted?<br>- Injuries reported?<br>- Other party on scene?<br>- Event context / description<br>- Other relevant info<br>- Law enforcement present?</div>",
        options: [{ label: "Next: Escalation Details", next: "pse_escalation_details" }]
    },
    "pse_rescue_flow_2": {
        text: "RESCUE FLOW (Complete Trip & RTB): Complete rescue form, arrange rehail, monitor until pickup.<br><br><div class='template'><strong>Ops chat template:</strong><br>- Potential damage / severity<br>- Cyber event detected?<br>- ES contacted?<br>- Injuries reported?<br>- Other party on scene?<br>- Event context / description<br>- Other relevant info<br>- Law enforcement present?</div>",
        options: [{ label: "Next: Escalation Details", next: "pse_escalation_details" }]
    },
    "pse_escalation_details": {
        text: "PSE ESCALATION STEPS:<br><br>1) Update PSE Event page.<br>2) Complete PSE escalation form.<br>3) If potential incident, complete ERI form.<br>4) Review 'Escalate to Ops on-call'.<br>5) If media present, DM Ops on-call.",
        options: [{ label: "Next: Resolution Stage", next: "pse_resolution" }]
    },
    "pse_resolution": {
        text: "RESOLUTION STAGE: Are there riders present?",
        options: [
            { label: "Yes", next: "pse_rider_transfer" },
            { label: "No", next: "pse_complete" }
        ]
    },
    "pse_rider_transfer": {
        text: "Use 'Cases' to transfer the case to Waymo Support.",
        options: [{ label: "Continue", next: "pse_complete" }]
    },
    "pse_complete": {
        text: "PSE Workflow Complete.",
        options: [{ label: "Return to Start", next: "step1" }]
    },
    "pse_check_mission_control": {
        text: "PSE Post-Event: Check if a Mission Control event has been set up. If yes, change it to False Positive and complete the workflow.",
        options: [{ label: "Finish", next: "step1" }]
    },
    "step3": { text: "Collision path logic placeholder.", options: [{ label: "Back", next: "step1" }] },
    "step4": { text: "Both path logic placeholder.", options: [{ label: "Back", next: "step1" }] }
};
