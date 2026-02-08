<div align="center">
  <img src="logo.jpg" alt="WarriorOS Logo" width="200" />
  <h1>WARRIOR OS (v4.0)</h1>
  <p><i>A Modern Terminal-Inspired Portfolio & Engineering Archive</i></p>
  
  <p>
    <a href="#"><strong>Live Preview >></strong></a>
  </p>
</div>

---

## 🚀 Overview

**WarriorOS** is a complete reimplementation of the [warriorwhocodes.com](https://warriorwhocodes.com) portfolio. It moves away from static web design towards an "Interactive Operating System" aesthetic, blending a retro-terminal CLI with modern, high-performance UI components.

Built as a submission for the **New Year, New You Portfolio Challenge**, this iteration focuses on **human-AI symbiosis** in technical education.

## ✨ Key Features

- **🌐 Global Terminal (Warrior_OS CLI)**: A fully functional command-line interface used for navigation and system interaction.
- **🤖 AI Expert & Companion**: Integrated Google Gemini API that acts as a context-aware tutor for roadmaps and technical content.
- **🗺️ One-Shot Roadmaps**: Interactive, deep-dive learning modules on topics like Redis, MySQL, and Django ORM.
- **⚡ High-Contrast Aesthetics**: A "Paper Terminal" theme featuring sharp black cards over white grid backgrounds for maximum readability.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion.
- **AI**: Google Gemini Pro (via `@google/generative-ai`).
- **Deployment**: Netlify.

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root:
   ```env
   VITE_GEMINI_API_KEY_PRIMARY=your_primary_key
   VITE_GEMINI_API_KEY_FALLBACK=your_fallback_key
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment (Netlify)

This project is configured for deployment on Netlify.

1.  **Connect to GitHub**: Link your repository to Netlify.
2.  **Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
3.  **Environment Variables**: Add `VITE_GEMINI_API_KEY_PRIMARY` and `VITE_GEMINI_API_KEY_FALLBACK` in Netlify Dashboard -> Site settings -> Environment variables.

---

<p align="center">
  Built with ❤️ by <b>Ankush Singh Gandhi</b> (Warrior Who Codes)
</p>
