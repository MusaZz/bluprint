// Images
import Example from "../../../assets/example.png";

// Hooks
import { useState, useEffect } from "react";

const Image = ({ image }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use dynamic import to load the image
    import(`../../../assets/${image}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [image]);

  return (
    <div className="col-span-4">
      <div className=" grid grid-cols-12 gap-5">
        <div className="col-span-2">
          <div className="space-y-4 max-h-[440px]">
            <button className="border-2 rounded-lg overflow-hidden  duration-200 ease-in-out border-[#FFC700]">
              <div className="">
                <img src={imageSrc} className="w-full" alt="cap" />
              </div>
            </button>
            <button className="border-2 rounded-lg overflow-hidden  duration-200 ease-in-out border-[#FFC700]">
              <div className="">
                <img src={Example} className="w-full" alt="cap" />
              </div>
            </button>
            <button className="border-2 rounded-lg overflow-hidden  duration-200 ease-in-out border-[#FFC700]">
              <div className="">
                <img src={Example} className="w-full" alt="cap" />
              </div>
            </button>
            <button className="border-2 rounded-lg overflow-hidden  duration-200 ease-in-out border-[#FFC700]">
              <div className="">
                <img src={Example} className="w-full" alt="cap" />
              </div>
            </button>
          </div>
        </div>
        <div className="relative col-span-10">
          <div className="border border-neutral-200 overflow-hidden rounded-lg cursor-pointer">
            <img src={imageSrc} alt="cap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
