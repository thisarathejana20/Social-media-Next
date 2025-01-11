import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block">
        <Link
          href="/"
          className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          S-CONNECT
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%]">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href={""} className="flex gap-2">
            <Image src="/home.svg" alt="home-icon" width={20} height={20} />
            <span>Homepage</span>
          </Link>
          <Link href={""} className="flex gap-2">
            <Image src="/friends.svg" alt="home-icon" width={20} height={20} />
            <span>Friends</span>
          </Link>
          <Link href={""} className="flex gap-2">
            <Image src="/story.svg" alt="home-icon" width={20} height={20} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="md:hidden w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        {/* since mobile menu hamburger needs client side features */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
