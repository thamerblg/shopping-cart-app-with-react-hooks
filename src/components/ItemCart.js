import React from "react";
import { FaMinus, FaPlus, FaRegTrashAlt, FaHeart } from "react-icons/fa";

const ItemCart = ({
  item,
  hundelAdd,
  hundelMinus,
  hundelDelete,
  toggleStatus,
}) => {
  return (
    <tbody className="product">
      <tr className="product-item">
        <td className="align-middle text-center">
          <div className="p-2 text-center">
            <img
              src={item.prod_image}
              alt={item.prod_name}
              width="100"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </td>

        <td className="align-middle text-center">
          <span className="mb-0 text-dark d-inline-block">
            {item.prod_name}
          </span>
        </td>
        <td className="align-middle text-center">
          $<span className="price">{item.prod_price}</span>
        </td>
        <td className="align-middle text-center">
          <button
            className="minus-btn px-2"
            type="button"
            onClick={() => hundelMinus(item.prod_id)}
          >
            <FaMinus />
          </button>
          <input
            type="number"
            min="1"
            value={item.prod_quantity}
            readOnly="readonly"
          />
          <button
            className="plus-btn px-2"
            type="button"
            onClick={() => hundelAdd(item.prod_id)}
          >
            <FaPlus />
          </button>
        </td>
        <td className="align-middle text-center amount-value">
          $
          <span className="amount">{item.prod_price * item.prod_quantity}</span>
        </td>
        <td className="align-middle text-center buttons">
          <button
            className="delete-btn px-2 mx-1"
            onClick={() => hundelDelete(item.prod_id)}
          >
            <FaRegTrashAlt />
          </button>
          <button
            className="like-btn px-2 mx-1"
            style={{ color: item.prod_status ? "red" : "black" }}
            onClick={() => toggleStatus(item.prod_id)}
          >
            <FaHeart />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemCart;
