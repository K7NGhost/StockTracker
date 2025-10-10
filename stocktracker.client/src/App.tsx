import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
      </UserProvider>
    </>
  );
}

export default App;
