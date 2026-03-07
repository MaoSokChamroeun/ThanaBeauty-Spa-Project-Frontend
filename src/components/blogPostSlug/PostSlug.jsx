import React from "react";
import Layout from "../../layout/Layout";
import useGetPostSlug from "../../hooks/frotendHook/getPostSlug/useGetPostSlug";
import { useLang } from "../context/LanguageContext";
import { Link, useParams } from "react-router-dom";
import slugPostMap from "../api/slugPost";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../api/translate3Lang";
import Loading from "../Loading";

const PostSlug = () => {
  const { lang } = useLang();
  const { slug } = useParams();
  const { postSlug = [] , loading } = useGetPostSlug(slug);
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
      <div className="">
        <figure className="w-full mt-20 xl:mt-25 lg:mt-25">
          <img
            src={activePage.image}
            className="object-cover w-full h-screen lg:h-screen xl:h-screen fixed -z-10 xl:top-0 top-0"
            alt={activePage.title}
          />
          <div className="xl:w-full absolute xl:top-50 top-40 md:top-50 sm:top-60 lg:left-0 lg:w-full">
            <h2 className="text-[35px] lg:text-[50px] xl:text-[60px] font-bold text-white leading-tight text-center">{t(`slug_post_title.${slug}-title`)}</h2>
            <p className="text-center text-[14px] p-2 xl:text-[16px] lg:w-[900px] mx-auto mt-4 lg:mt-4 xl:mt-4 text-white">{t(`slug_post_desc.${slug}`)}</p>
          </div>
        </figure>
        {/* <div className="w-full h-auto bg-[#386324] absolute"></div> */}
        <div className="bg-white mt-120 xl:h-auto">
          {loading && (
              <div className="max-w-7xl h-auto mx-auto">
                <div className="xl:w-[500px] mx-auto flex justify-center items-center">
                  <Loading />
                </div>
              </div>
            )}
        <div className="max-w-7xl mx-auto pt-5">
          
          {postSlug.map((post, index) => (
            <div
              key={post._id || index}
              className={`w-full p-2 grid grid-cols-1 lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 mb-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <figure className="overflow-hidden shadow-lg">
                  <img
                    className="w-full h-[350px] lg:h-[500px] xl:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    src={post.image}
                    alt={post.title?.[lang]}
                  />
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-5">
                <div className="max-w-xl">
                  <p className="text-[35px] lg:text-[50px] xl:text-[50px] font-bold text-[#386324] leading-tight">
                    {post.title?.[lang]}
                  </p>
                  <p className="text-[18px] lg:text-[20px] xl:text-[22px] mt-4 text-[#386324] line-clamp-3">
                    {post.content?.[lang]}
                  </p>

                  <div className="mt-5">
                    <p className="font-semibold text-gray-500">Tags</p>
                    <span className="inline-block mt-1 bg-gray-100 px-3 py-3 rounded-full text-sm">
                      {post.tags}
                    </span>
                  </div>

                  <button className="mt-10 bg-[#386324]  transition-colors w-40 h-12 text-white  rounded-md">
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
