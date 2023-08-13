export default function News({items}: any){
    return(
        <div className="mr-[16px] flex flex-col">
            <img
                src={`./image/${items.bannerUrl}`}
                alt="news2"
            />
            <p className="text-[20px] py-[16px] text-[#001489] pb-[40px]">{items.title}</p>
            <div className="flex justify-between border-t items-center py-[10px]">
                <p className="text-[#001489] text-[14px]">MEN'S TEAM</p>
                <p className="text-[10px]">AN HOUR AGO</p>
            </div>
        </div>
    )
}