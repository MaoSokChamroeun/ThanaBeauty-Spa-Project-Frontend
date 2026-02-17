import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import contact from '../assets/contact.png'
import Map from "../components/Map";
const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid px-4 mt-40">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-center font-semibold mb-6 text-[35px]"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            Contact Us
          </p>

          {/* Responsive grid */}
          <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* Image */}
            <div
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <img
                src={contact}
                alt="Contact Poster"
                className="
                w-full h-[400px] object-cover rounded-lg md:w-[800px] mx-auto lg:w-[600px] lg:h-[600px]"
              />
            </div>

            {/* Form */}
            <div
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-xl font-semibold mb-2 nav-link">
                Get in Touch
              </h1>
              <p className="mt-2 nav-link mb-4">
                We'd love to hear from you! Whether you have a question, need
                support, or just want to say hello, drop us a message and we'll
                get back to you shortly.
              </p>

              <form
                className="space-y-4 mt-20"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="700"
                data-aos-easing="ease-in-out"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="text-right flex justify-end">
                  <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[2px] focus:outline-none">
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-[#1a5400] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                      <Link className="text-decoration-none text-white" to={'https://t.me/Mengchhayx99'}>Contact me</Link>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <h1
          className="text-center text-[35px] mb-5"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
          style={{ fontWeight: "bolder" }}
        >
          Our Location
        </h1>
       <Map />
      </div>
    </Layout>
  );
};

export default Contact;
