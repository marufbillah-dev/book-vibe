import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet>
        <Home />
      </Outlet>
    </>
  );
};

export default App;
