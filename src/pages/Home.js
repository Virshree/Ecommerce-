import {Link} from 'react-router-dom';
import Header from '../components/Header';
function Home(){

    let data=['Electronics','Fashion','Household','Appliances'];
  return (
    <div className="container">
        <Header/>
        <div className="text-center display-6">
            All the Products.
        </div>
        <Link to="/product">
            <button className="btn btn-info mt-3">Show all products</button>
        </Link>
        <div className="d-flex " >
        {data.map((item,index)=>(
            <div  className="card bg-dark  m-2 "
        
            key={index}>
                <div className="text-center fs-5 my-3"
                    style={{width:190,height:50}}>
                    <Link style={{textDecoration:"none", color:"white"}} to='/product'> {item}</Link>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
export default Home;