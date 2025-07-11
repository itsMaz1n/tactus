# Tactus 🌵

Give your web app a little _tap of magic_—add native-style haptic feedback to every click.

## 🚀 Install

```bash
npm install tactus
```

## Usage

React
```jsx
import { triggerHaptic } from "tactus";

export default function BuyButton() {
    return <button onClick={() => triggerHaptic()}>Buy now</button>;
}
```
HTML + Vanilla JS
```html
<script src="src/tactus.min.js"></script>
<button onclick="Tactus.triggerHaptic();">Try Tactus</button>
```


`triggerHaptic(duration?)` fires one haptic pulse.
- No argument → 100 ms by default
- iPhone / iPad → Safari’s crisp “tick” 💥
- Other browsers → falls back to the Vibration API 📳

## 🌐 Browser support

| Platform                      | Supported | Notes             |
| ----------------------------- | --------- | ----------------- |
| iOS 12 + (Safari & web-views) | ✅        | Native (switch)   |
| Android 5 +                   | ✅        | Vibrations API    |
| Desktop                       | 🚫        | Not supported yet |

## 📄 License

MIT © 2025 Aadee

Made with ❤️ by [Aadee](https://x.com/aadeexyz)
