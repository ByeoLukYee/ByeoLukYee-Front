import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';

function BuyingPostItemList({ data }) {
    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }

    // 삽니다 게시글 itemList 컴포넌트
    // BuyingPost.js에서 보낸 데이터 title, krStatus, price를 BuyingPostItem에 전달하기 
    return ( 
        <div className={styles['buying-grid-container']}>
            {data.map((item, index) => (
                <div key={index} className={styles['buying-grid-item']}> 
                    <BuyingPostItem
                        title={item.title}
                        status={item.krStatus}
                        price={item.price}
                        desc={item.description}
                        userName={item.user.name}
                    />
                </div>
            ))}
        </div>
    )
}

export default BuyingPostItemList;