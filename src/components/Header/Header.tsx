import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Logo Apple
                Ar</title>
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="32" d="M201.14 64L256 32l54.86 32"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M256 32v80"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M310.86 448L256 480l-54.86-32"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M256 480v-80"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M64 207.51V144l53.15-31.51"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M64 144l67.29 40"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M448 304.49V368l-53.15 31.51"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M448 368l-67.29-40"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M117.15 400L64 368v-63.51"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M64 368l66.64-40"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                      d="M394.85 112.49L448 144v63.51"/>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                      d="M448 144l-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32"/>
            </svg>
        </header>
    );
};

export default Header;