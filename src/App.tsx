import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className={styles.appWrapper}>
        <Header />
        <Navbar />
        <div className={styles.appWrapperContent}>
            <Dialogs />
            {/*<Profile />*/}
        </div>


    </div>
  );
}

export default App;
