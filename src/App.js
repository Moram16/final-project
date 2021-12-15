import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from "./pages/Profile"
import Path from "./pages/Path";
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Playgrounds from './pages/Playgrounds';
import Practice from './pages/Practice';
import CodingChallenge from './pages/CodingChallenge';
import Glossary from './pages/Glossary';

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
              <Playgrounds />
            </Route>
            <Route path="/practice">
              <Practice/>
            </Route>
            <Route path="/codingChallenge">
              <CodingChallenge />
            </Route>
            <Route path="/glossary">
              <Glossary  />
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