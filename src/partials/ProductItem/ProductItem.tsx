export default function ProductItem(){
    return(
        <div className="flex flex-col justify-center items-center mr-[32px] py-[32px] mb-[64px] my-[8px] rounded-xl bg-[#fff]">
            <img src="./image/product1.avif" alt="product" className="w-[260px]" />
            <p className="text-[14px] font-light py-[10px]">Chelsea adidas Third Shirt 2023-24</p>
            <button className="border rounded-[40px] px-[28px] py-[12px] mt-[12px] hover:bg-[#f3f3f3] ease-in duration-100">Shopping Now</button>
        </div>
    )
}