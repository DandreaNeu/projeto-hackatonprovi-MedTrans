import Home from '../../views/Home'
import Login from '../../views/Login'
import { Route, Routes } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default Routers
