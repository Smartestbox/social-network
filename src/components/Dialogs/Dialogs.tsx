import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div>
           <div className={styles.dialogs}>
               <div className={styles.dialogsItems}>
                   <div className={`${styles.dialogItem} ${styles.active}`}>
                       Dymich
                   </div>
                   <div className={styles.dialogItem}>
                       Andrey
                   </div>
                   <div className={styles.dialogItem}>
                       Sveta
                   </div>
                   <div className={styles.dialogItem}>
                       Sasha
                   </div>
                   <div className={styles.dialogItem}>
                       Viktor
                   </div>
                   <div className={styles.dialogItem}>
                       Valera
                   </div>
               </div>
               <div className={styles.messages}>
                   <div className={`${styles.message} ${styles.active}`}>Hi</div>
                   <div className={styles.message}>How is your day?</div>
                   <div className={styles.message}>YO!</div>
               </div>
           </div>
        </div>
    );
};

export default Dialogs;