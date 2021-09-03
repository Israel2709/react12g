import React, { useState } from 'react'

import Products from './Pages/Products'

const App = () => {
  const [ isLogged, setIsLogged ] = useState(true)
  return (
    <>
      <button onClick = { () => setIsLogged( !isLogged )}>{ !isLogged ? "login" : "sign out"}</button>
      <Products isLogged={isLogged}/>
    </>
    
  )
}

export default App