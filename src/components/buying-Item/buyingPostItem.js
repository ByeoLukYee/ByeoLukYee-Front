import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import styles from '../../styles/buying-Item/Buying-post-item.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyingPostItem({ status, price, title }) {
    return(
        <>
            <Link to="/selling-posts/1" style={{ textDecoration: "none", color: 'black' }}>
                
                <div className={styles['BoxContainer']}>
                    
                    <div className={styles['topDiv']}>
                        <div className={styles['topLeftDiv']}>
                            <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                            <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px'}}>
                                <p>최보람</p>
                                <p>2024-04-04</p>
                            </div>
                        </div>
                        <p>#{status}</p>
                    </div>

                    <div className={styles['middleDiv']}>
                        <div className={styles['context']}>
                            <p>{title}</p>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <div className={styles['moneyDiv']}>
                            <p>희망 구매 가격</p>
                            <p>{price}원</p>
                        </div>
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

export default BuyingPostItem;