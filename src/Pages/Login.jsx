//Components
import Input from "../components/Register/Input";
import Button from "../components/Register/Button";
import Header from "../components/Register/Header";
import Wallpaper from "../components/Register/Wallpaper";
import SectionTitle from "../components/SectionTitle";

//React Router
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Header />
      <main className="my-10">
        <div className=" space-y-20 w-1/3 scale-105">
          <SectionTitle title ="Sign In" />
          <div className="w-full">
            <form className="space-y-10">
              <Input label="Email" />
              <Input label="Password" />
              <Button type="login" />
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
