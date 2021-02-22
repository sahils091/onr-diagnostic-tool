import "./app.scss";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:name" children={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
