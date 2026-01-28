import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import Sidebar from '../Sidebar'
import HeroBar from '../HeroBar'
import useCreateBanner from '../../hooks/adminHook/banner/useCreateBanner'
const CreateBanner = () => {
    const{
        loading,
        preview,
        handleChangeImage,
        handCreateBanner,
        navigate
    } = useCreateBanner();
  return (
    <>
     <div className="flex gap-2">
        <Sidebar />
        <HeroBar>
          <h1 className="text-[35px] p-2 font-bold">Create Banner</h1>
          <button className="bg-blue-600 w-20 h-10 rounded-xs">
            <Link to={"/admin/dashboard/banner"} className="text-white">
              Back
            </Link>
          </button>

          <form
            onSubmit={handCreateBanner}
            className="bg-white p-6 mt-5 rounded-xl shadow-md space-y-4 border border-gray-100"
          >
        

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Banner Image
              </label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={handleChangeImage}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
            </div>

            {/* Image Preview */}
            {preview && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-40 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                {loading ? (
                  <>
                    <Loading />
                  </>
                ) : (
                  "Save"
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard/banner")}
                className="w-30 cursor-pointer bg-red-500 text-gray-100 py-2.5 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </HeroBar>
      </div>
    </>
  )
}

export default CreateBanner
