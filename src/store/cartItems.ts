import { create } from "zustand";

type CartItem = {
  productId: string;
  quantity: number;
};

type Store = {
  items: CartItem[];
  addProduct: (product: CartItem) => void;
  removeProduct: (id: string) => void;
  addOne: (id: string) => void;
  removeOne: (id: string) => void;
  clearCart: () => void;
};

/*
 *
 * HELPER FUNCTIONS
 *
 */
const addProduct = (product: CartItem, items: CartItem[]) => {
  const exists = items.find((item) => item.productId === product.productId);
  if (exists) return items;
  return [...items, product];
};

const removeProduct = (id: string, items: CartItem[]) =>
  items.filter((item) => item.productId !== id);

const addOneItem = (id: string, items: CartItem[]) =>
  items.map((item) =>
    item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
  );

const removeOneItem = (id: string, items: CartItem[]) =>
  items.map((item) =>
    item.productId === id ? { ...item, quantity: item.quantity - 1 } : item
  );
/*
 *
 * STORE
 *
 */
export const cartItemsStore = create<Store>((set) => ({
  items: [],
  addProduct: (product) =>
    set((state) => ({
      ...state,
      items: addProduct(product, state.items),
    })),
  addOne: (id) =>
    set((state) => ({
      ...state,
      items: addOneItem(id, state.items),
    })),
  removeOne: (id) =>
    set((state) => ({
      ...state,
      items: removeOneItem(id, state.items),
    })),
  removeProduct: (id) =>
    set((state) => ({
      ...state,
      items: removeProduct(id, state.items),
    })),
  clearCart: () => set((state) => ({ ...state, items: [] })),
}));
