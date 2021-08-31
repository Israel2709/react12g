import React from 'react'

function someContent(){
    return(
        <>
            <h1>Algún texto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium neque labore tempore perferendis consequatur cupiditate nemo soluta odit expedita voluptatum.</p>
        </>
    )
}


function createList(){
    
    let someArray = ["a","s","d","f"]

    let result = someArray.map( item => {
        return <span>{ item }</span>
    })

    /*[
        <span>"a"</span>,
        <span>"s"</span>,
        <span>"d"</span>,
        <span>"f"</span>
    ]*/
    return result 

}







function CustomList(props){
    return(
        <ul>
          
          {
            props.listItems.map( (item, index) => <li key={ index }>{ item }</li>)
          }
        </ul>
    )
}

export default CustomList