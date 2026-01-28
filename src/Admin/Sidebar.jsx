import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useLogout from "../hooks/adminHook/logout/useLogout";

const Sidebar = () => {
  const location = useLocation();

  const {logout} = useLogout()

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="h-screen p-3 space-y-2 w-60 dark:bg-gray-50 dark:text-gray-800"
      bis_skin_checked="1"
    >
      <div className="flex items-center p-2 space-x-4" bis_skin_checked="1">
        <div bis_skin_checked="1">
          <div className="flex items-center cursor-pointer">
            <div className="text-[#aa9fc7] text-xl font-bold flex flex-col leading-tight tracking-widest">
              <span>MUDITA</span>
              <span className="text-[10px] text-center tracking-[0.4em] font-bold text-black">
                SPA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y dark:divide-gray-300" bis_skin_checked="1">
        <ul className="pt-2 pb-4 space-y-6 text-sm">
          <li className={`dark:bg-gray-100 dark:text-gray-900`}>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard/package"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard/package") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>

              <span>Package</span>
            </Link>
          </li>

          <li>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard/category"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard/category") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <span>Category</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard/services"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard/services") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard/booking"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard/booking") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <span>Booking</span>
            </Link>
          </li>

          <li>
            <Link
              rel="noopener noreferrer"
              to={"/admin/dashboard/banner"}
              className={`flex items-center p-2 space-x-3 rounded-md ${isActive("/admin/dashboard/banner") ? "bg-gray-300" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span>Banner</span>
            </Link>
          </li>
          <li className="">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>

                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>

              <button
                onClick={logout}
                className="cursor-pointer mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
