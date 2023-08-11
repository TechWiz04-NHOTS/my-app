import ProductItem from "../../partials/ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import SideBar from "../SideBar/SideBar";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function ContentStore({searchString}: any){
    const pageNumber = 1;
    return(
        <div>
            <div className="max-w-[1460px] mx-auto">
                <div className="py-[14px] text-config border-b">Product List</div>
                <div className="flex gap-[24px] flex-row py-[16px]">
                    <SideBar searches={searchString} />
                    <div className="flex flex-col w-[100%]">
                        <div className="border-b pb-[24px]">
                            <Pagination />
                        </div>
                        <div className="grid-container pl-[40px]">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}