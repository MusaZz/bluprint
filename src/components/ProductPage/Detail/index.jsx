// Image
import YellowLine from "../../../assets/yellow_line.png";

const Detail = ({ name, category, price }) => {
  return (
    <div className=" col-span-4">
      <div className=" ">
        <div>
          <span className="font-bold text-neutral-500">{category}</span>
          <h2 className="font-black text-5xl w-2/3 leading-normal mb-8">
            {name}
          </h2>
          <div className="font-black relative max-w-fit text-4xl">
            <span className=" relative z-10">{price} AZN</span>
            <img
              src={YellowLine}
              alt="line"
              className="absolute left-0 -top-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
