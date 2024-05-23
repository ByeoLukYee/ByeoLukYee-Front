import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from '../selling-Item/SellingPostItem';


function SellingPostItemList({ sellingPostData }) {
    // 전달받은 sellingPostData 화면에 보여주기
    return (
        <div className={styles['three-grid-container']}>
            {Array.isArray(sellingPostData) && sellingPostData.length > 0 ? (
                sellingPostData.map(item  => (
                    <div key={item.id} className={styles['grid-item']}> 
                        <SellingPostItem
                            status={item.krStatus}
                            price={item.price}
                            title={item.title}
                            id={item.id}
                            images={item.images}
                        />
                    </div>
                ))
            ) : (
                <p>작성글 없습니다.</p>
            )}
        </div>
    )
}

export default SellingPostItemList;