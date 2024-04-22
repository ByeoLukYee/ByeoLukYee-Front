import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';

function BuyingPostItemList({ data }) {
    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }
  
    return ( 
        <div className={styles['buying-grid-container']}>
            {data.map((item, index) => (
                <div key={index} className={styles['buying-grid-item']}> 
                    <BuyingPostItem
                        title={item.title}
                        status={item.krStatus}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    )
}

export default BuyingPostItemList;