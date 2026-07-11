"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const PortofolioHeader = () => {
  const [navbarShow, setNavbarShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavbarShow(false); // scroll down
        setMenuOpen(false); // close menu when scrolling down
      } else {
        setNavbarShow(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="relative z-50 font-nunito">
        <nav
          aria-label="Header navigation"
          className={`${navbarShow ? "translate-y-0 lg:top-5 md:top-3 top-0.5" : "-translate-y-full -top-3"} fixed right-1/2 translate-1/2 xl:w-5xl lg:w-4xl md:w-185 w-[calc(100%-0.25rem)] h-14 transition-all duration-500 ease-in-out`}
        >
          <div className={`${menuOpen ? "md:max-h-max max-h-80.5" : "md:max-h-max max-h-14"} flex md:flex-row flex-col md:justify-between md:items-center lg:py-3.5 md:py-2.5 py-2.5 lg:px-6 md:px-3 px-3 md:bg-white/70 bg-white/85 backdrop-blur border rounded-xs shadow-none transition-all overflow-hidden duration-300 ease-in-out md:hover:shadow-solid-sm`}>
            <div className="md:block flex justify-between items-center gap-x-2 md:pb-0 pb-3 md:px-0 px-0.5 md:border-0 border-b">
              <h1 className="text-gray-950 text-2xl font-bold">DamaiPs</h1>
              <button className="md:hidden block py-1.5 px-2 border rounded-sm hover:text-white hover:bg-black" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>
            <ul className="grow md:flex justify-center lg:gap-x-7 md:gap-x-5 md:space-y-0 space-y-2 md:py-0 py-2 md:px-0 px-2 text-gray-700">
              <li>
                <a
                  href="#beranda"
                  className="hover-underline md:w-fit w-full py-0.5 px-1 hover:text-gray-950"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="hover-underline md:w-fit w-full py-0.5 px-1 hover:text-gray-950"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  className="hover-underline md:w-fit w-full py-0.5 px-1 hover:text-gray-950"
                >
                  Portofolio
                </a>
              </li>
            </ul>
            <a href="mailto:damaipatriasuyana10@gmail.com?subject=Halo%20Damai%2C%20saya%20tertarik%20berdiskusi" className="md:block hidden py-1.5 px-5 font-medium border rounded-xs hover:text-white hover:bg-black">Kontak Saya</a>
          </div>
        </nav>
      </header>
    </>
  );
};
