import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import Product from './pages/Product';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={<Suspense fallback={
         <div className="loader">Loading...</div>}>
           <Login/>
         </Suspense>}>
         </Route>

        <Route exact path="/home" element={<Suspense fallback={
         <div className="loader">Loading...</div>}>
           <Home/>
         </Suspense>}>
         </Route>

        <Route exact path="/product" element={<Suspense fallback={
         <div className="loader">Loading...</div>}>
           <Product/>
         </Suspense>}>
         </Route>

        <Route exact path="/cart" element={<Suspense fallback={
         <div className="loader">Loading...</div>}>
           <Cart/>
         </Suspense>}>
         </Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
