import {Link} from 'react-router-dom';

function Product(){
  return (
    <div className="container">
        <div className="text-center  mt-3 display-6">All Products
         Listed here</div>
        <Link to='/cart'>
      <button className="btn btn-warning">Add to cart</button>
        </Link>
    </div>
  )
}
export default Product;