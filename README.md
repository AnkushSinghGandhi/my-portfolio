<div align="center">
  <img src="logo.jpg" alt="WarriorOS Logo" width="200" />
  <h1>WARRIOR OS (v4.0)</h1>
  <p><i>A Modern Terminal-Inspired Portfolio & Engineering Archive</i></p>
  
  <p>
    <a href="https://portfolio-1050489244458.asia-south1.run.app"><strong>Live Preview >></strong></a>
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
- **Deployment**: Google Cloud Run (Dockerized Nginx).
- **Automation**: Google Cloud Build.

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
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## 🚢 Deployment (Cloud Run)

The project includes a `Dockerfile` and `nginx.conf` for seamless deployment to Google Cloud Run.

```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/your-project-id/portfolio

# Deploy to Cloud Run
gcloud run deploy portfolio --image gcr.io/your-project-id/portfolio --region asia-south1 --platform managed --allow-unauthenticated
```

---

<p align="center">
  Built with ❤️ by <b>Ankush Singh Gandhi</b> (Warrior Who Codes)
</p>
