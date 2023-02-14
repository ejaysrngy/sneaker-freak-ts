import React, { useEffect, useState } from "react";

const useHeaderAnimation = () => {
    const [pagePosition, setPagePosition] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => setPagePosition(document.documentElement.scrollTop));
  }, []);

  return pagePosition;
};

export default useHeaderAnimation;
