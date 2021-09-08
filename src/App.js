import React, { useState, useEffect } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  Row,
  Col,
  NavItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

//Pages
import CreateProducts from './Pages/CreateProducts';
import ProductCatalog from './Pages/ProductCatalog';
import ShoppingCart from './Pages/ShoppingCart';

//Components
import CustomLink from './Components/CustomLink';
import ProductDetail from './Pages/ProductDetail';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("createProducts")

  const productData = [{
    name:"product 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:1
  },{
    name:"product 2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:2
  },{
    name:"product 3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil.",
    id:3
  }]

  const toggle = () => setIsOpen(!isOpen);

  const links = [
    {
      path:"/create-products",
      text:"Crear productos"
    },
    {
      path:"/product-catalog",
      text:"Catálogo de productos"
    },
    {
      path:"/shopping-cart",
      text:"Carrito de compras"
    },
  ]


  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              links.map( (link, index ) => {
                const { path, text } = link
                return(
                  <NavItem key={index}>
                    <Link to={path} className="nav-item">{text}</Link>
                  </NavItem>
                )
              })
            }
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col xs="12">
            <Switch>
              <Route path="/create-products">
                <CreateProducts />
              </Route>
              <Route path="/product-catalog">
                <ProductCatalog data = { productData }/>
              </Route>
              <Route path="/shopping-cart">
                <ShoppingCart />
              </Route>
              <Route path="/product-detail/:id">
                <ProductDetail />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App