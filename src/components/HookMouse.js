import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY ] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Mouse Effect to check");
    window.addEventListener("Mouse Listner", logMousePosition);
  },[]);
  return (
    <div>
        Hooks X- {x} and Y- {y}
    </div>
  );
}

export default HookMouse;
