import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from '../selling-Item/SellingPostItem';


function ProfileSellingPostItemList({ sellingPostData }) {
    // 전달받은 sellingPostData 화면에 보여주기
    return (
        <div className={styles['three-grid-container']}>
            {sellingPostData.length > 0 ? (
                sellingPostData.map((item, index)  => (
                    <div key={index} className={styles['grid-item']}> 
                        <SellingPostItem
                            post={item}
                        />
                    </div>
                ))
            ) : (
                <p>찜한 글이 없습니다.</p>
            )}
        </div>
    )
}

export default ProfileSellingPostItemList;