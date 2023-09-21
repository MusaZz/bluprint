//Components
import Input from "../components/Register/Input";
import Button from "../components/Register/Button";
import Header from "../components/Register/Header";
import Title from "../components/Register/Title";
import Wallpaper from "../components/Register/Wallpaper";

//React Router
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Header />
      <main className="my-10">
        <div className=" space-y-20 w-1/3 scale-105">
          <Title type="sign-up" />
          <div className="w-full">
            <form className="space-y-10">
              <div className=" flex justify-between w-full">
                <Input label="Firstname" />
                <Input label="Lastname" />
              </div>
              <Input label="Email" />
              <Input label="Password" />
              <Button type="sign-up" />
              <div className="text-base font-medium">
                <p>
                  Have an account?
                  <Link to="/sign-in">
                    <span className="underline">Sign in here.</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Wallpaper type="sign-up" />
      </main>
    </div>
  );
};

export default SignIn;
