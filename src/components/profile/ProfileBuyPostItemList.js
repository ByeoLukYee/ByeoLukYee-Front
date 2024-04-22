import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from '../buying-Item/BuyPostItem';

function BuyPostItemList() {
    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }
    
    const pathName = window.location.pathname;
    let className = '';
    if (pathName === '/') {
      className = 'home-grid-container';
    } else if (pathName === '/profile') {
      className = 'profile-grid-container';
    }

    return (
        <div className={styles[className]}>
            <div className={styles['buy-grid-item']}> <BuyPostItem /> </div>
        </div>
    )
}

export default BuyPostItemList;