import React, { useEffect } from "react";
import usePostFront from "../hooks/frotendHook/postFront/usePostFront";
import { useLang } from "../components/context/LanguageContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../components/api/translate3Lang";

const BlogPost = () => {
  const { postFront } = usePostFront();
  const { lang } = useLang();
  const { t } = useTranslation();
  useEffect(() => {
    const savedLng = localStorage.getItem("lng");
    if (savedLng && i18n.language !== savedLng) {
      i18n.changeLanguage(savedLng);
    }
  }, []);
  return (
    <>
      <div className="p-2 bg-[#386324] lg:mt-10 xl:mt-10">
        <p className="text-[35px] font-bold text-center p-10 text-gray-100 uppercase">
          {t("our_shop")}
        </p>
        <div className="max-w-7xl mx-auto lg:pt-10 xl:pt-10">
          {postFront.slice(0, 4).map((post, index) => (
            <div
              key={post._id || index}
              className={`w-full grid grid-cols-1  lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 mb-5 items-center`}
            >
              <div className="w-full lg:w-1/2 md:flex md:justify-center">
                <figure className="overflow-hidden rounded-md shadow-lg">
                  <img
                    className="w-full h-[350px] sm:h-[450px] md:h-[600px] md:w-[800px] lg:h-[500px] lg:w-full xl:h-[500px] xl:w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={post.image}
                    alt={post.title?.[lang]}
                  />
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-5 md:justify-center md:flex md:w-full">
                <div className="w-full md:px-6">
                  <p className="lg:text-[35px] md:text-[45px] xl:text-[50px text-[30px] font-bold text-[white] leading-tight">
                    {post.title?.[lang]}
                  </p>
                  <p className="text-[18px] mt-4 text-gray-100 line-clamp-3">
                    {post.content?.[lang]}
                  </p>

                  <div className="mt-5">
                    <p className="font-semibold text-gray-300">Tags</p>
                    <span className="inline-block mt-1 px-3 py-5 rounded-full text-md text-white">
                      {post.tags}
                    </span>
                  </div>

                  <button className="mt-10 bg-[white] hover:bg-black transition-colors w-40 h-12 text-white rounded-md">
                    <Link
                      to={`/post/${post.slug}`}
                      className="text-gray-900 hover:text-white "
                    >
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
