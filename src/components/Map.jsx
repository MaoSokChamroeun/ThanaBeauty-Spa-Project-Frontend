import React from "react";

const Map = () => {
  return (
    <>
      <div
        className="w-full h-96 md:h-96 rounded-lg shadow-md overflow-hidden mt-10"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.8677308949996!2d104.92017507586716!3d11.561338544224093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMzJzQwLjgiTiAxMDTCsDU1JzIxLjkiRQ!5e0!3m2!1sen!2skh!4v1771344562415!5m2!1sen!2skh"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default Map;
