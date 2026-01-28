import React from "react";
import Layout from "../../layout/Layout";
// import useService from "../../hooks/adminHook/adminService/useService";
import useGetServiceCategory from "../../hooks/adminHook/getServiceById/useGetServiceCategory";
import { useParams } from "react-router-dom";
const SignatureTreatment = () => {
  const { servicesCategory } = useGetServiceCategory();
  const {slug} = useParams();
  const isSignatureTreatment = slug === 'message-lotion-skin-jasmine';
  const displayTitle = isSignatureTreatment ? 'Signature Treatment' : 'Other Services';
  const displayImage = isSignatureTreatment ? 'https://kimera.in/wp-content/uploads/2025/01/what-is-spa.png' : '';
  return (
    <>
      <Layout>
        <div className="w-full bg-gray-200">
          <div className="w-full">
            <figure>
              <img
                src={displayImage}
                className="w-full object-cover lg:h-[950px] xl:h-[950px] h-[500px]"
                alt=""
              />
            </figure>
          </div>
          <div className="mt-10 max-w-7xl mx-auto">
            <p className="text-center text-[35px] font-extrabold">
              {displayTitle}
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus quibusdam aspernatur fugit, molestias non deleniti est architecto nulla! Ratione et nulla ipsum facere assumenda corrupti consequuntur vero architecto esse!</p>

            <div className="max-w-7xl mx-auto p-6 space-y-6">
              {servicesCategory.map((item, index) => (
                <div
                  key={item.id || index}
                  className="grid grid-cols-1 md:grid-cols-3 h-[350px] gap-6 border border-gray-400 rounded-2xl overflow-hidden shadow-sm"
                >
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={`http://localhost:5000/public/services/${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-1 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">
                          Method:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
                          {item.methods?.map((method, i) => (
                            <li key={i}>{method}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-1 p-6 flex flex-col justify-center items-center bg-gray-50">
                    <p className="text-xl font-semibold text-gray-800">
                      USD {item.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {item.duration} Minutes
                    </p>

                    <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignatureTreatment;
