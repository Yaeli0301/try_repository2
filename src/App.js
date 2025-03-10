import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home'; // ודא שאתה מייבא את כל הרכיבים
import Cart from './Cart';
import SignUp from './SignUp';
import LogIn from './LogIn';
import ProductProvider from './ProductProvider'; // אם מדובר ב-Context

function App() {
  return (
    <div className="App">
      <ProductProvider> {/* ה-Provider כאן */}
        <BrowserRouter>
          <Router> {/* השתמש ב- Routes במקום Router */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Router>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
