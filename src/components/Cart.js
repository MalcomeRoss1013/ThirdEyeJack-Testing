import React from 'react';


const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "1000px",
    background: "#001233",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    color: "#ffffff",
  };

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  // const removeFromCart = (productToRemove) => {
  //   setCart(
  //     cart.filter((product) => product !== productToRemove)
  //   );
  // };

  return (
    
     <div classname= "login-wrapper" style={loginPageStyle}>
      <h1>Cart</h1>

      <br></br>

      <br></br>

      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <div classname="quantity-input">

              quantity: 
              <br></br>
            <input value={product.quantity} onChange={(e) => setQuantity( product, parseInt(e.target.value)) } />
            </div>
            <img src={product.image} alt={product.name} />

            <br></br>
            <br></br>
            {/* <button onClick={() => removeFromCart(product)}>
              Remove
            </button> */}
          </div>
        ))}
      </div>

      <br></br>
      <br></br>

      <div>Total Cost: ${getTotalSum()}</div>
      <br></br>

      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}

      
     
    
     </div>
  );
}
