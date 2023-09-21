// Redux Hooks
import { useSelector } from "react-redux";

// React Router
import { useNavigate } from "react-router-dom";

//Hooks
import { useEffect } from "react";

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  console.log(user);

  return <div className="text-6xl text-red-900">Home</div>;
};

export default Home;
