import { PropTypes } from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import "./Product_Item.css"
import { Link } from "react-router-dom";
import { cartContext } from "../../store/CartContext"
import { useContext } from "react";

export function Product_Item( { product } ) {
  const { addToCart } = useContext( cartContext )


    const {id , title, image, price, description } = product
  return (
    <>
      <Col lg={4} md={6} className="mb-3">
        <Card>
          <Card.Img className="product__image" variant="top" src={image || "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} />
          <Card.Body>
            <Card.Title>
              {title.slice(0,20)}
            </Card.Title>
            <Card.Text>
              <p>
                {description.slice(0,30)}
              </p>
              <span className="bg-warning d-inline-block p-1 fw-bold rounded">Price: {price}$</span>
            </Card.Text>
            <Link className="me-2 btn btn-primary" to={`/products/${id}`}>Show Details</Link>
            <Button onClick={() => addToCart(product)} className="me-2" variant="info">Add To Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}


Product_Item.propTypes = {
    product: PropTypes.object,
}