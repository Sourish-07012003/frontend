import React, { useContext,useEffect } from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
    const {isAuthenticated, setIsAuthenticated, setUser} = useContext(Context);
    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const response = await axios.get("", {withCredentials: true});
                setIsAuthenticated(true);
                setUser(response.data.user);
            } catch (error){
                setIsAuthenticated(false);
                setUser({});

            }
        };
        fetchUser();
    },[isAuthenticated]);

    return (
        <>
        
        <Router>
        <Navbar/>
           
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/appointment'element={<Appointment/>}/>
                <Route path='/about'element={<AboutUs/>}/>
                <Route path='/register'element={<Register/>}/>
                <Route path='/login'element={<Login/>}/>

            </Routes>
            <ToastContainer position="top-center"/>
            <Footer/>

        </Router>


        </>
    );
};

export default App;


