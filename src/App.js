import React, { useState, useEffect } from 'react'
import './App.scss'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody
} from 'reactstrap'


const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="12" className="text-center">
            <h1>SPLI<br />TTER</h1>
          </Col>
          <Col xs="12">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="12" md="6">
                    <Form>
                      <FormGroup>
                        <Label>Bill</Label>
                        <Input type="text"/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Select Tip %</Label>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="text" placeholder="custom"/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Number of People</Label>
                        <input type="number"/>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardBody>
                        <p>Tip Amount <br /><span>/ person</span></p>
                        <p>$4.27</p>
                        <p>Total <br /><span>/ person</span></p>
                        <p>$32.79</p>
                        <Button type="button">Reset</Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App