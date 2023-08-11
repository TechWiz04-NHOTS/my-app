import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Login({emailName}: any){
    const [password, setPassword] = useState('')
    const token = "ASFASFASFASFASF";



    const localToken = localStorage.getItem("ACCESS_TOKEN")
    if(localToken != null){
        window.location.href='/';
    }

    const handleLogin = () => {
        if(emailName == "khanhnb@gmail.com" && password == "123"){
            localStorage.setItem("ACCESS_TOKEN", token)
            window.location.href='/'
            console.log(emailName)
            console.log(password);
            
        } else{
            // notification("Incorrect username or password!")
            console.log("failed")
            console.log(emailName)
            console.log(password);
        }
    }

    const handleBack = () =>{
        window.location.href='/prelog';
    }

    // const notification = (errMessage: String) => {
    //     toast.error(errMessage, {
    //     position: "top-center",
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // }

    return(
        <div className="bg-[#1a243e] w-[100%] h-[100vh]">
            {/* <ToastContainer /> */}
            <div className="flex flex-col gap-[20px] pt-[100px] max-w-[400px] mx-auto">
                <img src="./image/logo--header.webp" alt="logo" className="w-[80px] mx-auto" />
                <p className="text-[#fdc52c] text-center font-semi text-[32px]"><i>Set up your password</i></p>
                <div className="flex flex-col text-white gap-[12px]">
                    <p>Your Email:</p>
                    <p>{emailName}</p>
                </div>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="w-[100%] mt-[12px] py-[10px] text-white rounded-sm pl-[12px] outline-none bg-[#1a243e] border" placeholder="Password" />
                <p className="text-center font-[100] text-[14px] text-white opacity-[0.6]">
                By Pressing SIGN UP you accept our  privacy policy  and confirm that you are over 18 years old.
                </p>
                <button onClick={handleLogin} className="flex flex-row items-center gap-[12px] w-[100%]  justify-center bg-[#cf122d] rounded-sm py-[12px]">
                        <p className="text-white font-bold">
                            Log in
                        </p>
                </button>
                <button onClick={handleBack} className="flex flex-row items-center gap-[12px] w-[100%]  justify-center bg-[#fff] rounded-sm py-[12px]">
                        <p className="text-black font-bold">
                            Back to enter email
                        </p>
                </button>
                <div className="flex justify-center gap-[8px] mt-[16px] items-center text-white text-[14px]">
                    <p className="border-r pr-[8px] opacity-[0.6]">Legal terms</p> 
                    <p className="border-r pr-[8px] opacity-[0.6]">Privacy policy</p>
                    <p className="opacity-[0.6]">Cookies</p>
                </div>   
            </div>
        </div>
    )
}