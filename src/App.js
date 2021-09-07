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

  const linkHandler = event => {
    const page = event.target.dataset.page
    setSelectedPage(page)
  }

  const setPage = () => {
    let pageContent
    switch (selectedPage) {
      case "createProducts":
        pageContent = <CreateProducts />
        break


      case "productCatalog":
        pageContent = <ProductCatalog />
        break


      case "shoppingCart":
        pageContent = <ShoppingCart />
        break
    }

    return pageContent
  }

  return (
    <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/create-products" className="nav-item">Crear productos</Link>
            </NavItem>
            <NavItem>
              <Link to="/product-catalog" className="nav-item">Catálogo de productos</Link>
            </NavItem>
            <NavItem>
              <Link to="/shopping-cart" className="nav-item">Carrito de compras</Link>
            </NavItem>
            {/*<CustomLink
              page="createProducts"
              text="Crear productos"
              handler={linkHandler}
            />
            <CustomLink
              page="productCatalog"
              text="Catálogo de productos"
              handler={linkHandler}
            />
            <CustomLink
              page="shoppingCart"
              text="Carrito de compras"
              handler={linkHandler}
            />*/}
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