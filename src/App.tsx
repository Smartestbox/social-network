import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.appWrapperContent}>
                    <Route path={'/dialogs'} component={Dialogs} />
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />
                    <Route path={'/settings'} component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
