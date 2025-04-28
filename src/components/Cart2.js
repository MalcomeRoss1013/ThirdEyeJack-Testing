import React, { useState } from 'react';




const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#001233",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    color: "#ffffff",
  };

const Officeware = 'Officeware';
const Antivirus = 'Antivirus';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: Antivirus,
      name: 'Avast',
      cost: 299.99,
      image:
        'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2c6b37046de7e122fb1bb0f181e615ce/avast-business-antivirus-pro-plus.jpg',
    },
    {
      category: Officeware,
      name: 'Office Pro Plus 2019',
      cost: 19.99,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtK0P65uy8ejaR7Yrmu1JA1AX3wSCIm7nFQ&usqp=CAU'   
     },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(Officeware);


  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      <div classname= "login-wrapper" style={loginPageStyle}>
      Select a category
      <br></br> 
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={Officeware}>{Officeware}</option>
        <option value={Antivirus}>{Antivirus}</option>
      </select>
      <br></br> 
      
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
              <br></br> 
      
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <br></br>
            <br></br>
            <h4>${product.cost}</h4>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
         
        ))}
      </div>
      </div>    
    </>
  );
}