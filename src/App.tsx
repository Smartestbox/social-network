import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {}

const App: React.FC<AppPropsType> = ({}) => {
    return (
        <div className={styles.appWrapper}>
            <HeaderContainer />
            <Navbar />
            <div className={styles.appWrapperContent}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
