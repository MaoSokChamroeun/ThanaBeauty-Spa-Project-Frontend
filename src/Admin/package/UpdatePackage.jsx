import React from 'react'
import Sidebar from '../Sidebar'
import HeroBar from '../HeroBar'
import { Link } from 'react-router-dom'
import useUpdatePackage from '../../hooks/adminHook/adminPackage/useUpdatePackage'
import Loading from '../Loading'

const UpdatePackage = () => {
  const {
    formData,
    handleUpdateSubmit,
    handleImageChange,
    handleChange,
    loading,
    preview,
    navigate,
  } = useUpdatePackage()

  return (
    <div className="flex gap-2">
      <Sidebar />
      <HeroBar>
        <h1 className="text-[35px] p-2 font-bold">Update Package</h1>
        
        <button className='bg-blue-600 w-20 h-10 rounded-sm flex items-center justify-center mb-4'>
          <Link to={'/admin/dashboard/package'} className='text-white'>Back</Link>
        </button>

        <form onSubmit={handleUpdateSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-100">
          {/* Package Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
            <input
              type="text"
              name="package_name"
              required
              value={formData.package_name || ''} // Added fallback to prevent uncontrolled input warning
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Dreamy Spa Treatment"
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price || ''} // Added fallback
              required
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="55"
              onChange={handleChange}
            />
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input
              type="text"
              name="description"
              required
              value={formData.description || ''} // Added fallback to prevent uncontrolled input warning
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Dreamy Spa Treatment"
              onChange={handleChange}
            />
          </div>

          {/* Image Upload - REMOVED 'required' */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package Image <span className="text-gray-400 text-xs">(Leave empty to keep current)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          {/* Image Preview */}
          {preview && (
              <div className="mt-4 p-2 bg-gray-50 rounded-lg border border-dashed border-gray-300 inline-block">
                <p className="text-xs text-gray-500 mb-2 font-medium">Image Preview:</p>
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-48 h-48 object-cover rounded-lg shadow-sm"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/200?text=Image+Not+Found";
                  }}
                />
              </div>
            )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-50 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300 flex justify-center items-center"
            >
              {loading ? <Loading /> : "Update Package"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard/package")}
              className="w-30 cursor-pointer bg-red-500 text-gray-100 py-2.5 rounded-lg font-bold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </HeroBar>
    </div>
  )
}

export default UpdatePackage