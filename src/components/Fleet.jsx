import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import SectionHeader from './SectionHeader';
import VehicleCard from './VehicleCard';
import styles from '../App.module.css';

export default function Fleet() {
  const t = useTranslation();

  const handleBook = () => {
    const form = document.getElementById('hero-booking');
    form?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#hero-booking`);
  };

  return (
    <section id="vehicules" className={styles.fleetSection}>
      <div className={styles.container}>
        <SectionHeader title={t.fleetHeader} description={t.fleetDescription} />
        <div className={styles.vehicleGrid}>
          {t.fleetCars.map((car, index) => (
            <VehicleCard
              key={`${car.name}-${index}`}
              car={car}
              labels={t.specLabels}
              dayLabel={t.specDay}
              bookLabel={t.btnBook}
              onBook={handleBook}
            />
          ))}
        </div>
        <a href="#vehicules" className={styles.fleetAllLink}>
          {t.fleetAll}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
