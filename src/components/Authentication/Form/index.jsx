// Component
import Input from "./Input";
import Button from "./Button";

//React Router
import { Link } from "react-router-dom";

const Form = ({ type }) => {
  return (
    <div className="w-full">
      <form className="space-y-10">
        {type === "register" && <Input label="FirstName" />}
        {type === "register" && <Input label="LastName" />}
        <Input label="Email" />
        <Input label="Password" />
        <Button type={type} />
        {type === "login" ? (
          <div>
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
          </div>
        ) : type === "register" ? (
          <div className="text-base font-medium">
            <p className=" flex items-center gap-1">
              <span>Have an account?</span>
              <Link to="/login">
                <span className="underline">Sign in here.</span>
              </Link>
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
