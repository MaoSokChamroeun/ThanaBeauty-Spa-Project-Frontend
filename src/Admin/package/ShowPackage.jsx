import React from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import { Link } from "react-router-dom";
import usePackage from "../../hooks/adminHook/adminPackage/usePackage";
import Loading from "../Loading";
import useDelete from "../../hooks/adminHook/adminPackage/useDelete";

const ShowPackage = () => {
  const { packages, loading, getAllPackage } = usePackage();
  const { deletePackage, loading: isDeleting } = useDelete();
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <HeroBar>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Package Management
            </h1>
            <Link
              to={"/admin/dashboard/package/create"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2"
            >
              <span className="text-xl">+</span> Create Package
            </Link>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Package Name
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-10 text-center text-gray-500"
                      >
                        <Loading />
                      </td>
                    </tr>
                  ) : packages && packages.length > 0 ? (
                    packages.map((item, index) => (
                      <tr
                        className="hover:bg-gray-50 transition-colors"
                        key={item._id}
                      >
                        <td className="px-6 py-4 text-sm text-gray-500">
                          #{index + 1}
                        </td>
                        <td className="px-6 py-4">
                          <img
                            src={`http://localhost:5000/public/packages/${item.image}`}
                            alt={item.package_name}
                            className="w-12 h-12 object-cover rounded-md border border-gray-200"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.package_name}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-red-600">
                          ${item.price}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold border-gray-200">
                          {item.description}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center gap-3">
                            <button
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                              title="Edit"
                            >
                             <Link to={`/admin/dashboard/package/edit/${item._id}`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                             </Link>
                            </button>
                            <button
                              // 3. Pass the ID and the refresh callback
                              onClick={() =>
                                deletePackage(item._id, getAllPackage)
                              }
                              disabled={isDeleting}
                              className={`p-2 cursor-pointer text-red-600 hover:bg-red-50 rounded-full transition-colors ${
                                isDeleting ? "opacity-50" : ""
                              }`}
                              title="Delete"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-10 text-center text-gray-400"
                      >
                        No packages found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </HeroBar>
    </div>
  );
};

export default ShowPackage;
