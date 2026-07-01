import { Star } from 'lucide-react';
import styles from '../App.module.css';

export default function TestimonialCard({ quote, name, rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1 <= Math.round(rating));

  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewStars} aria-label={`${rating} out of 5 stars`}>
        {stars.map((filled, index) => (
          <Star key={`${name}-${index}`} size={18} fill={filled ? 'currentColor' : 'none'} strokeWidth={filled ? 0 : 1.5} />
        ))}
      </div>
      <p>"{quote}"</p>
      <strong>{name}</strong>
    </article>
  );
}
