import React from 'react';
import { useLang } from '../components/context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useLang();

  const languages = [
    { code: 'kh', label: 'KH' },
    { code: 'en', label: 'EN' },
    { code: 'ch', label: 'CH' }
  ];

  return (
    <div className="flex items-center bg-[#0a192f] p-1 h-8 w-auto rounded-full border border-gray-700 shadow-inner">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => changeLanguage(l.code)}
          className={`px-4 py-1 rounded-full text-xs cursor-pointer font-bold transition-all duration-300 ${
            lang === l.code
              ? 'bg-white text-gray-800 shadow-lg scale-105'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;