import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from 'react-use-cart';

export default function Buying() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    Quantity,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    !isEmpty && (
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}), total item: ({totalItems})
            </h5>
            <table className="table table-primary table-hover m-0 rounded">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.coverImg}
                          style={{ height: '10rem', width: '12rem' }}
                        />
                      </td>
                      <td>
                        <dl>{item.title}</dl>
                        <dl>{item.location}</dl>
                        <dl>$ {item.price}</dl>
                        <dl>Quantity ({item.quantity})</dl>
                      </td>
                      <td>
                        <dl>
                          <button
                            className="btn btn-info btn-hover mx-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </dl>
                        <dl>
                          <button
                            className="btn btn-info btn-hover mx-2"
                            onClick={() => {
                              updateItemQuantity(item.id, item.quantity - 1);
                            }}
                          >
                            -
                          </button>
                        </dl>
                        <dl>
                          <button
                            className="btn btn-danger btn-hover mx-2"
                            onClick={() => removeItem(item.id)}
                          >
                            X
                          </button>
                        </dl>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h5>Total price: $ {cartTotal}</h5>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              clear out
            </button>
            <button className="btn btn-success m-2">proceed</button>
          </div>
        </div>
      </section>
    )
  );
}
