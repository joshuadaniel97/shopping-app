import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


function Wishlist(props) {

  return (
    <div className='basket-btn'>
      <FontAwesomeIcon icon={faBasketShopping} style={{color: "#060307",}} />
        {/* <button onClick={props.buttonHandler}></button> */}
        {props.orders}
    </div>
    
   
  )
}

export default Wishlist
