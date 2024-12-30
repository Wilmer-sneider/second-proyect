import Link from "next/link";
import { HomeFillIcon } from "@primer/octicons-react";
import ActiveLink from "../activeLink/ActiveLink";

const Navbar = () => {
  const navItems = [
    { patch: "/about", text: "about" },
    { patch: "/pricing", text: "pricing" },
    { patch: "/contact", text: "contact" },
  ];
  console.log("desde cliente");

  return (
    <nav className=" bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <div className="flex justify-between">
        <div>
          <Link href="/" className="flex items-center ">
            <HomeFillIcon className="mr-2" />
            home
          </Link>
        </div>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <ActiveLink key={item.patch} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
