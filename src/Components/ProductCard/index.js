import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Col
} from 'reactstrap'

const ProductCard = props => {
    console.log(props)
    const { name, price, category } = props.productData
    const { productKey, clickHandler } = props
    return (
        <Col xs="12" md="3">
            <Card className="bg-dark text-white">
                <CardBody >
                    <CardTitle>{name}</CardTitle>
                    <CardText>{category}</CardText>
                    <CardText className="text-white">${price}.00</CardText>
                </CardBody>
                <CardFooter>
                    <Button 
                        color="success" 
                        type="button"
                        data-product-key = { productKey }
                        onClick = { clickHandler }
                    >Agregar al carrito</Button>
                </CardFooter>
            </Card>
        </Col>
    )
}

export default ProductCard