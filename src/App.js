import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      etapa:"",
      title:"semáforo",
      color:"",
      mentors:[""]
    }
    this.myProp = "some prop"
    this.setEtapa = this.setEtapa.bind( this )
  }

  setEtapa( event ){
    const value = event.target.value
    console.log( value )
    console.log( this )
    this.setState({etapa: value})
  }
  render() {
    const { title, etapa } = this.state
    return (
      <>
        <input className="control" type="radio" name="etapa" value="siga" onClick={ this.setEtapa }/>
        <label for="">Siga</label>
        <input className="control" type="radio" name="etapa" value="precaucion" onClick={ this.setEtapa }/>
        <label for="">Precaución</label>
        <input className="control" type="radio" name="etapa" value="alto" onClick={ this.setEtapa }/>
        <label for="">Alto</label>
        <div className="semaforo">
          <p>{ title }</p>
          <div className={`luz ${etapa}`}></div>
        </div>
      </>
    )
  }
}

export default App