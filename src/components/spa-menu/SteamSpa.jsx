import React from "react";
import Layout from "../../layout/Layout";
import spa_cover from "../../assets/steam.webp";
import BlogPost from "../../pages/BlogPost";
import useGetServiceCategory from "../../hooks/adminHook/getServiceById/useGetServiceCategory";
import Loading from "../Loading";
import { useLang } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SteamSpa = ({ categorySlug }) => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const { servicesCategory = [], loading } =
    useGetServiceCategory(categorySlug);
  console.log("Show here", servicesCategory);
  return (
    <Layout>
      <div className="mt-0">
        <div className="absolute top-50 left-0 w-full xl:p-2 lg:p-2">
          <h1 className="text-white lg:text-[80px] text-[40px] xl:text-[80px] text-[30px] font-bold text-center w-full flex justify-center uppercase">
            Spa Treatments
          </h1>
          <p className="text-white w-[300px] lg:w-full mx-auto text-center">
            A Perfurnmed Spa Experice for Mind And Body Renaisance
          </p>
        </div>
        <figure className="relative">
          <img
            src={spa_cover}
            alt=""
            className="w-full fixed h-screen -z-10 top-0"
          />
        </figure>

        <div className="mt-100 bg-white h-auto w-full xl:p-2 ">
            {loading && (
              <div className="max-w-7xl h-auto mx-auto">
                <div className="xl:w-[500px] mx-auto flex justify-center items-center">
                  <Loading />
                </div>
              </div>
            )}
          <div className="max-w-7xl mx-auto grid xl:grid-cols-2 grid-cols-1 h-auto md:grid-cols-2 md:p-1 md:gap-2 lg:grid-cols-2 lg:gap-2">
            
            {!loading &&
            servicesCategory?.data &&
            servicesCategory.data.length > 0 ? (
              servicesCategory.data.map((st, index) => (
                <div
                  className="relative xl:w-[550px] xl:mb-60 mb-60 lg:w-[500px] lg:mx-auto"
                  key={st._id || index}
                >
                  <img src={st.image} alt="" className="w-full object-cover" />

                  <div className="absolute w-full h-[300px] flex flex-col justify-between top-50 left-0 mb-40 p-4 sm:w-full sm:p-2 sm:top-80 md:top-45 lg:w-[450px] lg:left-10 lg:top-60 xl:left-20 xl:top-70 xl:w-[500px] xl:h-[300px] xl:flex xl:justify-between xl:flex-col bg-[#386324] xl:px-8 xl:pt-4 xl:pb-4">
                    <h1 className="text-[35px] md:text-[28px] text-white font-bold">
                      {st.title?.[lang]}
                    </h1>

                    <p className="text-[18px] text-gray-300">
                      <span className="font-bold">${st.price} -</span>{" "}
                      {st.duration} {t("minutes")}
                    </p>

                    <p className="text-gray-300">{st.description?.[lang]}</p>

                    <button className="p-3.5 mt-4 bg-white cursor-pointer">
                      <Link to={"/booking"}>{t("book_now")}</Link>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-2">No services found</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SteamSpa;
