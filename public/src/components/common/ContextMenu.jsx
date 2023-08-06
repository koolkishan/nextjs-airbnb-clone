import React, { useEffect, useRef } from "react";

export default function ContextMenu({
  options,
  cordinates,
  contextMenu,
  setContextMenu,
}) {
  const contextMenuRef = useRef(null); // Create a ref for the context menu element

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "context-opener") {
        if (
          contextMenuRef.current && // Check if the context menu ref exists
          !contextMenuRef.current.contains(event.target) // Check if the click is outside of the context menu
        ) {
          setContextMenu(false); // Close the context menu
        }
      }
    };

    document.addEventListener("click", handleOutsideClick); // Add the event listener

    return () => {
      document.removeEventListener("click", handleOutsideClick); // Clean up the event listener on component unmount
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        if (contextMenu) setContextMenu(false);
      }
    };
    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, []);
  const handleClick = (e, callBack) => {
    e.stopPropagation();
    callBack();
  };
  return (
    <div
      className={` bg-white shadow-2xl fixed py-5  z-[100] rounded-lg border border-gray-200`}
      ref={contextMenuRef}
      style={{
        boxShadow:
          "0 2px 5px 0 rgba(var(11,20,26),.26),0 2px 10px 0 rgba(11,20,26;),.16)",
        top: cordinates.y,
        left: cordinates.x,
      }}
    >
      <ul>
        {options.map(({ name, callBack }) => (
          <li
            className="hover:bg-gray-100 pl-5 pr-10  py-2 cursor-pointer"
            onClick={(e) => handleClick(e, callBack)}
            key={name}
          >
            <span className="">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
