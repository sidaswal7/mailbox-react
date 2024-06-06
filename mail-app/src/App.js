import { Fragment } from 'react';
import AuthPage from './pages/AuthPage';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Inbox from './pages/Inbox';


function App() {
  return (
   <Fragment>
      <Header/>
      <Switch>
        <Route path="/">
          <AuthPage/>
        </Route>
        <Route path="/inbox">
          <Inbox/>
        </Route>
      </Switch>
   </Fragment>
  );
}

export default App;
