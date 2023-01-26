import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  name: string;
  productId: string;
  quantity: number;
  imageUrl: string;
  addOne: (id: string) => void;
  removeOne: (id: string) => void;
  removeProduct: (id: string) => void;
};

const CartItem: FC<Props> = ({
  name,
  imageUrl,
  productId,
  quantity,
  addOne,
  removeOne,
  removeProduct,
}) => {
  return (
    <tr key={productId}>
      <td>{name}</td>
      <td className="flex justify-center">
        <Link href="/products/id">
          <Image src={imageUrl} alt="product" width={50} height={50} />
        </Link>
      </td>
      <td>
        <button
          onClick={() => removeOne(productId)}
          className="h-8 w-8 rounded-full bg-white text-xl text-black"
        >
          &lt;-
        </button>
        <span className="text-xl">{` ${quantity} `}</span>
        <button
          onClick={() => addOne(productId)}
          className="h-8 w-8 rounded-full bg-white text-xl text-black"
        >
          -&gt;
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            removeProduct(productId);
          }}
          className="border bg-black p-2 text-xl text-white"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
