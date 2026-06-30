import { useState } from 'react';
import { CalendarDays, Car, MapPin, PlaneLanding } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import styles from '../App.module.css';

const cities = ['Agadir', 'Essaouira', 'Marrakech', 'Casablanca', 'Rabat', 'Fes', 'Tanger', 'Oujda', 'Ouarzazate'];
const airports = [
  'Aeroport Agadir Al Massira (AGA)',
  'Aeroport Essaouira Mogador (ESU)',
  'Aeroport Marrakech Menara (RAK)',
  'Aeroport Mohammed V de Casablanca (CMN)',
  'Aeroport Rabat-Sale (RBA)',
  'Aeroport Fes-Saiss (FEZ)',
  'Aeroport Tanger Ibn Battouta (TNG)',
  'Aeroport Oujda-Angads (OUD)',
  'Aeroport Ouarzazate (OZZ)',
];

function Field({ label, icon, children }) {
  return (
    <label className={styles.formField}>
      <span>{label}</span>
      <div className={styles.formControl}>
        {icon}
        {children}
      </div>
    </label>
  );
}

export default function BookingForm() {
  const t = useTranslation();
  const [form, setForm] = useState({
    departureCity: 'Agadir',
    pickupDate: '',
    returnDate: '',
    vehicleType: '',
    airportPickup: false,
    airport: airports[0],
    arrivalDate: '',
    arrivalTime: '',
    childSeat: false,
  });
  const [error, setError] = useState('');

  const vehicleTypes = t.vehicleOptions;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.departureCity || !form.pickupDate || !form.returnDate || !form.vehicleType) {
      setError(t.formValidation);
      return;
    }

    if (new Date(form.returnDate) < new Date(form.pickupDate)) {
      setError(t.formDateError);
      return;
    }

    const selectedVehicle = vehicleTypes.find((option) => option.value === form.vehicleType);
    const message = t.whatsappBookingTemplate
      .replace('{departureCity}', form.departureCity)
      .replace('{pickupDate}', form.pickupDate)
      .replace('{returnDate}', form.returnDate)
      .replace('{vehicleType}', selectedVehicle?.label || form.vehicleType)
      .replace('{airportPickup}', form.airportPickup ? t.yes : t.no)
      .replace('{airport}', form.airportPickup ? form.airport : '-')
      .replace('{arrivalDate}', form.airportPickup ? form.arrivalDate || '-' : '-')
      .replace('{arrivalTime}', form.airportPickup ? form.arrivalTime || '-' : '-')
      .replace('{childSeat}', form.childSeat ? t.yes : t.no);

    window.open(`https://wa.me/212657717277?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <aside id="hero-booking" className={styles.bookingCard}>
      <h2>{t.formTitle}</h2>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <Field label={t.formDepartureCity} icon={<MapPin size={18} />}>
          <select name="departureCity" value={form.departureCity} onChange={handleChange} required>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </Field>

        <div className={styles.dateFieldGroup}>
          <span className={styles.groupLabel}>{t.formDate}</span>
          <div className={styles.dateGrid}>
            <Field label={t.formFrom} icon={<CalendarDays size={17} />}>
              <input name="pickupDate" type="date" value={form.pickupDate} onChange={handleChange} required />
            </Field>
            <Field label={t.formTo} icon={<CalendarDays size={17} />}>
              <input name="returnDate" type="date" value={form.returnDate} onChange={handleChange} required />
            </Field>
          </div>
        </div>

        <div className={styles.checkboxStack}>
          <label className={styles.checkLine}>
            <input name="airportPickup" type="checkbox" checked={form.airportPickup} onChange={handleChange} />
            <span>
              <strong>{t.formAirportPickup}</strong>
              <small>{t.formAirportPickupDescription}</small>
            </span>
          </label>
          <label className={styles.checkLine}>
            <input name="childSeat" type="checkbox" checked={form.childSeat} onChange={handleChange} />
            <span>
              <strong>{t.formChildSeat}</strong>
              <small>{t.formChildSeatDescription}</small>
            </span>
          </label>
        </div>

        {form.airportPickup && (
          <div className={styles.airportDetails}>
            <Field label={t.formAirportSelect} icon={<PlaneLanding size={18} />}>
              <select name="airport" value={form.airport} onChange={handleChange}>
                {airports.map((airport) => (
                  <option key={airport} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
            </Field>
            <div className={styles.dateGrid}>
              <Field label={t.formArrivalDate} icon={<CalendarDays size={17} />}>
                <input name="arrivalDate" type="date" value={form.arrivalDate} onChange={handleChange} />
              </Field>
              <Field label={t.formArrivalTime} icon={<CalendarDays size={17} />}>
                <input name="arrivalTime" type="time" value={form.arrivalTime} onChange={handleChange} />
              </Field>
            </div>
          </div>
        )}

        <Field label={t.formVehicleType} icon={<Car size={18} />}>
          <select name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
            <option value="" disabled>
              {t.formVehiclePlaceholder}
            </option>
            {vehicleTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </Field>

        {error && <p className={styles.formError}>{error}</p>}

        <button type="submit" className={styles.bookingSubmit}>
          {t.formSubmit}
        </button>
      </form>
    </aside>
  );
}
