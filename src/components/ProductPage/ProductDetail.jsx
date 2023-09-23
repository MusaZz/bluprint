// Image
import CurvedLine from "../../assets/curved_line.png";

const ProductDetail = () => {
  return (
    <div className=" col-span-4">
      <div className=" ">
        <div>
          <span className="font-bold text-neutral-500">Caps</span>
          <h2 className="font-black text-5xl w-2/3 leading-normal mb-8">
            Varsity Cap
          </h2>
          <div className="font-black relative max-w-fit text-4xl">
            <span className=" relative z-10">13.99 AZN</span>
            <img
              src={CurvedLine}
              alt="line"
              className="absolute left-0 -top-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
