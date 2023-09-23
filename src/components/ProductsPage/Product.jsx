// Hooks
import { useState, useEffect } from "react";

const Product = ({ image, alt, price, category, title }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use dynamic import to load the image
    import(`../../assets/${image}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [image]);
  return (
    <div className="col-span-4">
      <a href="#">
        <div className=" mb-4 border border-neutral-200 overflow-hidden rounded-lg">
          <img src={imageSrc} alt={alt} />
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="font-bold text-neutral-500 text-sm">
              {category}
            </span>
          </div>
          <div className="text-xl font-bold">{price} AZN</div>
        </div>
      </a>
    </div>
  );
};

export default Product;
