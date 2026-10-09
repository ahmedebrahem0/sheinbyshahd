import type { Metadata } from "next";
import "@fontsource-variable/alexandria";
import "./globals.css";

const deployedHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(deployedHost ? `https://${deployedHost}` : "http://localhost:3000"),
  title: "Shein by Shahd | شي إن باي شهد",
  description: "اختاري اللي بتحبيه وتواصلي مع شهد للطلب والاستفسار، أو تابعيها على السوشيال ميديا.",
  openGraph: {
    title: "Shein by Shahd | شي إن باي شهد",
    description: "اختاري اللي بتحبيه وتواصلي مع شهد للطلب والاستفسار، أو تابعيها على السوشيال ميديا.",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
