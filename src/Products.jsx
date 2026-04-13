import { use } from "react";
import Product from "./Product";

const Products = ({ ProductPromis, handleAddToCart }) => {
  const products = use(ProductPromis);
  // console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mt-15 m-auto">
      {products.map((product) => (
        <Product
          key={product.key}
          product={product}
          handleAddToCart={handleAddToCart}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
