import React, { useState } from "react";
import Layout from "../layout/Layout";
import useGalleryFront from "../hooks/frotendHook/getGallery/useGalleryFront";
import Loading from "./Loading";
import gallery from '../assets/gallery.png'

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { galleryFront, loading } = useGalleryFront();
  return (
    <Layout>
      <div className="w-full font-josefin">
        <div className="w-full lg:mt-25 xl:mt-25 md:mt-20 mt-20">
          <figure>
            <img
              src={gallery}
              alt="Spa Banner"
              className="w-full h-[400px] md:h-[400px] ​lg:h-[600px] xl:h-[700px] object-cover"
            />
          </figure>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          <p className="text-[35px] font-extrabold text-center mt-5 lg:mt-10 xl:mt-10 uppercase tracking-widest text-gray-800">
            Gallery
          </p>
          <p className="text-center text-1xl">Gallery Customer In Our shop spa</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mt-10 xl:mt-10 mt-5">
            {loading && <Loading />}
            {!loading && galleryFront.map((item) => (
              <div
                key={item._id}
                className="relative overflow-hidden cursor-pointer group rounded-sm shadow-md"
                onClick={() => setSelectedImg(`${item.image}`)}               >
                <img
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  className="object-cover w-full h-[330px] transition-transform duration-700 group-hover:scale-120"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm tracking-widest border border-white px-4 py-2">
                    VIEW
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImg(null)} // Close when clicking background
          >
            <button
              className="absolute top-10 right-10 text-white hover:text-[#aa9fc7] transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedImg}
              alt="Full Size"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl transition-all"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
