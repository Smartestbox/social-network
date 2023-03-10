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

export type AppPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

const App: React.FC<AppPropsType> = ({
                                         posts,
                                         dialogs,
                                         messages,
                                     }) => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={styles.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
