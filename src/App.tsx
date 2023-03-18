import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {AllActionTypes, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType,
    dispatch: (action: AllActionTypes) => void
}

const App: React.FC<AppPropsType> = ({
                                         state,
                                         dispatch,
                                     }) => {
    return (

        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={styles.appWrapperContent}>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={state.profilePage}
                    newPostText={state.profilePage.newPostText}
                    dispatch={dispatch}
                />}

                />
                <Route path={'/dialogs'}
                       render={() =>
                           <Dialogs state={state.dialogsPage} dispatch={dispatch} newMessageText={state.dialogsPage.newMessageText}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
