// Components
import Product from "./Product";

//Fake Data
const fakeProducts = [
  {
    id: 1,
    price: 13.99,
    name: "Varsity Cap",
    category: "Unisex Caps",
    image: "cap",
    sizes: [
      {
        name: "xs",
        available: true,
      },
      {
        name: "s",
        available: true,
      },
      {
        name: "m",
        available: true,
      },
      {
        name: "l",
        available: false,
      },
      {
        name: "xl",
        available: true,
      },
    ],
  },
  {
    id: 2,
    price: 13.99,
    name: "T-shirt",
    category: "T-shirts",
    image: "t-shirt",
    sizes: [
      {
        name: "xs",
        available: true,
      },
      {
        name: "s",
        available: false,
      },
      {
        name: "m",
        available: true,
      },
      {
        name: "l",
        available: false,
      },
      {
        name: "xl",
        available: true,
      },
    ],
  },
  {
    id: 3,
    price: 13.99,
    name: "Jeans",
    category: "Jeans",
    image: "jeans",
    sizes: [
      {
        name: "xs",
        available: false,
      },
      {
        name: "s",
        available: true,
      },
      {
        name: "m",
        available: true,
      },
      {
        name: "l",
        available: false,
      },
      {
        name: "xl",
        available: true,
      },
    ],
  },
];

const Products = () => {
  return (
    <div className=" col-span-9 h-full">
      {/* <h3 className='w-full h-fit font-medium'>Showing 2 results</h3> */}
      <div className="grid grid-cols-12 gap-10">
        {fakeProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            alt={product.image}
            price={product.price}
            title={product.name}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
