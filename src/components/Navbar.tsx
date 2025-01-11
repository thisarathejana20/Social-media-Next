import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div>
        <Link
          href="/"
          className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          S-CONNECT
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden"></div>
      {/* RIGHT */}
      <div className="">
        {/* since mobile menu hamburger needs client side features */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
