import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "./Product_Details.css"
import { cartContext } from "../../store/CartContext"


export function Product_Details() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { addToCart } = useContext( cartContext )
    


   

    let url = `https://fakestoreapi.com/products/${productId}`

    useEffect(() =>{
    axios.get(url)
    .then(res => setProduct(res.data))
  }, [])

    const { title, price, image, description, category } = product
  return (
    <div className="product-details py-5" >
        <Container fluid>
            <Row>
                <Col md={6}>
                    <div className="product-details__image">
                        <img className="" src={image} alt={title} />
                    </div>
                </Col>
                <Col md={6}>
                <div className="product-details__content">
                    <h2 className="text-danger">{title}</h2>
                    <p className="text-danger fs-5 fw-bold"><span className="text-primary">Price: </span>{price}$</p>
                    <p><span className="text-primary fw-bold">Price: </span>{description}$</p>
                    <p className="text-danger fs-5 fw-bold"><span className="text-primary">Category: </span>{category}</p>
                    <Button onClick={() => addToCart(product)} variant="primary">Add To Cart</Button>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
