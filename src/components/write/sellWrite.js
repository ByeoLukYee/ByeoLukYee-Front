import sellWriteStyle from '../../styles/write/sellWrite.module.css';

function SellWrite() {
    return (
        <>
            <div className={sellWriteStyle['topDiv']}>
                <p>상품 이미지 등록</p>
                <div className={sellWriteStyle['imgContainer']}>
                    {/* 이미지 div */}
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                    <div className={sellWriteStyle['imgDiv']}></div>
                </div>
            </div>

            <div className={sellWriteStyle['inputContainer']}>
                {/* 제목 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>제목</p>
                    <input placeholder='제목을 입력하시오.'/>
                </div>

                {/* 가격 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>가격</p>
                    <input placeholder='가격을 입력하시오.'/>
                </div>

                {/* 거래 희망 장소 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>거래 희망 장소</p>
                    <input placeholder='장소를 입력하시오.'/>
                </div>

                {/* 설명 */}
                <div className={sellWriteStyle['contextDiv']}>
                    <p>설명</p>
                    <input placeholder='설명을 입력하시오.'/>
                </div>
            </div>

            {/* <div className={sellWriteStyle['buttonContainer']}>
                <button className={sellWriteStyle['buttonStyle']}>팝니다 글쓰기</button>
            </div> */}
        </>
    )
}

export default SellWrite;