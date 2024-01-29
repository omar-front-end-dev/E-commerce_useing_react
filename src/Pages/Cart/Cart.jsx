import { useContext } from "react"
import { cartContext } from "../../store/CartContext"
import { Col, Container, Row, Table } from "react-bootstrap"
import { Cart_Item } from "../../Components/Cart/Cart_Item"
import { Page_Title } from "../../Components/Layout/Page_Title"

export function Cart() {
  const { cartItems, setCartItems } = useContext( cartContext )

  

  let totalPrice = cartItems.map(item => item.price * item.qty)
  .reduce((acc, current) => acc + current ,0).toFixed(2)
  
  console.log(totalPrice);

  return (
      <div className="cart ">
        <Container>
          <Row>
            <Col>
            <Page_Title title={"cart page"}/>
            <Table striped hover variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                <Cart_Item cartItems={cartItems} setCartItems={setCartItems}/>
              </tbody>
            </Table>
            <h1>Total Price: {+totalPrice}$</h1>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
