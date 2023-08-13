import { useState, useEffect } from "react"


export default function Players({items}: any){
    return(
        <div className="bg-white shadow-2xl px-[32px] overflow-hidden grid-item">
                <div className="flex flex-row">
                    <div className="flex flex-col justify-between gap-[32px] py-[52px]">
                        <p className="text-[#ebe6df] text-[120px] drop-shadow-2xl z-0">{items.playerShirtNumber}</p>
                        <div className="text-[#001489]">
                            <div className="mb-[32px]">
                                <p>{items.name}</p>
                                <p className="text-[24px]"><strong>FIRST TEAM</strong></p>
                            </div>
                            <p>{items.position}</p>
                        </div>
                    </div>
                    <img src={`./image/${items.imageUrl}`} width="60%"/>
                </div>
            </div>
    )
}