import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Wrench } from "lucide-react";

// ==========================================
// 1-QADAM: MAHSULOTLAR SEO BAZASI
// (Buni alohida data.ts faylida saqlab, bu yerga import qilsangiz ham bo'ladi)
// ==========================================
const seoProductsData: Record<string, any> = {
  "mindray-bc-20s": {
    title: "Gematologik analizator Mindray BC-20s | Гематологический анализатор | DHU",
    description: "Avtomatik gematologik analizator Mindray BC-20s. Rasmiy kafolat, Toshkent va O'zbekiston bo'ylab o'rnatish. Купить анализатор крови Mindray от официального дилера.",
    keywords: [
      "Mindray BC-20s", "gematologik analizator", "гематологический анализатор", 
      "анализатор крови", "mindrey bc 20", "qon tekshirish apparati", "meditsina uskunalari DHU",
      "миндрай бс 20", "gimatologik anlizator"
    ]
  },
  "mindray-dc-40": {
    title: "UZI apparati Mindray DC-40 | УЗИ аппарат Mindray DC-40 | DHU",
    description: "Premium toifadagi statsionar UZI apparati Mindray DC-40. Yuqori aniqlikdagi diagnostika. Ультразвуковая диагностическая система. Rasmiy diler DHU.",
    keywords: [
      "Mindray DC-40", "uzi apparati", "узи аппарат", "ультразвуковая система", 
      "mindrey dc 40", "uzi skaner", "узи сканер купить в ташкенте", "аппарат узи миндрей"
    ]
  },
  "patient-monitor-imac-12": {
    title: "Bemor monitori iMAC 12 | Монитор пациента | DHU",
    description: "Ko'p tarmoqli bemor monitori (Patient Monitor). Reanimatsiya va intensiv terapiya uchun. Монитор пациента с официальной гарантией в Узбекистане.",
    keywords: [
      "bemor monitori", "patient monitor", "монитор пациента", "imac 12", 
      "reanimatsiya apparati", "patsient monitor", "кардиомонитор", "kardiomonitor"
    ]
  }
  // Boshqa mahsulotlaringizni shu tarzda qo'shib ketaverasiz...
};

// ==========================================
// 2-QADAM: DINAMIK METADATA GENERATOR (Aynan siz so'ragan kod)
// ==========================================
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Sahifa slug'ini olamiz (masalan url: dhu.uz/mahsulotlar/mindray-bc-20s bo'lsa, slug "mindray-bc-20s" bo'ladi)
  const slug = params.slug;
  
  // Bazadan o'sha slug'ga tegishli ma'lumotni qidiramiz
  const productSEO = seoProductsData[slug];

  // Agar bunday slug bazada yo'q bo'lsa (xato link kiritilsa)
  if (!productSEO) {
    return {
      title: "Mahsulot topilmadi | DHU Medikal",
      description: "DHU tibbiyot uskunalari do'koni. O'zbekiston bo'ylab premium tibbiyot jihozlari.",
    };
  }

  // Agar topilsa, Google'ga o'sha mahsulotning Premium Sarlavha va Ta'riflarini uzatamiz
  return {
    title: productSEO.title,
    description: productSEO.description,
    keywords: productSEO.keywords,
    // Sayt linkini Telegram/Facebookda ulashganda chiroyli chiqishi uchun OpenGraph (OG) qo'shamiz
    openGraph: {
      title: productSEO.title,
      description: productSEO.description,
      url: `https://dhu.uz/mahsulotlar/${slug}`,
      siteName: "DHU Medical Equipment",
    }
  };
}

// ==========================================
// 3-QADAM: SAHIFA DIZAYNI (Oldingi safargi qotib qolmaydigan, to'g'rilangan dizayn)
// ==========================================
export default function ProductDetails({ params }: { params: { slug: string } }) {
  // Eslatma: Haqiqiy loyihada siz mahsulot rasm va narxlarini ham aynan shu slug orqali bazadan tortib olasiz.
  
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Shu yerda oldingi yozib bergan mahsulot dizayni kodi (Rasm va Ma'lumotlar) bo'ladi */}
      <div>Ma'lumotlar...</div>
    </div>
  );
}