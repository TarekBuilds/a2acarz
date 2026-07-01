import { useEffect, useState } from 'react';
import { useTranslation, useLanguage } from '../context/LanguageContext';
import { getTestimonials } from '../data/testimonials';
import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';
import styles from '../App.module.css';

export default function Reviews() {
  const t = useTranslation();
  const { lang } = useLanguage();
  const testimonials = getTestimonials(lang);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 3) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setStartIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3).concat(
    testimonials.slice(0, Math.max(0, 3 - (testimonials.length - startIndex)))
  );

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsGlowOne} />
      <div className={styles.reviewsGlowTwo} />
      <div className={styles.container}>
        <SectionHeader title={t.reviewsHeader} inverted />
        <div className={styles.reviewsGrid} aria-live="polite">
          {visibleTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.name}-${review.quote}-${index}`} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
