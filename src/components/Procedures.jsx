import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFrontPackage from "../hooks/frotendHook/useFrontPackage";
import { useLang } from "./context/LanguageContext";

import i18n from "./api/translate3Lang";
import { useTranslation } from "react-i18next";

const Procedures = () => {
  const { frontPackage: services = [] } = useFrontPackage();
  const { lang } = useLang();
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const {t} = useTranslation();
   useEffect(() => {
    const savedLng = localStorage.getItem("lng");
    if (savedLng && i18n.language !== savedLng) {
      i18n.changeLanguage(savedLng);
    }
  }, []);
  const visibleCards = 3;
  const data = services.slice(0, 12);
  const totalSlides = Math.max(data.length - visibleCards, 0);

  const scrollToIndex = (i) => {
    const container = sliderRef.current;
    const cardWidth = container.offsetWidth / visibleCards;

    container.scrollTo({
      left: cardWidth * i,
      behavior: "smooth",
    });

    setIndex(i);
  };

  const next = () => {
    if (index < totalSlides) {
      scrollToIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      scrollToIndex(index - 1);
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 mb-10 text-center">
       {t('treatment_package')}
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-40 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-40 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full"
        >
          ›
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-hidden scroll-smooth lg:px-8.5 xl:px-8.5 px-1"
        >
          {data.map((item) => (
            <div
              key={item._id}
              className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] bg-white shadow-md"
            >
              <img
                src={item.image}
                alt={item.title?.[lang]}
                className="w-full h-64 lg:h-80 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-[#386324] font-bold text-xl mb-4">
                  {item.title?.[lang]}
                </h3>

                <Link
                  to={item.category?.path || "#"}
                  className="border border-[#386324] text-[#386324] px-6 py-2 rounded-full hover:bg-[#386324] hover:text-white transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === i ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
