//React Router
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

//Components
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default App;
