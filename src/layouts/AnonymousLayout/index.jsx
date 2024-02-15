// React Router
import { Outlet } from "react-router-dom";

const AnonymousLayout = () => {
  return (
    <div className=" max-w-screen-xl  mx-auto font-satoshi ">
      <Outlet />
    </div>
  );
};

export default AnonymousLayout;
