import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());

    }
    return(
        <div className="text-center m-2 p-2 ">
            <h1 className="font-bold text-xxl">Cart Items</h1>
            <button 
                className="bg-black text-white rounded-lg m-2 p-2"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length ===0 && <h1> Cart is empty.... Add items to the cart</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items = {cartItems} />
            </div>
        </div>
    )
}

export default Cart;