
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'group p-6 rounded-xl bg-white subtle-shadow hover-lift opacity-0 transition-all duration-300',
        className
      )}
    >
      <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
