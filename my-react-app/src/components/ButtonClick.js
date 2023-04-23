import React from 'react'

function ButtonClick(props) {
   
    return (
    <div>

      <p>Add item to Basket<button onClick={props.buttonHandler}>Add</button></p>
      
    </div>
  )
}

export default ButtonClick
