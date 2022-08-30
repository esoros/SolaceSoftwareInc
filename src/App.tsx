import './App.css'

function App() {
  
  function login() {
    alert("unable to login please try again")
  }
  
  return (
    <div className="App">
       <div style={{height: "40vh", width: "50vw", borderRadius: "1rem", backgroundColor: "white", color: "rgb(76,145,232)", background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <span style={{fontSize: "5rem"}} className="material-symbols-outlined">install_desktop</span>
        <h3>Solace Software Inc</h3>
        <input placeholder='email' />
        <input placeholder='password' />
        <div style={{display: "flex", flexDirection: "row"}}>
          <button onClick={login}>Login</button>
          <button>Demo Code</button>
        </div>
       </div>
    </div>
  )
}

export default App
