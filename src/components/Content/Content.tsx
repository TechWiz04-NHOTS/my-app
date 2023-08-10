import Card from "../../partials/Card/Card";
import GroupLogo from "../../partials/GroupLogo/GroupLogo";
import Match from "../../partials/Match/Match";
import Players from "../../partials/Players/Players";
import Product from "../../partials/Product/Product";
import SimpleSlider from "../../partials/Slider/SimpleSlider";

export default function Content(PlayerInfo: any){
    return(
        <div>
            <Card />
            <GroupLogo />
            <Match />
            <div>
                <Product />
            </div>
        <div className="background-player flex flex-row justify-center items-center gap-[52px] py-[82px]">
            <div className="max-w-[1440px] mx-auto grid-container">
                <Players />    
                <Players />   
                <Players />   
                <Players />       
                <Players />   
                <Players />   
            </div>
        </div>
            <SimpleSlider />
        </div>
    )
}