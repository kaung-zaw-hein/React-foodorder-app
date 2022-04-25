import React, { useRef, useState, useContext } from "react";  
import Input from "./UI/Input";
import CartContext from '../store/cart-context';

function MenuItem({id, image, name, price, description }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCartHandler(enteredAmountNumber);
  };

  return (
    <div className="menuItem">
      <div className="menuImage" style={{ backgroundImage: `url(${image})` }}> </div>
      <div className="menudescription">
         <div>
          <h1> {name} </h1>
          <p>{description}</p>
          <p> ${price} </p>
         </div>
          <form onSubmit={submitHandler}>
          <Input
           ref={amountInputRef}
            label='Amount'
            input={{
              id: 'amount_' + price,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1',
            }}
          />
          <button>+ Add</button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      </div>
    </div>
  );
}

export default MenuItem;
