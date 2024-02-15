// Store
import { useSelector } from "react-redux";
import store from "../../redux/store";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from "../../redux/slices/input";

// Hooks
import { useState } from "react";

const Input = ({ label }) => {
  const [inputType, setInputType] = useState("password");

  const toggleInputType = (event) => {
    event.preventDefault();

    if (inputType === "password") {
      setInputType("Text");
    } else {
      setInputType("password");
    }
  };

  const { firstName, lastName, password, email } = useSelector(
    (state) => state.input
  );

  const setFirtNameValue = (value) => {
    store.dispatch(setFirstName(value));
  };

  const setPasswordValue = (value) => {
    store.dispatch(setPassword(value));
  };

  const setLastNameValue = (value) => {
    store.dispatch(setLastName(value));
  };

  const setEmailValue = (value) => {
    store.dispatch(setEmail(value));
  };

  return (
    <label className=" flex flex-col space-y-2 font-black uppercase">
      <span>{label}</span>
      {label === "Firstname" && (
        <input
          required={true}
          value={firstName}
          onChange={(event) => setFirtNameValue(event.target.value)}
          type="text"
          className=" outline-none focus:ring-[#FFC700] focus:ring-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Lastname" && (
        <input
          required={true}
          value={lastName}
          onChange={(event) => setLastNameValue(event.target.value)}
          type="text"
          className=" outline-none focus:ring-[#FFC700] focus:ring-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Email" && (
        <input
          required={true}
          value={email}
          onChange={(event) => setEmailValue(event.target.value)}
          type="email"
          className=" outline-none focus:ring-[#FFC700] focus:ring-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Password" && (
        <div className="relative">
          <input
            required={true}
            value={password}
            onChange={(event) => setPasswordValue(event.target.value)}
            type={inputType}
            className=" focus:ring-[#FFC700] focus:ring-4 outline-none w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
          />
          <button
            onClick={toggleInputType}
            className=" font-bold absolute top-4 right-4 opacity-50 hover:opacity-100 duration-200"
          >
            {inputType === "password" ? "Show" : "Hide"}
          </button>
        </div>
      )}
    </label>
  );
};

export default Input;
