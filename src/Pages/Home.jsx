// Redux Hooks
import { useSelector } from "react-redux";

// React Router
import { useNavigate } from "react-router-dom";

//Hooks
import { useEffect } from "react";

//Components
import Header from "../components/Header";

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  console.log(user);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
