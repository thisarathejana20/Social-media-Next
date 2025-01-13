import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        {/* loading spinner */}
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-[#332d2d] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        {/* after loaded */}
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/people.svg"
                alt="profile-icon"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.svg"
                alt="messages-icon"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.svg"
                alt="notifications-icon"
                width={25}
                height={25}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2">
              <Image
                src="/login.svg"
                alt="login/register-icon"
                width={25}
                height={25}
              />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        {/* since mobile menu hamburger needs client side features */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
