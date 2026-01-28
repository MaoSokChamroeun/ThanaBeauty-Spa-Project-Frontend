import React from "react";
import Layout from "../layout/Layout";

import useBookingFront from "../hooks/frotendHook/bookingFront/useBookingFront"; // Import your hook
import useServiceFront from "../hooks/frotendHook/useServiceFront";

const Booking = () => {
  const { servicesFront } = useServiceFront();
  const { handleChange, handleSumbitBooking, formData, packages } =
    useBookingFront();

  return (
    <Layout>
      <div className="w-full mt-35 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-5">Book a Service</h2>

          <form
            onSubmit={handleSumbitBooking}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {/* Name Input */}
            <div>
              <label className="block mb-1">Mr / Ms: Name</label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                placeholder="Full Name..."
                className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="012 345 678"
                className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border p-2.5 border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              >
                <option value="">-- Choose Service --</option>
                {servicesFront?.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {/* Change cat.title to cat.title.en or cat.title.kh */}
                    {cat.title?.en} — (${cat.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Package Dropdown */}
            <div>
              <label className="block mb-1">Select Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full border p-2.5 border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              >
                <option value="">-- Choose a Package --</option>
                {packages &&
                  packages.map((pkg) => (
                    <option key={pkg._id} value={pkg._id}>
                      {pkg.package_name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="lg:col-span-3">
              <label className="block mb-1">
                Special Requests / Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Anything we should know?"
                className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500 h-32"
              />
            </div>

            {/* Date Input */}
            <div>
              <label className="block mb-1 font-medium">Appointment Date</label>
              <input
                type="date"
                name="booking_date"
                value={formData.booking_date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]} // Prevent picking past dates
                className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>

            {/* Time Input */}
            <div>
              <label className="block mb-1 font-medium">Preferred Time</label>
              <select
                name="booking_time"
                value={formData.booking_time}
                onChange={handleChange}
                className="border p-2.5 border-gray-400 w-full rounded-md outline-none focus:ring-1 focus:ring-gray-500"
                required
              >
                <option value="">-- Select Time --</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-gray-800 cursor-pointer text-white p-2"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
