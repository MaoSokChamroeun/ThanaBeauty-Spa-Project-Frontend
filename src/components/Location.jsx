import React from "react";
import Layout from "../layout/Layout";
import GoogleMap from "./GoogleMap";
import cover from "../assets/cover.png";
import Map from "./Map";
const Location = () => {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full">
            <figure>
              <img
                src={cover}
                className="w-full h-[500px] object-cover lg:h-[950px] xl:h-[950px]"
                alt=""
              />
            </figure>
          </div>

          <div className="max-w-full mx-auto mt-5 lg:grid-cols-2 lg:mt-10 xl:mt-10">
            <p className="text-center font-extrabold text-[35px] mb-10">
              Location
            </p>
            <div>
              <Map />
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Location;
