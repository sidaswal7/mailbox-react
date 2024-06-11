import { Fragment } from 'react';
import AuthPage from './pages/AuthPage';
import {Redirect, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Inbox from './pages/Inbox';
import HomePage from './pages/Homepage';
import { useSelector } from 'react-redux';
import ComposeMailPage from './pages/ComposeMailPage';




function App() {

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  return (
   <Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/auth"/>
        </Route>
        <Route path="/auth">
          {isLoggedIn ? <HomePage/>: <AuthPage/>}
        </Route>
        <Route path="/home" exact>
          {isLoggedIn ? <HomePage/>: <Redirect to="/auth"/>}
        </Route>
        <Route path="/inbox" exact>
          {isLoggedIn ? <Inbox/>: <Redirect to="/auth"/>}
        </Route>
        <Route path="/composemail" exact>
        {isLoggedIn ? <ComposeMailPage/>: <Redirect to="/auth"/>}
        </Route>
      </Switch>
   </Fragment>
  );
}

export default App;
