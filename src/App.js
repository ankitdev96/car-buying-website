import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/login">
                <Login></Login>
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            

            <PrivateRoute path="/products">
              <AllProducts></AllProducts>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            

            <PrivateRoute exact path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>



            </Switch>
          </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
