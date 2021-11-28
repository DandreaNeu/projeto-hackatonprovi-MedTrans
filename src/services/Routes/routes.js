import Home from '../../views/Home'
import { Route, Routes } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  )
}

export default Routers
