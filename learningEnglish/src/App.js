import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

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