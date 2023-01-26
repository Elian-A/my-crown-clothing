import Link from "next/link";

/*
enum Categories {
  MEN = "men",
  WOMEN = "women",
  SNEAKERS = "sneakers",
  JACKETS = "jackets",
  HATS = "hats",
}
*/

const Category = () => {
  return (
    <div>
      <div>Category</div>
      <button className="border">
        <Link href="/">Back</Link>
      </button>
    </div>
  );
};

export default Category;
