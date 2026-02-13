'use client';

import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`py-24 bg-background text-foreground ${className} transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
