/**
 * Composant Stats avec animations counter
 * SEO fix: valeurs réelles dans le HTML statique (fallback sans JS)
 * Animation déclenchée à la visibilité via IntersectionObserver
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
  const targetValues = stats.map((s) =>
    typeof s.value === 'number' ? s.value : parseInt(s.value)
  );
  // SEO fix: initialiser avec les vraies valeurs pour que le HTML statique les affiche
  const [counts, setCounts] = useState<number[]>(targetValues);
  const hasAnimatedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const steps = 60;
          const increments = targetValues.map((v) => v / steps);
          let frame = 0;
          setCounts(stats.map(() => 0));

          const interval = setInterval(() => {
            frame++;
            if (frame >= steps) {
              clearInterval(interval);
              setCounts([...targetValues]);
              return;
            }
            setCounts((prev) =>
              prev.map((c, i) => Math.min(c + increments[i], targetValues[i]))
            );
          }, 2000 / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
