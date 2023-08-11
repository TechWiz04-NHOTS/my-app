import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Login from "../Login/Login";

export default function PreLogin({emailName, setEmailName}: any){
    const navigate = useNavigate();

    const handleLogin = () =>{
        if(emailName != null){
            navigate(('/login'), {replace: true})
        }
    }

    const handleBack = () => {
        navigate(('/'), {replace: true})
    }



    return(
        <div className="bg-[#1a243e] w-[100%] h-[100%] fixed top-0 bottom-0 right-0 left-0">
            <div className="flex flex-col items-center justify-center gap-[20px] pt-[100px] max-w-[330px] mx-auto">
                <img src="./image/logo--header.webp" alt="logo" className="w-[80px]" />
                <p className="text-[#fdc52c] font-semi text-[32px]"><i>Log in</i></p>
                <div className="flex flex-col gap-[12px] items-center ">
                    <button className="flex flex-row items-center gap-[12px] px-[60px] rounded-sm py-[8px] bg-[#fff]">
                        <img src="./image/icon-facebook.png" alt="icon facebook" className="w-[30px] h-[30px]"/>
                        <p className="text-black">Log in with Facebook</p>
                    </button>
                    <button className="flex flex-row items-center gap-[12px] px-[70px] rounded-sm py-[8px] bg-[#fff]">
                        <img src="./image/icon-google.png" alt="icon google" className="w-[30px] h-[30px]"/>
                        <p className="text-black">Log in with Google</p>
                    </button>
                </div>
                {/* <div className="h-[1px] w-[100%] bg-[#fff]"></div> */}
                <p className="text-white bg-[#1a243e] border-b font-bold">Or log in with your email</p>
                <input type="email" value={emailName} onChange={(e) => setEmailName(e.target.value)} className="w-[100%] py-[10px] text-white rounded-sm pl-[12px] outline-none bg-[#1a243e] border" placeholder="Your email" />
                <button onClick={handleLogin} className="flex flex-row items-center gap-[12px] w-[100%]  justify-center bg-[#cf122d] rounded-sm mt-[16px] py-[12px]">
                        <p className="text-white font-bold">
                            Log in
                        </p>
                </button>
                <button onClick={handleBack} className="flex flex-row items-center gap-[12px] w-[100%]  justify-center bg-[#fff] rounded-sm py-[12px]">
                        <p className="text-black font-bold">
                            Back to home
                        </p>
                </button>
                <div className="flex gap-[8px] mt-[16px] items-center text-white text-[14px]">
                    <p className="border-r pr-[8px] opacity-[0.6]">Legal terms</p> 
                    <p className="border-r pr-[8px] opacity-[0.6]">Privacy policy</p>
                    <p className="opacity-[0.6]">Cookies</p>
                </div>   
            </div>
        </div>
    )
}