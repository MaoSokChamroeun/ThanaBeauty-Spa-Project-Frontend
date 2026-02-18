import React from "react";
import usePostFront from "../../hooks/frotendHook/postFront/usePostFront";
import { useLang } from "../context/LanguageContext";
import { Link } from "react-router-dom";
const Welcome = () => {
  const { postFront } = usePostFront();
  const { lang } = useLang();
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-center font-extrabold text-[40px] mt-15 text-gray-800">
              Welcome To Thana Beauty Spa
            </p>
            <p className="text-center text-gray-800">
              The Largest Luxury Spa in Thana Beauty Spa
            </p>
          </div>
          {postFront.slice(0, 1).map((items, index) => (
            <div className="w-full grid grid-cols-1 mt-10 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-2"  key={items._id || index}>
              <div className="sm:w-full lg:w-full xl:w-full">
                <figure
                  className="h-[400px] lg:h-[500px] w-full rounded-md"
                  key={items._id || index}
                >
                  <img
                    src={`http://localhost:5000/public/posts/${items.image}`}
                    alt={items.title || "post image"}
                    className="w-full h-full object-cover rounded-md"
                  />
                </figure>
              </div>

              <div className="flex flex-col justify-between">
                <div className="w-full">
                  <p className="text-[35px] font-extrabold text-gray-800">
                    {items.title?.[lang]}
                  </p>
                </div>
                <div className="lg:w-[600px] mt-10 w-ful">
                  <p className="text-gray-800">
                    {items.content?.[lang]}
                  </p>
                </div>
                <div>
                  <button className="mt-10 bg-[#386324] hover:bg-black transition-colors w-40 h-12 text-white rounded-md">
                    <Link to={`/post/${items.slug}`}>Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Welcome;
