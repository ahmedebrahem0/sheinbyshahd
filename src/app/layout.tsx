import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shein by Shahd | شي إن باي شهد",
  description: "اختاري اللي بتحبيه وتواصلي مع شهد للطلب والاستفسار، أو تابعيها على السوشيال ميديا.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
