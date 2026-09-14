import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "../../components/ProductGallery";
// 9 ta mahsulotingizning to'liq va rasmiy bazasi (Uz va Ru tillarida)
const productsDatabase = [
  {
    slug: "mindray-bc-20s",
    nameUz: "Mindray BC-20s Avtomatik gematologik analizatori",
    nameRu: "Автоматический гематологический анализатор Mindray BC-20s",
    manufacturer: "Mindray Co.Ltd (KNR)",
    price: "Kelishilgan holda / Договорная",
    images: [
      "/images/placeholder-1.jpg", // BU YERGA O'Z RASMLARINGIZ LINKINI QO'YASIZ (har biriga 2-3 ta)
      "/images/placeholder-2.jpg"
    ],
    descUz: "Klinika va laboratoriyalar uchun qonning aniq tahlilini ta'minlovchi yuqori texnologiyali avtomatik gematologiya uskunasi. Kichik hajm va yuqori unumdorlikni o'zida jamlagan.",
    descRu: "Высокотехнологичное оборудование для точного анализа крови в клиниках и лабораториях. Сочетает в себе компактные размеры и высокую производительность.",
    specs: [
      { name: "Turi / Тип", value: "Avtomatik / Автоматический" },
      { name: "Ishlab chiqaruvchi / Производитель", value: "Mindray Co.Ltd (КНР)" },
      { name: "Kafolat / Гарантия", value: "1 yil / 1 год" }
    ]
  },
  {
    slug: "mindray-ba-88a",
    nameUz: "Mindray BA-88A Biokimyoviy analizatori",
    nameRu: "Биохимический анализатор с проточной кюветой BA-88А",
    manufacturer: "Mindray Co.Ltd (KNR)",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Oqim kyuvetali yarim avtomat biokimyoviy analizator. Kichik va o'rta laboratoriyalar uchun ishonchli, ixcham va iqtisodiy jihatdan samarali yechim.",
    descRu: "Полуавтоматический биохимический анализатор с проточной кюветой. Надежное, компактное и экономичное решение для малых и средних лабораторий.",
    specs: [
      { name: "Kyuveta turi / Тип кюветы", value: "Oqim (Protochnaya) / Проточная" },
      { name: "Ishlab chiqaruvchi / Производитель", value: "Mindray Co.Ltd (КНР)" }
    ]
  },
  {
    slug: "mindray-mr-96a",
    nameUz: "Mindray MR-96A Immunoferment analizatori",
    nameRu: "Иммуноферментный анализатор MR-96А",
    manufacturer: "Mindray Co.Ltd (KNR)",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Keng ko'lamdagi diagnostika testlari uchun yuqori sezuvchanlik va aniqlik kafolati. Avtomatlashtirilgan o'qish tizimi tahlil jarayonini optimallashtiradi.",
    descRu: "Гарантия высокой чувствительности и точности для широкого спектра диагностических тестов. Автоматизированная система считывания оптимизирует процесс анализа.",
    specs: [
      { name: "Turi / Тип", value: "Immunoferment / Иммуноферментный" }
    ]
  },
  {
    slug: "yx-18ldj",
    nameUz: "YX-18LDJ Portativ bug'li sterilizatori",
    nameRu: "Портативный паровой стерилизатор YX-18LDJ",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "18 litr hajmli yuqori bosimli portativ bug'li sterilizator (avtoklav). Tibbiy asboblarni ishonchli va tez sterilizatsiya qilish uchun mo'ljallangan.",
    descRu: "Портативный паровой стерилизатор высокого давления объемом 18 литров. Предназначен для надежной и быстрой стерилизации медицинских инструментов.",
    specs: [
      { name: "Hajmi / Объем", value: "18 Litr / 18 литров" },
      { name: "Bosim turi / Тип давления", value: "Yuqori bosim / Высокого давления" }
    ]
  },
  {
    slug: "yx-24ldj",
    nameUz: "YX-24LDJ Portativ bug'li sterilizatori",
    nameRu: "Портативный паровой стерилизатор YX-24LDJ",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "24 litr hajmli yuqori bosimli bug'li sterilizator. Kattaroq hajmdagi jarrohlik asboblari va materiallarini zararsizlantirish uchun qulay va mobil yechim.",
    descRu: "Паровой стерилизатор высокого давления объемом 24 литра. Удобное мобильное решение для обеззараживания большего объема хирургических инструментов.",
    specs: [
      { name: "Hajmi / Объем", value: "24 Litr / 24 литра" },
      { name: "Turi / Тип", value: "Portativ / Портативный" }
    ]
  },
  {
    slug: "ls-75hd",
    nameUz: "LS-75HD Vertikal bug'li sterilizatori",
    nameRu: "Вертикальный паровой стерилизатор LS-75HD",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Yuqori bosimli vertikal bug'li sterilizator. Yirik statsionar shifoxonalar, jarrohlik bo'limlari va laboratoriyalarda katta hajmdagi ishlarni bajarish uchun.",
    descRu: "Вертикальный паровой стерилизатор высокого давления. Для выполнения больших объемов работ в крупных стационарах, хирургических отделениях и лабораториях.",
    specs: [
      { name: "Turi / Тип", value: "Vertikal / Вертикальный" },
      { name: "Maqsadli hudud / Применение", value: "Statsionar va Laboratoriya / Стационар" }
    ]
  },
  {
    slug: "tdz4-ws",
    nameUz: "TDZ4-WS Stol usti sentrifugasi",
    nameRu: "Настольная Центрифуга TDZ4-WS",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Qon, siydik va boshqa biologik suyuqliklarni tez va barqaror ajratish uchun maxsus ishlab chiqilgan, shovqinsiz ishlovchi tibbiy sentrifuga.",
    descRu: "Специально разработанная бесшумная медицинская центрифуга для быстрого и стабильного разделения крови, мочи и других биологических жидкостей.",
    specs: [
      { name: "O'rnatish turi / Тип установки", value: "Stol usti / Настольная" },
      { name: "Shovqin darajasi / Уровень шума", value: "Past / Низкий" }
    ]
  },
  {
    slug: "7a-23d",
    nameUz: "7a-23d Xirurgik so'rg'ich (Otsos)",
    nameRu: "Хирургический отсос 7a-23d",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Jarrohlik amaliyotlari va reanimatsiya sharoitida bemordan qon, yiring va boshqa suyuqliklarni samarali va uzluksiz so'rib olish tizimi.",
    descRu: "Система эффективного и непрерывного отсасывания крови, гноя и других жидкостей у пациента во время хирургических операций и в реанимации.",
    specs: [
      { name: "Turi / Тип", value: "Elektr xirurgik / Электрохирургический" }
    ]
  },
  {
    slug: "yde-700-500",
    nameUz: "YDE 700/500 Soyasiz operatsion lampasi",
    nameRu: "Операционная лампа без теней YDE 700/500",
    manufacturer: "Medical Equipment",
    price: "Kelishilgan holda / Договорная",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
    descUz: "Ikki gumbazli (700mm va 500mm) professional jarrohlik yoritgichi. Operatsion maydonni sovuq, yorqin va mutlaqo soyasiz nur bilan ta'minlaydi.",
    descRu: "Двухкупольный (700мм и 500мм) профессиональный хирургический светильник. Обеспечивает операционное поле холодным, ярким и абсолютно бестеневым светом.",
    specs: [
      { name: "Gumbazlar diametri / Диаметр куполов", value: "700 mm / 500 mm" },
      { name: "Nur turi / Тип света", value: "Soyasiz, LED (sovuq nur) / Бестеневой" }
    ]
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsDatabase.find((p) => p.slug === slug);
  if (!product) return { title: "Mahsulot topilmadi" };
  return { title: `${product.nameUz} | DHU Farm MCHJ` };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsDatabase.find((p) => p.slug === slug);

  if (!product) notFound();

  const telegramMessage = encodeURIComponent(`Здравствуйте! Я хочу узнать цену и детали: ${product.nameRu}`);
  const telegramUrl = `https://t.me/dhufarm?text=${telegramMessage}`;

  return (
    <div className="bg-white min-h-screen py-10 font-sans text-slate-800">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        
        {/* Havo ragi nonuvosh (Breadcrumb) - Juda minimalist */}
        <nav className="text-[13px] text-slate-400 mb-10 flex gap-2 tracking-wide uppercase">
          <Link href="/" className="hover:text-slate-800 transition-colors">Главная</Link> / 
          <Link href="/mahsulotlar" className="hover:text-slate-800 transition-colors">Оборудование</Link> / 
          <span className="text-slate-800 truncate max-w-[200px]">{product.slug}</span>
        </nav>

        {/* ASOSIY QISM: Grid Layout (Chapda rasm, O'ngda rasmiy malumot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* CHAP TOMON: Rasm Slayderi */}
          <div className="sticky top-24">
            <ProductGallery images={product.images} />
            <div className="mt-6 flex flex-col sm:flex-row gap-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full border border-slate-200">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-800">Rasmiy kafolat / Гарантия</p>
                  <p className="text-slate-500 text-xs">1 yil servis xizmati</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full border border-slate-200">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-800">O'rnatish / Установка</p>
                  <p className="text-slate-500 text-xs">Klinikada o'rnatib berish</p>
                </div>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Rasmiy tavsif va harakat tugmalari */}
          <div className="flex flex-col">
            
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
              {product.manufacturer}
            </p>
            
            <h1 className="text-2xl md:text-3xl font-serif text-[#1a2b4b] leading-tight mb-2">
              {product.nameRu}
            </h1>
            <h2 className="text-lg text-slate-500 mb-8 font-light">
              {product.nameUz}
            </h2>

            <div className="mb-8">
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Narxi / Цена</span>
              <span className="text-2xl text-[#1a2b4b] font-medium">{product.price}</span>
            </div>

            {/* QAT'IY, ELEGANT TUGMALAR (Kichikroq va rasmiyroq) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-slate-100 pb-10">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1a2b4b] text-white text-sm font-medium py-3 px-8 transition-colors hover:bg-slate-800"
              >
                Получить коммерческое предложение
              </a>
              <a 
                href="tel:+998901234567"
                className="flex items-center justify-center gap-2 bg-white text-[#1a2b4b] border border-[#1a2b4b] text-sm font-medium py-3 px-8 transition-colors hover:bg-slate-50"
              >
                Позвонить
              </a>
            </div>

            {/* BILINGUAL TAVSIF MATNI */}
            <div className="space-y-6 text-sm leading-relaxed text-slate-600 mb-10">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 uppercase tracking-wide text-xs">Описание (RU):</h3>
                <p>{product.descRu}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2 uppercase tracking-wide text-xs">Tavsifi (UZ):</h3>
                <p>{product.descUz}</p>
              </div>
            </div>

            {/* TEXNIK PARAMETRLAR - Jadval ko'rinishida, quti emas */}
            <div>
              <h3 className="text-lg font-serif text-[#1a2b4b] mb-4 border-b border-slate-900 pb-2 inline-block">Texnik ma'lumotlar / Технические данные</h3>
              <div className="mt-4">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-slate-100 text-sm">
                    <span className="text-slate-500">{spec.name}</span>
                    <span className="font-medium text-slate-800 text-right max-w-[60%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}