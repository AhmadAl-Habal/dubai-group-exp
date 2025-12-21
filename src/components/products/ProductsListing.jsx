import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "../Spinner";
import { getProducts } from "../../api/axios.js";


// Ensures a stable React key per product so filtering/sorting/search won't mix up card state.
// If the API doesn't provide a unique id, we generate one once when data is fetched.
const withStableKeys = (data) => {
  if (!Array.isArray(data)) return [];
  return data.map((p) => {
    const stable = p?.id ?? p?._id ?? p?.product_id ?? p?.sku ?? p?.slug;
    if (stable !== undefined && stable !== null && String(stable).length > 0) {
      return { ...p, __key: String(stable) };
    }
    const generated =
      (typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID()) ||
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return { ...p, __key: generated };
  });
};

const ProductsListing = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(99);

  // 1. إضافة "حالة" جديدة لتتبع خيار الترتيب
  // القيمة الافتراضية هي 'price-desc' (الأغلى أولاً) بناءً على طلبك
  const [sortOrder, setSortOrder] = useState("price-desc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setItems(withStableKeys(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // 2. فصل عملية الفلترة والترتيب
  const filteredItems = Array.isArray(items)
    ? items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // 3. تطبيق الترتيب (Sort) على القائمة المفلترة
  // نستخدم نسخة جديدة من المصفوفة (...) لضمان عدم تعديل الحالة الأصلية
  const sortedAndFilteredItems = [...filteredItems];

  if (sortOrder === "price-desc") {
    // الترتيب من الأغلى إلى الأرخص
    // نفترض أن خاصية السعر اسمها "price" وهي رقم
    sortedAndFilteredItems.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "price-asc") {
    // الترتيب من الأرخص إلى الأغلى
    sortedAndFilteredItems.sort((a, b) => a.price - b.price);
  }
  // إذا كانت القيمة "default" (لم نضفها هنا)، فلن يتم تطبيق أي ترتيب إضافي

  return (
    <section className="px-4 py-5 font-bold">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            {/* حقل البحث */}
            <input
              data-testid="Search"
              dir="rtl"
              type="text"
              placeholder="ابحث عن منتج ,معالج ,كرت شاشة..."
              className="w-full p-2 border border-gray-300 rounded-full outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />


            <select
              dir="rtl"
              aria-label="Sort products"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border border-gray-300 rounded-full outline-none text-gray-700"
            >
              <option value="price-desc">الأغلى أولاً 💰</option>
              <option value="price-asc">الأرخص أولاً 🏷️</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
           
            {sortedAndFilteredItems.length === 0 ? (
              <p className="text-white">لا يوجد عناصر مطابقة للبحث</p>
            ) : (
              sortedAndFilteredItems
                .slice(0, visibleCount)
                .map((product, index) => (
                  <Product key={product.__key} product={product} /> 
                ))
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductsListing;