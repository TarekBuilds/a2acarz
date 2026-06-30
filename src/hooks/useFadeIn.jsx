import { useEffect, useRef, useState } from 'react';

export default function useFadeIn(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      options,
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
