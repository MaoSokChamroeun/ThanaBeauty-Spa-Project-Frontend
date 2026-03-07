import React, { useEffect } from "react";
import usePostFront from "../hooks/frotendHook/postFront/usePostFront";
import { useLang } from "../components/context/LanguageContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../components/api/translate3Lang";
import Loading from "../components/Loading";


const BlogPost = () => {
  const { postFront , loading } = usePostFront();
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
      <div className="p-2 bg-[#386324] lg:mt-10 xl:mt-5">
        <p className="text-[35px] font-bold text-center p-10 text-gray-100 uppercase">
          {t("our_shop")}
        </p>
       <div className=" bg-white w-full​​ lg:p-4 xl:p-4 p-2">
          {loading && (
              <div className="max-w-7xl h-auto mx-auto">
                <div className="xl:w-[500px] mx-auto flex justify-center items-center">
                  <Loading />
                </div>
              </div>
            )}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-8 sm:gap-4 md:gap-2 lg:gap-4">
            {postFront.map((pic, index) => (
              <div className="lg:w-[320px] xl:w-[320px] sm:w-[320px] md:w-[250px] w-full mx-auto h-auto overflow-hidden xl:flex xl:flex-col xl:justify-between lg:flex lg:flex-col lg:justify-between md:flex md:flex-col md:justify-between sm:flex sm:flex-col sm:justify-between" key={index._id}>
                <figure className="lg:w-full xl:w-full mx-auto xl:h-[210px] lg:h-[210px] sm:h-[200px] sm:w-full">
                  <img src={pic.image} alt="" className="w-full h-full object-cover sm:h-full md:h-full lg:h-full xl:h-full" />
                </figure>
                <div className="p-2 w-auto h-auto text-center">
                  <p className="text-2xl xl:text-[25px] font-semibold text-[#386324]">{pic.title?.[lang]}</p>
                  <p className="text-[16px] xl:text-[16px]">{pic.content?.[lang]}</p>

                  <div>
                     <button className="mt-2 bg-[#386324] hover:bg-black transition-colors w-30 h-10 text-white rounded-sm">
                    <Link
                      to={`/post/${pic.slug}`}
                      className="text-gray-900 hover:text-white text-white "
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
      </div>
    </>
  );
};

export default BlogPost;
