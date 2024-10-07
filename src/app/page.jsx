"use client";

import { Card, CreateModal } from "@/components/ui";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center w-full p-6">
      <div className="max-w-[1200px]">
        <div className="flex justify-end ">
          <CreateModal setProducts={setProducts} />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products?.map((product) => {
            return (
              <Card
                product={product}
                setProducts={setProducts}
                setSelectedProduct={setSelectedProduct}
                selectedProduct={selectedProduct}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
