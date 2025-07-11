export function isIOS() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
        return false;
    }
    const iOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const iPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    return iOSDevice || iPadOS;
}
