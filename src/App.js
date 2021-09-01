import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import UsersTable from './Components/UsersTable'

/*
  [
    nombreDelState,
    funcion que modifica el valor de ese estado
  ]

  [
    stateName,
    ( value ) => { stateName = value }
  ]
*/

const App = () => {
  const [title, setTitle] = useState("Hola koders desde hook")
  const [users, setUsers] = useState()
  const [userData, setUserData] = useState({})
  /*
    const title = "Hola koders"
    const setTitle = ( value ) => {title = value} 
    */

  const changeHandler = event => {
    const value = event.target.value
    console.log(value)
    setTitle(value)
  }

  const userHandler = event => {
    const property = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [property]: value })
    console.log(userData)
  }

  const saveUser = () => {
    !users ? setUsers([ userData]) : setUsers([...users, userData])
  }
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Escribe algún texto</Label>
          <Input name="nombre" onChange={userHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Escribe algún texto</Label>
          <Input name="email" onChange={userHandler} />
        </FormGroup>
        <Button type="button" onClick={saveUser}>save</Button>
      </Form>
      <h1>{title}</h1>
      { users && <UsersTable usersList = { users }/>}
    </>
  )
}

export default App