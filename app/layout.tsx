import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Terrassa Askaneli — Restaurant in Batumi",
  description:
    "Wine restaurant on the Batumi seafront inside the Hilton hotel. Georgian and European cuisine, live music, wine shop and wine tastings.",
  openGraph: {
    title: "Terrassa Askaneli",
    description: "Wine restaurant on the Batumi seafront",
    images: ["https://terrassaaskaneli.ge/files/slider/slider-1.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
