import React from 'react'
import Layout from '../../layout/Layout'
import useGetPostSlug from '../../hooks/frotendHook/getPostSlug/useGetPostSlug'
import { useLang } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const PostSlug = () => {
    const {lang} = useLang()
    const { postSlug } = useGetPostSlug();
    return (
        <Layout>
          <div className='mt-40'>
        <div className="max-w-7xl mx-auto pt-5">
          {postSlug.map((post, index) => (
            <div
              key={post._id || index}
              className={`w-full p-2 grid grid-cols-1 lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 mb-20 items-center`}
            >
              
              <div className="w-full lg:w-1/2">
                <figure className="overflow-hidden rounded-md shadow-lg">
                  <img
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    src={`${import.meta.env.VITE_API_URL}public/posts/${post.image}`}
                    alt={post.title?.[lang]}
                  />
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-5">
                <div className="max-w-xl">
                  <p className="text-[30px] font-bold text-[#386324] leading-tight">
                    {post.title?.[lang]}
                  </p>
                  <p className="text-[18px] mt-4 text-gray-600 line-clamp-3">
                    {post.content?.[lang]}
                  </p>

                  <div className="mt-5">
                    <p className="font-semibold text-gray-500">Tags</p>
                    <span className="inline-block mt-1 bg-gray-100 px-3 py-5 rounded-full text-sm">
                      {post.tags}
                    </span>
                  </div>

                  <button className="mt-10 bg-[#386324] hover:bg-black transition-colors w-40 h-12 text-white rounded-md">
                    <Link to={`/booking`}>Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
        </Layout>
    );
}

export default PostSlug;