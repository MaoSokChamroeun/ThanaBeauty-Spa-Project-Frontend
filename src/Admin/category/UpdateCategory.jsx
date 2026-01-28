import React from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import useUpdateCategory from "../../hooks/adminHook/adminCategory/useUpdateCategory";

const UpdateCategory = () => {
  const {categories , formData, setFormData, handleUpdateCategory, loading } =
    useUpdateCategory();
console.log(categories)
  return (
    <div className="flex gap-2 bg-gray-50 min-h-screen">
      <Sidebar />
      <HeroBar>
        <div className="p-6">
          <h1 className="text-[35px] font-bold text-gray-800 mb-4">
            Update Category
          </h1>

          <div className="mb-6">
            <Link
              to={"/admin/dashboard/category"}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors"
            >
              Back
            </Link>
          </div>

          <form
            onSubmit={handleUpdateCategory}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 w-full"
          >
            <h2 className="text-xl font-bold mb-6 text-gray-700">
              Edit Category Details
            </h2>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Category Name"
              className="w-full p-2.5 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category Path
            </label>
            <input
              type="text"
              value={formData.path}
              onChange={(e) => {
                const newName = e.target.value;
                setFormData({
                  ...formData,
            
                  // Automatically turns "Body Massage" into "body-massage"
                  path: newName.toLowerCase().replace(/\s+/g, "-"),
                });
              }}
              placeholder="Category Name"
              className="w-full p-2.5 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <div className="flex items-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 disabled:bg-blue-300 transition-all flex items-center justify-center min-w-[140px]"
              >
                {loading ? <Loading /> : " Update Category"}
              </button>

              <Link
                to={"/admin/dashboard/category"}
                className="bg-red-500 ml-4 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-600 transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </HeroBar>
    </div>
  );
};

export default UpdateCategory;
