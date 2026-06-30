import { useTranslation } from '../context/LanguageContext';
import styles from '../App.module.css';

export default function CtaSection() {
  const t = useTranslation();

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaDescription}</p>
        <a href="#hero-booking" className={styles.ctaButton}>
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}
