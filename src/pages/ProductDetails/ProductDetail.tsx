import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterStore from "../../components/FooterStore/FooterStore";
import HeaderStore from "../../components/HeaderStore/HeaderStore";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../../partials/ProductItem/ProductItem";

export default function ProductDetail({productsData}: any){
    var { id } = useParams();
    const [datas, setDatas] = useState<any>([])
    const [size, setSize] = useState('')
    const [quantityString, setQuantityString] = useState('')
    const [quantity, setQuantity] = useState(1)
    const convert = parseInt(quantityString, 10)
    // console.log(convert)
    // setQuantity(convert)
    // console.log(quantity)
    const dataProduct = {
        id,
        quantity,
    }

    const handleGetSize = (e: any) => {
        const sizeValue = e.target.textContent
        setSize(sizeValue)
      }

    const handleAddToCart = useCallback(async () =>{
        const response = await axios.post('http://localhost:3000/api/v1/add-product', dataProduct)
        .then((res) => {
            if (res.status == 200){
                console.log(dataProduct)
                window.location.href='/cart'
            }
            }).catch((err) => {
                console.log(err)
            })
      },[])
  
    useEffect(() => {
      for(let x = 0; x<productsData.length; x++){
        var data = productsData.find((x: any) => x.id.toString() === id);
        setDatas(data)
    }
    }, [productsData, id]);
    return(
        <div>
            <HeaderStore />
            <div className="max-w-[1460px] mx-auto">
                <div className="py-[14px] text-config border-b mb-[32px]">Product Details/{datas.id}</div>
                <div className="flex flex-row justify-center gap-[40px]">
                <div className="w-[60%] bg-blue">
                    <div className="flex flex-col">
                        <img src={`../image/${datas.imagesUrl}`} alt="productImage" className="w-[100%]" />
                    </div>
                </div>
                <div className="w-[30%] bg-gray">
                    <div className="flex flex-col">
                        <p className="text-[20px] font-light text-[#242424]">{datas.name}</p>
                        <p className="text-[16px] mb-[8px] text-[#247e0c] font-[0]">Personalisation available</p>
                        <p className="text-[16px] font-light">Your Price: ${datas.price}</p>
                        <div className="bg-[#f3f3f3] px-[16px] py-[16px] mb-[20px]">
                            <div className="flex justify-between items-center">
                                <p>Size</p>
                                <p className="text-[12px] text-[#3863a3]">SIZE CHART</p>
                            </div>
                            <div className="flex flex-row gap-[12px] mt-[8px]">
                                <p onClick={handleGetSize} className="border px-[24px] py-[6px] hover:text-[#fff] hover:bg-[#686868] cursor-pointer">S</p>
                                <p onClick={handleGetSize} className="border px-[24px] py-[6px] hover:text-[#fff] hover:bg-[#686868] cursor-pointer">M</p>
                                <p onClick={handleGetSize} className="border px-[24px] py-[6px] hover:text-[#fff] hover:bg-[#686868] cursor-pointer">L</p>
                                <p onClick={handleGetSize} className="border px-[24px] py-[6px] hover:text-[#fff] hover:bg-[#686868] cursor-pointer">XL</p>
                                <p onClick={handleGetSize} className="border px-[24px] py-[6px] hover:text-[#fff] hover:bg-[#686868] cursor-pointer">2XL</p>
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="flex flex-col">
                                    <p>Quantity</p>
                                    <select onChange={(e) => setQuantityString(e.target.value)} className="border rounded-md px-[32px] py-[12px]">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-[280px] gap-[16px] mt-[12px]">
                                    <button className="flex flex-row items-center gap-[12px] w-[100%] text-white  justify-center bg-[#686868] rounded-sm py-[8px]">Customise</button>
                                    <button onClick={handleAddToCart} className="flex flex-row items-center gap-[12px] w-[100%] text-white  justify-center bg-[#242424] rounded-sm py-[8px]">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] border-t py-[20px] border-b">
                            <p className="font-light py-[8px]">Shipping</p>
                            <div>
                                <ul>
                                    <li className="text-[14px] text-[#505050]">THIS IS A AVAILABLE ITEM. THIS ITEM SHIPS ON OR BEFORE Wednesday, 23 August 2023.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-[16px] border-t py-[20px] border-b">
                            <p className="font-light py-[8px]">Description</p>
                            <div>
                                <ul>
                                    <li className="text-[14px] text-[#505050]">{datas.description}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-[16px] border-t py-[20px] border-b">
                            <p className="font-light py-[8px]">Details</p>
                            <div className="custom-ul-li">
                                <ul>
                                    <li className="text-[14px] text-[#505050]">PRODUCT NAME: {datas.name}</li>
                                    <li className="text-[14px] text-[#505050]">RELEASE TIME: {datas.insertedTime}</li>
                                    <li className="text-[14px] text-[#505050]">Designer: {datas.updatedBy}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </div>
            <div className="grid-container pl-[40px]">
                        {productsData.map((items: any) => (
                            <ProductItem key={items.id} items={items} />  
                        ))}   
                        </div>
            <FooterStore />
        </div>
    )
}