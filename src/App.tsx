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
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App: React.FC<AppPropsType> = ({
                                         state
                                     }) => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile state={state.profilePage}/>}/>
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs state={state.dialogsPage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
