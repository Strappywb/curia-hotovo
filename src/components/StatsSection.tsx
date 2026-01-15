import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
  duration?: number;
}

const StatItem = ({ endValue, suffix, label, duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * endValue));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center py-8 md:py-12">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
        {count}{suffix}
      </div>
      <p className="font-body font-semibold text-sm md:text-base lg:text-lg text-white/80 mt-2 md:mt-3 max-w-xs mx-auto">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-background py-4 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-black rounded-3xl md:rounded-[2.5rem] py-12 md:py-16 lg:py-20 px-6 ring-4 ring-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <StatItem 
            endValue={150} 
            suffix="+" 
            label="Realizovaných projektů" 
          />
          <StatItem 
            endValue={450} 
            suffix="M+" 
            label="Kapitálový dopad realizací" 
          />
          <StatItem 
            endValue={85} 
            suffix="%" 
            label="Klientů na bázi partnerství" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
