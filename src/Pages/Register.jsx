//Components
import Input from "../components/Register/Input";
import Button from "../components/Register/Button";
import Header from "../components/Register/Header";
import SectionTitle from "../components/SectionTitle";
import Wallpaper from "../components/Register/Wallpaper";

//React Router
import { Link } from "react-router-dom";

const Register = () => {
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
              <Button type="register" />
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
