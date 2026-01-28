import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full mt-10 p-10 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            
           <div className='w-[200px] text-center'>
             <h1 className="text-2xl font-bold">Muthida</h1>
            <span className='font-semibold'>Spa</span>
           </div>
            <p className="mt-2">
              ទីតាំង នៅក្រោយផ្សាររំចែក អូឌឹម03 ផ្លូវជាតិលេខ4
            </p>

            {/* Email */}
            <div className="flex items-center  gap-3 mt-4">
              <span>📧</span>
              <a href="mailto:ninetynineinfo99@gmail.com" className=" uppercase text-decoration-none">
                NINETYNINEME99@GMAIL.COM
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mt-2">
              <span>📞</span>
              <p className='font-bold'>088 238 89 85  / 098 330 880</p>
            </div>
          </div>

          {/* Middle */}
          <div className="md:text-center">
            <p className="font-bold text-lg">Information</p>

            <ul className="mt-3 space-y-2">
              <li className=''><Link to = {'/about'} className=" footer-color font-semibold text-decoration-none ">Home</Link></li>
              <li><Link to={'/contact'} className="footer-color font-semibold text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <h2 className="footer-color">Contact</h2>

            <div className="mt-3 space-y-2">
              <p className="font-semibold">088 238 89 85  / 098 330 880</p>
              <p className="font-semibold">mothidatspa@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Bottom Social + Copy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Social Icons */}
          <div className="flex gap-3 text-3xl mx-auto md:mx-0 bg-gray-300 p-2 px-4 pe-4 rounded-2xl border-1">
            <Link to="https://web.facebook.com/ninetyninex99" >
           <FaFacebook className="text-[#1877F2]" />
              </Link>

              <Link to="">
                <FaTiktok className="text-black" />
              </Link>

              <Link to="https://t.me/Ninetyninex99">
                <FaTelegram className="text-[#229ED9]" />
              </Link>

              <Link to="">
                <FaInstagramSquare className="text-[#E1306C]" />
              </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 text-sm">
            © 2025 Mothida Spa. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
