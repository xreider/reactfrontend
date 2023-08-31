import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(HttpApi)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  // .use(
  //   resourcesToBackend(
  //     // @ts-ignore
  //     (language, namespace) =>
  //       import(`../../../../public/${language}/${namespace}.json`)
  //   )
  // )

  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // supportedLngs: ['ru', 'en'],
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // load: 'languageOnly',
    // partialBundledLanguages: true,
    // ns: [],
    detection: {
      // convertDetectedLanguage: (lng) => lng.replace('-', '_'),
      order: [
        'cookie',
        'localStorage',
        'querystring',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],

      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
    },
  });

export default i18n;
