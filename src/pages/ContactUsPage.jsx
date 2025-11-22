import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const ContactUsPage = () => {
  return (
    <div className="relative min-h-[100vh]">
      <div className="relative w-[80vw] mx-auto bg-transparent py-7 text-white">
        {/* زر الرجوع */}
        <BackButton />

        {/* حاوية المحتوى مع اتجاه النص من اليمين لليسار */}
        <div dir="rtl" className="mt-10 flex flex-col gap-8">
          {/* السطر الأول والثاني: قسم العروض */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              لتصفح جميع عروض اللابتوبات
            </h2>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              الذهاب إلى الرئيسية
            </Link>
          </div>

          {/* السطر الثالث والرابع: قسم التواصل */}
          <div>
            <h2 className="text-xl font-bold mb-3">للتواصل معنا</h2>
          <h2 dir="ltr" className="text-right text-xl font-bold mb-3">
  <a href="tel:0997824209" className="hover:text-blue-500 transition-colors">
    0997 824 209
  </a>
</h2>
            <a
              href="https://wa.link/5vn9ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
