import '../../styles/common/styles.css';
import styles from '../../styles/upload/BuyWrite.module.css';

function BuyWrite() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['inputContainer']}>
                    {/* 제목 */}
                    <div className={styles['textDiv']}>
                        <p>제목</p>
                        <input placeholder='제목'/>
                    </div>

                    {/* 가격 */}
                    <div className={styles['textDiv']}>
                        <p>가격</p>
                        <input placeholder='희망 거래 가격' className={styles['price']}/>
                    </div>

                    {/* 거래 희망 장소 */}
                    <div className={styles['textDiv']}>
                        <p>거래 희망 장소</p>
                        <input placeholder='희망 거래 장소'/>
                    </div>

                    {/* 설명 */}
                    <div className={styles['contextDiv']}>
                        <p>설명</p>
                        <textarea placeholder='본문'/>
                    </div>
                </div>

                <div className={styles['hr']}> <hr /> </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['buttonStyle']}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default BuyWrite;