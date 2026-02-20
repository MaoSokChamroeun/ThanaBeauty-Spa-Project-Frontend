
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import httpUrl from "../components/api/httpUrl";
import useFrontPackage from "../hooks/frotendHook/useFrontPackage";
import { useLang } from "../components/context/LanguageContext";
import { useTranslation } from "react-i18next";
import i18n from "./api/translate3Lang";

const Packages = () => {
  const { frontPackage: services = [] } = useFrontPackage();
  const { lang } = useLang();
  const {t} = useTranslation();

  useEffect(() => {
    const savedLng = localStorage.getItem("lng");
    if (savedLng && i18n.language !== savedLng) {
      i18n.changeLanguage(savedLng);
    }
  }, []);
  return (
    <div className="w-full mt-15 bg-[#386324]">
      <div className="container mx-auto">
        <div className="mx-auto sm:w-[500px] lg:w-[800px] xl:w-[800px] text-center p-4">
          <p className="text-[35px] font-extrabold p-2 text-white uppercase">
            {t('package_title')}
          </p>
          <p className="text-white">
            {t('package_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
          {services.slice(6, 12).map((item) => (
            <div
              key={item._id}
              className="w-full p-2 flex flex-col mx-auto mb-5"
            >
              <figure>
                <img
                  src={`${httpUrl}/public/services/${item.image}`}
                  alt={item.title?.[lang] || item.title?.en}
                  className="w-full h-[400px] rounded-lg lg:rounded-none xl:rounded-none object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </figure>

              <div className="w-full flex flex-col justify-center">
                <p className="text-[30px] font-extrabold text-center mt-5 text-white">
                  {item.title?.[lang] || item.title?.en}
                </p>

                <p className="text-center text-white">
                  {item.description?.[lang] || item.description?.en}
                </p>

                <div className="flex justify-center mt-5">
                  <Link
                    to={item.category?.path || "#"}
                    className="cursor-pointer border border-gray-100 text-white p-3 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
