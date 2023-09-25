import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Roots = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;