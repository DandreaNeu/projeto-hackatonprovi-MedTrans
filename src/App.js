import './App.css'
import GlobalStyle from './styles/global'
import InitialScreen from './views/Home'
import Header from './components/Header'
//import Login from './views/Login'
import Routes from './services/Routes/routes'

function App() {
  return (
    <div className="App">
      <Routes />
      <Header />
      <InitialScreen />
      <GlobalStyle />
    </div>
  )
}

export default App
