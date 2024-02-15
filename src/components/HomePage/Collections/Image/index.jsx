// // Images
// import Collection_1 from "../../../../assets/collection_1.png";
// import Collection_2 from "../../../../assets/collection_2.png";
// import Collection_3 from "../../../../assets/collection_3.png";
// import Collection_4 from "../../../../assets/collection_4.png";

// Hooks
import { useState, useEffect } from "react";

const CollectionImage = ({ image }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Use dynamic import to load the image
    import(`../../../../assets/collection_${image}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [image]);

  return (
    <div className="rounded-2xl">
      <img src={imageSrc} alt="collection" />
    </div>
  );
};

export default CollectionImage;
