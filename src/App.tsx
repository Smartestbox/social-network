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
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType,
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const App: React.FC<AppPropsType> = ({
                                         state,
                                         addPost,
                                         updateNewPostText,
                                     }) => {
    return (

        <div className={styles.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={styles.appWrapperContent}>
                <Route path={'/profile'} render={() => <Profile
                    profilePage={state.profilePage}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />}

                />
                <Route path={'/dialogs'}
                       render={() =>
                           <Dialogs state={state.dialogsPage} />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
