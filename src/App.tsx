import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from "./routes/RouterPropTestResult";
import StudentList from "./routes/StudentList";
import StudentDetail from "./routes/StudentDetail";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <Switch>
            <Route exact path="/">{Home}</Route>
            <Route path="/about">{About}</Route>
            <Route path="/routerproptest">{RouterPropTest}</Route>
            <Route path="/routerproptestresult">{RouterPropTestResult}</Route>
            <Route exact path="/studentlist">{StudentList}</Route>
            <Route path="/studentlist/:id">{StudentDetail}</Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
