import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { PiHandbagLight } from "react-icons/pi";

const socialLinks = [
  { name: "واتساب", label: "اطلبي من واتساب", detail: "للطلب والاستفسار", href: "https://chat.whatsapp.com/H0UG2MugK9lI2dABAPHxP9?s=cl&p=a&mlu=4&ilr=4&iam=0", className: "whatsapp", icon: FaWhatsapp },
  { name: "فيسبوك", label: "تابعيني على فيسبوك", href: "https://facebook.com/share/1XNuweiM4d", className: "facebook", icon: FaFacebookF },
  { name: "إنستجرام", label: "تابعيني على إنستجرام", href: "https://instagram.com/shein_by_shahd6?mdxt=MW9sMmtyNm9jaWd0ZA==", className: "instagram", icon: FaInstagram },
  { name: "تيك توك", label: "تابعيني على تيك توك", href: "https://tiktok.com/@sheinbyshahd6", className: "tiktok", icon: FaTiktok },
  { name: "شي إن", label: "Shop Shein Products", href: "https://ar.shein.com", className: "shein", icon: PiHandbagLight },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="artwork" aria-label="روابط Shein by Shahd">
        <Image src="/bg.png" alt="Shein by Shahd — منتجات الموضة والجمال والاختيارات المتاحة" fill priority sizes="(max-width: 941px) 100vw, 941px" className="artwork-image" />
        <div className="mobile-art mobile-art-top" aria-hidden="true" />
        <div className="interactive-area">
          {/* <h1 className="choose-heading">✨ اختاري اللي بتحبيه</h1> */}
          <nav className="social-links" aria-label="روابط التواصل والتسوق">
            {socialLinks.map(({ name, label, detail, href, className, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`social-link ${className}`} aria-label={`${label}${detail ? ` — ${detail}` : ""} (يفتح في نافذة جديدة)`}>
                <span className="social-icon" aria-hidden="true"><Icon /></span>
                <span className="social-copy" dir="rtl">
                  <span className="social-label">{label}</span>
                  {detail && <span className="social-detail">{detail}</span>}
                </span>
                <HiArrowRight className="social-arrow" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className="mobile-art mobile-art-bottom" aria-hidden="true" />
      </section>
    </main>
  );
}
