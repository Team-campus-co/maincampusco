import { useState } from 'react'
import auth_campuscommander_logo from './assets/react.svg'
import auth_campuscommander_logo1 from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://campuscommander.com" target="_blank">
          <img src={auth_campuscommander_logo1} className="logo" alt="Vite logo" />
        </a>
        <a href="https://campuscommander.com" target="_blank">
          <img src={auth_campuscommander_logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> Save DATA TO CAMPUS ADMINISTRATION
        </p>
      </div>
      <p className="read-the-docs">
       Welcome to Campus Commander Administartion
      </p>
    </>
  )
}

export default App
