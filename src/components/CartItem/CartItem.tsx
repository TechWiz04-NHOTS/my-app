export default function CartItem(){
    return(
        <div className="flex border-y py-[24px] gap-[32px]">
                            <img src="./image/product1.avif" alt="product" className="w-[200px]" />
                            <div className="flex flex-col gap-[16px]">
                                <p className="text-[14px]">Manchester United adidas Third Authentic Shirt 2023-24</p>
                                <div className="flex flex-row gap-[12px]">
                                <label className="absolute text-black ml-[8px] mt-[-10px] text-[12px] bg-white px-[6px]"><i>Size</i></label>
                                    <select className="border rounded-md px-[32px] py-[12px]" name="size">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                    </select>
                                    <label className="absolute text-black ml-[120px] mt-[-10px] text-[12px] bg-white px-[6px]"><i>Quantity</i></label>
                                    <select className="border rounded-md px-[32px] py-[12px]" name="size">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <p className="text-[14px]">THIS IS A PRE-ORDER ITEM. THIS ITEM SHIPS ON OR BEFORE Wednesday, 23 August 2023.</p>
                            </div>
                            <p>$110</p>
                            <p>X</p>
                        </div>
    )
}