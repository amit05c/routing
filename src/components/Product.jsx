import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {
    const [product,setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
       if(id){
           fetch(`http://localhost:8080/products/${id}`)
          .then(res=>res.json())
          .then(data=>(setProduct(data)))
       }
    },[id])
  return (
    <div>Product id: {id}
    <div>{product.name}</div>
    </div>
  )
}

export default Product