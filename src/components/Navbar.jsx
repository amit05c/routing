import React from 'react'
import { Link,useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate()
  const handleOnClick = (id)=>{
     if(id===1){
       navigate('/products/1')
     }
  }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        <button onClick={()=>handleOnClick(1)}>go to prod 1</button>
        <button onClick={()=>handleOnClick(2)}>go to prod 2</button>
    </div>
  )
}

export default Navbar