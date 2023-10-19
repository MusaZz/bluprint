// Redux Hooks
import { useSelector } from "react-redux";

// React Router
import { useNavigate } from "react-router-dom";

//Hooks
import { useEffect } from "react";

// Components
import Collections from "../components/HomePage/Collections";
import TopProducts from "../components/HomePage/TopProducts";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.firstName || user.lastName) {
      toast.success(`Welcome ${user.firstName} ${user.lastName}`);
    }
  }, []);

  console.log(user);

  return (
    <div className="my-20">
      <div className="space-y-40">
        <Collections />
        <TopProducts />
        <Newsletter page="HomePage" />
      </div>
    </div>
  );
};

export default Home;
