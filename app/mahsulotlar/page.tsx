'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Language Interface
type Language = 'uz' | 'ru';

interface Product {
  id: string;
  slug: string;
  model: string;
  manufacturer: string;
  category: 'lab' | 'steril' | 'surg' | 'all';
  name: { uz: string; ru: string };
  desc: { uz: string; ru: string };
  specs: {
    uz: { key: string; val: string }[];
    ru: { key: string; val: string }[];
  };
  badge: { uz: string; ru: string };
  imagePlaceholder: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'mindray-bc-20s',
    model: 'BC-20s',
    manufacturer: 'Mindray Co.Ltd (КНР)',
    category: 'lab',
    name: {
      uz: 'Mindray BC-20s Avtomatik gematologik analizator',
      ru: 'Автоматический гематологический анализатор Mindray BC-20s',
    },
    desc: {
      uz: 'Klinika va laboratoriyalar uchun qonning aniq tahlilini ta\'minlovchi yuqori texnologiyali avtomatik gematologiya uskunasi. Ixcham hajm va minimal reagent sarfi bilan ajralib turadi.',
      ru: 'Высокотехнологичное оборудование для точного анализа крови в клиниках и лабораториях. Отличается компактными размерами и минимальным расходом реагентов.',
    },
    specs: {
      uz: [
        { key: 'O\'tkazuvchanlik', val: 'Soatiga 40 ta test' },
        { key: 'Displey', val: '10.4-dyuymli sensor TFT ekran' },
        { key: 'Diferensial', val: '3-part diff (19 parametr + 3 gistogramma)' },
        { key: 'Xotira', val: '200,000 tagacha natijalar' },
      ],
      ru: [
        { key: 'Производительность', val: 'До 40 тестов в час' },
        { key: 'Дисплей', val: '10.4-дюймовый сенсорный TFT' },
        { key: 'Дифференциация', val: '3-part diff (19 параметров + 3 гистограммы)' },
        { key: 'Память', val: 'До 200 000 результатов' },
      ],
    },
    badge: { uz: 'Gematologiya', ru: 'Гематология' },
    imagePlaceholder: 'BC-20S',
  },
  {
    id: '2',
    slug: 'mindray-ba-88a',
    model: 'BA-88A',
    manufacturer: 'Mindray Co.Ltd (КНР)',
    category: 'lab',
    name: {
      uz: 'Mindray BA-88A Protochniy kyuvetali bioximik analizator',
      ru: 'Биохимический анализатор с проточной кюветой Mindray BA-88А',
    },
    desc: {
      uz: 'Klinik biokimyoviy tahlillarni yuqori aniqlikda o\'tkazish uchun yarim avtomatlashtirilgan laboratoriya analizatori. O\'rnatilgan termoprinter va sensor ekranga ega.',
      ru: 'Полуавтоматический биохимический анализатор для высокоточных клинических исследований. Оснащен встроенным термопринтером и сенсорным экраном.',
    },
    specs: {
      uz: [
        { key: 'Ekran', val: '7.0-dyuymli rangli TFT sensor ekran' },
        { key: 'To\'lqin uzunligi', val: '340 - 670 nm (8 ta filtr)' },
        { key: 'Kyuveta hajmi', val: '32 µL protochniy kyuveta' },
        { key: 'Interfeys', val: 'RS232, USB, Ethernet' },
      ],
      ru: [
        { key: 'Экран', val: '7.0-дюймовый цветной сенсорный TFT' },
        { key: 'Длина волны', val: '340 - 670 нм (8 фильтров)' },
        { key: 'Объем кюветы', val: '32 мкл проточная кювета' },
        { key: 'Интерфейсы', val: 'RS232, USB, Ethernet' },
      ],
    },
    badge: { uz: 'Bioximiya', ru: 'Биохимия' },
    imagePlaceholder: 'BA-88A',
  },
  {
    id: '3',
    slug: 'mindray-mr-96a',
    model: 'MR-96A',
    manufacturer: 'Mindray Co.Ltd (КНР)',
    category: 'lab',
    name: {
      uz: 'Mindray MR-96A Immunoferment analizator (IFA Rider)',
      ru: 'Иммуноферментный анализатор (ИФА ридер) Mindray MR-96А',
    },
    desc: {
      uz: '96 teshikli mikroplanshetlar bilan ishlovchi professional immunoferment tahlil apparati. Gormonlar, onkomarkerlar va infeksiyalarni aniqlash uchun mo\'ljallangan.',
      ru: 'Профессиональный планшетный ИФА-ридер для работы с 96-луночными микропланшетами. Предназначен для анализа гормонов, онкомаркеров и инфекций.',
    },
    specs: {
      uz: [
        { key: 'O\'lchov diapazoni', val: '0.000 - 4.000 Abs' },
        { key: 'Fotometrik tizim', val: '8-kanalli optik tolali tizim' },
        { key: 'Boshqaruv', val: '7-dyuymli rangli sensor ekran' },
        { key: 'Raza funksiyasi', val: 'O\'rnatilgan silkitgich (Shaker)' },
      ],
      ru: [
        { key: 'Диапазон измерений', val: '0.000 - 4.000 Abs' },
        { key: 'Оптическая система', val: '8-канальная волоконно-оптическая' },
        { key: 'Управление', val: '7-дюймовый цветной сенсорный экран' },
        { key: 'Шейкер', val: 'Встроенный многорежимный шейкер' },
      ],
    },
    badge: { uz: 'IFA Tahlil', ru: 'ИФА Анализ' },
    imagePlaceholder: 'MR-96A',
  },
  {
    id: '4',
    slug: 'yx-18ldj',
    model: 'YX-18LDJ',
    manufacturer: 'Jiangsu Huanyu Medical (КНР)',
    category: 'steril',
    name: {
      uz: 'YX-18LDJ Portativ yuqori bosimli bug\'li sterilizator (18L)',
      ru: 'Портативный паровой стерилизатор высокого давления YX-18LDJ',
    },
    desc: {
      uz: 'Tibbiy asboblarni bug\' va yuqori harorat ostida tezkor va xavfsiz sterilizatsiya qilish uchun portativ avtoklav. Zanglamaydigan sifatli po\'latdan ishlangan.',
      ru: 'Портативный автоклав для быстрой и надежной стерилизации медицинских инструментов паром под давлением. Изготовлен из высококачественной нержавеющей стали.',
    },
    specs: {
      uz: [
        { key: 'Hajmi', val: '18 Litr' },
        { key: 'Ishchi bosim', val: '0.14 - 0.16 MPa' },
        { key: 'Ishchi harorat', val: '126 °C' },
        { key: 'Material', val: 'Zanglamaydigan po\'lat (SUS304)' },
      ],
      ru: [
        { key: 'Объем', val: '18 Литров' },
        { key: 'Рабочее давление', val: '0.14 - 0.16 МПа' },
        { key: 'Рабочая температура', val: '126 °C' },
        { key: 'Материал', val: 'Нержавеющая сталь (SUS304)' },
      ],
    },
    badge: { uz: 'Sterilizatsiya', ru: 'Стерилизация' },
    imagePlaceholder: 'YX-18LDJ',
  },
  {
    id: '5',
    slug: 'yx-24ldj',
    model: 'YX-24LDJ',
    manufacturer: 'Jiangsu Huanyu Medical (КНР)',
    category: 'steril',
    name: {
      uz: 'YX-24LDJ Portativ yuqori bosimli bug\'li sterilizator (24L)',
      ru: 'Портативный паровой стерилизатор высокого давления YX-24LDJ',
    },
    desc: {
      uz: 'Kengaytirilgan 24 litr hajmli portativ sterilizator. Avtomatik bosim nazorati va xavfsizlik klapani bilan jihozlangan.',
      ru: 'Портативный стерилизатор увеличенного объема (24 л). Оснащен автоматическим контролем давления и предохранительным клапаном.',
    },
    specs: {
      uz: [
        { key: 'Hajmi', val: '24 Litr' },
        { key: 'Isitish turi', val: 'Elektr / Gaz imkoniyati' },
        { key: 'Xavfsizlik', val: 'Avtomatik bosim tushirish klapani' },
        { key: 'Kamera o\'lchami', val: '280 x 390 mm' },
      ],
      ru: [
        { key: 'Объем', val: '24 Литра' },
        { key: 'Тип нагрева', val: 'Электрический / Газовый' },
        { key: 'Безопасность', val: 'Клапан автоматического сброса давления' },
        { key: 'Размер камеры', val: '280 х 390 мм' },
      ],
    },
    badge: { uz: 'Sterilizatsiya', ru: 'Стерилизация' },
    imagePlaceholder: 'YX-24LDJ',
  },
  {
    id: '6',
    slug: 'ls-75hd',
    model: 'LS-75HD',
    manufacturer: 'Shanghai Boxun / Medical (КНР)',
    category: 'steril',
    name: {
      uz: 'LS-75HD Vertikal yuqori bosimli bug\'li sterilizator (75L)',
      ru: 'Вертикальный паровой стерилизатор высокого давления LS-75HD',
    },
    desc: {
      uz: 'Yirik shifoxona va laboratoriyalar uchun professional vertikal avtoklav. Mikroprotsessorli avtomatik boshqaruv va raqamli displeyga ega.',
      ru: 'Профессиональный вертикальный автоклав для клиник и крупных лабораторий. Оснащен микропроцессорным управлением и цифровым дисплеем.',
    },
    specs: {
      uz: [
        { key: 'Hajmi', val: '75 Litr' },
        { key: 'Boshqaruv', val: 'Mikroprotsessorli LCD displey' },
        { key: 'Harorat rejimi', val: '105 °C - 134 °C' },
        { key: 'Xavfsizlik tizimi', val: 'Avtomatik blokirovka va signalizatsiya' },
      ],
      ru: [
        { key: 'Объем', val: '75 Литров' },
        { key: 'Управление', val: 'Микропроцессорный ЖК-дисплей' },
        { key: 'Режим температур', val: '105 °C - 134 °C' },
        { key: 'Защита', val: 'Автоматическая блокировка и сигнализация' },
      ],
    },
    badge: { uz: 'Statsionar Sterilizator', ru: 'Стационарный Автоклав' },
    imagePlaceholder: 'LS-75HD',
  },
  {
    id: '7',
    slug: 'tdz4-ws',
    model: 'TDZ4-WS',
    manufacturer: 'Lu Xiangyi Centrifuge (КНР)',
    category: 'lab',
    name: {
      uz: 'TDZ4-WS Stol usti tibbiy sentrifugasi',
      ru: 'Настольная медицинская центрифуга TDZ4-WS',
    },
    desc: {
      uz: 'Qon plazmasi, zardob va boshqa suyuqliklarni sifatli ajratish uchun mo\'ljallangan shovqinsiz va tebranishsiz ishlovchi stol usti sentrifugasi.',
      ru: 'Бесшумная настольная центрифуга для качественного разделения плазмы крови, сыворотки и других биологических жидкостей.',
    },
    specs: {
      uz: [
        { key: 'Max Tezlik', val: '4000 aylanma/min (RPM)' },
        { key: 'Rotor sig\'imi', val: '12 x 15ml / 24 x 10ml' },
        { key: 'Boshqaruv', val: 'Mikroprotsessorli raqamli taymer va spidometr' },
        { key: 'Shovqin darajasi', val: '≤ 55 dB' },
      ],
      ru: [
        { key: 'Макс. скорость', val: '4000 об/мин (RPM)' },
        { key: 'Вместимость', val: '12 х 15мл / 24 х 10мл' },
        { key: 'Управление', val: 'Микропроцессорный таймер и спидометр' },
        { key: 'Уровень шума', val: '≤ 55 дБ' },
      ],
    },
    badge: { uz: 'Sentrifuga', ru: 'Центрифуга' },
    imagePlaceholder: 'TDZ4-WS',
  },
  {
    id: '8',
    slug: '7a-23d',
    model: '7A-23D',
    manufacturer: 'Jiangsu Yuyue Medical (КНР)',
    category: 'surg',
    name: {
      uz: '7A-23D Xirurgik elektr so\'rg\'ich (Otsos)',
      ru: 'Хирургический электрический отсос 7A-23D',
    },
    desc: {
      uz: 'Jarrohlik amaliyotlari va reanimatsiyada qon, yiring va suyuqliklarni so\'rib olish uchun mo\'ljallangan yuqori quvvatli statsionar xirurgik otsos.',
      ru: 'Мощный хирургический отсос для удаления крови, гноя и биологических жидкостей во время операций и в реанимации.',
    },
    specs: {
      uz: [
        { key: 'So\'rish tezligi', val: '≥ 20 Litr/daqiqa' },
        { key: 'Idish sig\'imi', val: '2 ta x 2500 ml (Shisha)' },
        { key: 'Vakuum bosimi', val: '0.09 MPa gacha' },
        { key: 'Xususiyat', val: 'Pedalli boshqaruv va toshib ketishdan himoya' },
      ],
      ru: [
        { key: 'Скорость всасывания', val: '≥ 20 Литров/мин' },
        { key: 'Емкость резервуаров', val: '2 х 2500 мл (Стекло)' },
        { key: 'Давление вакуума', val: 'До 0.09 МПа' },
        { key: 'Особенности', val: 'Педальное управление, защита от перелива' },
      ],
    },
    badge: { uz: 'Xirurgiya', ru: 'Хирургия' },
    imagePlaceholder: '7A-23D',
  },
  {
    id: '9',
    slug: 'yde-700-500',
    model: 'YDE 700/500',
    manufacturer: 'Grand Medical / Yuda (КНР)',
    category: 'surg',
    name: {
      uz: 'YDE 700/500 Soyasiz operatsion soya chirog\'i (LED)',
      ru: 'Операционная бестеневая светодиодная лампа YDE 700/500',
    },
    desc: {
      uz: 'Murakkab jarrohlik amaliyotlarida yorqin, soya qoldirmaydigan va issiqlik ajratmaydigan professional ikki gumbazli LED operatsiya chirog\'i.',
      ru: 'Профессиональный двухкупольный светодиодный операционный светильник, обеспечивающий бестеневое освещение без нагрева во время хирургических операций.',
    },
    specs: {
      uz: [
        { key: 'Yoritish kuchi', val: '160,000 + 120,000 Lux' },
        { key: 'Gumbaz diametri', val: '700 mm + 500 mm' },
        { key: 'Rang harorati', val: '3500K - 5000K (Sozlanuvchi)' },
        { key: 'LED xizmat muddati', val: '> 100,000 soat' },
      ],
      ru: [
        { key: 'Освещенность', val: '160,000 + 120,000 Люкс' },
        { key: 'Диаметр куполов', val: '700 мм + 500 мм' },
        { key: 'Цветовая температура', val: '3500K - 5000K (Регулируемая)' },
        { key: 'Срок службы LED', val: '> 100 000 часов' },
      ],
    },
    badge: { uz: 'Operatsiya Chirog\'i', ru: 'Операционный Свет' },
    imagePlaceholder: 'YDE 700/500',
  },
];

