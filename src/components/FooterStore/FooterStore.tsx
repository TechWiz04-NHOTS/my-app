import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function FooterStore(){
    return(
        <div>
            <div className="bg-[#f3f3f3] py-[32px]">
                <div className="max-w-[1400px] mx-auto flex justify-between items-center custom-ul-li">
                    <ul>
                        <li className="font-semibold">Customer Service</li>
                        <li>Help</li>
                        <li>Track Order</li>
                        <li>Size Chart</li>
                    </ul>
                    <ul>
                        <li className="font-semibold">Worry Free Shopping</li>
                        <li>Safe Shopping</li>
                        <li>Deliver & Shipping</li>
                        <li>90-Day Returns</li>
                    </ul>
                    <ul>
                        <li className="font-semibold">Information</li>
                        <li>My Account</li>
                        <li>About Us</li>
                        <li>Affiliate Program</li>
                    </ul>
                    <div className="flex flex-col w-[260px] justify-between">
                        <p className="text-[12px] py-[8px]">Stay updated on sales, new items and more</p>
                        <button className="bg-[#000] text-[14px] text-white px-[32px] mb-[20px] hover:bg-[#3f3f3f] py-[6px]">SIGN UP & SAVE 10%</button>
                        <p className="mb-[4px]">Follow Us</p>
                        <div className="flex items-center gap-[12px] text-white">
                            <FaTwitter className="rounded-full bg-[#000] cursor-pointer hover:bg-[#3f3f3f] p-[8px] w-[32px] h-[32px]" />  
                            <FaFacebookF className="rounded-full bg-[#000] cursor-pointer hover:bg-[#3f3f3f] p-[8px] w-[32px] h-[32px]" />
                            <FaYoutube className="rounded-full bg-[#000] cursor-pointer hover:bg-[#3f3f3f] p-[8px] w-[32px] h-[32px]" />
                            <FaInstagram className="rounded-full bg-[#000] cursor-pointer hover:bg-[#3f3f3f] p-[8px] w-[32px] h-[32px]" />
                            <FaTiktok className="rounded-full bg-[#000] cursor-pointer hover:bg-[#3f3f3f] p-[8px] w-[32px] h-[32px]" />  
                        </div> 
                    </div>
                </div>
            </div>
            <div className="pt-[36px] pb-[20px] max-w-[1400px] mx-auto flex flex-col text-[12px] font-thin">
                <div className="flex flex-row items-center gap-[12px]">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>CA Supply Chains Act/UK Modern Slavery Act</p>
                    <p>Site Map</p>
                    <p>Cookie Policy & Management</p>
                </div>
                <p className="py-[6px]">© 2023, Fanatics, Inc. and/or its affiliated entities. All Rights Reserved. No portion of this site may be reproduced or duplicated without the express permission of Fanatics.</p>
            </div>
        </div>
    )
}