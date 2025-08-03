'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const router = useRouter();
  const [lang, setLang] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const currentLang = router.locale || 'en';
    setLang(currentLang);
  }, [router.locale]);

  useEffect(() => {
    if (lang) {
      import(`../public/locales/${lang}/common.json`)
        .then((mod) => {
          setTranslations(mod.default || mod);
        })
        .catch((err) => {
          console.error(`Error loading translations for ${lang}:`, err);
          setTranslations({});
        });
    }
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    router.push(router.pathname, router.asPath, { locale: newLang });
  };

  return (
    <LangContext.Provider value={{ lang, translations, toggleLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

// 'use client';
// import { useRouter } from 'next/router';
// import { createContext, useContext, useEffect, useState } from 'react';

// const LangContext = createContext();

// export const LangProvider = ({ children }) => {
//   const {locale} = useRouter() 
//   const [lang, setLang] = useState('en');
//   const [translations, setTranslations] = useState({});

//   useEffect(() => {
//     const storedLang = localStorage.getItem(locale) || 'en';
//     setLang(storedLang);
//   }, []);

//   useEffect(() => {
//     if (lang) {
//       import(`../public/locales/${lang}/common.json`)
//         .then((mod) => {
//           setTranslations(mod.default || mod);
//         })
//         .catch((err) => {
//           console.error(`Error loading translations for ${lang}:`, err);
//           setTranslations({});
//         });
//     }
//   }, [lang]);

  

//   const toggleLang = () => {
//     const newLang = lang === 'en' ? 'ar' : 'en';
//     setLang(newLang);
//     localStorage.setItem('lang', newLang);
//   };

//   return (
//     <LangContext.Provider value={{ lang, toggleLang, translations }}>
//       <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
//         {children}
//       </div>
//     </LangContext.Provider>
//   );
// };

// export const useLang = () => useContext(LangContext);
