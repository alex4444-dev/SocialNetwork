import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";



const App = () => {
    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer  /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersContainer /> }/>

                    <Route path='/login'
                           render={ () => <LoginPage /> }/>
                </div>
            </div>
        );
}


export default App;
