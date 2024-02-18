// Components
import Item from "./Item";

const Items = ({ cartData }) => {
  return (
    <div className="pr-10  grid grid-rows-2 gap-20 ">
      {cartData.map((cartItem) => (
        <Item
          key={cartItem.id + cartItem.size}
          name={cartItem.name}
          category={cartItem.category}
          counter={cartItem.counter}
          color={cartItem.color}
          size={cartItem.size}
          price={cartItem.price}
          image={cartItem.image}
          id={cartItem.id}
        />
      ))}
    </div>
  );
};

export default Items;
