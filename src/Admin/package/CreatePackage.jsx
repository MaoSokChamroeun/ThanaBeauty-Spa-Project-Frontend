import React from 'react'
import Sidebar from '../Sidebar'
import HeroBar from '../HeroBar'
import { Link } from 'react-router-dom'
import useCreatePackage from '../../hooks/adminHook/adminPackage/useCreatePackage'
import Loading from '../Loading'
const CreatePackage = () => { 
    const {handleSubmit , handleImageChange , handleChange , loading , preview , navigate} = useCreatePackage()
  return (
   <>
        <div className="flex gap-2">
        <Sidebar />
          <HeroBar>
             <h1 className="text-[35px] p-2 font-bold">Create Package</h1>
              <button className='bg-blue-600 w-20 h-10 rounded-xs'>
                  <Link to={'/admin/dashboard/package'} className='text-white'>Back</Link>
                </button>

                <form onSubmit={handleSubmit} className="bg-white p-6 mt-5 rounded-xl shadow-md space-y-4 border border-gray-100">
            {/* Package Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
              <input
                type="text"
                name="package_name"
                required
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
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="ex.description"
                onChange={handleChange}
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Package Image</label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
            </div>

            {/* Image Preview */}
            {preview && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Image Preview:</p>
                <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg border shadow-sm" />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-40 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
              >
                {loading ? <><Loading /></> : "Save Package"}
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
   </>
  )
}

export default CreatePackage