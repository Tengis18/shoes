import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState } from "react";

export const CreateModal = ({ setProducts }) => {
  const [product, setProduct] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, data.product]);
    } catch {
      console.log("error");
    }

    setProduct({
      productName: "",
      category: "",
      price: "",
    });
    document.getElementById("my_modal_1").close();
  };
  const handleClick = async () => {
    setProduct({
      productName: "",
      category: "",
      price: "",
    });
    document.getElementById("my_modal_1").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Бараа үүсгэх
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex">
            <button
              className="font-bold hover:text-red-500"
              onClick={handleClick}
            >
              X
            </button>
            <div className="text-lg font-bold  ml-40">
              <h3 className="text-lg font-bold"> Бараа үүсгэх</h3>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <h1>Барааны нэр</h1>
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.productName}
            />
            <h1>Барааны ангилал</h1>
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.category}
            />
            <h1>Үнэ</h1>
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.price}
            />
          </div>
          <div className="flex justify-end gap-3">
            <button className="mt-4 btn" onClick={handleClick}>
              Буцах
            </button>
            <button
              className="mt-4 btn bg-[#393939] text-white"
              onClick={handleSubmit}
            >
              Үүсгэх
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
