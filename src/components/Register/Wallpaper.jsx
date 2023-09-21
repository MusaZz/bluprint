//Image
import LoginWallpaper from "../../assets/login_wallpaper.png";
import RegisterWallpapaer from "../../assets/register_wallpaper.png";

const Wallpaper = ({ type }) => {
  return (
    <div className=" hidden lg:block w-1/2 h-screen fixed top-0 right-0">
      {type === "login" && <img src={LoginWallpaper} alt="login_wallpaper" />}
      {type === "register" && (
        <img src={RegisterWallpapaer} alt="register_wallpaper" />
      )}
    </div>
  );
};

export default Wallpaper;
