import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from './SellingPostItem';

function SellingPostItemList({ data }) {
    // if (sellingPostList.length === 0) {
    //   return <p>게시글이 존재하지 않음.</p>
    // }

    const pathName = window.location.pathname;
    let className = '';
    if (pathName === '/') {
      className = 'four-grid-container';
    } else if (pathName === '/profile') {
      className = 'three-grid-container';
    } else {
      className = 'all-grid-container';
    }

    // 팝니다 글쓰기 itemList 컴포넌트
    // SellingPost.js에서 받은 데이터 title, status, price를 SellingPostItem에 전달하기
    return (
        <div className={styles[className]}>
            {data.map((item, index) => (
                <div key={index} className={styles['grid-item']}> 
                    <SellingPostItem
                        title={item.title}
                        status={item.krStatus}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    )
}

export default SellingPostItemList;