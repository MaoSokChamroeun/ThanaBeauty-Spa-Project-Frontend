import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "flowbite";
import Contact from "./pages/Contact";
import Location from "./components/Location";
import SignatureTreatment from "./components/spa-menu/SignatureTreatment";
// import SpaPackages from "./components/spa-menu/SpaPackages";
import Gallery from "./components/Gallery";
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";
import ProtectedRoute from "./Admin/ProtectedRoute";
import { Navigate } from "react-router-dom";
import ShowPackage from "./Admin/package/ShowPackage";
import ShowService from "./Admin/services/ShowService";
import ShowBooking from "./Admin/booking/ShowBooking";
import CreatePackage from "./Admin/package/CreatePackage";
import CreateService from "./Admin/services/CreateService";
import UpdatePackage from "./Admin/package/UpdatePackage";
import UpdateService from "./Admin/services/UpdateService";
import Category from "./Admin/category/Category";
import CreateCateory from "./Admin/category/CreateCategory";
import UpdateCategory from "./Admin/category/UpdateCategory";
import NotFound from "./components/NotFound";
import ShowBanner from "./Admin/banners/ShowBanner";
import CreateBanner from "./Admin/banners/CreateBanner";
import UpdateBanner from "./Admin/banners/UpdateBanner";
import SpaPackages from "./components/spa-menu/SpaPackages";
import {useLang} from './components/context/LanguageContext.jsx';
import Booking from "./pages/Booking.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowPost from "./Admin/adPost/ShowPost.jsx";
import CreatePost from "./Admin/adPost/CreatePost.jsx";
import UpdatePost from "./Admin/adPost/UpdatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import PostSlug from "./components/blogPostSlug/PostSlug.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ShowGallery from "./Admin/gallery/ShowGallery.jsx";
import CreateGallery from "./Admin/gallery/CreateGallery.jsx";
import UpdateGallery from "./Admin/gallery/UpdateGallery.jsx";
import Video from "./pages/Video.jsx";
import ShowVideo from "./Admin/adVideo/ShowVideo.jsx";
import CreateVideo from "./Admin/adVideo/CreateVideo.jsx";
import UpdateVideo from "./Admin/adVideo/UpdateVideo.jsx";
function App() {
  const {lang} = useLang();
  const fontClass = lang === 'kh' ? 'font-kantumruy' : 'font-josefin';
  return (
    <>
      <div className={fontClass}>
       
        <ToastContainer position="top-right" autoClose={3000} />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/video" element = {<Video />} />

            <Route path="/booking" element = {<Booking />} />
            <Route path="/services/message-lotion-skin-jasmine" 
            element={<SpaPackages categorySlug="message-lotion-skin-jasmine" />}
            />
            <Route path="/services/foot-message"
              element={<SpaPackages categorySlug="foot-message" />}
            />
            <Route path="/services/scrub-message"
              element={<SpaPackages categorySlug="scrub-message" />}
            />
            <Route path="/services/4-hand-body-message"
              element={<SpaPackages categorySlug="4-hand-body-message" />}
            />
            <Route path="/services/foot-scrub-smoothen-message"
              element={
                <SpaPackages categorySlug="foot-scrub-smoothen-message" />
              }
            />
            <Route path="/services/full-body-message"
              element={<SpaPackages categorySlug="full-body-message" />}
            />
            <Route path="/services/4-hand-oil-message"
              element={<SpaPackages categorySlug="4-hand-oil-message" />}
            />
            <Route path="/services/oil-message"
              element={<SpaPackages categorySlug="oil-message" />}
            />
            <Route path="/services/compress-message"
              element={<SpaPackages categorySlug="compress-message" />}
            />
            <Route path="/services/coconut-oil-message"
              element={<SpaPackages categorySlug="coconut-oil-message" />}
            />
            <Route path="/services/scalping-message"
              element={<SpaPackages categorySlug="scalping-message" />}
            />
            <Route path="/services/hot-scented-candles"
              element={<SpaPackages categorySlug="hot-scented-candles" />}
            />
            <Route path="/services/cupping-message"
              element={<SpaPackages categorySlug="cupping-message" />}
            />

            {/* slug post */}
            <Route path="/post/:slug"
              element={<PostSlug postSlug = "moon-light-spa-massage-promotion" />}
            /> 
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/dashboard/package" element={<ShowPackage />} />
            <Route path="/admin/dashboard/package/edit/:id"
              element={<UpdatePackage />}
            />
            <Route path="/admin/dashboard/services/edit/:id"
              element={<UpdateService />}
            />
            <Route path="/admin/dashboard/package/create"
              element={<CreatePackage />}
            />
             <Route path="/admin/dashboard/posts" element={<ShowPost />} />
             <Route path="/admin/dashboard/post/create" element={<CreatePost />} />
             
            <Route path="/admin/dashboard/services" element={<ShowService />} />
            <Route path="/admin/dashboard/services/create"
              element={<CreateService />}
            />
            <Route path="/admin/dashboard/booking" element={<ShowBooking />} />
            <Route path="/admin/dashboard/category" element={<Category />} />
            <Route path="/admin/dashboard/gallery" element = {<ShowGallery />} />
            <Route path="/admin/dashboard/gallery/create" element = {<CreateGallery />} />
             <Route path="/admin/dashboard/video" element={<ShowVideo />} />
             <Route
              path="/admin/dashboard/video/create"
              element={<CreateVideo />}
            />
            <Route
              path="/admin/dashboard/category/create"
              element={<CreateCateory />}
            />
            <Route
              path="/admin/dashboard/category/edit/:id"
              element={<UpdateCategory />}
            />
             <Route
              path="/admin/dashboard/gallery/edit/:id"
              element={<UpdateGallery />}
            />
             <Route
              path="/admin/dashboard/video/edit/:id"
              element={<UpdateVideo />}
            />
            <Route
              path="/admin/dashboard/posts/edit/:id"
              element={<UpdatePost />}
            />

            <Route path="/admin/dashboard/banner" element={<ShowBanner />} />
            <Route
              path="/admin/dashboard/banner/create"
              element={<CreateBanner />}
            />
            <Route
              path="/admin/dashboard/banner/edit/:id"
              element={<UpdateBanner />}
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

//
//

// Read More
