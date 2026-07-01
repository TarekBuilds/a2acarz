import BookingForm from './BookingForm';
import { useTranslation } from '../context/LanguageContext';
import useFadeIn from '../hooks/useFadeIn';
import styles from '../App.module.css';

export default function Hero() {
  const t = useTranslation();
  const { ref, visible } = useFadeIn();

  return (
    <section id="accueil" className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <div ref={ref} className={`${styles.heroText} ${visible ? styles.visible : ''}`}>
          <span className={styles.heroBadge}>{t.heroBadge}</span>
          <h1>
            {t.heroTitleBefore} <strong>{t.heroTitleAccent}</strong> {t.heroTitleAfter}
          </h1>
          <p>{t.heroSubtitle}</p>
          <div className={styles.heroActions}>
            <a href="#vehicules" className={styles.primaryButton}>
              {t.heroFleetButton}
            </a>
            <a href="#agences" className={styles.ghostButton}>
              {t.heroAgenciesButton}
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span>✓ Unlimited mileage</span>
            <span>✓ 24/7 roadside support</span>
            <span>✓ Airport pickup</span>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
