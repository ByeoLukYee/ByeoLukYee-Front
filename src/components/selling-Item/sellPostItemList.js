import sellGridStyle from '../../styles/selling-Item/sell-grid.module.css';

import SellPostItem from './sellPostItem';

function SellPostItemList() {
    return (
        <div className={sellGridStyle['sell-grid-container']}>
            <div className={sellGridStyle['grid-item']}> <SellPostItem /> </div>
        </div>
    )
}

export default SellPostItemList;