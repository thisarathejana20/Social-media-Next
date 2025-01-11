"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex flex-col cursor-pointer gap-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
        <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
        <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
      </div>
      {isOpen && (
        <div>
          <Link href={""}>Home</Link>
          <Link href={""}>Friends</Link>
          <Link href={""}>Groups</Link>
          <Link href={""}>Stories</Link>
          <Link href={""}>Logout</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
