import React, { useState } from 'react';
import AddButton1 from './AddButton1';
import AddButton2 from './AddButton2';
import Cart2 from './Cart2';
import Cart from './Cart';
import './All.css';




    


  function Cart3() {
      const [cart, setCart] = useState([]);
      const [page, setPage] = useState('/cart3');
    
      const navigateTo = (nextPage) => {
        setPage(nextPage);
      };
   

   

 return (
   
    <div className="App">
       <br></br>
            <br></br>
    
      
    <div>


        <div  onClick={() => navigateTo('/cart3')}>
        <AddButton2 />        
        </div>  
      
  
      <br></br>
            <br></br>
            </div>
    
    {page === '/cart3' && (
      <Cart2 cart={cart} setCart={setCart} />
    )}
    {page === '/cart' && (
      <Cart cart={cart} setCart={setCart} />
    )}


<div className="ButtonP1" onClick={() => navigateTo('/cart')}>
       <AddButton1 />                           
       </div>   
       
  </div>
  );
}

export default Cart3;