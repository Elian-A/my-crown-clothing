import { useSession } from "next-auth/react";
import type { FC } from "react";
import React from "react";
import Dropdown from "./dropdown";
import NavLink from "./navLink";
import Person from "./svg/person";

const Menu: FC<{ toggleState: boolean }> = ({ toggleState }) => {
  const { data } = useSession();
  return (
    <div
      className={`absolute top-0 z-10 ml-20 flex 
      h-screen flex-col  justify-between
border-l-2 bg-black pt-28
      ${toggleState ? "-left-[999rem]" : "right-0"}`}
    >
      <ul>
        <li className="py-3 px-5 hover:bg-gray-400 hover:bg-opacity-20">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="py-3 px-5 hover:bg-gray-400 hover:bg-opacity-20">
          <NavLink href="/cart">Track Your Order</NavLink>
        </li>
        <li className="py-3 px-5 text-2xl hover:bg-gray-400 hover:bg-opacity-20">
          <Dropdown />
        </li>
      </ul>
      <ul className="grid h-[10%] items-center hover:bg-gray-400 hover:bg-opacity-20">
        <li>
          <NavLink href="/api/auth/signin">
            <button className="flex items-center justify-between gap-4 pl-5">
              <span>
                <Person />
              </span>
              <span>{data ? "Log Out" : "Log In"}</span>
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
