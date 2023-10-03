// Components
import CartItem from "./CartItem";

const CartItems = ({ cartData }) => {
  return (
    <div className="pb-10 flex gap-20  overflow-x-auto">
      {cartData.map((cartItem) => (
        <CartItem
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

export default CartItems;
