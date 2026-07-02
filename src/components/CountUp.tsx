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
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  const display = !inView ? "0" : numMatch ? `${prefix}${count}${suffix}` : value;

  return <span ref={ref}>{display}</span>;
}