export default function ProductsPage() {
  const [lang, setLang] = useState<Language>('uz');
  const [category, setCategory] = useState<'all' | 'lab' | 'steril' | 'surg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Translations object
  const t = {
    uz: {
      title: 'Tibbiy Uskunalar va Laboratoriya Jihozlari Katalogi',
      subtitle: 'DHU FARM — O\'zbekistonda rasmiy kafolat, sertifikatlangan med-texnika va professional servis xizmati.',
      guarantee: 'Rasmiy Ishlab Chiqaruvchi Kafolati',
      searchPlaceholder: 'Mahsulot nomi yoki modeli bo\'yicha qidiruv...',
      catAll: 'Barchasi',
      catLab: 'Laboratoriya',
      catSteril: 'Sterilizatsiya',
      catSurg: 'Xirurgiya & Operatsiya',
      manufacturer: 'Ishlab chiqaruvchi',
      priceText: 'Kelishilgan holda / Rasmiy so\'rov',
      viewDetails: 'Batafsil texnik pasport',
      orderBtn: 'Narxini bilish / Buyurtma',
      specsHeader: 'Asosiy Texnik Ko\'rsatkichlar:',
      noResults: 'Qidiruv bo\'yicha hech qanday mahsulot topilmadi.',
      contactSupport: 'Savollaringiz bormi? Mutaxassis bilan bog\'laning',
      phone: '+998 (90) 123-45-67',
    },
    ru: {
      title: 'Каталог Медицинского и Лабораторного Оборудования',
      subtitle: 'DHU FARM — Официальная гарантия, сертифицированная медтехника и профессиональный сервис в Узбекистане.',
      guarantee: 'Официальная Гарантия Производителя',
      searchPlaceholder: 'Поиск по названию или модели...',
      catAll: 'Все товары',
      catLab: 'Лаборатория',
      catSteril: 'Стерилизация',
      catSurg: 'Хирургия и Операционная',
      manufacturer: 'Производитель',
      priceText: 'Договорная / По запросу',
      viewDetails: 'Подробный техпаспорт',
      orderBtn: 'Запросить цену / Заказать',
      specsHeader: 'Основные Технические Характеристики:',
      noResults: 'По вашему запросу ничего не найдено.',
      contactSupport: 'Есть вопросы? Свяжитесь с нашим специалистом',
      phone: '+998 (90) 123-45-67',
    },
  }[lang];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = category === 'all' || p.category === category;
    const matchesSearch =
      p.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Top Header / Language Switcher Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800 py-3 px-4 sm:px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-200">
              {t.guarantee}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setLang('uz')}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                lang === 'uz'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              O'zbekcha
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                lang === 'ru'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Русский
            </button>
          </div>
        </div>
      </div>

      {/* Main Official Title Section */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-8 border-b border-slate-800 shadow-inner">
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            DHU MEDICAL EQUIPMENT CATALOG
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.title}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                category === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.catAll}
            </button>
            <button
              onClick={() => setCategory('lab')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                category === 'lab'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.catLab}
            </button>
            <button
              onClick={() => setCategory('steril')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                category === 'steril'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.catSteril}
            </button>
            <button
              onClick={() => setCategory('surg')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                category === 'surg'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.catSurg}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-3 top-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-lg">{t.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top / Header */}
                <div>
                  {/* Image/Model Visualization Placeholder Banner */}
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200/70 p-6 flex items-center justify-center relative border-b border-slate-100 h-48">
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {product.badge[lang]}
                    </span>
                    
                    <span className="absolute top-3 right-3 bg-white text-slate-700 border border-slate-200 text-xs font-bold px-2 py-0.5 rounded-md">
                      {product.model}
                    </span>

                    {/* Styled Tech Box Placeholder */}
                    <div className="w-28 h-28 rounded-2xl bg-white shadow-md border border-slate-200/80 flex flex-col items-center justify-center p-2 text-center group-hover:scale-105 transition-transform">
                      <svg className="w-10 h-10 text-teal-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="text-[10px] font-bold text-slate-800 tracking-wider uppercase">
                        {product.imagePlaceholder}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-5">
                    <div className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1">
                      <span>{t.manufacturer}:</span>
                      <span className="font-semibold text-slate-700">{product.manufacturer}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug mb-3">
                      {product.name[lang]}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {product.desc[lang]}
                    </p>

                    {/* Key Technical Specs Box */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 mb-4">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        {t.specsHeader}
                      </div>
                      <div className="space-y-1.5">
                        {product.specs[lang].map((spec, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">{spec.key}:</span>
                            <span className="font-semibold text-slate-800 text-right">{spec.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer / Actions */}
                <div className="px-5 pb-5 pt-0">
                  <div className="border-t border-slate-100 pt-3 mb-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Narx / Цена:</span>
                    <span className="text-xs sm:text-sm font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                      {t.priceText}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/mahsulotlar/${product.slug}`}
                      className="w-full text-center py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-all"
                    >
                      {t.viewDetails}
                    </Link>

                    <a
                      href="https://t.me/dhu_farm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-1"
                    >
                      <span>{t.orderBtn}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Direct Support Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.contactSupport}</h3>
            <p className="text-slate-400 text-sm">
              Shifoxona, klinika va laboratoriyalar uchun maxsus tijorat takliflari (КП) tayyorlab beramiz.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+998901234567"
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all"
            >
              {t.phone}
            </a>
            <a
              href="https://t.me/dhu_farm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all"
            >
              Telegram Orqali Bog'lanish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}