import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";

export default function ContentCart(){

    const checkOut = () => {
        window.location.href='/checkout'
    }

    return(
        <div>
            <div className="max-w-[1400px] mx-auto my-[40px]">
                <p className="py-[16px] mt-[16px] text-[24px]">Your Items</p>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-[32px]">
                        <CartItem />
                    </div>
                    <div className="border flex flex-col w-[360px]">
                        <div className="flex flex-row items-center px-[16px] py-[12px] justify-between">
                            <p>Have a Coupon?</p>
                            <p>+</p>
                        </div>
                        <div className="flex bg-[#f3f3f3] px-[16px] py-[24px] flex-row items-center justify-between">
                            <p>Cart total</p>
                            <p>$110.00</p>
                        </div>
                        <button className="mt-[20px] bg-[#000] text-white mx-[20px] rounded-sm py-[8px]" onClick={checkOut}>Checkout</button>
                        <button className="mt-[12px] bg-[#009cde] text-white mx-[20px] rounded-sm py-[8px]">Paypal</button>
                        <div className="flex flex-col items-center border m-[20px]">
                            <p className="text-[12px] text-[#505050] abosolute mt-[-10px] bg-white px-[36px]">or checkout with</p>
                            <div  className="px-[52px] flex my-[12px] rounded-sm py-[6px] bg-[#000] text-white">
                                <img src="./image/icon-google.png" alt="icon google" className="w-[30px] h-[30px]"/>
                                <button>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}