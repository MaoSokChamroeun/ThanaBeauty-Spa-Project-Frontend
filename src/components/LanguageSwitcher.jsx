import React from 'react';
import { useLang } from '../components/context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, changeLanguage } = useLang();

  const languages = [
    { code: 'kh', label: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg' },
    { code: 'en', label: 'https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_hybrid&w=740&q=80' },
    { code: 'ch', label: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/960px-Flag_of_the_People%27s_Republic_of_China.svg.png?20250417144606' }
  ];

  return (
    <div className="flex items-center bg-[#386324] p-1 h-8 w-auto rounded-full border border-gray-700 shadow-inner">
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
          <img src={l.label} alt="" className='lg:w-8 xl:w-7   w-10 sm:w-5 md:w-5' />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;