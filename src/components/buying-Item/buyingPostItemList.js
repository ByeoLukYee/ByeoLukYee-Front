import buyGridStyle from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';

function BuyingPostItemList() {
    return ( 
        <div className={buyGridStyle['buying-grid-container']}>
            <div className={buyGridStyle['buying-grid-item']}> <BuyingPostItem /> </div>
        </div>
    )
}

export default BuyingPostItemList;