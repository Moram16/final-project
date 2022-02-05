import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from "./pages/Profile"
import Questions from "./pages/Questions"
import Path from "./pages/Path";
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Playgrounds from './pages/Playgrounds';
import Practice from './pages/Practice';
import CodingChallenge from './pages/CodingChallenge';
import Glossary from './pages/Glossary';
import Sidebar from '../src/components/Sidebar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

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
            <Route path="/questions">
              <Questions />
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
            <Route path="/Sidebar">
              <Sidebar  />
            </Route>
            <Route path="/CountdownTimer">
              <CountdownTimer 
              CountdownTimestampMs={1659983662000}/>
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