import React from "react";
import Layout from "../../layout/Layout";
import useGetServiceCategory from "../../hooks/adminHook/getServiceById/useGetServiceCategory";
import contentMap from "../api/contentMap";
import { useLang } from "../../components/context/LanguageContext"; 
import { useTranslation } from "react-i18next";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import Procedures from "../Procedures";

const SpaPackages = ({ categorySlug }) => {
  const { lang } = useLang(); 
  const { t } = useTranslation();
  const { servicesCategory = [] , loading } = useGetServiceCategory(categorySlug);
  const activePage = contentMap[categorySlug] || {
    title: "Spa Services",
    image: "https://www.angkorspa.net/wp-content/uploads/2025/11/Oil-Massage-1890x760.png",
  };

  return (
    <Layout>
      <div className="w-full">
        <figure className="w-full mt-25">
          <img
            src={activePage.image}
            className="object-cover w-full h-[400px] lg:h-[600px] xl:h-[700px]"
            alt={activePage.title}
          />
        </figure>

        <div className="mt-10 max-w-7xl mx-auto">
          <h1 className="text-center text-[35px] font-extrabold uppercase tracking-wide">
            {activePage.title}
          </h1>
          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
      
            {t('experience_msg')} {activePage.title}. {t('rejuvenate_msg')}
          </p>

          <div className="max-w-7xl p-2 mx-auto  space-y-6 sm:mt-6 md:p-2 sm:p-2">
            {loading && <Loading />}
            {!loading && servicesCategory?.data && servicesCategory.data.length > 0 ? (
              servicesCategory.data.map((item, index) => (
                <div
                  key={item._id || item.id || index}
                  className="w-full mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:h-[400px] h-auto md:h-auto sm:w-full lg:w-full xl:w-full lg:mt-10 xl:mt-10 gap-6 border border-gray-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow "
                >
                  <div className="md:col-span-1">
                    <img
                      src={item.image}
                      alt={item.title?.[lang]}
                      className="w-full h-full object-cover "
                    />
                  </div>

                  <div className="md:col-span-1 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#386324] sm:text-center sm:text-[50px] lg:text-[30px] xl:text-[40px]">
     
                        {item.title?.[lang] || item.title?.en}
                      </h2>

                      <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-4 sm:text-center sm:text-[20px]">
                   
                        {item.description?.[lang] || item.description?.en}
                      </p>

                      <div className="mt-4 sm:text-center">
                        <p className="text-sm font-medium text-gray-700 sm:text-[20px] lg:text-md xl:text-md">
                          {t('method')}:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
                          {item.methods?.length > 0 ? (
                            item.methods.map((method, i) => (
                              <li key={i}>{method}</li>
                            ))
                          ) : (
                            <li className="list-none text-gray-400 italic">
                              {t('methods')}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 p-6 flex flex-col justify-center items-center bg-gray-50 border-l border-gray-100">
                    <p className="text-2xl font-bold text-[#386324]">
                      USD {item.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      {item.duration} {t('minutes')}
                    </p>

                    <button className="px-8 py-3 cursor-pointer bg-[#1a5400] text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
                     <Link to={'/booking'}>
                           {t('book_now')}
                     </Link>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-3xl">
                <p className="text-gray-400 italic">
                  {servicesCategory === undefined
                    ? t('loading')
                    : t('no_services')}
                </p>
              </div>
            )}
          </div>
        </div>
        <Procedures />
      </div>
    </Layout>
  );
};

export default SpaPackages;