import React from 'react';
import styles from './App.module.css';
import ContentImg from './images/content-img.jpg'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className={styles.appWrapper}>
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}

export default App;
