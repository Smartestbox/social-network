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
import {AllActionTypes, StateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({
                                         store,
                                     }) => {
    return (

        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={styles.appWrapperContent}>
                <Route path={'/profile'} render={() => <Profile store={store}/>}

                />
                <Route path={'/dialogs'}
                       render={() =>
                           <DialogsContainer store={store}/>}
                />
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
