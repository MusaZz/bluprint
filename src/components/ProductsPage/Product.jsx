const Product = ({ img, alt, price, category, title }) => {
  return (
    <div className="col-span-4">
      <a href="#">
        <div className="border border-neutral-200 overflow-hidden rounded-lg">
          <img src={img} alt={alt} />
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="font-bold text-neutral-500 text-sm">{category}</span>
          </div>
          <div className="text-xl font-bold">{price} AZN</div>
        </div>
      </a>
    </div>
  );
};

export default Product;
