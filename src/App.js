import React, { Component } from 'react'
import './App.scss';

import { DropDown, Button } from './Components/CTAS'

import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import UsersTable from './Components/UsersTable';
import UserForm from './Components/UserForm';


class App extends Component {
  constructor() {
    super()
    this.state = {
      usersList: [],
      userData: {
        nombre: "Israel",
        email: "israel@kodemia.mx"
      }
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)
  }

  onChangeHandler(event) {
    const property = event.target.name
    const value = event.target.value
    console.log(property + " : " + value)
    this.setState({ userData: { ...this.state.userData, [property]: value } })
  }

  saveHandler() {
    this.setState(
      {
        usersList: [...this.state.usersList, this.state.userData],
        userData: { nombre: "", email: "" }
      })
  }

  render() {

    return (
      <>
        <Container fluid>
          <Row>
            <Col xs="12" md="3">
              <DropDown optionsList = {["uno", "dos", "tres"]}/>
              <Button />
              <UserForm
                changeHandler = { this.onChangeHandler }
                saveHandler = { this.saveHandler }
                userData = {this.state.userData}
              />
            </Col>
            <Col xs="12" md="9" >
              {
                this.state.usersList.length !== 0 &&
                <UsersTable usersList = { this.state.usersList }/>
              }
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default App