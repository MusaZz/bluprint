// Components
import Item from "./Item";

const Items = ({ cartData, setWantDelete }) => {
  return (
    <div className="pb-10 flex gap-20  overflow-x-auto">
      {cartData.map((cartItem) => (
        <Item
          setWantDelete={setWantDelete}
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
