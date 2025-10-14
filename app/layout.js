import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import { Icon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leqal Law Firm",
  description: "Lawyer & Law Firm",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppPopup />
      </body>
    </html>
  );
}
