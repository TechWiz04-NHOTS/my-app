import { Space, Button } from "antd";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return (
        <div className="flex flex-col bg-[#2a2a2a] mt-[50px]">
            <div className="flex gap-[24px] items-center text-center justify-center border-b py-[44px]">
                <div className="flex items-center gap-[12px] text-white">
                    <FaTwitter className="rounded-full bg-[#3f3f3f] p-[16px] w-[50px] h-[50px] hover:bg-[#154284] ease-in duration-100 cursor-pointer" />  
                    <FaFacebookF className="rounded-full bg-[#3f3f3f] p-[16px] w-[50px] h-[50px] hover:bg-[#154284] ease-in duration-100 cursor-pointer" />
                    <FaYoutube className="rounded-full bg-[#3f3f3f] p-[16px] w-[50px] h-[50px] hover:bg-[#154284] ease-in duration-100 cursor-pointer" />
                    <FaInstagram className="rounded-full bg-[#3f3f3f] p-[16px] w-[50px] h-[50px] hover:bg-[#154284] ease-in duration-100 cursor-pointer" />
                    <FaTiktok className="rounded-full bg-[#3f3f3f] p-[16px] w-[50px] h-[50px] hover:bg-[#154284] ease-in duration-100 cursor-pointer" />  
                </div> 
                <div className="flex items-center gap-[12px]">
                <Space wrap>
                    <Button className="rounded-[40px] text-white font-bold px-[32px] h-[48px] border-[#505050]">
                    Primary
                    </Button>
                    <Button className="rounded-[40px] px-[32px] h-[48px] border-[#154284] text-white bg-[#154284] font-bold">Default</Button>
                </Space>
                </div>
            </div>
            <div className="flex justify-between items-center bg-[#1a1a1a] px-[30px]">
                <div className="flex items-center gap-[20px] text-white font-[100] text-[14px] py-[12px] list-footer">
                    <p>Download App</p>
                    <p>Accessbility</p>
                    <p>Contact Us</p>
                    <p>Job & Careers</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Terms Of Use</p>
                    <p>Terms & Conditions Of Sale</p>
                    <p>Anti-slavery</p>
                    <p>Help</p>
                </div>
                <div className="flex items-center pr-[14px] border-r text-white font-light">
                    <p>©2023 Chelsea FC Ltd</p>
                </div>
            </div>
        </div>
    )
}