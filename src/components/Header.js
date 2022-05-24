import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    
         <div className="bg-dark text-white px-5 py-2">
            <div className="row">
                <div className="col">
                  <h4>Ecommerce</h4>
                </div>
                <div className="col">
                    <Link style={{textDecoration:"none", color:"white"}}to='/cart'>
                    <h4>Cart</h4>
                    </Link>
                </div>
                 <div className="col">
                  <h4>Hi ,User</h4>
                </div>
                <div className="col">
                    <Link to='/'>
                 <button className="btn btn-danger fs-5">Logout</button>
                    </Link>
                </div>
            </div>
        </div>
   
  )
}

export default Header