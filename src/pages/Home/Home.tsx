import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";

function Home({datas, setDatas,newsData, playerData, productsData, setProductData}: any) {
    return(
        <>
        <Header />
        <Content datas={datas} newsData={newsData} playerData={playerData} productsData={productsData} setProductData={setProductData} setDatas={setDatas} />
        <Footer />
        </>
    )
}

export default Home;