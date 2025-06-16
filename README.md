# Tactus ✨

Give your web app a little *tap of magic*—add native-style haptic feedback to every click.


## 🚀 Install

```bash
npm install tactus
```


## Usage

```jsx
import { triggerHaptic } from "tactus";

export default function BuyButton() {
  return (
    <button onClick={() => triggerHaptic()}>
      Buy now
    </button>
  );
}
```

`triggerHaptic()` vibrates for the duration you pass (defaults to 100 ms).
On iPhone/iPad it uses Safari’s built-in “tick”; everywhere else it falls back to the standard Vibration API.


## 🌐 Browser support


## 📄 License
MIT © 2025 Aadee


Made with ❤️ by [Aadee](https://x.com/aadeexyz)