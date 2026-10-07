import { useMemo, useReducer } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 80,
  },
  {
    id: 3,
    name: "Mouse",
    price: 40,
  },
];

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.product,
            quantity: 1,
          },
        ],
      };
    }

    case "DELETE":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.id
        ),
      };

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const total = useMemo(() => {
    return state.items.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [state.items]);

  return (
    <>
      <h2>Shopping Cart</h2>

      <h3>Products</h3>

      {products.map((product) => (
        <div className="item" key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "ADD",
                product,
              })
            }
          >
            Add
          </button>
        </div>
      ))}

      <hr />

      <h3>Cart</h3>

      {state.items.length === 0 && (
        <p>Your cart is empty.</p>
      )}

      {state.items.map((item) => (
        <div className="item" key={item.id}>
          <div>
            <strong>{item.name}</strong>
            <br />
            ${item.price} × {item.quantity}
          </div>

          <div className="actions">
            <button
              onClick={() =>
                dispatch({
                  type: "DECREMENT",
                  id: item.id,
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREMENT",
                  id: item.id,
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  id: item.id,
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </>
  );
}

export default ShoppingCart;
