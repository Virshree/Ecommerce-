import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {getAllCategories} from '../api/category';

import {useState,useEffect} from 'react';
function Home(){

    const[categories,setCategories] = useState([]);

  
    const init = async() =>{
        const result=await getAllCategories();
        setCategories(result.data);
        console.log(result.data);
    }
   console.log(categories);
    useEffect(()=>{
        init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   
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
        {categories.map((category)=>(
            <div className="col">
                {console.log(category.id)}
            <div  className="card bg-dark  m-2 "
        
            key={category.id}>
                <div className="text-center fs-5 my-3"
                    style={{width:190,height:100}}>
                    <Link style={{textDecoration:"none", color:"white",fontSize:"30px"}} to='/product'> 
                    {category.name}</Link>
                </div>
                   
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
export default Home;