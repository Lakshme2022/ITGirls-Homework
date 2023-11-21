import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import './style/App.css';

function App() {

    return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Content/>
          <Footer/>
      </div>
    </BrowserRouter>
  )}

export default App