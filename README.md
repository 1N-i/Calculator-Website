# 🧮 Web Calculator

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

A functional, classic web-based electronic calculator featuring memory support, operations, square root, percentages, and responsive tactical button feedback.

## 📋 Summary
- [Technologies](#-technologies)
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [How to Run](#-how-to-run)

---

## 🛠 Technologies
- **HTML5**: Semi-semantic structure layout modeling a physical calculator keyboard interface.
- **CSS3**: Layout styling with Flexbox, a Roboto Mono font theme, and active clicking state animations.
- **JavaScript (ES6+)**: Event-driven application engine handling calculation state transitions and asynchronous visual updates.

## ✨ Features
- **Standard Arithmetic**: Seamlessly performs addition, subtraction, multiplication, and division operations.
- **Advanced Calculation Logic**: Native button hooks handling instant square root (√) translations and decimal percentage ratios.
- **Memory Register Control**: Complete memory management toolchain exposing standard memory buttons: Memory Recall/Clear (MRC), Memory Plus (M+), and Memory Minus (M-).
- **Simulated Hardware Delay**: Utilizes an asynchronous execution sleep lock mechanism to recreate realistic digital processing visual flickers upon inputs.
- **State Power Controls**: Dedicated ON/CE system reboot controls and full active state power shutdowns (OFF) targeting DOM cleanup.

## 📂 Project Architecture
The source files are structured independently to separate rendering, styling, and mathematical state rules:
* `index.html`: Contains the structural frame using tabular tags to lay down the input keys matrix.
* `style.css`: Configures component sizing, dark backdrop highlights, hover cursor changes, and scaling interactions (`transform: scale(0.9)`).
* `script.js`: Computes the numerical pipelines, caches evaluation operations, tracks input streams, and displays results dynamically.

## 📚 What I Learned
* **Asynchronous Screen Rendering**: Developing custom `Promise` based delays with explicit timeouts to build custom UI flashing visual effects.
* **Deterministic Arithmetic State Tracking**: Governing independent calculator operational configurations, handling specific evaluation checks sequentially before finalizing expressions.
* **Tabular Keyboard Frameworks**: Leveraging HTML `table` structures along with precise unified button boundaries inside custom Flex arrays to design highly reliable grids.

## 🔮 Future Improvements
- [ ] Keyboard support mapping physical numpads to the screen engine.
- [ ] Precision management fixes addressing floating-point rounding errors.

## 🚀 How to Run
1. **Download the Project Sources:** Ensure `index.html`, `style.css`, and `script.js` reside together within the same system directory.
2. **Execute via Local Environment:** Launch `index.html` within your preferred default web browser directly.
