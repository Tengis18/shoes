import { EditIcon } from "@/app/svg/EditIcon";

export const EditModal = ({
  handleSubmit,
  handleInputChange,
  setSelectedProduct,
  product,
}) => {
  const handleModalClick = () => {
    document.getElementById("my_modal_2").showModal();
    setSelectedProduct(product);
  };

  const handleClick = async () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <>
      <button className="btn" onClick={handleModalClick}>
        <EditIcon />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="flex">
            <button
              className="font-bold hover:text-red-500"
              onClick={handleClick}
            >
              X
            </button>
            <div className="text-lg font-bold  ml-40">
              <h3 className="text-lg font-bold"> Бараа засах</h3>
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
              Засах
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
