import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ProductItem({items}: any){
    console.log(items.name)
    return(
        <div className="flex flex-col justify-center items-center mr-[32px] py-[32px] px-[28px] h-[435px] mb-[64px] my-[8px] rounded-xl bg-[#fff]">
            <img src={`./image/${items.imagesUrl}`} alt="product" className="w-[260px]" />
            <p className="text-[14px] font-light py-[10px]">{items.name}</p>
            <button className="border rounded-[40px] px-[28px] py-[12px] mt-[12px] hover:bg-[#f3f3f3] ease-in duration-100">
                <Link to={`/${items.id}`}>Shopping Now</Link>
            </button>
        </div>
    )
}