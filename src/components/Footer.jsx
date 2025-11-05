import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const getInitialSettings = () => {
  const storedSettings = sessionStorage.getItem("settings");
  if (storedSettings) {
    return JSON.parse(storedSettings);
  }

  return {};
};
const Footer = () => {
  const [settings, setSettings] = useState(getInitialSettings);

  const { social_media = {} } = settings;

  return (
    <div className="fixed bottom-0 left-0 w-full z-20">
      {" "}
      <footer className="bg-blue-700 p-1 flex justify-between items-center">
        <div className="w-full flex justify-between items-center gap-x-2">
          <div className="flex items-center gap-x-4">
            <img
              className="h-[30px] w-[30px] rounded-full cursor-pointer"
              src={logo}
              alt="Logo"
            />
            <ul className="flex gap-1 xs:gap-4 flex-wrap">
              {social_media.facebook && (
                <li>
                  <a
                    href={social_media.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                  >
                    <FaFacebook />
                    <span className="hidden md:block">Facebook</span>
                  </a>
                </li>
              )}

              {social_media.instagram && (
                <li>
                  <a
                    href={social_media.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram />
                    <span className="hidden md:block">Instagram</span>
                  </a>
                </li>
              )}

              {social_media.telegram && (
                <li>
                  <a
                    href={social_media.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                  >
                    <FaTelegram />
                    <span className="hidden md:block">Telegram</span>
                  </a>
                </li>
              )}

              {social_media.whatsapp_channel && (
                <li>
                  <a
                    href={social_media.whatsapp_channel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
                  >
                    <FaWhatsapp />
                    <span className="hidden md:block">WhatsApp</span>
                  </a>
                </li>
              )}

              {social_media.youtube && (
                <li>
                  <a
                    href={social_media.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                  >
                    <FaYoutube />
                    <span className="hidden md:block">YouTube</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          <p className="font-bold text-xs text-black text-right">
            2024 All rights reserved © <br />
            Made with ❤ in Syria
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
