import React, { useState } from "react";
import ListCart from "./components/ListCart";
import { product } from "./data";

const App = () => {
  const [listProduct, setListProduct] = useState(product);

  const hundelAdd = (id) => {
    setListProduct(
      listProduct.map((item) =>
        item.prod_id === id
          ? { ...item, prod_quantity: item.prod_quantity + 1 }
          : item
      )
    );
  };
  const hundelMinus = (id) => {
    setListProduct(
      listProduct.map((item) =>
        item.prod_id === id && item.prod_quantity > 1
          ? { ...item, prod_quantity: item.prod_quantity - 1 }
          : item
      )
    );
  };

  const hundelDelete = (id) => {
    setListProduct(listProduct.filter((item) => item.prod_id !== id));
  };

  const toggleStatus = (id) => {
    setListProduct(
      listProduct.map((item) =>
        item.prod_id === id ? { ...item, prod_status: !item.prod_status } : item
      )
    );
  };

  var subtotal = 0;
  for (let index = 0; index < listProduct.length; index++) {
    subtotal +=
      listProduct[index].prod_price * listProduct[index].prod_quantity;
  }

  return (
    <>
      <section className="breadcrumb-section my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-uppercase font-weight-bold">
              <h2>Shopping Cart</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="shoping-cart-section">
        <div className="container">
          <div className="row">
            <ListCart
              listProduct={listProduct}
              hundelAdd={hundelAdd}
              hundelMinus={hundelMinus}
              hundelDelete={hundelDelete}
              toggleStatus={toggleStatus}
            />
            <div className="col-lg-12 p-2">
              <div className="totals-item d-flex justify-content-end">
                <p className="font-weight-bold text-uppercase mr-2">
                  Subtotal:
                </p>
                <span> $</span>
                <div className="totals-value" id="cart-subtotal">
                  {subtotal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
