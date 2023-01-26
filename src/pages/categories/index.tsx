import Link from "next/link";

const Categories = () => {
  return (
    <div>
      <div>Categories</div>
      <button className="border">
        <Link href={"/"}>Back</Link>
      </button>
    </div>
  );
};

export default Categories;
