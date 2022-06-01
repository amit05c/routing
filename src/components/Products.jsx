import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [prod,setProd]=useState([])
  useEffect(()=>{
    const fetchProd= async ()=>{
   let r= await  fetch("http://localhost:8080/products")
      let data= await (r.json())
      setProd(data)
    }
    console.log(prod)
     fetchProd()
  },[])
  return (
    <div>Products
     {prod.map((elem)=>{
       return (
         <div key={elem.id}>
           <Link to={`/products/${elem.name}`}>{elem.name}</Link>
           
         </div>
       )
     })}
    </div>
  )
}

export default Products