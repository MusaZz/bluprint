//Icon
import { AiOutlineArrowRight } from "react-icons/ai";

// Store
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from "../../../../redux/slices/input";

// Hooks
import { useState, useEffect } from "react";

const Button = ({ type, click }) => {
  const { firstName, lastName, email, password } = useSelector(
    (state) => state.input
  );

  const [isDisabled, setIsDisabled] = useState(true);

  const determineDisabledState = () => {
    if (type === "login") {
      setIsDisabled(email && password); // Disable if email or password is empty
    } else if (type === "register") {
      setIsDisabled(firstName && password && lastName && email); // Disable if any of the fields is empty
    }
  };

  const emptyValues = () => {
    store.dispatch(setEmail(""));
    store.dispatch(setFirstName(""));
    store.dispatch(setPassword(""));
    store.dispatch(setLastName(""));
  };

  useEffect(() => {
    emptyValues();
  }, []);

  useEffect(() => {
    determineDisabledState();
  }, [firstName, password, lastName, email, type]);

  return (
    <button
      onClick={click}
      className=" w-full flex rounded-lg font-black uppercase duration-200 disabled:cursor-not-allowed disabled:bg-[#8E8E8E] disabled:text-white justify-between items-center bg-[#1D1D1D] hover:bg-[#0075FF] text-white text-medium px-4 py-4"
      disabled={!isDisabled}
    >
      {type === "login" && " Sign In"}
      {type === "register" && " Sign Up"}
      <AiOutlineArrowRight className="fill-white w-5 h-5" />
    </button>
  );
};

export default Button;
