// React Toast
import { Toaster } from "react-hot-toast";

// Routes
import { Routes } from "./routes";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Routes isAuthorized={true} />;
    </>
  );
};

export default App;
