import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import React from "react";
import { LuMenuSquare } from "react-icons/lu";
import Hero from "./Hero";
import { Cart } from "./Cart";

function Navbar() {
  const [ShowNav, setShowNav] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  }
  const showNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <div className="navbar bg-gray-300 py-3">
          <nav className="flex flex-col md:flex-row items-center justify-between gap-2 px-4">
            <div className="logo">
              <h1 className="text-red-600 font-bold text-2xl md:text-4xl">MEMON</h1>
            </div>
            <div className="menu uppercase md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={showNav}
              >
                <LuMenuSquare className="text-2xl" />
              </button>
            </div>
            <div className="searchBar w-[80%] text-center lg:ml-2 lg:mr-1 my-2 md:my-0">
              <input
                className="text-sm w-[80%] mx-auto py-1 ring-1 ring-black rounded-md px-3 bg-slate-50"
                name="search"
                id="search"
                placeholder="search for product brand and more"
              />
            </div>
            <div className="user">
              <ul className="flex justify-center items-center gap-2 text-[1rem]">
                <li className="flex justify-center items-center my-2 gap-2">
                  <CgProfile className="mx-auto" />
                  <span>Profile</span>
                </li>
                <li className="flex justify-center items-center my-2 gap-2">
                  <FaRegHeart className="mx-auto" />
                  <span>Wishlist</span>
                </li>
                <li
                  className="flex justify-center items-center my-2 gap-2"
                  onClick={handleOpen}
                >
                  <IoBag className="mx-auto" />
                  <span>Bag</span>
                </li>
                {open && <Cart openModal={open} setOpen={setOpen} />}
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Navbar;
