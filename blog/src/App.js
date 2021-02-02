import {Landing} from "./components/LandingPage.js";
import {Footer} from "./components/Footer.js";
import { Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
