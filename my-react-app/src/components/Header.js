import Wishlist from './Wishlist';



function Header(props){

    return (
        <div>
            <h1>Hello</h1>
        <Wishlist orders={props.orders} setBasketItem={props.setBasketItem}  />


        
        </div>

        
    )
}

export default Header;