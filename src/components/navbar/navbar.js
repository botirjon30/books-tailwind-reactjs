import React from "react";
import NavbarCol from "./additional-navbar/column-navbar";
import UserProfile from "./additional-navbar/userProfile";
import "./navbar.css";

function Navbar() {
  return (
    <div className="fixed w-full h-20 flex items-center justify-between px-10 py-2 border-b border-gray-700">
      <h1 className="font-satisfy text-2xl">Badiiyat</h1>
      <div className="border-1 absolute top-8 right-20 flex flex-col items-end pr-5 md:hidden">
        <button className="pb-10">menu</button>
        <NavbarCol />
      </div>
      <UserProfile />
    </div>
  );
}
export default Navbar;
