export default function MatchInfo(){
    return(
        <div className="card w-[352px] h-[305px] shadow-2xl">
            <div className="flex items-center gap-[8px] pl-[20px] bg-[#154284] text-white ">
                <p className="p-0 m-0 text-[32px]"><strong>02</strong></p>
                <p><strong>WEDNESDAY</strong>AUGUST</p>
            </div>
            <div className="flex flex-row items-center justify-center border-b pt-[30px] py-[20px]">
                <img src="./image/logo--header.webp" width="60px"/>
                <div className="flex flex-col gap-[4px] items-center justify-center">
                    <p className="text-[10px]">90' + 2</p>
                    <p className="text-[32px]"><strong>0 - 1</strong></p>
                    <p className="text-[20px]"><strong>Chelsea</strong> vs <strong>Barcelona</strong></p>
                    <p className="text-[10px]">Allegiant Stadium</p>
                </div>
                <img src="./image/logo-barca.png" width="50px"/>
                <i className="fa-solid fa-arrow-right ml-[6px]"></i>
            </div>
            <div className="flex gap-[32px] flex-row items-center justify-center py-[26px] text-white font-[700]">
                <button className="py-[8px] px-[1.6rem] bg-[linear-gradient(90deg,#081f1f,#2548ab)] text-[12px]">CHELSEA TV+</button>
                <button className="py-[8px] px-[12px] bg-[linear-gradient(270deg,#154284,#cd122d)] text-[12px]">FULL MATCH REPORT</button>
            </div>
        </div>
    )
}