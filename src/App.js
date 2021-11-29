import './App.css'
import GlobalStyle from './styles/global'
import Footer from './components/Footer'
import InitialScreen from './views/Home'

//import Login from './views/Login'
import Routes from './services/Routes/routes'

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
      <GlobalStyle />
    </div>
  )
}

export default App
