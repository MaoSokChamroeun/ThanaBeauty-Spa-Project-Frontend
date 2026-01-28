import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "experience_msg": "Experience ultimate tranquility with our specialized",
      "rejuvenate_msg": "Designed to rejuvenate your body and mind.",
      "method": "Method",
      "no_methods": "No specific methods listed",
      "book_now": "Book Now",
      "minutes": "Minutes",
      "loading": "Loading treatments...",
      "no_services": "No services found for this category.",
      "back": "Back"
    }
  },
  kh: {
    translation: {
      "experience_msg": "ទទួលយកបទពិសោធន៍នៃភាពស្ងប់ស្ងាត់ពិតប្រាកដជាមួយ",
      "rejuvenate_msg": "រៀបចំឡើងដើម្បីផ្ដល់ភាពស្រស់ថ្លាដល់រាងកាយ និងផ្លូវចិត្តរបស់អ្នក។",
      "method": "វិធីសាស្ត្រព្យាបាល",
      "no_methods": "មិនមានព័ត៌មានលម្អិត",
      "book_now": "កក់ឥឡូវនេះ",
      "minutes": "នាទី",
      "loading": "កំពុងទាញយកទិន្នន័យ...",
      "no_services": "មិនមានសេវាកម្មក្នុងប្រភេទនេះឡើយ។",
      "back": "ត្រឡប់ក្រោយ"
    }
  },
  ch: {
    translation: {
      "experience_msg": "通过我们专业的服务体验终极的宁静",
      "rejuvenate_msg": "旨在让您的身心焕发活力。",
      "method": "治疗方法",
      "no_methods": "未列出具体方法",
      "book_now": "现在预订",
      "minutes": "分钟",
      "loading": "正在加载...",
      "no_services": "该类别下未找到服务。",
      "back": "返回"
    }
  }
};

/* translate.js */
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lng') || 'en', // កុំដាក់ Fix ភាសានៅទីនេះ
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;