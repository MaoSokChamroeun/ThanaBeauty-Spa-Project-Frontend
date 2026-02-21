import React from "react";
import Layout from "../layout/Layout";
import galery from "../assets/video.png";
import useGetVideoFront from "../hooks/frotendHook/getVideoFront/useGetVideoFront";
import Loading from "../components/Loading";
const Video = () => {
  const { video, loading } = useGetVideoFront();
  console.log("Video frontend", video);
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="w-full lg:mt-10 xl:mt-10 mt-20">
            <figure>
              <img
                src={galery}
                alt="Spa Banner"
                className="w-full h-[400px] md:h-[400px] ​lg:h-[950px] xl:h-[950px] object-cover"
              />
            </figure>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center p-4 lg:p-6 xl:p-6">
                <h1 className="text-7xl​ lg:text-7xl md:text-4xl font-bold">Our Video</h1>
                <p>This all about Video Our Shop </p>
            </div>
            <div className="w-full lg:p-4 xl:p-4">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 sm:gap-2 sm:p-2 md:grid-cols-2 md:gap-2 md:p-2 gap-6">
                {loading && <Loading />}
                {!loading &&
                  video.map((v) => (
                    <div className="lg:w-[450px] lg:h-[450px] xl:w-[450px] mx-auto " key={v._id}>
                      <video
                        src={v.video}
                        className="lg:w-[450px] lg:h-[450px] xl:w-[400px] xl:h-[450px] lg:h-[400px] xl:w-[400px] h-[350px] w-[350px] object-cover rounded-md"
                        controls
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Video;
