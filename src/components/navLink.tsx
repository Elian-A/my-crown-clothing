import Link from "next/link";
import type { FC, ReactElement } from "react";

const NavLink: FC<{ href: string; children: ReactElement | string }> = ({
  children,
  href,
}) => (
  <Link href={href} className="text-2xl tracking-wider">
    {children}
  </Link>
);

export default NavLink;
