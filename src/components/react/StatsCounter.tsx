/**
 * Composant Stats avec animations counter
 * Déclenché au scroll avec IntersectionObserver
 */
import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number | string;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const durations = stats.map(() => 2000); // 2s pour chaque counter
    const steps = 60; // 60 frames
    const increments = stats.map((stat, i) => {
      const value = typeof stat.value === 'number' ? stat.value : parseInt(stat.value);
      return value / steps;
    });

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const stat = stats[i];
          const targetValue = typeof stat.value === 'number' ? stat.value : parseInt(stat.value);
          const newCount = Math.min(count + increments[i], targetValue);
          return newCount;
        })
      );

      if (frame >= steps) {
        clearInterval(interval);
        // Set final values
        setCounts(
          stats.map((stat) => (typeof stat.value === 'number' ? stat.value : parseInt(stat.value)))
        );
      }
    }, durations[0] / steps);

    return () => clearInterval(interval);
  }, [isVisible, stats]);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-3 transition-transform duration-300 group-hover:scale-110">
            {stat.prefix}
            {typeof stat.value === 'number' ? Math.floor(counts[index]) : stat.value}
            {stat.suffix}
          </div>
          <div className="text-lg text-white/80">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
