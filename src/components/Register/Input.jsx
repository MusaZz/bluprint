const Input = ({ label }) => {

  return (
    <label className=" flex flex-col space-y-2 font-black uppercase">
      <span>{label}</span>
      {label === "Firstname" && (
        <input
          type="text"
          className=" outline-none focus:outline-[#FFC700] focus:outline-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Lastname" && (
        <input
          type="text"
          className=" outline-none focus:outline-[#FFC700] focus:outline-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Email" && (
        <input
          type="email"
          className=" outline-none focus:outline-[#FFC700] focus:outline-4 w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
        />
      )}
      {label === "Password" && (
        <div className="relative">
          <input
            type="password"
            className=" focus:outline-[#FFC700] focus:outline-4 outline-none w-full px-4 py-3 flex- border-2 border-[#1D1D1D] rounded-lg"
          />
          <button className=" font-bold absolute top-4 right-4 opacity-50 hover:opacity-100 duration-200">
            Show
          </button>
        </div>
      )}
    </label>
  );
};

export default Input;
