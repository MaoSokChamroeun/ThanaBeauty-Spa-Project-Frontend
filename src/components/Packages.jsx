
import React from "react";
import { Link } from "react-router-dom";
import httpUrl from "../components/api/httpUrl";
import useFrontPackage from "../hooks/frotendHook/useFrontPackage";
import { useLang } from "../components/context/LanguageContext";

const Packages = () => {
  const { frontPackage: services = [] } = useFrontPackage();
  const { lang } = useLang();

  return (
    <div className="w-full mt-15 bg-gray-800">
      <div className="container mx-auto">
        <div className="mx-auto sm:w-[500px] text-center p-4">
          <p className="text-[35px] font-extrabold p-2 text-white">
            Recommended Spa Packages
          </p>
          <p className="text-white">
            Indulge yourself or with your loved one by our unique spa packages
            available only at the Mudita Spa
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
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
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
