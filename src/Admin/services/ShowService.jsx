import React, { useState } from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import useService from "../../hooks/adminHook/adminService/useService";
import useDeleteService from "../../hooks/adminHook/adminService/useDeleteSeervice";

const ShowService = () => {
  const { services, loading, getAllService } = useService();
  const { deleteService, loading: isDeleting } = useDeleteService();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this number as needed

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((services?.length || 0) / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <HeroBar>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Service Management
            </h1>
            <Link
              to={"/admin/dashboard/services/create"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2"
            >
              <span className="text-xl">+</span> Create Service
            </Link>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title (KH / EN / CH)</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Minutes</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-10 text-center">
                        <Loading />
                      </td>
                    </tr>
                  ) : currentServices && currentServices.length > 0 ? (
                    currentServices.map((item, index) => (
                      <tr className="hover:bg-gray-50 transition-colors" key={item._id}>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          #{indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-6 py-4">
                          <img
                            src={`http://localhost:5000/public/services/${item.image}`}
                            alt={item.title?.en || "service"}
                            className="w-12 h-12 object-cover rounded-md border border-gray-200"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                            }}
                          />
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="font-bold text-gray-900">{item.title?.kh}</div>
                          <div className="text-gray-500 italic text-xs">{item.title?.en}</div>
                          <div className="text-gray-500 italic text-xs">{item.title?.ch}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.category?.name}</td>
                        <td className="px-6 py-4 text-sm font-bold text-red-600">${item.price}</td>
                        <td className="px-6 py-4 text-sm font-bold text-green-600">{item.duration} Min</td>
                        <td className="px-6 py-4 text-sm">
                          <div className="font-bold text-gray-900 truncate max-w-xs">{item.description?.kh}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center gap-3">
                            <Link
                              to={`/admin/dashboard/services/edit/${item._id}`}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>
                            </Link>
                            <button
                              onClick={() => deleteService(item._id, getAllService)}
                              disabled={isDeleting}
                              className={`p-2 cursor-pointer text-red-600 hover:bg-red-50 rounded-full transition-colors ${isDeleting ? "opacity-50" : ""}`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-6 py-10 text-center text-gray-400">
                        No services found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {!loading && services?.length > itemsPerPage && (
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700 font-medium">
                  Showing <span className="text-blue-600">{indexOfFirstItem + 1}</span> to{" "}
                  <span className="text-blue-600">{Math.min(indexOfLastItem, services?.length)}</span> of{" "}
                  <span>{services?.length}</span> services
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex gap-1">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`px-3.5 py-2 text-sm font-semibold rounded-lg cursor-pointer transition-all ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                            : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </HeroBar>
    </div>
  );
};

export default ShowService;