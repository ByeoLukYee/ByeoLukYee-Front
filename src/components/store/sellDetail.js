import React, {useEffect, useState} from 'react';
import styles from '../../styles/common/styles.css';
import sellStyle from '../../styles/store/sellDetail.module.css';
import axios from 'axios';
import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellDetail() {

    const [sellingPost, setSellingPost] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`/selling-posts/1`);
            console.log(response.data);
            setSellingPost(response.data);
        } catch(error){
                console.log(error);
        }
    }


    return(
        <>
            <div className={sellStyle['imageDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} alt='example' /> </div>
            <div className={sellStyle['allDiv']}>
                {/* titleDiv */}
                <div className={sellStyle['titleDiv']}>
                    <div className={sellStyle['information']}>
                        <p>#{sellingPost ? sellingPost.krStatus : "로딩중"}</p>
                        <div className={sellStyle['p']}>
                            <p>2024</p><p>/</p><p>03</p><p>/</p><p>24</p>
                        </div>
                    </div>
                    <div className={sellStyle['title']}>
                        <p>해피해킹 하이브리드 모델 (1년 사용)</p>
                    </div>
                    <div className={sellStyle['vectorDiv']}>
                        <div className={sellStyle['eyesVectorDiv']}>
                            <VscEye className={sellStyle['eyesVector']}/>
                            <p>0</p>
                        </div>
                        <div className={sellStyle['heartVectorDiv']}>
                            <GoHeart className={sellStyle['heartVector']}/>
                            <p>0</p>
                        </div>
                    </div>
                    <hr />
                </div>

                {/* contextDiv */}
                <div className={sellStyle['anyDiv']}>
                    <div className={sellStyle['topDiv']}>
                        <div className={sellStyle['contextDiv']}>
                            <p>가격</p>
                            <p>희망 거래 장소</p>
                        </div>
                        <div className={sellStyle['contextDiv']}>
                            <p>{sellingPost ? sellingPost.price+"원" : "로딩중"}</p>
                            <p>{sellingPost ? sellingPost.location : "로딩중"}</p>
                        </div>
                    </div>

                    <div className={sellStyle['contextDetail']}>
                        <p>{sellingPost ? sellingPost.description : "로딩중"}</p>
                    </div>

                    <div className={sellStyle['buttonDiv']}>
                        <button className={sellStyle['buttonStyles']}>거래하기</button>
                        <button className={sellStyle['btnHeart']}> <GoHeart /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellDetail;