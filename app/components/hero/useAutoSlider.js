import { useEffect, useState } from "react";

export default function useAutoSlider(length, delay = 4000) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return { active, setActive };
}
