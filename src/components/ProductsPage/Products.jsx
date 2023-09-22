// Images
import Cap from "../../assets/cap.png";
import Jeans from "../../assets/jeans.png"
import T_shirt from "../../assets/t-shirt.png";

// Components
import Product from "./Product";

const Products = () => {
  return (
    <div className=" col-span-9 h-full">
      {/* <h3 className='w-full h-fit font-medium'>Showing 2 results</h3> */}
      <div className="grid grid-cols-12 gap-10">
        <Product
          img={Cap}
          alt="cap"
          price="13.99"
          category="Unisex Caps"
          title="Varsity Cap"
        />
        <Product
          img={T_shirt}
          alt="t-shirt"
          price="13.99"
          category="T-shirts"
          title="T-shirt"
        />
      </div>
    </div>
  );
};

export default Products;
