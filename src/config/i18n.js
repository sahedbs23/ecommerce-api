// eslint-disable-next-line import/no-extraneous-dependencies
import i18n from 'i18n';
import path from 'path';

// Configure i18n
i18n.configure({
  locales: ['en', 'bn'], // Add the supported locales
  directory: path.join(__dirname, '../', '/locales'), // Directory containing your localization files
  defaultLocale: 'en', // Default locale
  cookie: 'lang' // Cookie name to store the selected language
});

export default i18n;
