import React, { useState } from 'react'
import ProductCard from '../../Components/ProductCard'
import ProductCart from '../../Components/ProductCart'
import data from '../../mockData'

import {
    Container,
    Row,
    Col,
    
} from 'reactstrap'

const Products = props => {
    const [ products, setProducts ] = useState( data.products )
    const [ productCart, setProductCart ] = useState([])
    const { isLogged } = props

    const addToCart = event => {
        const productIndex = event.target.dataset.productKey
        console.log( productIndex )
        console.log( products[productIndex])
        setProductCart([...productCart, products[productIndex]])
        console.log( productCart )
    }
    return (
        <Container fluid>
            <Row>
                <Col xs="12" md="8">
                    <Row>
                        {
                            isLogged ? (
                                <>
                                    <h1>Esta es la página de productos</h1>
                                    {
                                        products.map((product, index) => <ProductCard
                                            key={index}
                                            productData={product}
                                            productKey={ index }
                                            clickHandler={ addToCart }
                                        />)
                                    }
                                </>
                            ) : (
                                <h1>Debes inciar sesión para ver este contenido</h1>
                            )
                        }
                    </Row>

                </Col>
                <Col xs="12" md="4">
                    <ProductCart
                        cartList = { productCart }
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Products

