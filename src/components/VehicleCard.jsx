import { MessageCircle } from 'lucide-react';
import styles from '../App.module.css';

export default function VehicleCard({ car, labels, dayLabel, bookLabel, onBook }) {
  const specRows = [
    ['gearbox', car.specs.gearbox],
    ['fuel', car.specs.fuel],
    ['ac', car.specs.ac],
    ['seats', car.specs.seats],
    ['luggage', car.specs.luggage],
    ['doors', car.specs.doors],
  ];

  return (
    <article className={styles.vehicleCard}>
      <div className={styles.vehicleImageShell}>
        <img src={car.image} alt={car.name} loading="lazy" />
        <span className={`${styles.vehicleTag} ${styles[`vehicleTag${car.tagTone}`]}`}>{car.tag}</span>
      </div>
      <div className={styles.vehicleBody}>
        <div className={styles.vehicleTitleBlock}>
          <h3>{car.name}</h3>
          <p>
            {car.price} DH <span>{dayLabel}</span>
          </p>
          <div className={styles.priceBadge}>Best value • Flexible pickup</div>
        </div>
        <dl className={styles.specList}>
          {specRows.map(([key, value]) => (
            <div key={key}>
              <dt>{labels[key]}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <button type="button" className={styles.whatsappButton} onClick={() => onBook(car)}>
          <MessageCircle size={19} />
          {bookLabel}
        </button>
      </div>
    </article>
  );
}
