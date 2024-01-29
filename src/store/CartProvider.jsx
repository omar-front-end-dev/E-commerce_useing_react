import { useState } from "react"
import { cartContext } from "./CartContext"
import { PropTypes } from "prop-types"
import Swal from "sweetalert2";




export function CartProvider( props ) {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (product) =>{
      let checkItem = cartItems.find((item) => item.id == product.id)
  
  
      if (checkItem) {
        cartItems.map((item) => {
          if (item.id == product.id) {
            item.qty++
          }
        })
      }else{
          let oldItems = cartItems;
          setCartItems([...oldItems, {...product, qty: 1}])
        }
        Swal.fire({
          icon: "success",
          title: "Added to cart successfully",
          showConfirmButton: false,
          timer: 2000
        });
    }

  return (
    <cartContext.Provider value={{cartItems, setCartItems, addToCart}}>
      {props.children}
    </cartContext.Provider>
  )
}



CartProvider.propTypes = {
    children : PropTypes.any
}