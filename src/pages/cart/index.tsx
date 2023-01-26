import { useStore } from "zustand";
import Header from "../../components/header";
import { cartItemsStore } from "../../store/cartItems";
import type { Item } from "../../store/cartItems";
import CartItem from "../../components/cartItem";

const totalPrice = (acc: number, val: Item) =>
  (acc += val.price * val.quantity);

const Cart = () => {
  const { items, addOne, removeOne, removeProduct, clearCart } =
    useStore(cartItemsStore);
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="h-screen">
        <h1 className="text-3xl">Cart</h1>
        <table className="mx-auto w-[90%]">
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center text-xl">
            {items.map(({ name, imageUrl, productId, quantity }) => (
              <CartItem
                key={productId}
                name={name}
                addOne={addOne}
                productId={productId}
                imageUrl={imageUrl}
                quantity={quantity}
                removeOne={removeOne}
                removeProduct={removeProduct}
              />
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex items-center gap-4">
          <button onClick={() => clearCart()} className="border p-2">
            Clear cart
          </button>
          <span>total: {items.reduce(totalPrice, 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
