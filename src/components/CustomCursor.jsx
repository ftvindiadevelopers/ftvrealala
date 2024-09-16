import React from "react";

export const CustomCursor = () => {
  const customRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - customRef.current.clientWidth / 2;
      const mouseY = clientY - customRef.current.clientHeight / 2;
      customRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
  },[]);

  return <div className="app-cursor" ref={customRef}></div>;
};
