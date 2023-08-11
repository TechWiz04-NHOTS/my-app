import { useEffect } from "react";
import FooterStore from "../../components/FooterStore/FooterStore";
import HeaderStore from "../../components/HeaderStore/HeaderStore";
import { FaLock } from "react-icons/fa6";

export default function Checkout(){
    const CheckAccount = () => {
        if(localStorage.getItem("ACCESS_TOKEN") == null){
        return(
            <div className="bg-[#f3f3f3] my-[24px] py-[16px] pl-[16px]">
                <div className="flex flex-col gap-[4px]">
                    <p className="font-semibold">Already have an account?</p>
                    <p><a href="/login" className="text-[#3863a3] text-[14px]">LOG IN</a> or <a className="text-[#3863a3] text-[14px]" href="/register">REGISTER</a></p>
                </div>
            </div>
            )
        } else{
            return(
                <div></div>
            )
        }
    }

    return(
        <div>
            <HeaderStore />
            <div className="max-w-[640px] mx-auto">
                <div className="flex items-center justify-between py-[24px] border-b my-[16px]">
                    <p className="text-[24px] font-semibold">Secure Checkout</p>
                    <button className="bg-[#029cdd] rounded-md py-[8px] w-[25%] text-white hover:bg-[#029cdd96] ease-in-out duration-200">PayPal</button>
                </div>
                <CheckAccount />
                <p className="my-[24px]">Shipping Address</p>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row justify-between gap-[24px]">
                        <input type="text" className="input-config w-[50%]" placeholder="First Name*"/>
                        <input type="text" className="input-config w-[50%]" placeholder="Last Name*"/>
                    </div>
                    <div className="flex flex-row justify-between gap-[24px]">
                        <input type="email" className="input-config w-[60%]" placeholder="Email*"/>
                        <input type="text" className="input-config w-[40%]" placeholder="Phone*"/>
                    </div>
                    <input type="text" className="w-[100%] input-config" placeholder="Address 1*"/>
                    <input type="text" className="w-[100%] input-config" placeholder="Address 2(Apt, Unit, Ste, Etc)"/>
                    <div>
                        <i className="absolute text-[12px] font-thin mt-[-8px] ml-[10px] bg-[#fff] px-[6px] text-[#505050]">Country/ Region</i>
                        <select className="input-config w-[40%]">
                            <option>United Kingdom</option>
                            <option></option>
                        </select>
                    </div>
                    <div className="flex flex-row  w-[100%] justify-between">
                        <input type="text" className="input-config w-[25%]" placeholder="Post Code*" />
                        <input type="text" className="input-config w-[25%]" placeholder="City*" />
                        <input type="text" className="input-config w-[40%]" placeholder="State/ Province/ Territory" />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <p>Tick the boxes below to receive details of new signings, products, services, special offers, events, and promotions from:</p>
                        <div className="flex gap-[8px] items-center">
                            <input type="checkbox"/>
                            <p className="text-config">Fanatics (International) Limited, who operate United Direct</p>
                        </div>
                        <div className="flex gap-[8px] items-center mb-[12px]">
                            <input type="checkbox"/>
                            <p className="text-config">Chelsea Football Club Limited</p>
                        </div>
                        <button className="hover:bg-[#3f3f3f] mb-[32px] w-[50%] bg-[#000] flex gap-[12px] items-center text-white justify-center h-[40px]">
                            <FaLock />
                            <p>Continue Checkout</p>
                        </button>
                    </div>
                </div>
            </div>
            <FooterStore />
        </div>
    )
}