import { PropTypes } from "prop-types"
import { Button } from "react-bootstrap"
import Swal from 'sweetalert2'



export function Cart_Item( { cartItems, setCartItems } ) {
  
  const deleteItem = (id) =>{
    let newCartItems = cartItems.filter(item => item.id !== id)
    setCartItems([...newCartItems])
    Swal.fire("Deleted Successfully");
  }

  return (
    <>
      {cartItems.map((item) =>{
        return <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td className="text-center">
                    <Button onClick={() => deleteItem(item.id)} variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
      })}
    </>
    
  )
}



Cart_Item.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
}