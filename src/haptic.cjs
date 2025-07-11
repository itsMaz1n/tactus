'use strict';

const HAPTIC_ID = "___haptic-switch___";
const HAPTIC_DURATION_MS = 10;

function isIOS$1() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
        return false;
    }
    const iOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    return iOSDevice || iPadOS;
}

let inputElement = null;
let labelElement = null;
let isIOS = false;
// must only be called once
function mount() {
    if (labelElement && inputElement)
        return;
    isIOS = isIOS$1();
    inputElement = document.querySelector(`#${HAPTIC_ID}`);
    labelElement = document.querySelector(`label[for="${HAPTIC_ID}"]`);
    if (inputElement && labelElement)
        return;
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
    }
    else {
        mount();
    }
}
function triggerHaptic(duration = HAPTIC_DURATION_MS) {
    if (typeof window === "undefined")
        return;
    if (isIOS) {
        if (!inputElement || !labelElement)
            mount();
        labelElement === null || labelElement === void 0 ? void 0 : labelElement.click();
    }
    else {
        if (navigator === null || navigator === void 0 ? void 0 : navigator.vibrate)
            navigator.vibrate(duration);
        else
            labelElement === null || labelElement === void 0 ? void 0 : labelElement.click();
    }
}

exports.triggerHaptic = triggerHaptic;
//# sourceMappingURL=haptic.cjs.map
