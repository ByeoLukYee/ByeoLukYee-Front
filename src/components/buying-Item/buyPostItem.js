import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import styles from '../../styles/buying-Item/Buy-post-item.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyPostItem({ status, price, title }) {
    return(
        <>
            <Link to="/selling-posts/1" style={{ textDecoration: "none", color: 'black' }}>
                <div className={styles['BoxContainer']}>
                    <div className={styles['firstDiv']}>
                        <div className={styles['contextDiv']}>
                            <p>{title}</p>
                            <p>content</p>
                        </div>
                        <div className={styles['moneyDiv']}>
                            <p>{price}원</p>
                            <p>희망 구매 가격</p>
                        </div>
                    </div>
                    <div className={styles['secondDiv']}>
                        <p>#{status}</p>
                        <div className={styles['iconDiv']}>
                            <div className={styles['eyesVectorDiv']}>
                                <VscEye className={styles['eyesVector']}/>
                                <p>0</p>
                            </div>
                            <div className={styles['heartVectorDiv']}>
                                <GoHeart className={styles['heartVector']}/>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BuyPostItem;