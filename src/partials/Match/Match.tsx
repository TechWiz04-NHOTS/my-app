import MatchInfo from "../MatchInfo/MatchInfo";

export default function Match(){
    return(
        <div className="text-black flex justify-between flex-col rounded-xl pt-[24px] bg-white flex-row max-w-[1440px] mx-auto my-0 border-b pb-[40px]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row ml-[32px]">
                    <p className="bg-[linear-gradient(90deg,#cd122d,#154284)] text-[32px] font-[700] text-background">Chelsea First Team Matches</p>
                </div>
                <div className="flex flex-row items-center gap-[16px]">
                    <p><strong>NEXT MATCH</strong></p>
                    <p className="bg-[linear-gradient(90deg,#cd122d,#154284)] text-[40px] font-[700] text-background">04:10:31:36</p>
                </div>
                <div className="flex flex-row gap-[24px] items-center">
                    <div className="flex items-center gap-[8px] text-[14px] font-[700] text-[#154284]">
                        <i className="fa-solid fa-calendar-week"></i>
                        <p>Sync Schedules to Calendar</p>
                    </div>
                    <div className="flex items-center mr-[40px] gap-[32px]">
                        <i className="fa-solid fa-chevron-left"></i>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-[12px] mt-[32px]">
                <div className="text-white text-[28px] card flex items-center justify-center w-[352px] h-[305px] background-result ml-[32px]">
                    <p>View all<strong>Results</strong></p>
                </div>
                <MatchInfo />
                <MatchInfo />
                <MatchInfo />
            </div>
        </div>
    )
}