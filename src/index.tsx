import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType, subscribe, updateNewPostText} from './redux/state'
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

