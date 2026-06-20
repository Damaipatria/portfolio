"use client";

import { useEffect, useState } from "react";

export const PortofolioHeader = () => {
  const [navbarShow, setNavbarShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavbarShow(false); // scroll down
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
          className={`${navbarShow ? "translate-y-0 top-5" : "-translate-y-full -top-3"} fixed right-1/2 translate-1/2 xl:w-5xl lg:w-4xl h-14  transition-all duration-200`}
        >
          <div className="flex justify-between items-center py-3.5 px-6 bg-white/70 backdrop-blur border rounded-xs shadow-none transition-all duration-200 hover:shadow-solid-sm">
            <h1 className="text-gray-950 text-2xl font-bold">DamaiPs</h1>
            <ul className="grow flex justify-center gap-x-7 text-gray-700">
              <li>
                <a
                  href="#beranda"
                  className="hover-underline hover:text-gray-950"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="hover-underline hover:text-gray-950"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  className="hover-underline hover:text-gray-950"
                >
                  Portofolio
                </a>
              </li>
            </ul>
            <p className="py-1.5 px-5 font-medium border rounded-xs hover:text-white hover:bg-black">Kontak Saya</p>
          </div>
        </nav>
      </header>
    </>
  );
};
