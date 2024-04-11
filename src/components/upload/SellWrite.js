import React from 'react';

import '../../styles/common/Styles.css';
import sellWriteStyle from '../../styles/upload/SellingWrite.module.css';
import ImageUpload from './ImageUpload';

function SellWrite() {
    return (
        <>
            <div className={sellWriteStyle['container']}>
                <div className={sellWriteStyle['topDiv']}>
                    <ImageUpload />
                </div>

                <div className={sellWriteStyle['inputContainer']}>
                    {/* 제목 */}
                    <div className={sellWriteStyle['textDiv']}>
                        <p>제목</p>
                        <input placeholder='제목'/>
                    </div>

                    {/* 가격 */}
                    <div className={sellWriteStyle['textDiv']}>
                        <p>가격</p>
                        <input placeholder='거래 가격' type='number' className={sellWriteStyle['price']}/>
                    </div>

                    {/* 거래 희망 장소 */}
                    <div className={sellWriteStyle['textDiv']}>
                        <p>거래 희망 장소</p>
                        <input placeholder='희망 거래 장소'/>
                    </div>

                    {/* 설명 */}
                    <div className={sellWriteStyle['contextDiv']}>
                        <p>설명</p>
                        <textarea placeholder='상품 상세 정보'/>
                    </div>
                </div>

                <div className={sellWriteStyle['hr']}> <hr /> </div>

                <div className={sellWriteStyle['buttonContainer']}>
                    <button className={sellWriteStyle['buttonStyle']}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default SellWrite;