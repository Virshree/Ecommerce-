import {Link} from 'react-router-dom';

function Cart(){
  return (
    <div className="container">
         <div className="text-center  mt-3 display-6">All Products
         added here</div>
        <Link to='/home'>
      <button className="btn btn-danger mt-3">Proceed to Checkout</button>
        </Link>
    </div>
  )
}
export default Cart;