import React from 'react'
import {
    Card,
    CardBody,
    CardText,
    Row,
    Col,
} from 'reactstrap'

import {
    Link
} from 'react-router-dom'

const ProductCatalog = props => {
    const { data } = props
    return (
        <Row>
            <h1>Catálogo de productos</h1>
            {
                data.map(product => {
                    const { name, id } = product
                    return (
                        <Link to={`product-detail/${id}`}>
                            <Col xs="12" md="4">
                                <Card key={id}>
                                    <CardBody>
                                        <CardText>{name}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Link>

                    )
                })
            }
        </Row>

    )
}

export default ProductCatalog