import React, { useContext } from "react";
import Login from "./Pages/Login";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";


const App = () => {

  const { aToken } = useContext(AdminContext)
  
  return aToken ? (<>
    <ToastContainer />
    <Navbar />
  </>

  ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
};

export default App;
