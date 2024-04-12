import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySell.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function RecentlySell() {
    return (
        <>
            <div className={styles['sellTextDiv']}> <p>따끈따근 최신 팝니다 글</p> </div>
            <div className={styles['sellContainer']}>
                <SellingPostItemList /> 
            </div>

            <div className={styles['sellMoreDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlySell;