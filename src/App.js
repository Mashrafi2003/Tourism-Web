
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Notfound from './Components/404/Notfound';
// import About from './Components/About/About';
import AddService from './Components/AddService/AddService';
import AllOrder from './Components/AllOrder/AllOrder';
import Book from './Components/Book/Book';
import Contact from './Components/Contact/Contact';
// import Contact from './Components/ContactUs/Contact';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import SideNavbar from './Components/Shared/SideNav/SideNav';
import AuthProvider from './Context/AuthProvider';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <SideNavbar></SideNavbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
       
          <Route
          path='/login'
          >
            <Login ></Login>
          </Route>
          <PrivateRoute path='/book/:serviceId'>
              <Book></Book>
          </PrivateRoute>
          <Route path='/services'>
              <Services></Services>
          </Route>
          <Route path='/contact'>
              <Contact></Contact>
          </Route>
          <PrivateRoute path='/myOrder'>
            <AllOrder></AllOrder>
          </PrivateRoute>
          <PrivateRoute path='/allOrder'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute
          path='/addItem'
          >
            <AddService></AddService>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
