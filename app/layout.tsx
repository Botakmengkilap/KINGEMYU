"use client";
import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk menutup menu setelah klik link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="en">
      <body>
        
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 flex items-center justify-between z-50 h-12">
  {/* Brand */}
  <div className="flex items-center">
    <img src="/Logo.jpg" alt="Logo" className="w-8 h-8 mr-3" />
    <h1 className={`${roboto_condensed.className} text-md font-semibold`}>
      PT. Bina Sukses Valasindo
    </h1>
  </div>
          {/* Menu untuk Desktop */}
          <div className="hidden sm:flex sm:gap-4">
            <Link
              href="/"
              className={`${roboto_condensed.className} hover:text-white hover:bg-color2 px-3 py-1 rounded-md transform hover:scale-95 transition-all`}
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className={`${roboto_condensed.className} hover:text-white hover:bg-color2 px-3 py-1 rounded-md transform hover:scale-95 transition-all`}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className={`${roboto_condensed.className} hover:text-white hover:bg-color2 px-3 py-1 rounded-md transform hover:scale-95 transition-all`}
            >
              Gallery
            </Link>
            <Link
              href="#kontak"
              className={`${roboto_condensed.className} hover:text-white hover:bg-color2 px-3 py-1 rounded-md transform hover:scale-95 transition-all`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="mt-12">{children}</main>
        
      </body>
    </html>
  );
}
