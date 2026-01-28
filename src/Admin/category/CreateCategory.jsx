import React from "react";
import Sidebar from "../Sidebar";
import HeroBar from "../HeroBar";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import useCreateCategory from "../../hooks/adminHook/adminCategory/useCreateCategory";
const CreateCateory = () => {
  const { formData, setFormData, handleCreateCategory, loading } =
    useCreateCategory();
  return (
    <>
      <div className="flex gap-2">
        <Sidebar />
        <HeroBar>
          <h1 className="text-[35px] p-2 font-bold">Create Package</h1>
          <button className="bg-blue-600 w-20 h-10 rounded-xs">
            <Link to={"/admin/dashboard/category"} className="text-white">
              Back
            </Link>
          </button>

          <form
            onSubmit={handleCreateCategory}
            className="p-4 bg-white rounded-lg shadow mt-4"
          >
            <h2 className="text-xl font-bold mb-4">Add New Category</h2>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Dreamy Spa Treatment"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Package Name
              </label>
              <input
                type="text"
                name="path"
                required
                value={formData.path}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Dreamy Spa Treatment"
                onChange={(e) => {
                  const newName = e.target.value;
                  setFormData({
                    ...formData,
                    path: newName.toLowerCase().replace(/\s+/g, "-"),
                  });
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? (
                <>
                  <Loading />
                </>
              ) : (
                "Create Category"
              )}
            </button>
          </form>
        </HeroBar>
      </div>
    </>
  );
};

export default CreateCateory;
