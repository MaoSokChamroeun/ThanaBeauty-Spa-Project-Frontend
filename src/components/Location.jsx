import React from "react";
import Layout from "../layout/Layout";
import GoogleMap from "./GoogleMap";

const Location = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full">
            <figure>
              <img
                src="https://www.victoria-house.com/wp-content/uploads/2019/04/victoria-house-spa-staff.jpg"
                className="w-full h-[500px] object-cover lg:h-[950px] xl:h-[950px]"
                alt=""
              />
            </figure>
          </div>

          <div className="max-w-7xl mx-auto mt-5 lg:grid-cols-2 lg:mt-10 xl:mt-10">
            <p className="text-center font-extrabold text-[35px] mb-10">
              Location
            </p>
            <div>
              <figure className="w-full lg:w-[700px] mt-5 lg:grid-cols-2 lg:mt-10 ">
                <img
                  src="https://aquaviaspa.com/img/c/8-category_default.jpg"
                  className="w-full object-cover"
                  alt=""
                />
              </figure>
            </div>
            <div></div>
          </div>

          <div className="max-w-7xl mx-auto mt-15">
            <GoogleMap />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Location;
