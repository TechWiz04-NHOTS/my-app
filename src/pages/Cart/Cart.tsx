import ContentCart from "../../components/ContentCart/ContentCart";
import FooterStore from "../../components/FooterStore/FooterStore";
import HeaderStore from "../../components/HeaderStore/HeaderStore";

export default function Cart(){
    return(
        <div>
            <HeaderStore />
            <ContentCart />
            <FooterStore />
        </div>
    )
}