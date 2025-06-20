import { useEffect, useState } from "react";

export default function TypingAnimation({ text, speed, element }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = text || "Hello, I'm a Frontend Developer!";
  const typingSpeed = speed || 100; // Default typing speed in milliseconds
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, typingSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const animatedContent = (
    <>
      {displayedText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </>
  );

  // If element is a function, call it with the animated content
  if (typeof element === 'function') {
    return element(animatedContent);
  }

  // Fallback to span if no element provided
  return <span>{animatedContent}</span>;
}
