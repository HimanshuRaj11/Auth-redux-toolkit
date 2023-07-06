
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Login from './Pages/Form/Login'
import Register from './Pages/Form/Register'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route excat path="/login" element={<Login />} />
        <Route excat path="/profile" element={<Profile />} />
        <Route excat path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
