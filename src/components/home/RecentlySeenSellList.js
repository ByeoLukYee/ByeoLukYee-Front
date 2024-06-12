import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySeenSellList.module.css';
import RecentlySeenSellItem from './RecentlySeenSellItem';

function RecentlySeenSellList({ data, viewData }) {
    if (!data || data.length === 0) {
        return <p>최근 본 판매글이 존재하지 않음.</p>;
    }

    return (
        <div className={styles['four-grid-container']}>
          {data.map((post, index) => (
              <div key={index} className={styles['grid-item']}> 
                  <RecentlySeenSellItem
                      post={post.post}
                      viewData={viewData}
                  />
              </div>
          ))}
        </div>
    )
}

export default RecentlySeenSellList;