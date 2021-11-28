import "./App.css";
import GlobalStyle from "./styles/global";
import Doctor from "./views/Doctor";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <Doctor />
      <GlobalStyle />
    </div>
  );
}

export default App;
