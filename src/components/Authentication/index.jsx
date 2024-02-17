// Component
import Wallpaper from "./Wallpaper";
import SectionTitle from "./SectionTitle";
import Header from "./Header";

//React Router
import { useNavigate } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import store from "../../redux/store";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from "../../redux/slices/input";
import Form from "./Form";

const Authentication = ({ type }) => {
  const navigate = useNavigate();

  const { firstname, lastname, email, password } = useSelector(
    (state) => state.input
  );

  return (
    <div>
      <Header />
      <main className="my-10">
        <div className=" space-y-20 w-1/3 scale-105">
          <SectionTitle
            title={
              type === "login"
                ? "Sign In"
                : type === "register"
                ? "Sign Up"
                : null
            }
          />
          <Form type={type} />
        </div>
        <Wallpaper type={type} />
      </main>
    </div>
  );
};

export default Authentication;
