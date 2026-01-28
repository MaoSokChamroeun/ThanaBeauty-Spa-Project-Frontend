// import React from 'react'
// import Sidebar from '../Sidebar'
// import HeroBar from '../HeroBar'
// import { Link } from 'react-router-dom'
// import Loading from '../Loading'
// import useUpdateService from '../../hooks/adminHook/adminService/useUpdateService'
// const UpdateService = () => {
//  const {
//     formData,
//     categories, // Destructure categories
//     handleUpdateSubmit,
//     handleImageChange,
//     handleChange,
//     loading,
//     preview,
//     navigate,
//   } = useUpdateService()

//   return (
//     <div className="flex gap-2">
//       <Sidebar />
//       <HeroBar>
//         <h1 className="text-[35px] p-2 font-bold">Update Service</h1>
        
//         <button className='bg-blue-600 w-20 h-10 rounded-sm flex items-center justify-center mb-4'>
//           <Link to={'/admin/dashboard/services'} className='text-white'>Back</Link>
//         </button>

//         <form onSubmit={handleUpdateSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-100">
//           {/* Package Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
//             <input
//               type="text"
//               name="title"
//               required
//               value={formData.title || ''} // Added fallback to prevent uncontrolled input warning
//               className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="e.g. Dreamy Spa Treatment"
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Service Category</label>
//             <select
//               name="category"
//               required
//               value={formData.category || ''}
//               onChange={handleChange}
//               className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
//             >
//               <option value="">Select a Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price || ''} // Added fallback
//               required
//               className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="55"
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Minutes</label>
//             <input
//               type="number"
//               name="duration"
//               value={formData.duration || ''} // Added fallback
//               required
//               className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="60"
//               onChange={handleChange}
//             />
//           </div>
//            <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Service Description ($)</label>
//             <input
//               type="text"
//               name="description"
//               value={formData.description || ''} // Added fallback
//               required
//               className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="ex.description"
//               onChange={handleChange}
//             />
//           </div>
//           {/* Image Upload - REMOVED 'required' */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Package Image <span className="text-gray-400 text-xs">(Leave empty to keep current)</span>
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
//             />
//           </div>

//           {/* Image Preview */}
//           {preview && (
//               <div className="mt-4 p-2 bg-gray-50 rounded-lg border border-dashed border-gray-300 inline-block">
//                 <p className="text-xs text-gray-500 mb-2 font-medium">Image Preview:</p>
//                 <img 
//                   src={preview} 
//                   alt="Preview" 
//                   className="w-48 h-48 object-cover rounded-lg shadow-sm"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://via.placeholder.com/200?text=Image+Not+Found";
//                   }}
//                 />
//               </div>
//             )}

//           {/* Action Buttons */}
//           <div className="flex gap-3 pt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-40 cursor-pointer bg-blue-600 text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-blue-300 flex justify-center items-center"
//             >
//               {loading ? <Loading /> : "Update Service"}
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate("/admin/dashboard/services")}
//               className="w-30 cursor-pointer bg-red-500 text-gray-100 py-2.5 rounded-lg font-bold hover:bg-gray-300 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </HeroBar>
//     </div>
//   )
// }

// export default UpdateService

import React from 'react'
import Sidebar from '../Sidebar'
import HeroBar from '../HeroBar'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import useUpdateService from '../../hooks/adminHook/adminService/useUpdateService'

const UpdateService = () => {
  const {
    formData,
    categories,
    handleUpdateSubmit,
    handleImageChange,
    handleLangChange, // បន្ថែម function នេះសម្រាប់ប្តូរភាសា
    handleChange,
    loading,
    preview,
    navigate,
  } = useUpdateService()
console.log("Category", categories)
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <HeroBar>
        <div className="flex justify-between items-center p-2 mb-4">
          <h1 className="text-[35px] font-bold text-gray-800">Update Service</h1>
          <Link 
            to={'/admin/dashboard/services'} 
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md'
          >
            Back
          </Link>
        </div>

        <form onSubmit={handleUpdateSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-100">
          
          {/* --- ផ្នែកចំណងជើង (Multilingual Titles) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-blue-50/30 rounded-xl border border-blue-100">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Title (KH)</label>
              <input
                type="text"
                required
                value={formData.title?.kh || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="ឈ្មោះសេវាកម្ម (ខ្មែរ)"
                onChange={(e) => handleLangChange(e, 'kh', 'title')}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Title (EN)</label>
              <input
                type="text"
                required
                value={formData.title?.en || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Service Name (English)"
                onChange={(e) => handleLangChange(e, 'en', 'title')}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Title (CH)</label>
              <input
                type="text"
                required
                value={formData.title?.ch || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="服务名称 (中文)"
                onChange={(e) => handleLangChange(e, 'ch', 'title')}
              />
            </div>
          </div>

          {/* --- ផ្នែកពិពណ៌នា (Multilingual Descriptions) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Description (KH)</label>
              <textarea
                required
                value={formData.description?.kh || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => handleLangChange(e, 'kh', 'description')}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Description (EN)</label>
              <textarea
                required
                value={formData.description?.en || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => handleLangChange(e, 'en', 'description')}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Description (CH)</label>
              <textarea
                required
                value={formData.description?.ch || ''}
                className="w-full p-2.5 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => handleLangChange(e, 'ch', 'description')}
              />
            </div>
          </div>

          {/* --- ទិន្នន័យទូទៅ (General Data) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Category</label>
              <select
                name="category"
                required
                value={formData.category || ''}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="">Select a Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price || ''}
                required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="55"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minutes</label>
              <input
                type="number"
                name="duration"
                value={formData.duration || ''}
                required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="60"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:flex-row gap-8 items-start pt-4 border-t border-gray-100">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Image <span className="text-gray-400 text-xs">(Leave empty to keep current)</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
            </div>

            {preview && (
              <div className="relative">
                <p className="text-xs text-gray-500 mb-2 font-medium">Image Preview:</p>
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-40 h-40 object-cover rounded-xl shadow-md border-2 border-white ring-1 ring-gray-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/200?text=Image+Not+Found";
                  }}
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-48 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg disabled:bg-blue-300 flex justify-center items-center"
            >
              {loading ? <Loading /> : "Update Service"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard/services")}
              className="w-32 bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-all shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </HeroBar>
    </div>
  )
}

export default UpdateService