import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingInput.module.css';

import { HOST } from '../../config/Config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SellingInput() {
    // comment 추가하기
    // 등록하기 버튼 클릭 시 selling-comments post

    return (
        <>
            <div className={styles['inputContainer']}>
                {/* 제목 */}
                <div className={styles['textDiv']}>
                    <p>제목</p>
                    <input 
                        placeholder='제목'
                        type='text'
                    />
                </div>

                {/* 가격 */}
                <div className={styles['textDiv']}>
                    <p>가격</p>
                    <input 
                        placeholder='거래 가격' 
                        type='number' 
                        className={styles['price']}
                    />
                </div>

                {/* 거래 희망 장소 */}
                <div className={styles['textDiv']}>
                    <p>거래 희망 장소</p>
                    <input 
                        placeholder='희망 거래 장소'
                        type='text'
                    />
                </div>

                {/* 설명 */}
                <div className={styles['contextDiv']}>
                    <p>설명</p>
                    <textarea 
                        placeholder='본문'
                    />
                </div>

                <div className={styles['hr']}> <hr /> </div>
                
                <div className={styles['buttonContainer']}>
                    <button className={styles['buttonStyle']}>등록하기</button>
                </div>
            </div>

        </>
    )
}

export default SellingInput;