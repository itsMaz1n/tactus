import { HAPTIC_ID, HAPTIC_DURATION_MS } from "./constants";
import { isIOS as isIOSFunction } from "./utils";

let inputElement: HTMLInputElement | null = null;
let labelElement: HTMLLabelElement | null = null;
let isIOS = false;

// must only be called once
function mount() {
    if (labelElement && inputElement) return;

    isIOS = isIOSFunction();

    inputElement = document.querySelector<HTMLInputElement>(`#${HAPTIC_ID}`);
    labelElement = document.querySelector<HTMLLabelElement>(
        `label[for="${HAPTIC_ID}"]`
    );

    if (inputElement && labelElement) return;

    inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = HAPTIC_ID;
    inputElement.setAttribute("switch", "");
    inputElement.style.display = "none";
    document.body.appendChild(inputElement);

    labelElement = document.createElement("label");
    labelElement.htmlFor = HAPTIC_ID;
    labelElement.style.display = "none";
    document.body.appendChild(labelElement);
}

if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mount, {
            once: true,
        });
    } else {
        mount();
    }
}

export function triggerHaptic(duration = HAPTIC_DURATION_MS) {
    if (typeof window === "undefined") return;

    if (isIOS) {
        if (!inputElement || !labelElement) mount();
        labelElement?.click();
    } else {
        if (navigator?.vibrate) navigator.vibrate(duration);
        else labelElement?.click();
    }
}
