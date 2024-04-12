import buyGridStyle from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';

function BuyingPostItemList() {
    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }
  
    return ( 
        <div className={buyGridStyle['buying-grid-container']}>
            <div className={buyGridStyle['buying-grid-item']}> <BuyingPostItem /> </div>
        </div>
    )
}

export default BuyingPostItemList;