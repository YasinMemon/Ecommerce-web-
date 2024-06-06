import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/slides/CartSlice";

export function Cart({ openModal, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const tprice = useSelector((state) => state.cart.totalPrice);
  // console.log(cart);
  const dispatch = useDispatch();
  return (
    <Dialog open={openModal} handler={setOpen}>
      <DialogHeader>Shopping Bag</DialogHeader>
      <DialogBody className="overflow-y-auto max-h-[30rem]">
        {cart.length > 0 ? <div>
          {cart.map((item, idx) => {
            return <div key={idx}>

              <div className="itemContainer flex flex-row justify-around">
                <div className="itemDesc w-[50%]">
                  <img src={item.img} className="h-32 w-32" alt={item.name} />
                  <h1 className="font-bold text-xl text-black">{item.name}</h1>
                  <p>{item.text}</p>
                </div>
                <div className="flex flex-col">
                  <div className="extraINFO">
                    <ul className="font-bold text-gray-900 text-lg">
                      <li>Selected Size: {item.size}</li>
                      <li>Selected Color: {item.color}</li>
                      <li>Amount : {item.amount}</li>
                      <li>Price : {item.price}</li>
                      <li>Total Price : {item.totalPrice}</li>
                      <li>
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          onClick={() => dispatch(removeItem(item))}
                        >Remove</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          })}
          <div className="text-end font-bold text-2xl text-black">
            <p>Total Price of All Items ₹{tprice}</p>
          </div>
        </div>
          : <>
            <h1 className="text-4xl font-bold text-black">Your Cart is Empty</h1>
            <p className="text-xl">add some items here</p>
          </>
        }
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => setOpen(false)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => setOpen(false)}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
