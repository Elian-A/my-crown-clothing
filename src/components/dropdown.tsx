import { useState } from "react";
import NavLink from "./navLink";

const categoriesLinks = [
  {
    id: 1,
    href: "/categories/men",
    text: "Men",
  },
  {
    id: 2,
    href: "/categories/women",
    text: "Women",
  },
  {
    id: 3,
    href: "/categories/hats",
    text: "Hats",
  },
  {
    id: 4,
    href: "/categories/Jackets",
    text: "jackets",
  },
  {
    id: 5,
    href: "/categories/sneakers",
    text: "sneakers",
  },
];
const Dropdown = () => {
  const [dropdow, setDropdow] = useState(false);
  const toggle = () => setDropdow(!dropdow);
  return (
    <div>
      <p onClick={toggle} className="flex justify-between pr-8 tracking-wider">
        <span>Categories</span> -&gt;
      </p>
      <ul className={dropdow ? "" : "hidden"}>
        {categoriesLinks.map(({ href, id, text }) => (
          <li key={id}>
            <NavLink href={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
