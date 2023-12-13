// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          rooms: 'Rooms',
          bookings: 'My Bookings',
          signOut: 'Sign Out',
          login: 'Login',
        },
      },
      de: {
        translation: {
          home: 'Startseite',
          rooms: 'Zimmer',
          bookings: 'Meine Buchungen',
          signOut: 'Abmelden',
          login: 'Anmelden',
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          rooms: 'Habitaciones',
          bookings: 'Mis Reservas',
          signOut: 'Cerrar Sesión',
          login: 'Iniciar Sesión',
        },
      },
    },
  });

export default i18n;
