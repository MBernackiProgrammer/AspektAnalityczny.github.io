import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <h1><a href="index.html" >Dania Polszy</a></h1>
      <nav>
        <a href="./bigos.html">Bigos</a>
        <a href="./pierogi.html">Pierogi</a>
        <a href="./golabki.html">Gołąbki</a>
        <a href="./zurek.html">Żurek</a>
      </nav>
    </header>
    </>
  )
}

export default App
