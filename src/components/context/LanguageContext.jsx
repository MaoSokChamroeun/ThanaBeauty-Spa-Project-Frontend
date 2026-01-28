
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next'; // Import ឱ្យចំ file i18n config របស់អ្នក

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lng') || 'en');
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);