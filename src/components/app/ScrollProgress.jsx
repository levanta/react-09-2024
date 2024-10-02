import React, { useEffect, useRef, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const percent =
        (window.scrollY * 100) /
        (document.body.offsetHeight - window.innerHeight);
      setScroll(Math.min(percent, 100));
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div style={{ width: scroll + "%" }} />;
};

export default ScrollProgress;
