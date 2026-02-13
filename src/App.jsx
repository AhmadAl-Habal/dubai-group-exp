import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LoginPage from "./pages/users/LoginPage.jsx";
import AddNewProduct from "./pages/products/AddNewProduct.jsx";
import EditProductPage from "./pages/products/EditProductPage.jsx";
import ProductPage from "./pages/products/ProductPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import FAQPage from "./pages/FAQs/FAQPage.jsx";
import EditFAQPage from "./pages/FAQs/EditFAQPage.jsx";
import AddNewFAQPage from "./pages/FAQs/AddNewFAQPage.jsx";
import ProductsPage from "./pages/products/ProductsPage.jsx";
import AddNewCategoryPage from "./pages/categories/AddNewCategoryPage.jsx";
import EditCategoryPage from "./pages/categories/EditCategoryPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";

import { getSettingsRequest } from "./api/axios.js";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div
      id="app-container"
      className="w-full min-h-screen bg-[#000] overflow-hidden"
    >
      <Routes location={location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-product" element={<AddNewProduct />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/edit-faq/:id" element={<EditFAQPage />} />
          <Route path="/add-faq" element={<AddNewFAQPage />} />
          <Route path="/add-category" element={<AddNewCategoryPage />} />
          <Route path="/edit-category/:id" element={<EditCategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const getSettings = async () => {
  try {
    const settingsData = await getSettingsRequest();

    if (settingsData) {
      sessionStorage.setItem("dollar_value", settingsData.dollar_price);
      sessionStorage.setItem("settings", JSON.stringify(settingsData));
    }
  } catch (error) {
    console.error("Error fetching settings:", error?.message ?? error);
  }
};

function App() {
  useEffect(() => {
    getSettings();
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
