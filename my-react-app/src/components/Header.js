import Basket from './Basket';



function Header(props){

    return (
        <div>
            <input type="text" placeholder='search' value={props.searchTerm} onChange={(event) => props.handleSearch(event)}/>
            <br/>
        <Basket orders={props.orders} setBasketItem={props.setBasketItem} basket={props.basket} />
        <p>Total Price: £{props.totalPrice.toFixed(2)}</p>
        <header>
        <div>
        
        
       
      </div>
        </header>

        
        </div>

        
    )
}

export default Header;