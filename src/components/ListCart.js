import React from "react";
import ItemCart from "./ItemCart";

const ListCart = ({
  listProduct,
  hundelAdd,
  hundelMinus,
  hundelDelete,
  toggleStatus,
}) => {
  return (
    <div className="col-md-6 col-lg-12 p-0 rounded shadow-sm mb-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="border-0 bg-light text-center">
              <div className="p-2 px-3 text-uppercase">Product Image</div>
            </th>

            <th scope="col" className="border-0 bg-light text-center">
              <div className="p-2 px-3 text-uppercase">Product Name</div>
            </th>
            <th scope="col" className="border-0 bg-light text-center">
              <div className="py-2 text-uppercase">Price</div>
            </th>
            <th scope="col" className="border-0 bg-light text-center">
              <div className="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" className="border-0 bg-light text-center">
              <div className="py-2 text-uppercase">Amount</div>
            </th>
            <th scope="col" className="border-0 bg-light text-center"></th>
          </tr>
        </thead>

        {listProduct.map((item, index) => (
          <ItemCart
            item={item}
            key={index}
            hundelAdd={hundelAdd}
            hundelMinus={hundelMinus}
            hundelDelete={hundelDelete}
            toggleStatus={toggleStatus}
          />
        ))}
      </table>
    </div>
  );
};

export default ListCart;
