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
        "cupping-massage": "Cupping & Massage",
        "spa-package" : "Spa Package",
        "steam" : "Steam"
      },
       "media_category" : {
        "video" : "Video",
        "gallery" : "Gallery" 
      },
      "footer_title" : "Address: No. 43, Street 208 (Corner of St. 63/Trasak Paem), Sangkat Boeng Reang, Khan Daun Penh, Phnom Penh.",
    "welcome_title" : "Welcome to Thana Beauty Spa!",
    "welcome_desc" : " We are a professional Khmer massage shop dedicated to providing customers with a comfortable and relaxing environment and professional massage services. Our shop is located in the city center, with convenient transportation and beautiful environment. It is an ideal place for you to relax and open 7/24 hours a day.",
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
      "our_shop" : "Our Shop Spa",
      slug_post_desc : {
      "moon-light-spa-massage-promotion" : "Experience the ultimate skin glow with our Jasmine Lotion Skin Treatment. Rich in antioxidants and natural oils, this session focuses on skin elasticity and brightness. The soothing aroma of Jasmine reduces anxiety, while the lotion absorbs quickly to repair dry skin, leaving it silky smooth and radiant.",
      "aroma-therapy-massage-benefits" : "Aromatherapy Massage is a holistic healing treatment that uses natural plant extracts to promote health and well-being. By combining the power of touch with the therapeutic properties of essential oils, this massage helps",
      "facial-treatment-glowing-skin" : "Unlock your skin's natural radiance with our premium Facial Treatment. Designed for all skin types, this session focuses on deep cleansing, exfoliation, and hydration. We use high-quality serums and specialized massage techniques to stimulate collagen production and remove impurities. The result is a refreshed, plump, and glowing complexion that lasts for days.",
      "hot-stone-massage-detox" : "Experience the ultimate healing power of our Hot Stone Detox Massage. Smooth, heated volcanic stones are placed on key energy points of your body to melt away deep muscle tension and improve blood flow. Combined with professional massage strokes, the heat helps open your pores and release built-in toxins. This therapy is perfect for rebalancing your energy, reducing chronic pain, and deeply detoxifying your entire system.",
      "foot-reflexology-health" : "Applying pressure to key points on the feet helps balance internal organs and relieves fatigue.",
      "head-shoulder-back-massage-therapy" : "Using smooth, heated natural stones placed on key body points to melt away muscle tension and improve blood circulation." ,
      "traditional-khmer-herbal-steam-detox":"Experience the healing power of authentic Khmer herbs in our traditional steam treatment. It helps detoxify your body, improve blood circulation, relieve stress, and leave your skin with a healthy, natural glow."
      },
      slug_post_title: {
      "moon-light-spa-massage-promotion-title" : "Message Lotion Skin Jasmine",
      "aroma-therapy-massage-benefits-title" : "Aromatherapy Massage Benefits",
      "facial-treatment-glowing-skin-title" : "Facial Treatment Glowing Skin",
      "hot-stone-massage-detox-title" : "Hot Stone Massage Detox",
      "foot-reflexology-health-title" : "Foot Reflexology for Better Health",
      "head-shoulder-back-massage-therapy-title" : "Relaxing Hot Stone Massage Therapy",
      "traditional-khmer-herbal-steam-detox-title" : "Traditional Khmer Herbal Steam Detox"
      }

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
            "spa-package" : "កញ្ចប់សេវាកម្មស្ប៉ា",
            "steam" : "ស្ពង់"
      },
      "media_category" : {
  "video" : "វីដេអូ",
  "gallery" : "វិចិត្រសាល" 
},
"footer_title" : "ទីតាំង តាណាស្ប៉ា ដែលមាន សាស័យដ្ឋាន ផ្ទះលេខ ៤៣ ផ្លូវ២០៨ កែង៦៣(ត្រសក់ផ្អែម) សង្កាត់បឹងរាំង ខណ្ខ័ដូនពេញ រាជធានី ភ្នំពេញ",
    "welcome_title": "សូមស្វាគមន៍មកកាន់ តាណា ស្ប៉ា!",
    "welcome_desc": " យើងគឺជាហាងម៉ាស្សាខ្មែរលំដាប់អាជីព ដែលផ្ដោតសំខាន់លើការផ្ដល់ជូនអតិថិជននូវបរិយាកាសប្រកបដោយផាសុកភាព ភាពលំហែកាយ និងសេវាកម្មម៉ាស្សាប្រកបដោយវិជ្ជាជីវៈខ្ពស់។យើងមានទីតាំងស្ថិតនៅចំកណ្ដាលក្រុង ដែលមានភាពងាយស្រួលក្នុងការធ្វើដំណើរ និងមានបរិយាកាសស្រស់ស្អាត។ វាគឺជាទីកន្លែងដ៏ស័ក្តិសមបំផុតសម្រាប់លោកអ្នកក្នុងការសម្រាកលំហែកាយ ហើយយើងបើកបម្រើជូន ២៤ ម៉ោង លើ ២៤ ម៉ោង ជារៀងរាល់ថ្ងៃ។",
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
      "our_shop" : "ហាងស្ប៉ារបស់យើង",
      slug_post_desc : {
      "moon-light-spa-massage-promotion" : "ទទួលយកបទពិសោធន៍ស្បែកភ្លឺរលោងចែងចាំងជាមួយការម៉ាស្សាឡូសិនផ្កាម្លិះ។ សំបូរទៅដោយសារធាតុប្រឆាំងអុកស៊ីតកម្ម និងប្រេងធម្មជាតិ សេវាកម្មនេះផ្ដោតលើភាពយឺតនៃស្បែក និងភាពភ្លឺថ្លា។ ក្លិនផ្កាម្លិះជួយកាត់បន្ថយការព្រួយបារម្ភ ចំណែកឡូសិនជ្រាបចូលទៅជួសជុលស្បែកស្ងួតបានយ៉ាងរហ័ស ធ្វើឱ្យស្បែកទន់រលោងដូចសូត្រ និងមានមន្តស្នេហ៍។",
      "aroma-therapy-massage-benefits" : "ការម៉ាស្សាបែប Aromatherapy គឺជាការព្យាបាលបែបធម្មជាតិដែលប្រើប្រាស់ប្រេងចម្រាញ់ពីរុក្ខជាតិ ដើម្បីលើកកម្ពស់សុខភាព និងតុល្យភាពរាងកាយ។ តាមរយៈការរួមបញ្ចូលគ្នារវាងបច្ចេកទេសម៉ាស្សា និងគុណសម្បត្តិនៃប្រេងក្រអូប វាជួយដល់ការកាត់បន្ថយស្ត្រេស និងធ្វើឱ្យអារម្មណ៍ស្រស់ថ្លាឡើងវិញ។",
      "facial-treatment-glowing-skin" : "ផ្ដល់ភាពភ្លឺថ្លាពីធម្មជាតិដល់ស្បែកមុខរបស់អ្នក ជាមួយសេវាកម្មព្យាបាលផ្ទៃមុខកម្រិតខ្ពស់របស់យើង។ បង្កើតឡើងសម្រាប់គ្រប់ប្រភេទស្បែក សេវាកម្មនេះផ្ដោតលើការលាងសម្អាតយ៉ាងជ្រៅ ការជម្រុះកោសិកាចាស់ៗ និងការផ្ដល់សំណើម។ យើងប្រើប្រាស់សេរ៉ូមគុណភាពខ្ពស់ និងបច្ចេកទេសម៉ាស្សាពិសេស ដើម្បីជម្រុញការផលិតកូឡាជែន និងជម្រះភាពកខ្វក់ ធ្វើឱ្យផ្ទៃមុខតឹងណែន និងភ្លឺរលោង។",
      "hot-stone-massage-detox" : "ទទួលយកបទពិសោធន៍នៃការព្យាបាលដ៏អស្ចារ្យជាមួយការម៉ាស្សាដោយថ្មក្ដៅបន្សាបជាតិពុល។ ថ្មភ្នំភ្លើងដែលរលោង និងមានកម្ដៅល្មម ត្រូវបានដាក់នៅលើចំណុចថាមពលសំខាន់ៗនៃរាងកាយ ដើម្បីរំលាយការតានតឹងសាច់ដុំ និងធ្វើឱ្យឈាមរត់បានល្អប្រសើរ។ កម្ដៅថ្មជួយបើករន្ធញើស និងបញ្ចេញជាតិពុលដែលកកកុញក្នុងខ្លួន ជួយឱ្យរាងកាយមានតុល្យភាព និងកាត់បន្ថយការឈឺចាប់រ៉ាំរ៉ៃ។",
      "foot-reflexology-health" : "ការប្រើសម្ពាធលើចំណុចសំខាន់ៗនៃប្រអប់ជើង ជួយឱ្យសរីរាង្គក្នុងរាងកាយមានតុល្យភាព និងជួយកាត់បន្ថយភាពនឿយហត់",
      "head-shoulder-back-massage-therapy" : "ការប្រើប្រាស់ថ្មក្តៅពីធម្មជាតិដាក់លើចំណុចសំខាន់ៗនៃរាងកាយ ដើម្បីជួយឱ្យសាច់ដុំដែលតឹងណែនប្រែជាធូរស្រាល និងបង្កើនចរន្តឈាម។",
      "traditional-khmer-herbal-steam-detox" : "ទទួលយកបទពិសោធន៍នៃការស្ពង់បែបបុរាណ ដោយប្រើប្រាស់គ្រឿងផ្សំឱសថធម្មជាតិពិតៗ ដើម្បីជួយបន្សុតជាតិពុលពីរាងកាយ សម្រួលចរន្តឈាម បំបាត់ភាពតានតឹង និងធ្វើឱ្យស្បែកមានសុខភាពល្អភ្លឺថ្លាចេញពីខាងក្នុង។"
      },
      slug_post_title : {
      "moon-light-spa-massage-promotion-title" : "សេវាកម្មម៉ាស្សាឡូសិនផ្កាម្លិះ",
      "aroma-therapy-massage-benefits-title" : "អត្ថប្រយោជន៍នៃការម៉ាស្សាបែបក្លិនក្រអូប",
      "facial-treatment-glowing-skin-title" : "សេវាកម្មថែរក្សាផ្ទៃមុខឱ្យភ្លឺរលោង",
      "hot-stone-massage-detox-title" : "សេវាកម្មម៉ាស្សាដោយថ្មក្ដៅបន្សាបជាតិពុល",
      "foot-reflexology-health-title" : "ការម៉ាស្សាប្រអប់ជើង ដើម្បីសុខភាពកាន់តែប្រសើរ",
      "head-shoulder-back-massage-therapy-title" : "ការម៉ាស្សាដោយប្រើថ្មក្តៅ ដើម្បីបន្ធូរសាច់ដុំ",
      "traditional-khmer-herbal-steam-detox-title" : "ស្ពង់ឱសថបុរាណខ្មែរ ដើម្បីបន្សុតជាតិពុល និងថែរក្សាសុខភាព"
      }
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
        "cupping-massage": "拔罐与按摩",
        "spa-package" : "水疗套餐",
        "steam" : "蒸汽"
      },
     
      "media_category" : {
      "video" : "视频",
      "gallery" : "图册" 
    },
    "footer_title" : "地址：柬埔寨金边市，隆边区，万良分区，208号路与63号路（特萨克拜路）交汇处，门牌43号。",

      "welcome_title": "欢迎来到 Thana Beauty Spa！",
      "welcome_desc": "我们是一家专业的高棉按摩店 我们致力于为客户提供舒适放松的环境和专业的按摩服务。我们的店位于市中心，交通便利，环境优美。这里是您放松身心的理想场所，我们全天候 24 小时营业。",
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
      "our_shop" : "我们的水疗中心",

      slug_post_desc : {
      "moon-light-spa-massage-promotion" : "通过我们的茉莉乳液亲肤护理，体验极致的肌肤光泽。此疗法富含抗氧化剂和天然植物油，专注于提升皮肤弹性和亮度。茉莉的清香能有效缓解焦虑，而乳液能迅速吸收并修复干燥肌肤，让您的全身肌肤如丝般柔滑、焕发光彩。",
      "aroma-therapy-massage-benefits" : "香薰按摩是一种利用天然植物萃取精华来促进健康和身心愉悦的全方位疗法。通过触碰的力量与精油的治疗特性相结合，这种按摩有助于缓解压力、放松神经系统，并让您的身心重新达到平衡状态。",
      "facial-treatment-glowing-skin" : "为您的面部肌肤带来自然的光泽，体验我们高端的面部护理服务。此服务适合所有肤质，专注于深层清洁、去角质和补水。我们使用高品质的精华和专业的按摩技巧，刺激胶原蛋白的生成，去除杂质。最终效果是焕发活力、饱满光滑的肌肤，持久数天。",
      "hot-stone-massage-detox" : "体验我们热石排毒按摩的终极疗愈力量。光滑、加热的火山石被放置在您身体的关键能量点上，以融化深层肌肉紧张并改善血液循环。结合专业的按摩手法，热量有助于打开毛孔并释放体内的毒素。这种疗法非常适合重新平衡您的能量，减轻慢性疼痛，并深层排毒。",
      "foot-reflexology-health" : "通过按压足部的关键穴位，有助于平衡内脏功能并缓解疲劳",
      "head-shoulder-back-massage-therapy" : "将光滑的热天然石头放置在身体关键部位，帮助缓解肌肉紧张并促进血液循环。",
      "traditional-khmer-herbal-steam-detox" : "体验正宗高棉草药蒸汽疗法。该疗法通过天然草药成分帮助身体排毒、促进血液循环、缓解压力，并由内而外焕发肌肤健康光泽。"
      },
      slug_post_title : {
      "moon-light-spa-massage-promotion-title" : "茉莉亮肤乳液按摩",
      "aroma-therapy-massage-benefits-title" : "香薰按摩疗法及其益处",
      "facial-treatment-glowing-skin-title" : "面部焕采亮肤护理",
      "hot-stone-massage-detox-title" : "热石排毒按摩护理",
       "foot-reflexology-health-title" : "足底按摩：助您拥抱更健康的身体",
       "head-shoulder-back-massage-therapy-title" : "热石疗法：深层放松肌肉",
       "traditional-khmer-herbal-steam-detox-title" : "高棉传统草药蒸汽：排毒与养生疗法"
      }
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