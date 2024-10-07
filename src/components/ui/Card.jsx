import { BACKEND_ENDPOINT } from "@/constants/constant";
import { EditModal } from ".";
import { DeleteIcon } from "@/app/svg/DeleteIcon";

export const Card = ({
  product,
  selectedProduct,
  setSelectedProduct,
  setProducts,
}) => {
  const { productName, category, price } = product;

  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();

      setProducts((prevProducts) =>
        prevProducts.filter((product) => data?.product?.id !== product?.id)
      );
    } catch {
      console.log("error");
    }
    document.getElementById("my_modal_2").close();
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedProduct),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json(response);
      setProducts(data.products);
    } catch {
      console.log("error");
    }
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSelectedProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{category}</p>
          <p>{price}$</p>
        </div>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <EditModal
          product={product}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <button onClick={() => handleDelete(product?.id)} className="btn">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
