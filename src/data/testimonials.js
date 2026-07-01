export const testimonialsByLanguage = {
  fr: [
    {
      quote: 'Service impeccable à l’aéroport Mohammed V. Véhicule propre et conforme. Je recommande !',
      name: 'Karim',
      rating: 5,
    },
    {
      quote: 'Nous avons loué un SUV pour nos déplacements à Casablanca et en week-end. Super voiture, aucun problème.',
      name: 'Sarah',
      rating: 4.5,
    },
    {
      quote: 'Agence très professionnelle au centre de Casablanca. Transparence totale sur les prix et la caution. Merci à l’équipe !',
      name: 'Pierre',
      rating: 5,
    },
    {
      quote: 'Réservation simple, livraison rapide et voiture parfaitement prête à l’arrivée. Très satisfait du service.',
      name: 'Mina',
      rating: 5,
    },
    {
      quote: 'Le personnel était à l’écoute et la voiture était propre, fiable et confortable pour toute la journée.',
      name: 'Amine',
      rating: 4.5,
    },
    {
      quote: 'Excellent rapport qualité-prix pour un trajet en ville et pour les sorties en bord de mer.',
      name: 'Nadia',
      rating: 5,
    },
  ],
  en: [
    {
      quote: 'Excellent service at Mohammed V airport. Clean vehicle and everything went smoothly. I highly recommend it!',
      name: 'Karim',
      rating: 5,
    },
    {
      quote: 'We rented an SUV for our trips around Casablanca and for a weekend escape. Great car, no issues at all.',
      name: 'Sarah',
      rating: 4.5,
    },
    {
      quote: 'A very professional agency in the heart of Casablanca. Clear pricing and deposit terms. Thank you to the team!',
      name: 'Pierre',
      rating: 5,
    },
    {
      quote: 'The booking process was easy, the delivery was fast, and the car was ready exactly as expected.',
      name: 'Mina',
      rating: 5,
    },
    {
      quote: 'The team was attentive and the car was clean, reliable, and comfortable for the whole day.',
      name: 'Amine',
      rating: 4.5,
    },
    {
      quote: 'Great value for money for city travel and coastal trips alike.',
      name: 'Nadia',
      rating: 5,
    },
  ],
  ar: [
    {
      quote: 'خدمة ممتازة في مطار محمد الخامس. السيارة نظيفة ومطابقة للتوقعات. أنصح بها بشدة!',
      name: 'كريم',
      rating: 5,
    },
    {
      quote: 'استأجرنا SUV للانتقالات في الدار البيضاء وفي عطلة نهاية الأسبوع. سيارة ممتازة ولم تكن هناك أية مشاكل.',
      name: 'سارة',
      rating: 4.5,
    },
    {
      quote: 'وكالة احترافية جدًا في مركز الدار البيضاء. شفافية تامة في الأسعار والكفالة. شكراً للفريق!',
      name: 'بيير',
      rating: 5,
    },
    {
      quote: 'كانت عملية الحجز سهلة والتوصيل سريعًا والسيارة جاهزة تمامًا كما هو متوقع.',
      name: 'مينا',
      rating: 5,
    },
    {
      quote: 'كان الفريق متعاونًا والسيارة نظيفة وموثوقة ومريحة طوال اليوم.',
      name: 'أمين',
      rating: 4.5,
    },
    {
      quote: 'قيمة ممتازة مقابل المال لرحلات المدينة والرحلات الساحلية على حد سواء.',
      name: 'نادية',
      rating: 5,
    },
  ],
};

export function getTestimonials(lang = 'fr') {
  return testimonialsByLanguage[lang] ?? testimonialsByLanguage.fr;
}
