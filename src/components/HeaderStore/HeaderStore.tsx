import { BsCartFill } from "react-icons/bs";

export default function HeaderStore(){
    const goToCart = () => {
        window.location.href = '/cart';
    }

    const goToLogin = () => {
        window.location.href = '/prelog';
    }

    const GoToLogin = () => {
        if(localStorage.getItem("ACCESS_TOKEN") == null){
            return(
                <p onClick={goToLogin} className="text-[12px] font-thin bg-[#000] text-white py-[8px] px-[10px] hover:bg-[#3f3f3f] cursor-pointer">SIGN UP & SAVE 10%</p>
            )        
        } else{
            return(
                <div className="text-[#f5f6f8]">A</div>
            )
        }
    }

    return(
        <div>
            <div className="bg-[#f5f6f8]">
                <div className="flex justify-between max-w-[1500px] my-0 mx-auto items-center">
                    <GoToLogin />
                    <div className="flex flex-row gap-[14px] items-center text-[14px] font-thin opacity-[0.8]">
                        <p>chelsea.com</p>
                        <p>Track Order</p>
                        <p>Help</p>
                        <p>My Account</p>
                        <p>Language</p>
                        <p>GBP $</p>
                        <div onClick={goToCart} className="p-[12px] px-[20px] text-[18px] bg-[#000] hover:bg-[#3f3f3f] cursor-pointer text-white">
                        <BsCartFill />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[40px] items-center py-[32px]">
                <div className="flex items-center gap-[12px]">
                    <img src="./image/logo--header.webp" className="w-[100px] ml-[32px]" alt="logo" />
                    <p className="text-[36px] font-bold tracking-tighter">CHELSEA DIRECT</p>
                </div>
                <div className="relative flex items-center">
                    <input className="pl-[14px] w-[500px] outline-none border font-thin py-[8px] text-[14px]" placeholder="Search" />
                    <i className="fa-solid fa-magnifying-glass fa-xl absolute text-[#505050] left-[95%] text-[14px]"></i>
                </div>
            </div>
            <div>
                <ul className="flex flex-row justify-between items-center no-underline">
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">KITS</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">TRAINING</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">SHOP BY PLAYER</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">MEN</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">WOMEN</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">KIDS</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">RETRO</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">GIFTS & ACCESSORIES</li>
                    <li className="px-[40px] py-[8px] hover:bg-[#f3f3f3] font-light text-[14px]">CLEARANCE</li>
                </ul>
            </div>
            <img src="./image/sale-off.avif" alt="sale-off" />
        </div>
    )
}