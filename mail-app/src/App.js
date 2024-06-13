import { Fragment } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Inbox from './pages/Inbox';
import HomePage from './pages/Homepage';
import { useSelector } from 'react-redux';
import ComposeMailPage from './pages/ComposeMailPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SentMailPage from './pages/SentMailPage';




function App() {

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  return (
   <Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ?<Redirect to="/home"/>:<Redirect to="/signin"/>}
        </Route>
        <Route path="/home" exact>
          {isLoggedIn ? <HomePage/>: <Redirect to="/signin"/>}
        </Route>
        <Route path="/inbox" exact>
          {isLoggedIn ? <Inbox/>: <Redirect to="/signin"/>}
        </Route>
        <Route path="/sent">
          <SentMailPage/>
        </Route>
        <Route path="/composemail" exact>
        {isLoggedIn ? <ComposeMailPage/>: <Redirect to="/signin"/>}
        </Route>
        <Route path="/signin" exact>
          <SignInPage/>
        </Route>
        <Route path="/signup" exact>
          <SignUpPage/>
        </Route>
      </Switch>
   </Fragment>
  );
}

export default App;
