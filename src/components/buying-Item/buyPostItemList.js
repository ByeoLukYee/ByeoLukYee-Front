import buyGridStyle from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyingItemList() {
    return (
        <div className={buyGridStyle['buy-grid-container']}>
            <div className={buyGridStyle['buy-grid-item']}> <BuyPostItem /> </div>
        </div>
    )
}

export default BuyingItemList;