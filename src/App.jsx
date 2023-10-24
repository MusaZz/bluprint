//React Router
import { Routes, Route, useLocation } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";

// React Toast
import { Toaster } from "react-hot-toast";

//Components
import Container from "./components/Common/Container";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer";

const App = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderHeader = path !== "/login" && path !== "/register";

  return (
    <>
      <Toaster position="top-right" />
      <Container>
        {renderHeader && <Header />}
        <main className={`${renderHeader && "my-20"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        {renderHeader && <Footer />}
      </Container>
    </>
  );
};

export default App;
