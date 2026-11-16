/**
 * useActiveSection
 * Uses IntersectionObserver to track which section is currently most visible.
 * Returns the id of the active section so the Navbar can highlight it.
 *
 * Strategy: whichever observed section has the greatest intersection ratio
 * at the moment of observation wins.  On scroll-down the top-most section
 * that is at least 20 % visible is returned; we also store the last value
 * so the active state does not flicker when moving between sections.
 */
import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'experience', 'beyond', 'contact'];

export function useActiveSection(): string {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    // Map to track the latest ratio for each section
    const ratios = new Map<string, number>(SECTION_IDS.map(id => [id, 0]));

    const pick = () => {
      let best = 'home';
      let bestRatio = -1;
      for (const [id, ratio] of ratios) {
        if (ratio > bestRatio) { bestRatio = ratio; best = id; }
      }
      setActive(best);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          const id = e.target.id;
          if (id) ratios.set(id, e.intersectionRatio);
        });
        pick();
      },
      {
        // Multiple thresholds give fine-grained ratio updates as we scroll
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: `-${68}px 0px 0px 0px`, // offset for fixed navbar height
      },
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
