import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import '../../styles/common/Styles.css';
import styles from '../../styles/main/Main.module.css';

import Footer from '../common/Footer';
import Header from '../common/Header';
import SelectPost from './SelectPost';
import Home from '../home/Home';

function Main() {
    // const navigate = useNavigate();

    // const userId = Number(useSelector(state => state.userId));
    // useEffect(() => {
    //     if (!userId) {
    //         navigate('/signin');
    //     }
    // }, [navigate]);

    return (
        <>
            <div className={styles["container"]}>
                <Header />
                <div className={styles['textDiv']}>
                    <SelectPost />
                </div>

                <div>
                    <Home />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Main;