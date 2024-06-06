import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Filtered from "./components/Filtered";
import Main from "./components/Main";
import SinglePro from "./components/SinglePro";
import { useSelector } from "react-redux";

export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/filtered-products/:type" element={<Filtered/>}/>
        <Route path="/single-product/:type/:id" element={<SinglePro/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}