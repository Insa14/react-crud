import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/">{Home}</Route>
            <Route path="/about">{About}</Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
