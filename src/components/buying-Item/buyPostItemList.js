import buyGridStyle from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyingItemList() {
    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }
    
    return (
        <div className={buyGridStyle['buy-grid-container']}>
            <div className={buyGridStyle['buy-grid-item']}> <BuyPostItem /> </div>
        </div>
    )
}

export default BuyingItemList;