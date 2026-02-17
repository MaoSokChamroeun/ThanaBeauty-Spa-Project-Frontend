
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import HeroBar from "./HeroBar";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import useService from "../hooks/adminHook/adminService/useService";
import usePosts from "../hooks/adminHook/adminPost/usePosts";
import useCategory from "../hooks/adminHook/adminCategory/useCategory";

const Dashboard = () => {
  const navigate = useNavigate();
  const { services } = useService();
  const { posts } = usePosts();
  const { categories } = useCategory();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // --- Calculations ---
  const totalPrice = services?.reduce((acc, item) => acc + (Number(item.price) || 0), 0) || 0;
  const avgPrice = services?.length > 0 ? (totalPrice / services.length).toFixed(2) : 0;
  const maxPrice = services?.length > 0 ? Math.max(...services.map(s => Number(s.price) || 0)) : 0;

  const chartData = {
    labels: ['Services', 'Posts', 'Categories'],
    datasets: [
      {
        label: 'Total Count',
        data: [services?.length || 0, posts?.length || 0, categories?.length || 0],
        backgroundColor: ['rgba(59, 130, 246, 0.6)', 'rgba(16, 185, 129, 0.6)', 'rgba(249, 115, 22, 0.6)'],
        borderColor: ['#3b82f6', '#10b981', '#f97316'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <HeroBar>
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-500">Real-time overview of your platform content and finances.</p>
          </div>

          {/* 1. Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-blue-500">
              <p className="text-sm font-medium text-gray-400 uppercase">Total Services</p>
              <p className="text-3xl font-bold text-gray-800">{services?.length || 0}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-green-500">
              <p className="text-sm font-medium text-gray-400 uppercase">Total Posts</p>
              <p className="text-3xl font-bold text-gray-800">{posts?.length || 0}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-orange-500">
              <p className="text-sm font-medium text-gray-400 uppercase">Categories</p>
              <p className="text-3xl font-bold text-gray-800">{categories?.length || 0}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-purple-500">
              <p className="text-sm font-medium text-gray-400 uppercase">Premium Price</p>
              <p className="text-3xl font-bold text-gray-800">${maxPrice}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2. Chart Section (Takes up 2 columns) */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-700 mb-4">Content Distribution</h2>
              <div className="h-[300px]">
                <Bar data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
              </div>
            </div>

            {/* 3. Financial Summary Card (Takes up 1 column) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Price Analysis</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-500">Total Value</span>
                    <span className="font-bold text-blue-600">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-500">Avg. Service</span>
                    <span className="font-bold text-green-600">${avgPrice}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-xs text-blue-700 leading-relaxed">
                  Your current inventory consists of <b>{services?.length}</b> items. 
                  Increasing your average price by 10% would add <b>${(totalPrice * 0.1).toFixed(2)}</b> to the total value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroBar>
    </div>
  );
};

export default Dashboard;