import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Users from "./Components/Users/Users";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer  /> }/>

                    <Route path='/profile'
                           render={ () => <Profile /> }/>

                    <Route path='/users'
                           render={ () => <Users /> }/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
