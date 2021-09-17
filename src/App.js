import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";



const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer  /> }/>

                    <Route path='/profile'
                           render={ () => <Profile /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>
                </div>
            </div>
        );
}


export default App;
