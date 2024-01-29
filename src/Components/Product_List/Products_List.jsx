/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Product_Item } from "./Product_Item";
import axios from "axios";



export function Products_List() {
  const [Products, setProducts ] = useState([])
  let bas_url = "https://fakestoreapi.com/products"

  useEffect(() =>{
    axios.get(bas_url)
    .then(res => setProducts(res.data))
  }, [])

  return (
    <>
      {!Products.length ? <h1 className="text-center py-3 my-3">loading....</h1> :   Products.map(product =>{
        return <Product_Item key={product.id} product={product}/>
      })}
    </>
  )
}
