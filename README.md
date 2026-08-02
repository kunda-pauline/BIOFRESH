# BIOFRESH AI Formulator

**AI-Powered Biopolymer Formulation for Climate-Smart Food Packaging**

BIOFRESH is a climate-smart food-packaging research prototype that transforms agricultural by-products—specifically cassava peels and insect-derived chitosan—into biodegradable active antimicrobial packaging for fruits and vegetables.

> [!IMPORTANT]
> **Scientific Disclaimer**
> All generated quantities, performance metrics, and recommendations are:
> **“AI-generated research estimates requiring laboratory validation.”**
> No claims of commercial food-contact approval or certified shelf-life extension are made.

---

## Features

- **Mass-Balance Rule Engine**: Strictly enforces $100.00\,\text{g}$ total dry polymer basis ($\text{Cassava Starch} + \text{Insect Chitosan} = 100.00\,\text{g}$).
- **Interactive AI Formulator**: 5-section configuration form with environmental presets (High Heat, High Humidity, Long Transport, Refrigerated).
- **Polished Results Dashboard**: Recharts Doughnut composition chart & Bar chart, estimated performance ranges, status badges, AI reasoning explanations, and lab test checklist.
- **Formulation History**: LocalStorage persistence with list/grid view, JSON export, print report, and side-by-side formulation comparison view.
- **Science & Technology**: Educational deep-dive into biopolymer chemistry, cationic antimicrobial mechanisms, system architecture flowchart, and future machine learning feedback loop.
- **About & Impact**: 7-step circular economy model.

---

## Quick Setup & Running Locally

### Prerequisites
- Node.js 18.x or 20.x installed.
- npm 9.x or later.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Tests
```bash
npm test
```

---

## Folder Structure

```
BIOFRESH/
├── docs/
│   ├── prototype-assumptions.md   # Configurable bounds & scientific assumptions
│   └── calculation-methodology.md # Mathematical formulas & rule engine specs
├── public/
│   ├── biofresh-logo.png          # Primary brand logo
│   └── biofresh-logo.svg          # Vector brand logo
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── api/formulate/route.ts # Formulation API endpoint
│   │   ├── about/page.tsx         # About & Impact page
│   │   ├── formulator/page.tsx    # AI Formulator page
│   │   ├── history/page.tsx       # Saved History & Comparison page
│   │   ├── science/page.tsx       # Science & Technology page
│   │   ├── globals.css            # Custom CSS & print styles
│   │   ├── layout.tsx             # Root layout & navbar/footer
│   │   └── page.tsx               # Landing page
│   ├── components/                # Reusable React components
│   │   ├── DisclaimerBanner.tsx   # Mandatory disclaimer component
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Navbar.tsx             # Header navigation
│   │   └── ResultsDashboard.tsx   # Interactive results dashboard & charts
│   ├── config/                    # Configurable research modules
│   │   ├── cropProfiles.ts        # Database of assumptions for produce
│   │   └── formulationConfig.ts   # Reference parameters & bounds
│   ├── data/                      # Seed data & sample payloads
│   │   ├── sampleFormulations.ts  # Sample JSON payloads
│   │   └── seedCropProfiles.ts    # Crop profiles seed data
│   └── lib/
│       └── formulationEngine.ts   # Core formulation engine logic
├── tests/
│   └── formulationEngine.test.ts  # Vitest unit tests
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## License

Created for hackathon research prototype demonstration.
