import buyWriteStyle from '../../styles/write/buyWrite.module.css';

function BuyWrite() {
    return (
        <>
            <div className={buyWriteStyle['inputContainer']}>
                {/* 제목 */}
                <div className={buyWriteStyle['textDiv']}>
                    <p>제목</p>
                    <input placeholder='제목을 입력하시오.'/>
                </div>

                {/* 가격 */}
                <div className={buyWriteStyle['textDiv']}>
                    <p>가격</p>
                    <input placeholder='가격을 입력하시오.'/>
                </div>

                {/* 거래 희망 장소 */}
                <div className={buyWriteStyle['textDiv']}>
                    <p>거래 희망 장소</p>
                    <input placeholder='장소를 입력하시오.'/>
                </div>

                {/* 설명 */}
                <div className={buyWriteStyle['contextDiv']}>
                    <p>설명</p>
                    <textarea placeholder='설명을 입력하시오.'/>
                </div>
            </div>

            <div className={buyWriteStyle['buttonContainer']}>
                <button className={buyWriteStyle['buttonStyle']}>삽니다 글쓰기</button>
            </div>
        </>
    )
}

export default BuyWrite;