import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
          <div className="max-w-7xl mx-auto mb-5">
          <Header></Header>
            <Outlet></Outlet>
          </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;