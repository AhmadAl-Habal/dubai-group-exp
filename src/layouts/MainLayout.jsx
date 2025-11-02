import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSettingsRequest } from "../api/axios";
import WarnningMessage from "../components/WarnningMessage";
import hero from "../assets/motion2.png";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const getSettings = async () => {
      try {
        const settingsData = await getSettingsRequest();

        if (settingsData) {
          sessionStorage.setItem("dollar_value", settingsData.dollar_price);
          sessionStorage.setItem("settings", JSON.stringify(settingsData));
        }
      } catch (error) {
        console.error("Error fetching settings:", error.message);
      }
    };

    getSettings();
  }, [location]);

  return (
    <>
      <div className="relative min-h-[100vh]">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${hero})`, opacity: 0.7 }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>

        <Navbar />

        <div className="flex-grow relative z-20">
          <Outlet />
        </div>

        <Footer />
      </div>

      <ToastContainer />
    </>
  );
};

export default MainLayout;
