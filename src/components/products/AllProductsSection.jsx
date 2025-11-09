import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsListing from "./ProductsListing";
import { CiCirclePlus } from "react-icons/ci";

const AllProductsSection = () => {
  const token = localStorage.getItem("token");

  return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-lg font-bold bg-blue-700 my-2 text-center py-1 rounded-full w-[50vw]">
          جميع المنتجات
        </h2>
      </div>
      <div className="flex flex-row-reverse justify-end items-center px-2 text-xs">
        {token ? (
          <Link className="" to={"/add-product"}>
            <CiCirclePlus size={30} color="white" className="g-gray-200" />
          </Link>
        ) : (
          ""
        )}
      </div>

      <ProductsListing />
    </section>
  );
};

export default AllProductsSection;
