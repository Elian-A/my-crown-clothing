import { useState } from "react";
import NavLink from "./navLink";
import Search from "./search";
import CartSvg from "./svg/cartSvg";
import HamburguerMenu from "./svg/hamburguerMenu";
import Menu from "./menu";
import ClosedMenu from "./svg/closedMenu";
import Crown from "./svg/crown";

const Header = () => {
  const [menuState, toggleMenuState] = useState(true);
  const toggleMenu = () => toggleMenuState(!menuState);
  return (
    <header className="mx-auto flex items-center justify-between py-4 px-5">
      <NavLink href="/">
        <Crown />
      </NavLink>

      <div className="flex gap-3">
        <button>
          <Search />
        </button>
        <button>
          <CartSvg />
        </button>
        <button onClick={toggleMenu} className="relative z-20">
          {menuState ? <HamburguerMenu /> : <ClosedMenu />}
        </button>
        <Menu toggleState={menuState} />
      </div>
    </header>
  );
};

export default Header;
