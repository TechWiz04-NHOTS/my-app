import axios from "axios";
import Card from "../../partials/Card/Card";
import GroupLogo from "../../partials/GroupLogo/GroupLogo";
import Match from "../../partials/Match/Match";
import Players from "../../partials/Players/Players";
import Product from "../../partials/Product/Product";
import SimpleSlider from "../../partials/Slider/SimpleSlider";
import { useCallback, useEffect, useState } from "react";

export default function Content({datas,newsData, setDatas, playerData, productsData, setProductData}: any){
    return(
        <div>
            <Card />
            <GroupLogo />
            <Match datas={datas} setDatas = {setDatas}/>
            <div>
                <Product productsData={productsData} />
            </div>
        <div className="background-player flex flex-row justify-center items-center gap-[52px] py-[82px]">
            <div className="max-w-[1440px] mx-auto grid-container">
                {playerData.map((items: any) => (
                    <Players items={items} />
                ))}   
            </div>
        </div>
            <SimpleSlider newsData={newsData} />
        </div>
    )
}