import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer store={props.store}  /> }/>

                    <Route path='/profile'
                           render={ () => <Profile store={props.store}/> }/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
