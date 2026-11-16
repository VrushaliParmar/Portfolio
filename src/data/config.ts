/**
 * SITE CONFIGURATION
 * Replace placeholder values marked with 👉 before publishing.
 */

export const siteConfig = {
  name: 'Vrushali Parmar',
  title: 'Vrushali Parmar — Engineering Student & Developer',
  description:
    'Electronics & Telecommunication Engineering student exploring AI/ML, software development, and VLSI. Building thoughtful software and exploring intelligent systems.',
  url: 'https://vrushaliparmar.dev', // 👉 Replace with your actual domain if you have one

  // Social links — verified
  github: 'https://github.com/VrushaliParmar',
  linkedin: 'https://www.linkedin.com/in/vrushali-parmar-259669397/',

  email: 'vrushliparmar@gmail.com',

  // Resume — Google Drive view link (opens in new tab, no download claimed)
  resumeUrl: 'https://drive.google.com/file/d/1S40-wcI4tNM3Nlap08_VDblOyyqYAgsK/view?usp=sharing',

  // 👉 Photo — place your headshot at public/vrushali-photo.jpg and set to '/vrushali-photo.jpg'
  // Leave empty to show the initials placeholder instead.
  photoUrl: '/vrushali-photo.jpg',

  // Open Graph image — 👉 Add a 1200×630 image to public/og-image.png and set the path.
  ogImage: '',
} as const;
