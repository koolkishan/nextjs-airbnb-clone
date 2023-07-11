import { userAppStore } from "airbnb/store/store";
import { useEffect, RefObject, useRef } from "react";

function useClickOutside() {
  const { setSelectionType } = userAppStore();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectionType(undefined);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, setSelectionType]);
  return [containerRef];
}

export default useClickOutside;
