import React from "react";
import { toast } from "react-toastify";

const Product = ({ product, handleAddToCart }) => {
  
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-5">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <img src={product.logo} className="w-8 h-8" />

            <span className="badge badge-warning">{product.badge}</span>
          </div>

          <div className="card-body">
            <div className="text-left">
              <h2 className="text-xl font-bold">{product.title}</h2>

              <p className="text-sm text-[#627382]">{product.description}</p>

              <p className="text-lg font-semibold mt-2">${product.price}</p>
            </div>
          </div>
          <ul className="mt-2 flex flex-col gap-2 text-sm">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#627382]">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              className="btn btn-primary btn-block bg-color-rgb rounded-full"
              onClick={() => {
                handleAddToCart(product);
                toast.success("Successfully Added To Cart 🛒");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
