import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number; // ms
};

const Reveal: React.FC<RevealProps> = ({ children, className = '', threshold = 0.15, rootMargin = '0px', delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, visible]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className={`${className} ${visible ? 'animate-fade-in' : 'opacity-0 translate-y-6'}`} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
