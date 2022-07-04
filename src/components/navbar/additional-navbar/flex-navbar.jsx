import React from "react";

function NavbarFlex() {
  return (
    <>
      <ul className="hidden md:flex gap-5 ml-auto mr-10">
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Bosh sahifa
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Nasr
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Nazm
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Maqolalar
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Forum
        </li>
      </ul>
    </>
  );
}

export default NavbarFlex;
