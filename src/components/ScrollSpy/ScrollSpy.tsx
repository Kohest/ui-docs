import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ScrollSpyProps {
  sections: string[];
  children: (activeSection: string) => JSX.Element;
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ sections, children }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight / 2;

      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            section,
            distanceToMiddle: Math.abs(rect.top - scrollPosition),
          };
        }
        return { section, distanceToMiddle: Infinity };
      });
      const active = sectionOffsets.sort(
        (a, b) => a.distanceToMiddle - b.distanceToMiddle
      )[0].section;

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (sections.includes(hash)) {
      setActiveSection(hash);
    }
  }, [location.hash, sections]);

  return children(activeSection);
};

export default ScrollSpy;
