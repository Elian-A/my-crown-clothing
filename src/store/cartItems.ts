import { create } from "zustand";

export type Item = {
  name: string;
  imageUrl: string;
  productId: string;
  quantity: number;
  price: number;
};

type Store = {
  items: Item[];
  addProduct: (product: Item) => void;
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
const addProduct = (product: Item, items: Item[]) => {
  const exists = items.find((item) => item.productId === product.productId);
  if (exists) return items;
  return [...items, product];
};

const removeProduct = (id: string, items: Item[]) =>
  items.filter((item) => item.productId !== id);

const addOneItem = (id: string, items: Item[]) =>
  items.map((item) =>
    item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
  );

const removeOneItem = (id: string, items: Item[]) => {
  const item = items.find((item) => item.productId === id);
  if (!item) return items;
  const uniqueItem = item?.quantity === 1;
  if (uniqueItem) return items.filter((item) => item.productId !== id);
  return items.map((item) =>
    item.productId === id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

/*
 *
 * STORE
 *
 */
export const cartItemsStore = create<Store>((set) => ({
  items: [
    {
      name: "Manolo",
      imageUrl:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      price: 23,
      productId: "sss",
      quantity: 1,
    },
  ],
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
