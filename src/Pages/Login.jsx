//Components
import Input from "../components/Register/Input";
import Button from "../components/Register/Button";
import Header from "../components/Register/Header";
import Wallpaper from "../components/Register/Wallpaper";
import SectionTitle from "../components/SectionTitle";

//React Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Store
import store from "../redux/store";
import { useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

// Toast
import toast from "react-hot-toast";

// Supabase
import supabase from "../supabase";

const Login = () => {
  const navigate = useNavigate();

  const { email, password } = useSelector((state) => state.input);

  const signInHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Please fill the inputs");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error during registration:", error);
      toast.error(error.message);
      return;
    }

    if (data) {
      console.log(data);
      store.dispatch(
        setUser({
          firstName: data.user.user_metadata.firstName,
          lastName: data.user.user_metadata.lastName,
          email: data.user.email,
        })
      );
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <main className="my-10">
        <div className=" space-y-20 w-1/3 scale-105">
          <SectionTitle title="Sign In" />
          <div className="w-full">
            <form className="space-y-10">
              <Input label="Email" />
              <Input label="Password" />
              <Button click={signInHandler} type="login" />
              <div className=" underline space-y-10 font-medium">
                <span>Forgot my password</span>
              </div>
              <div className="text-base font-medium">
                <p>
                  global.new-here
                  <Link to="/register">
                    <span className="underline">
                      Create an accout to get started
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Wallpaper type="login" />
      </main>
    </div>
  );
};

export default Login;
