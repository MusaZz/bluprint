//Components
import Input from "../components/Register/Input";
import Button from "../components/Register/Button";
import Header from "../components/Register/Header";
import SectionTitle from "../components/SectionTitle";
import Wallpaper from "../components/Register/Wallpaper";

//React Router
import { Link } from "react-router-dom";

// Store
import store from "../redux/store";
import { useSelector } from "react-redux";

// Toast
import toast from "react-hot-toast";

const Register = () => {
  const { firstName, lastName, email, password } = useSelector(
    (state) => state.input
  );

  const signUpHandler = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || email || password) {
      toast.error("Please fill the inputs");
      return;
    }
  };

  return (
    <div>
      <Header />
      <main className="my-10">
        <div className=" space-y-20 w-1/3 scale-105">
          <SectionTitle title="Sign Up" />
          <div className="w-full">
            <form className="space-y-10">
              <div className=" flex gap-4 justify-between w-full">
                <Input label="Firstname" />
                <Input label="Lastname" />
              </div>
              <Input label="Email" />
              <Input label="Password" />
              <Button click={signUpHandler} type="register" />
              <div className="text-base font-medium">
                <p>
                  Have an account?
                  <Link to="/login">
                    <span className="underline">Sign in here.</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Wallpaper type="register" />
      </main>
    </div>
  );
};

export default Register;
