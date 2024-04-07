import { Link } from "react-router-dom";

import styles from '../../styles/common/styles.css';

import buyingStyle from '../../styles/buying-Item/buying-post-item.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyingPostItem() {
    return(
        <>
            <Link to="/selling-posts" style={{ textDecoration: "none", color: 'black' }}>
                <div className={buyingStyle['BoxContainer']}>
                    <div>
                        <div></div>
                        <p>#경매중</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BuyingPostItem;