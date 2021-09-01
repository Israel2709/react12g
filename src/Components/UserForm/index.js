import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Button,
} from 'reactstrap'
import UserInput from '../UserInput'

function UserForm( props ) {
        const { changeHandler, saveHandler, userData } = props
        return (
            <Form className="bg-dark text-white p-3 border rounded mb-3">
                <FormGroup>
                    <Label>Nombre</Label>
                    <UserInput 
                        name="nombre"
                        handler={ changeHandler}
                        value={userData.nombre}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <UserInput 
                        name="email"
                        handler={ changeHandler}
                        value={userData.email}
                    />
                </FormGroup>
                <Button
                    type="button"
                    color="success"
                    className="mt-3"
                    onClick={saveHandler}
                >Guardar</Button>
            </Form>
        )
    }

export default UserForm