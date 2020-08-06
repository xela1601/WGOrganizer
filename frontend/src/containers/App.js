import React from 'react';
import './App.css';
import NavBar from "../components/NavBar.js"
import MainContent from "../components/MainContent.js"
import Footer from "../components/Footer.js"


function App() {
    return (
        <div>
            <NavBar/>
            <MainContent/>
            <hr/>
            <Footer/>
        </div>
    );
}
export default App