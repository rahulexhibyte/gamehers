import "./App.css";
import Dashboard from "./containers/dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
