
import AllBrandData from "../../Components/AllBrand/AllBrandData";
import Banner from "../../Components/Banner/Banner";
import Discount from "../../Components/Discount/Discount";
import Follow from "../../Components/Follow/Follow";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Follow/>
            <AllBrandData></AllBrandData>
            <Discount></Discount>
            
        </div>
    );
};

export default Home;
