import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: '1', message: 'My first post', likesCount: '23'},
    {id: '2', message: 'Post about my life', likesCount: '11'},
    {id: '3', message: 'Some famous quote', likesCount: '4'},
    {id: '4', message: 'How i spend my yesterday', likesCount: '15'},
    {id: '5', message: 'Nothing happen', likesCount: '0'},
    {id: '6', message: 'Boring post', likesCount: '2'},
]

let dialogs = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Viktor'},
    {id: '6', name: 'Valera'},
]

let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How is your day?'},
    {id: '3', message: 'Yo!'},
    {id: '4', message: 'Some text'},
    {id: '5', message: 'Bye'},
    {id: '6', message: 'I don\'t know what to say'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);