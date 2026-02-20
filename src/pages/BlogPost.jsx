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
      <div className="mt-10 p-2 bg-[#386324]">
        <p className="text-[35px] font-bold text-center text-gray-100 uppercase">
          {t("our_shop")}
        </p>
        <div className="max-w-7xl mx-auto pt-5">
          {postFront.slice(0, 4).map((post, index) => (
            <div
              key={post._id || index}
              className={`w-full grid grid-cols-1 lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 mb-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <figure className="overflow-hidden rounded-md shadow-lg">
                  <img
                    className="w-full h-[400px] lg:h-[500px] lg:w-full xl:h-[500px] xl:w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={`http://localhost:5000/public/posts/${post.image}`}
                    alt={post.title?.[lang]}
                  />
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-5">
                <div className="max-w-xl">
                  <p className="lg:text-[35px] xl:text-[50px text-[30px] font-bold text-[white] leading-tight">
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
