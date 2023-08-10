

export default function Players(){
    return(
        <div className="bg-white shadow-2xl px-[32px] overflow-hidden grid-item">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-between gap-[32px] py-[52px]">
                        <p className="text-[#ebe6df] text-[120px] drop-shadow-2xl z-0">1</p>
                        <div className="text-[#001489]">
                            <div className="mb-[32px]">
                                <p>Kepa</p>
                                <p className="text-[24px]"><strong>ARRIZABALAGA</strong></p>
                            </div>
                            <p>Goal keeper</p>
                        </div>
                    </div>
                    <img src="./image/player1.webp" width="60%"/>
                </div>
            </div>
    )
}