const Title = ({ type }) => {
  return (
    <h2 className=" capitalize flex text-6xl font-black">
      {type === "sign-in" && "Sign In"}
      {type === "sign-up" && " Sign Up"}
      <span className=" text-[#FFC700]">.</span>
    </h2>
  );
};

export default Title;
