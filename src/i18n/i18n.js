// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Para cargar traducciones desde archivos
import LanguageDetector from 'i18next-browser-languagedetector'; // Para detectar el idioma del navegador

i18n
  // Carga traducciones de forma asíncrona
  .use(Backend)
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Pasa la instancia de i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    fallbackLng: 'en', // Idioma de respaldo si no se encuentra una traducción
    debug: true, // Habilita el modo debug para ver mensajes útiles en la consola
    interpolation: {
      escapeValue: false, // React ya previene XSS
    },
    // Opciones para i18next-browser-languagedetector
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    // Opciones para i18next-http-backend
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta donde se encuentran tus archivos de traducción
    },
  });

export default i18n;