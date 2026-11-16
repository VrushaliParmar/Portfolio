/**
 * PROJECT DATA
 * Source of truth for all project cards.
 * Edit here to update the portfolio.
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  description: string;
  technologies: string[];
  focusAreas: string[];
  evaluation: string;
  evaluationCaveat: string;
  learningReflection: string;
  githubUrl: string;
  liveUrl?: string;           // only set if a real live URL exists
  evaluationDetailsUrl?: string;
  status: 'active' | 'prototype' | 'in-development' | 'research';
  statusLabel: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'mulberry-leaf-disease',
    title: 'Mulberry Leaf Disease Classification',
    tagline: 'Deep learning · Computer vision · Transfer learning',
    problem:
      'Identifying plant diseases from leaf images can be time-consuming and may require specialist knowledge. This project explores whether a computer-vision model can classify mulberry leaves into disease-free, leaf-rust, and leaf-spot categories.',
    description:
      'I developed an image-classification pipeline using MobileNetV2 with ImageNet-pretrained weights. The project includes dataset inspection, a stratified train/validation/test split, image preprocessing and augmentation, class-imbalance handling, model training, single-image inference, and error analysis.',
    technologies: ['Python', 'TensorFlow / Keras', 'MobileNetV2', 'Transfer Learning', 'ImageNet'],
    focusAreas: ['Deep Learning', 'Computer Vision', 'Transfer Learning'],
    evaluation:
      'The repository reports 93.33% accuracy on a held-out test set of 165 images (154 correct predictions).',
    evaluationCaveat:
      'This is a repository-reported result on a small test set. The trained model and original dataset are not included in the repository. This figure has not been independently verified.',
    learningReflection:
      'This project helped me understand how dataset quality and splitting affect model evaluation. Stratifying the data helps ensure each class appears in each split. I also learned that accuracy alone is not enough; examining class-level errors matters, especially when data is imbalanced.',
    githubUrl: 'https://github.com/VrushaliParmar/mulberry-leaf-disease-classification',
    evaluationDetailsUrl:
      'https://github.com/VrushaliParmar/mulberry-leaf-disease-classification/blob/main/saved_models/README.md',
    status: 'active',
    statusLabel: 'Completed',
    featured: true,
  },
  {
    id: 'ai-load-consolidation',
    title: 'AI Load Consolidation Engine',
    tagline: 'Logistics optimisation · Operations research · Python APIs',
    problem:
      'Partially loaded trucks can contribute to unnecessary trips, higher transportation costs, and inefficient fleet use. This project explores grouping and packing shipments into a more efficient dispatch plan.',
    description:
      'I developed a logistics-optimisation workflow that combines shipment clustering, truck-capacity packing, cost optimisation, demand forecasting, and scenario simulation. The project is organised around a Python backend using FastAPI and a Streamlit dashboard for exploring dispatch plans and analytics.',
    technologies: ['Python', 'FastAPI', 'Streamlit', 'scikit-learn', 'Clustering', 'Operations Research'],
    focusAreas: ['Logistics Optimisation', 'Operations Research', 'Python APIs', 'Data Visualisation'],
    evaluation:
      'The README presents example before-and-after figures as expected results. These are illustrative, not documented real-world or benchmark results.',
    evaluationCaveat:
      'The truck-count, utilisation, and cost figures in the README are illustrative expected results, not measured achievements. A proper evaluation would compare dispatch plans against a defined baseline using truck count, capacity utilisation, and estimated cost.',
    learningReflection:
      'This project helped me explore how machine learning and operations research can work together: clustering can group related deliveries, while packing and optimisation methods can help form capacity-aware plans. It also showed me the importance of distinguishing illustrative scenarios from measured results.',
    githubUrl: 'https://github.com/VrushaliParmar/AI-load-consolidation-engine',
    status: 'prototype',
    statusLabel: 'Prototype',
    featured: true,
  },
  {
    id: 'careerpath-pro',
    title: 'CareerPath Pro — AI Career Guidance',
    tagline: 'AI application · Resume analysis · Full-stack software',
    problem:
      'Students and early-career professionals may find it difficult to connect their current skills to potential roles and identify what to learn next. CareerPath Pro is a prototype intended to bring resume analysis, role matching, skill-gap insights, and career guidance into one application.',
    description:
      'I worked on a full-stack prototype structured around a React frontend and FastAPI backend. Its documented features include resume upload and parsing, skill extraction, role-fit analysis, skill-gap recommendations, and a career-guidance assistant.',
    technologies: ['Python', 'FastAPI', 'React', 'Vite', 'LangChain', 'OpenAI API'],
    focusAreas: ['AI Application Development', 'Resume Analysis', 'Full-Stack Software'],
    evaluation:
      'The repository does not report a formal accuracy benchmark or user study. A useful evaluation would test resume parsing against sample resumes, check extracted skills against source text, review recommendations against manually prepared examples, and test the main user flows.',
    evaluationCaveat:
      'This is a prototype. Some AI and data-service integrations are described as planned in the repository. Not all documented features have been verified as fully implemented.',
    learningReflection:
      'This project helped me think about how AI capabilities fit into a complete product workflow, rather than treating a model or prompt as the whole application. It also highlighted the importance of validating extracted information and making a prototype\'s limitations clear to users.',
    githubUrl: 'https://github.com/VrushaliParmar/AI-Career-Mental-Wellness-Assistant',
    liveUrl: 'https://ai-career-mental-wellness-assistant.vercel.app',
    status: 'prototype',
    statusLabel: 'Prototype — Live',
    featured: true,
  },
  {
    id: 'ai-study-buddy',
    title: 'AI Study Buddy',
    tagline: 'Generative AI · Flutter · Mobile application development',
    problem:
      'Students often switch between different tools to summarise material, understand challenging concepts, create practice questions, and keep notes. AI Study Buddy aims to bring these study activities together in one mobile application.',
    description:
      'I developed a Flutter application concept with documented workflows for AI-generated summaries, simplified explanations, practice quizzes, saved notes, and learning history. The README describes Gemini AI for AI-assisted learning features and Firebase services for authentication and data storage.',
    technologies: ['Flutter', 'Dart', 'Gemini AI', 'Firebase', 'Mobile Development'],
    focusAreas: ['Generative AI', 'Flutter', 'Mobile Application Development'],
    evaluation:
      'The repository does not report formal quality metrics or user-testing results. A useful evaluation would test summaries for preservation of key ideas, explanations for correctness and clarity, quiz questions for relevance to the supplied content, and saving/revisiting notes on an emulator or device.',
    evaluationCaveat:
      'This project is in development. The README documents Gemini and Firebase integrations, but these have not been verified as fully configured or deployed. No app-store release exists.',
    learningReflection:
      'This project helped me explore mobile application development and how AI features can support specific user tasks. It also reinforced that generated educational content should be checked for relevance and correctness, and that a polished interface is only one part of a useful learning product.',
    githubUrl: 'https://github.com/VrushaliParmar/AI-Study-Buddy',
    status: 'in-development',
    statusLabel: 'In Development',
    featured: true,
  },
];
