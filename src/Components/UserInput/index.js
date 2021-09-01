import React from 'react'
import {Input} from 'reactstrap'

function UserInput(props){
    const { name, handler, value } = props
    return(
        <Input
            name={name}
            onChange={ handler }
            value={ value }
        />
    )
}

export default UserInput