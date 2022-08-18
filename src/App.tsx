import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //favicon title then g2g into and deployed lol
  return (
    <div className="App">
       <div style={{height: "40vh", width: "50vw", borderRadius: "1rem", backgroundColor: "white", color: "cornflowerblue", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <span style={{fontSize: "5rem"}} className="material-symbols-outlined">install_desktop</span>
        <h3>Solace Software Inc</h3>
        <button style={{width: "50%"}}>More Info</button>
       </div>
    </div>
  )
}

export default App
