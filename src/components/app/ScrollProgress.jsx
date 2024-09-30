import React, { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const progress = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const percent =
        (window.scrollY * 100) /
        (document.body.offsetHeight - window.innerHeight);
      const width = Math.min(percent, 100);
      if (progress.current) progress.current.style.width = width + "%";
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [progress.current]);

  return <div ref={progress} />;
};

export default ScrollProgress;
