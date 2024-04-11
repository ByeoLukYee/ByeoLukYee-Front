import buyGridStyle from '../../styles/buying-Item/buy-grid.module.css';

import BuyingPostItem from './buyingPostItem';

function BuyingPostItemList() {
    return (
        <div className={buyGridStyle['buying-grid-container']}>
            <div className={buyGridStyle['buying-grid-item']}> <BuyingPostItem /> </div>
        </div>
    )
}

export default BuyingPostItemList;