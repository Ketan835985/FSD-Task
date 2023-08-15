import './App.css'
import UserCreation from './Components/userCreate/userCreation'
import Login from './Components/userLogin/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserCreation />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
