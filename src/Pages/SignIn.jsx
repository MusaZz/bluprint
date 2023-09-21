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
          <Title type="sign-in" />
          <div className="w-full">
            <form className="space-y-10">
              <Input label="Email" />
              <Input label="Password" />
              <Button type="sign-in" />
              <div className=" underline space-y-10 font-medium">
                <a href="#">Forgot my password</a>
              </div>
              <div className="text-base font-medium">
                <p>
                  global.new-here{" "}
                  <Link to="/sign-up">
                    <span className="underline">
                      Create an accout to get started
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Wallpaper type="sign-in" />
      </main>
    </div>
  );
};

export default SignIn;
