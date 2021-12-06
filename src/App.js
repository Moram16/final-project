import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from "./pages/Profile"
import Path from "./pages/Path";
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/path">
              <Path />
            </Route>
            <Route path="/playgrounds">
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;