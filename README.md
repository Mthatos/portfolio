# AI Engineer Portfolio

A professional, high-performance portfolio application designed for Machine Learning Engineers and Software Developers. This application features a cyber-security/matrix aesthetic, a fully integrated AI Chat Assistant grounded in the candidate's professional data, and dynamic ATS-friendly CV generation.

## 🚀 Features

- **Interactive AI Assistant**: A floating chat widget powered by Google's Gemini 2.5 Flash model. It is context-aware, grounded with the portfolio's specific data (Bio, Skills, Projects) to answer recruiter questions.
- **Matrix Rain Background**: A custom, high-performance HTML5 Canvas animation simulating the digital rain effect, optimized with reduced-motion accessibility checks.
- **Dynamic Content**: All portfolio data (Projects, Experience, Skills) is centralized in `constants.ts` for easy updates.
- **ATS-Friendly CV**: Generates a clean, printable, Applicant Tracking System (ATS) optimized HTML Resume on the fly.
- **Data Visualization**: Interactive bar charts for technical skill proficiency using Recharts.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, supporting mobile, tablet, and desktop views.
- **Glassmorphism UI**: Modern aesthetic using backdrop blurs and semi-transparent slate colors.

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google GenAI SDK (`@google/genai`)
- **Icons**: Lucide React
- **Visualization**: Recharts
- **Build Tooling**: Vite (Recommended) or ESM/Browser-native

## 📂 Project Structure

```text
├── components/           # React UI Components
│   ├── About.tsx         # Bio, Experience, Education, References
│   ├── ChatAssistant.tsx # Floating AI Chat widget
│   ├── Contact.tsx       # Contact form with validation & toast
│   ├── Footer.tsx        # Copyright and tech stack info
│   ├── Hero.tsx          # Landing section with typing effect
│   ├── MatrixRain.tsx    # Canvas background animation
│   ├── Navbar.tsx        # Responsive navigation
│   ├── Projects.tsx      # Project grid with GitHub links
│   └── Skills.tsx        # Recharts visualization
├── services/
│   └── geminiService.ts  # Google Gemini API configuration & context injection
├── constants.ts          # centralized data source (Profile, Projects, Skills)
├── cvHtml.ts             # Template for the downloadable/printable CV
├── types.ts              # TypeScript interfaces
├── App.tsx               # Main layout and Intersection Observer logic
├── index.html            # Entry point & Tailwind CDN
└── README.md             # Documentation
```

## ⚙️ Configuration & Setup

### Prerequisites
- Node.js (v18+)
- A Google Cloud Project with the Gemini API enabled.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   API_KEY=your_google_gemini_api_key_here
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## 🤖 AI Integration Details

The application uses the `@google/genai` SDK located in `services/geminiService.ts`.

**Context Injection:**
The AI is not generic; it is "grounded" using a System Instruction. The `PROJECTS`, `SKILLS`, `BIO`, and `CAREER_OBJECTIVE` arrays are imported from `constants.ts` and formatted into a string prompt. This ensures the model acts as a representative of the portfolio owner.

```typescript
// services/geminiService.ts
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${MY_NAME}'s professional portfolio.
...
Projects:
${PROJECTS.map(p => `- Name: ${p.title}...`).join('\n')}
...
`;
```

## 📄 CV Generation System

The application separates the interactive web view from the printable CV.
- **Web View**: Rich UI, dark mode, animations.
- **Print/Download**: The `Hero.tsx` component triggers a download function that uses a Blob created from `cvHtml.ts`.
- **ATS Optimization**: `cvHtml.ts` contains a semantic, single-column HTML structure with high-contrast text and no complex graphics, ensuring maximum readability by automated hiring systems.

## 🎨 Customization

To personalize this portfolio, you only need to modify **one file**:

1. Open `constants.ts`.
2. Update the `PROJECTS`, `SKILLS`, `EXPERIENCE`, `EDUCATION`, and `BIO` constants.
3. The AI Assistant and the UI will automatically update to reflect your new data.

## 📝 License

This project is open source and available for personal and commercial use.
