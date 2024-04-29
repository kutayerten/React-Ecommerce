import { useSelector } from "react-redux";
import { CartItemList, SectionTitle, CartTotal } from "../components";
import { Link } from "react-router-dom";


const Cart = () => {
  //temp
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  
  if(numItemsInCart === 0){
    return <SectionTitle text='Your cart is empty' />;
  }

  
  return (
    <>
    <SectionTitle text='Shopping Cart' />
    <div className="grid lg:grid-cols-12 gap-8 mt-8">
      <div className="lg:col-span-8">
        <CartItemList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotal />
        {user?
         (<Link to='/checkout' className="btn btn-primary btn-block mt-8 uppercase">Proceed To Checkout</Link>)
        :
        (<Link to='/login' className="btn btn-primary btn-block mt-8 uppercase">Please Login</Link>)
        }
      </div>
    </div>
    </>
  )
}

export default Cart