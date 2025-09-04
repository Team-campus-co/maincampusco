import { useState } from 'react'
import auth_campuscommander_logo from './assets/react.svg'
import auth_campuscommander_logo1 from '/vite.svg'
import './App.css'
import ForgotPassword from './components/forgotpassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to CampusCo 🚀</h1>
      <ForgotPassword />
    </div>
      <div>
        
       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> Save DATA TO CAMPUS
        </p>
      </div>
      <p className="read-the-docs">
       Welcome to Campus Commander Administartion
      </p>
    </>
  )
}

export default App
