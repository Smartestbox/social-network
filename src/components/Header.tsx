import React from 'react';
import styles from "./Header.module.css";
import Logo from "../images/logo.jpeg";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo"/>
        </header>
    );
};

export default Header;