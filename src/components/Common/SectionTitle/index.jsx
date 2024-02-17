const SectionTitle = ({ title }) => {
  return (
    <h2 className="capitalize text-6xl font-black flex">
      {title}
      <span className="text-[#FFC700]">.</span>
    </h2>
  );
};

export default SectionTitle;
