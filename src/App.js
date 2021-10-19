import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Pages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <PrivateRoute path='/service/:serviceId'>
            <ServiceDetail/>
          </PrivateRoute>
          <Route path='/services'>
            <Services/>
          </Route>
          <PrivateRoute path='/about'>
           <About/>
          </PrivateRoute>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
