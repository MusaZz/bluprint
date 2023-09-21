//Image
import Logo from "../assets/Logo.png";
import LoginWallpaper from "../assets/login_wallpaper.png";

//Icons
import { BiWorld } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const SignIn = () => {
  return (
    <div>
      <div className=" max-w-screen-xl  mx-auto font-satoshi">
        <header className=" flex items-center gap-10 py-10">
          <a href="#">
            <img src={Logo} alt="logo" className="w-10 h-12 scale-110" />
          </a>
          <div className="relative w-20 scale-105">
            <button className=" flex items-center lang-switcher h-full w-full px-4 py-2 gap-2 rounded-md bg-[#1D1D1D]">
              <BiWorld className="fill-white" />
              <span className=" uppercase text-white">EN</span>
            </button>
          </div>
        </header>
        <main className="my-10">
          <div className=" space-y-20 w-1/3 scale-105">
            <h2 className=" capitalize flex text-6xl font-black">
              Sign In<span className=" text-[#FFC700]">.</span>
            </h2>
            <div className="w-full"></div>
            <form className="space-y-10">
              <label className="w-full flex flex-col space-y-2 font-black uppercase">
                <span>Email</span>
                <input
                  type="email"
                  className=" outline-none focus:outline-[#FFC700] focus:outline-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
                />
              </label>
              <label className="w-full flex flex-col space-y-2 font-black uppercase">
                <span>Password</span>
                <div className="relative">
                  <input
                    type="password"
                    className=" outline-none w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
                  />
                  <button className=" font-bold absolute top-4 right-4 opacity-50 hover:opacity-100 duration-200">
                    Show
                  </button>
                </div>
              </label>
              <button
                className=" w-full flex rounded-lg font-black uppercase duration-200 disabled:cursor-not-allowed disabled:bg-[#8E8E8E] disabled:text-white justify-between items-center bg-[#1D1D1D] hover:bg-[#0075FF] text-white text-medium px-4 py-4"
                disabled
              >
                Sign In
                <AiOutlineArrowRight className="fill-white w-5 h-5" />
              </button>
              <div className=" underline space-y-10 font-medium">
                <a href="#">Forgot my password</a>
              </div>
              <div className="text-base font-medium">
                <p>
                  global.new-here{" "}
                  <a href="#" className="underline">
                    Create an accout to get started
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className=" hidden lg:block w-1/2 h-screen fixed top-0 right-0">
            <img src={LoginWallpaper} alt="login_wallpaper" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignIn;
