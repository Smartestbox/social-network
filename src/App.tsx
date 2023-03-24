import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

type AppPropsType = {}

const App: React.FC<AppPropsType> = ({}) => {
    return (
        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={styles.appWrapperContent}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <Users />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
