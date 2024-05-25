import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/BuyingPostEdit.module.css';

import Header from '../common/Header';
import BuyWriteEdit from './BuyWriteEdit';
import Footer from '../common/Footer';

function BuyingPostEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/selling-posts/${id}`);
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch(error) {
                console.error("수정할 데이터 불러오기 실패 : ", error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <BuyWriteEdit updateData={data} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BuyingPostEdit;