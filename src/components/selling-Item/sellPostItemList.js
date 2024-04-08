import sellGridStyle from '../../styles/selling-Item/sell-grid.module.css';

import SellPostItem from './sellPostItem';

function SellPostItemList({ status, price, title }) {
    return (
        <div className={sellGridStyle['sell-grid-container']}>
            <div className={sellGridStyle['grid-item']}>
                <SellPostItem 
                    title={title}
                    status={status}
                    price={price}
                />
            </div>
        </div>
    )
}

export default SellPostItemList;