import React from "react";
import Layout from "../../layout/Layout";
import Packages from "../Packages";
import BlogPost from "../../pages/BlogPost";
import useSpaPackage from "../../hooks/frotendHook/spa-package/useSpaPackages";
import { useLang } from "../context/LanguageContext";
import Loading from "../Loading";
import Procedures from "../Procedures";

const PackagesSpa = () => {
  const { spaPackage, loading } = useSpaPackage();
  const {lang} = useLang()
  console.log("This is all spa packages", spaPackage);
  return (
    <Layout>
      <div className="mt-0">
        <div className="absolute top-50 left-0 w-full">
          <h1 className="text-white lg:text-[50px] xl:text-[50px] text-[30px] font-bold text-center w-full flex justify-center">
            Luxury Spa Treatment Packages & Bundles
          </h1>
          <p className="text-white w-[300px] mx-auto text-center">
            REFINED, RENEWED, RADIANT
          </p>
        </div>
        <figure className="relative">
          <img
            src="https://mohegansun.com/content/dam/mohegansun/Images/Spa/Carousel-Mandara_Spa_Couples-1440x620.jpg"
            alt=""
            className="w-full fixed h-screen -z-10 top-0"
          />
        </figure>
        <div className="mt-100 bg-white w-full​​ lg:p-4 xl:p-4 p-2">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-8 sm:gap-4 md:gap-2 lg:gap-4">
            {loading && <Loading />}
            {spaPackage.map((pic, index) => (
              <div className="lg:w-[320px] xl:w-[320px] sm:w-[320px] md:w-[250px] w-full mx-auto h-auto overflow-hidden" key={index._id}>
                <figure className="lg:w-full xl:w-full mx-auto xl:h-[210px]">
                  <img src={pic.image} alt="" className="w-full object-cover h-auto" />
                </figure>
                <div className="p-2 w-auto h-auto text-center">
                  <p className="text-2xl font-semibold">{pic.title?.[lang]}</p>
                  <p className="text-[16px]">{pic.description?.[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Procedures />
        </div>
      </div>
    </Layout>
  );
};

export default PackagesSpa;
