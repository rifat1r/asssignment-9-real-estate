import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="min-w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
