import React, { useState, useEffect } from "react";
import useBannerFront from "../../hooks/frotendHook/useBannerFront";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {bannerFront : banners} = useBannerFront();
  useEffect(() => {
    if (banners.length === 0) return;

    const timer = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };
  if (banners.length === 0)
    return <div className="w-full h-[400px] bg-gray-200 animate-pulse" />;
  return (
    <div className="relative w-full h-[400px] overflow-hidden group lg:h-[950px]">
      <div className="relative h-full">
        {banners.map((img, index) => (
          <div
            key={img._id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={`http://localhost:5000/public/banners/${img.image}`}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1920x950?text=Banner+Not+Found";
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 bottom-10 left-1/2 -translate-x-1/2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/20 group-hover:bg-black/40 transition-all">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/20 group-hover:bg-black/40 transition-all">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default ImageSlider;
