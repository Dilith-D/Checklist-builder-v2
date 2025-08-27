import React, { useEffect, useRef, useState } from 'react';

export default function MetricChip({ value }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`bg-card px-3 py-1 rounded-full text-sm transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      {value}
    </span>
  );
}
