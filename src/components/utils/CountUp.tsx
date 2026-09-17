"use client";
import { useRef, useEffect, useState } from "react";

interface Props {
  value: number;
  className?: string;
  spanClassName?: string;
  duration?: number;
  threshold?: number;
  suffix?: string;
  startValue?: number;
  onAnimationComplete?: () => void;
}

const CountUp = ({
  value,
  className = "",
  duration = 2000,
  threshold = 0.5,
  suffix = "",
  startValue = 0,
  onAnimationComplete,
  spanClassName = "",
}: Props) => {
  const [currentValue, setCurrentValue] = useState<number>(startValue);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [threshold, hasAnimated]);

  const startAnimation = () => {
    const startTime = Date.now();
    const startVal = startValue;
    const endVal = value;
    const totalChange = endVal - startVal;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentVal = startVal + totalChange * easeOutCubic;

      setCurrentValue(Math.round(currentVal));

      if (progress < 1) {
        timerRef.current = window.requestAnimationFrame(animate);
      } else {
        setCurrentValue(endVal);
        onAnimationComplete?.();
      }
    };

    animate();
  };
  // Format number with commas for thousands
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <h3 ref={elementRef} className={className}>
      <span className={spanClassName}>{formatNumber(currentValue)}</span>
      <span>{suffix}</span>
    </h3>
  );
};

export default CountUp;
