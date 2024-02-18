import React from "react";
import Information from "./Information";
import Discount from "./Discount";

const Checkout = () => {
  return (
    <div className=" flex flex-col gap-8">
      <Information />
      <Discount />
    </div>
  );
};

export default Checkout;
