import {useState } from 'react';
import {Link} from 'react-router-dom';
function Login(){

  const [login,setLogin]=useState(false);
  
  const handleLogin=()=>{
    setLogin(!login);
  }
  return (
    <div >
        <div className="bg-dark text-white px-5 py-2">
            <div className="row">
                <div className="col">
                  <h4>Ecommerce</h4>
                </div>
            </div>
        </div>


        <div className="container text-center my-5">
            <h2>Welcome to Ecommerce</h2>
          

            {!login ? (
               
                 <div style={{width:"18 rem"}} className="bg-light d-flex
            justify-content-center align-items-center">
                <form>
                  <h4>Login</h4>
                  <div  className="input-group">
                    <input type="text" className="form-control m-1" 
                    placeholder="Username"/> 
                  </div> 
                    <div  className="input-group">
                    <input type="password" className="form-control m-1" 
                    placeholder="Password"/> 
                  </div> 
                  
                  <div className="input-group">
                    <Link to='/home'>
                      <input type="submit"  
                      className="form-control btn btn-primary mt-1" value="Login as User"/>
                    </Link>
                  </div>
                  <div className="text-center">

                    <p className="text-info fs-4" onClick={handleLogin}>
                      Don't have account ?SignUp.
                    </p>
                  </div>
                </form>
            </div>

            ):(
               <div style={{width:"18 rem"}} className="bg-light d-flex
            justify-content-center align-items-center">
                <form>
                    <h4>SignUp</h4>
                  <div  className="input-group">
                    <input type="text" className="form-control m-1" 
                    placeholder="Username"/> 
                  </div> 
                    <div  className="input-group">
                    <input type="password" className="form-control m-1" 
                    placeholder="Password"/> 
                  </div> 
                  <div className="input-group">
                    <Link to='/home'>
                      <input type="submit"  
                      className="form-control btn btn-primary mt-1" value="Login as User"/>
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-info fs-4" onClick={handleLogin}>
                    Already have account ?Login
                    </p>
                  </div>
                </form>
            </div>

            )}
           



          

        </div>
    </div>
  )
}
export default Login;