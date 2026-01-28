import React from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import useBooking from "../../hooks/adminHook/booking/useBooking";
import Loading from "../Loading";
import useDeleteBooking from "../../hooks/adminHook/booking/useDeleteBooking";

const ShowBooking = () => {
  const { booking, loading, getAllBooking } = useBooking();
  const { deleteBooking, loading: isDeleting } = useDeleteBooking();
  return (
    <>
      <div className="flex gap-2">
        <Sidebar />
        <HeroBar>
          <h1 className="text-[35px] p-6 font-bold">
            All Customer Booking Information
          </h1>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Package Name
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Service Name
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Booking Date
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Decription
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-10 text-center">
                        <Loading />
                      </td>
                    </tr>
                  ) : booking && booking.length > 0 ? (
                    booking.map((item, index) => (
                      <tr
                        className="hover:bg-gray-50 transition-colors"
                        key={item._id}
                      >
                        <td className="px-6 py-4 text-sm text-gray-500">
                          #{index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.client_name} <br />
                          <span className="text-xs font-bold text-red-600">
                            {item.phone}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.package?.package_name || "No Package"}
                        </td>

                         <td className="px-6 py-4 text-sm">
                          <div className="font-bold text-gray-900">{item.service?.title?.kh}</div>
                          <div className="text-gray-500 italic text-xs">{item.service?.title?.en}</div>
                          <div className="text-gray-500 italic text-xs">{item.service?.title?.ch}</div>
                        </td>

                        <td className="px-6 py-4 text-sm font-bold text-red-600">
                          ${item.service?.price || "0"}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-600">
                          {item.booking_date} <br />
                          <span>{item.booking_time}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.description || "0"}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              item.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : item.status === "complete"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td>
                          <button
                            // 3. Pass the ID and the refresh callback
                            onClick={() =>
                              deleteBooking(item._id, getAllBooking)
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
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-10 text-center text-gray-400"
                      >
                        No bookings found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </HeroBar>
      </div>
    </>
  );
};

export default ShowBooking;
