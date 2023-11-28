import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./index.module.scss";

const TypewriterText = ({ text, showMarkdown = false }) => {
  const [visibleText, setVisibleText] = useState("");
  const indexRef = useRef(0);
  const timerIdRef = useRef(null);

  useEffect(() => {
    const typeNextChar = () => {
      const currentIdx = indexRef.current;
      setVisibleText((vText) => vText + text.charAt(currentIdx));
      indexRef.current += 1;
      if (indexRef.current < text.length) {
        timerIdRef.current = setTimeout(typeNextChar, 50);
      }
    };
    // Start typing
    if (indexRef.current === 0) {
      typeNextChar();
    }

    return () => {
      // Clear the timer when the component is unmounted
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      indexRef.current = 0;
    };
  }, [text]);

  return (
    <div className={styles["typewriter"]}>
      {!showMarkdown || visibleText.length !== text.length ? (
        visibleText
      ) : (
        <ReactMarkdown>{visibleText}</ReactMarkdown>
      )}
    </div>
  );
};

export default TypewriterText;
