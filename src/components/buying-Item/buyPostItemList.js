import buyGridStyle from '../../styles/buying-Item/buy-grid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyingItemList() {
    return (
        <div className={buyGridStyle['buy-grid-container']}>
            <div className={buyGridStyle['buy-grid-item']}> <BuyPostItem /> </div>
        </div>
    )
}

export default BuyingItemList;