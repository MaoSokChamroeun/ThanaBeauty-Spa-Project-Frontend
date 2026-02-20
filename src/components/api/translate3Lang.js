import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "spa-menu": "Spa Menu",
      "location": "Location",
      "media": "Media",
      "contact": "Contact",
      "categories": {
        "massage-lotion-skin-jasmine": "Massage Lotion Skin Jasmine",
        "foot-massage": "Foot Massage",
        "scrub-massage": "Scrub Massage",
        "4-hand-body-massage": "4 Hand Body Massage",
        "foot-scrub-smoothen-massage": "Foot Scrub Smoothen Massage",
        "full-body-massage": "Full Body Massage",
        "4-hand-oil-massage": "4 Hand Oil Massage",
        "oil-massage": "Oil Massage",
        "compress-massage": "Compress Massage",
        "coconut-oil-massage": "Coconut Oil Massage",
        "scalping-massage": "Scalping & Massage",
        "hot-scented-candles": "Hot Scented Candles",
        "cupping-massage": "Cupping & Massage"
      },
       "media_category" : {
        "video" : "Video",
        "gallery" : "Gallery" 
      },
    "welcome_title" : "Welcome To Thana Beauty Spa",
    "welcome_desc" : "The Largest Luxury Spa in Thana Beauty Spa",
    "package_title" : "Recommended Spa Packages",
    "package_desc" : "Indulge yourself or with your loved one by our unique spa packages available only at the Mudita Spa",
      "experience_msg": "Experience ultimate tranquility with our specialized",
      "rejuvenate_msg": "Designed to rejuvenate your body and mind.",
      "method": "Method",
      "no_methods": "No specific methods listed",
      "book_now": "Book Now",
      "minutes": "Minutes",
      "loading": "Loading treatments...",
      "no_services": "No services found for this category.",
      "back": "Back",

      //treatment package

      "treatment_package" : "OTHER TREATMENTS/PACKAGES",
      "our_shop" : "Our Shop Spa"



    

    },
    
    
  },
  kh: {
    translation: {
        "home": "ទំព័រដើម",
        "spa-menu": "បញ្ជីសេវាកម្មស្ប៉ា",
        "location": "ទីតាំង",
        "media": "ប្រព័ន្ធផ្សព្វផ្សាយ",
        "contact": "ទំនាក់ទំនង",
          "categories": {
            "massage-lotion-skin-jasmine": "ម៉ាស្សាឡូស្យុងផ្កាម្លិះ",
            "foot-massage": "ម៉ាស្សាជើង",
            "scrub-massage": "ម៉ាស្សាខាត់ស្បែក",
            "4-hand-body-massage": "ម៉ាស្សាខ្លួនដោយគ្រូពីរនាក់",
            "foot-scrub-smoothen-massage": "ម៉ាស្សាខាត់ជើងឲ្យរលោង",
            "full-body-massage": "ម៉ាស្សាពេញរាងកាយ",
            "4-hand-oil-massage": "ម៉ាស្សាប្រេងដោយគ្រូពីរនាក់",
            "oil-massage": "ម៉ាស្សាប្រេង",
            "compress-massage": "ម៉ាស្សាស្អំ",
            "coconut-oil-massage": "ម៉ាស្សាប្រេងដូង",
            "scalping-massage": "ម៉ាស្សាក្បាល",
            "hot-scented-candles": "ម៉ាស្សាទៀនក្រអូប",
            "cupping-massage": "ម៉ាស្សាជប់ខ្យល់",
      },
      "media_category" : {
  "video" : "វីដេអូ",
  "gallery" : "វិចិត្រសាល" 
},
    "welcome_title": "សូមស្វាគមន៍មកកាន់ Thana Beauty Spa",
    "welcome_desc": "ស្ប៉ាដ៏ប្រណិត និងធំជាងគេបំផុតនៅ Thana Beauty Spa",
    "package_title" : "កញ្ចប់សេវាកម្មស្ប៉ាដែលគួរជ្រើសរើស",
"package_desc" : "ផ្តល់រង្វាន់ដល់ខ្លួនអ្នក ឬមនុស្សជាទីស្រលាញ់របស់អ្នក ជាមួយកញ្ចប់ស្ប៉ាដ៏ពិសេសដែលមានតែនៅ Mudita Spa ប៉ុណ្ណោះ",
"experience_msg": "ទទួលយកបទពិសោធន៍នៃភាពស្ងប់ស្ងាត់ពិតប្រាកដជាមួយ",
      "rejuvenate_msg": "រៀបចំឡើងដើម្បីផ្ដល់ភាពស្រស់ថ្លាដល់រាងកាយ និងផ្លូវចិត្តរបស់អ្នក។",
      "method": "វិធីសាស្ត្រព្យាបាល",
      "no_methods": "មិនមានព័ត៌មានលម្អិត",
      "book_now": "កក់ឥឡូវនេះ",
      "minutes": "នាទី",
      "loading": "កំពុងទាញយកទិន្នន័យ...",
      "no_services": "មិនមានសេវាកម្មក្នុងប្រភេទនេះឡើយ។",
      "back": "ត្រឡប់ក្រោយ",

      "treatment_package" : "សេវាកម្មព្យាបាល និងកញ្ចប់សេវាកម្មផ្សេងៗ",
      "our_shop" : "ហាងស្ប៉ារបស់យើង"
    }
  },
  ch: {
    translation: {
  "home": "首页",
  "spa-menu": "水疗菜单",
  "location": "地点",
  "media": "媒体",
  "contact": "联系我们",
  "categories": {
        "massage-lotion-skin-jasmine": "茉莉护肤乳液按摩",
        "foot-massage": "足底按摩",
        "scrub-massage": "磨砂按摩",
        "4-hand-body-massage": "四手全身按摩",
        "foot-scrub-smoothen-massage": "足部磨砂光滑按摩",
        "full-body-massage": "全身按摩",
        "4-hand-oil-massage": "四手精油按摩",
        "oil-massage": "精油按摩",
        "compress-massage": "热敷按摩",
        "coconut-oil-massage": "椰子油按摩",
        "scalping-massage": "头部按摩",
        "hot-scented-candles": "香薰蜡烛按摩",
        "cupping-massage": "拔罐与按摩"
      },
     

      "media_category" : {
  "video" : "视频",
  "gallery" : "图册" 
},
        "welcome_title": "欢迎来到 Thana Beauty Spa",
        "welcome_desc": "Thana Beauty Spa 最大的豪华水疗中心",
        "package_title" : "推荐水疗套餐",
"package_desc" : "无论是宠爱自己还是与爱人共度，Mudita Spa 独特的套餐都能为您带来独一无二的享受",
"experience_msg": "通过我们专业的服务体验终极的宁静",
      "rejuvenate_msg": "旨在让您的身心焕发活力。",
      "method": "治疗方法",
      "no_methods": "未列出具体方法",
      "book_now": "现在预订",
      "minutes": "分钟",
      "loading": "正在加载...",
      "no_services": "该类别下未找到服务。",
      "back": "返回",

      "treatment_package" : "其他护理/套餐",
      "our_shop" : "我们的水疗中心"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lng') || 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;