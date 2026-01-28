import React from "react";
import Layout from "../layout/Layout";
import category from '../hooks/frotendHook/category'
const Booking = () => {
    const {categoriesFront} = category();
    console.log('Category' , categoriesFront)
  return (
    <>
      <Layout>
        <div className="w-full mt-35">
          <div className="max-w-7xl mx-auto ">
            <form action="" className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-3">
              <div>
                <label htmlFor="">Mr / Md : Name</label>
                <input type="text" placeholder="Mr.name..." className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500" />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Mr.name..." className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500" />
              </div>
              <div>
                <label htmlFor="">Servie</label>
                <select name="category" id=""  className="w-full border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500">
                    <option value="">Select a Category</option>
                  {categoriesFront &&
                    categoriesFront.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="">Description</label>
                <textarea type="text" placeholder="Mr.name..." className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Booking;
