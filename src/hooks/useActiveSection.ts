import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[visible.length - 1].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};
