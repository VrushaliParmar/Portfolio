/**
 * EXPERIENCE DATA
 * Add real experience entries here as you accumulate them.
 * Each entry will appear in the Experience section timeline.
 *
 * HOW TO ADD AN ENTRY:
 *   1. Copy the template object below.
 *   2. Fill in every field.
 *   3. Set `current: true` if it is your current role.
 *   4. Save — the section will render automatically.
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  organisation: string;
  location: string;
  startDate: string;   // e.g. "Jun 2026"
  endDate: string;     // e.g. "Present" or "Jul 2025"
  current: boolean;
  type: 'internship' | 'research' | 'employment' | 'volunteer' | 'other';
  highlights: string[];
  technologies?: string[];
}

// ─── Add your entries below ──────────────────────────────────────────────────
export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'ai-ml-intern-365dfarms',
    role: 'AI/ML Engineer — Prediction Models Intern',
    organisation: '365Dfarms',
    location: 'Pune, Maharashtra',
    startDate: 'Jun 2026',
    endDate: 'Present',
    current: true,
    type: 'internship',
    highlights: [
      'Built an AI/ML-based mulberry leaf analysis system for the sericulture domain, identifying leaf diseases and nutrient deficiencies from image-based data.',
      'Performed data preprocessing, exploratory analysis, feature preparation, model training, and evaluation to develop the prediction component.',
      'Developed and validated ML prediction workflows, analysing model outputs and prediction confidence for application-level use.',
      'Supported integration of the ML prediction component with the backend/API workflow to deliver predictions to the Flutter-based application.',
      'Tested ML functionality with representative inputs and validated the end-to-end flow from application input through backend processing to prediction output.',
      'Performed functional and performance testing of the application frontend — covering login, session persistence, and workflows; ran the company-provided test cases, recording expected vs actual results and pass/fail status, and identified page-load delays of ~18–19 seconds.',
      'Contributing to multi-language support and Firebase-based, offline-first storage design to widen accessibility for farmers across regions.',
    ],
    technologies: ['Python', 'TensorFlow', 'Flutter', 'Firebase', 'FastAPI', 'ML Testing'],
  },
  {
    id: 'vlsi-research-c2s',
    role: 'VLSI Research Intern — Innovate to Elevate',
    organisation: 'MKSSS\'s Cummins College of Engineering for Women · MeitY Chips to Startup (C2S) Initiative',
    location: 'Pune, Maharashtra',
    startDate: '16 Jun 2025',
    endDate: '15 Jul 2025',
    current: false,
    type: 'research',
    highlights: [
      'Completed the 4-week "Innovate to Elevate" Internship under the Chip to Startup (C2S) MeitY Project Grant (Second Year 2024–25), certified by MKSSS\'s Cummins College of Engineering for Women, Pune.',
      'Designed a 13-transistor Domino TSPC D flip-flop in Cadence Virtuoso at 45 nm and 90 nm (VDD = 1 V), using precharge–evaluate stages with a static output inverter to restore the logic level and reduce charge-leakage problems of plain dynamic logic.',
      'Verified rising-edge operation using Spectre transient analysis at 500 MHz and measured CLK→Q delay (~71 ps at 45 nm), average power (286 nW at 45 nm, 389 nW at 90 nm), and noise.',
      'Domino gave the lowest average power of the four styles at both nodes; contributed these results to a team comparison against Static, Dynamic, and Pseudo-PMOS TSPC designs.',
    ],
    technologies: ['Cadence Virtuoso', 'Spectre', 'CMOS', '45 nm', '90 nm', 'VLSI Design'],
  },
];

// ─── Template — copy, fill, and add to the array above ───────────────────────
// {
//   id: 'unique-id',
//   role: '👉 Your role title',
//   organisation: '👉 Organisation name',
//   location: '👉 City, Country or Remote',
//   startDate: '👉 Mon YYYY',
//   endDate: '👉 Mon YYYY or Present',
//   current: false,
//   type: 'internship',  // internship | research | employment | volunteer | other
//   highlights: [
//     '👉 Key achievement or responsibility.',
//   ],
//   technologies: ['👉 Tech1', 'Tech2'],
// },
