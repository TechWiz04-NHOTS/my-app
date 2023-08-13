import { useState } from "react";
import ContentStore from "../../components/ContentStore/ContentStore";
import FooterStore from "../../components/FooterStore/FooterStore";
import HeaderStore from "../../components/HeaderStore/HeaderStore";

export default function Store({datas, setDatas, productsData, setProductData}: any){
    const [search, setSearch] = useState<any[]>([]);
    return(
        <>
            <HeaderStore searchString = {search} setSearchString = {setSearch} />
            <ContentStore searchString = {search} productsData={productsData} setProductData={setProductData} />
            <FooterStore />                                           
        </>
    )
}