// React Router
import { Outlet } from "react-router-dom";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer";

const MainLayout = () => {
  return (
    <div className=" max-w-screen-xl  mx-auto font-satoshi ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
