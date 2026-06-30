import { Star } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';
import styles from '../App.module.css';

export default function Reviews() {
  const t = useTranslation();

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsGlowOne} />
      <div className={styles.reviewsGlowTwo} />
      <div className={styles.container}>
        <SectionHeader title={t.reviewsHeader} inverted />
        <div className={styles.reviewsGrid}>
          {t.reviews.map((review) => (
            <article key={review.name} className={styles.reviewCard}>
              <div className={styles.reviewStars}>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p>"{review.quote}"</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
