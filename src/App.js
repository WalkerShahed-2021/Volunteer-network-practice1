import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Events from './components/Events/Events';
import Donation from './components/Donation/Donation';
import Blog from './components/Blog/Blog';
import LogIn from './components/Home/ShowUser/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/donation">
              <Donation></Donation>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
