import React from "react";
import Layout from "../../layout/Layout";
import useGetPostSlug from "../../hooks/frotendHook/getPostSlug/useGetPostSlug";
import { useLang } from "../context/LanguageContext";
import { Link, useParams } from "react-router-dom";
import slugPostMap from "../api/slugPost";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../api/translate3Lang";

const PostSlug = () => {
  const { lang } = useLang();
  const { slug } = useParams();
  const { postSlug = [] } = useGetPostSlug(slug);
  const activePage = slugPostMap[slug] || { title: "Not Found", image: "" };
  const {t} = useTranslation();
  useEffect(() => {
    const savedLng = localStorage.getItem("lng");
    if (savedLng && i18n.language !== savedLng) {
      i18n.changeLanguage(savedLng);
    }
  }, []);
  return (
    <Layout>
      <div className="mt-20">
    
        <figure className="w-full mt-20">
          <img
            src={activePage.image}
            className="object-cover w-full h-[400px] lg:h-[950px] xl:h-[950px]"
            alt={activePage.title}
          />
        </figure>
        {/* <div className="w-full h-auto bg-[#386324] absolute"></div> */}
        <div className="bg-[#386324]">
        <div className="max-w-7xl mx-auto pt-5">
            
          <div className="lg:p-4 xl:p-4 p-4 lg:mb-5 xl:mb-5">
            <h2 className="text-[35px] lg:text-[50px] xl:text-[50px] font-bold text-white leading-tight text-center">{t(`slug_post_title.${slug}-title`)}</h2>
            <p className="text-center lg:w-[900px] mx-auto mt-4 lg:mt-4 xl:mt-4 text-white">{t(`slug_post_desc.${slug}`)}</p>
          </div>
          {postSlug.map((post, index) => (
            <div
              key={post._id || index}
              className={`w-full p-2 grid grid-cols-1 lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 mb-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <figure className="overflow-hidden rounded-md shadow-lg">
                  <img
                    className="w-full h-[350px] lg:h-[500px] xl:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
                    src={post.image}
                    alt={post.title?.[lang]}
                  />
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-5">
                <div className="max-w-xl">
                  <p className="text-[35px] lg:text-[50px] xl:text-[50px] font-bold text-white leading-tight">
                    {post.title?.[lang]}
                  </p>
                  <p className="text-[18px] lg:text-[20px] xl:text-[22px] mt-4 text-white line-clamp-3">
                    {post.content?.[lang]}
                  </p>

                  <div className="mt-5">
                    <p className="font-semibold text-gray-200">Tags</p>
                    <span className="inline-block mt-1 bg-gray-100 px-3 py-3 rounded-full text-sm">
                      {post.tags}
                    </span>
                  </div>

                  <button className="mt-10 bg-white  transition-colors w-40 h-12 text-black  rounded-md">
                    <Link to={`/booking`}>Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostSlug;
