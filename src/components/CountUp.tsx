"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

export default function CountUp({ value, duration = 2000 }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numMatch = value.match(/\d+/);
  const target = numMatch ? parseInt(numMatch[0]) : 0;
  const prefix = numMatch ? value.slice(0, value.indexOf(numMatch[0])) : "";
  const suffix = numMatch ? value.replace(numMatch[0], "") : "";

  useEffect(() => {
    if (!inView || !numMatch) return;
    const startTime = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  const display = !inView ? "0" : numMatch ? `${prefix}${count}${suffix}` : value;

  return <span ref={ref}>{display}</span>;
}
