import sellStyle from '../../styles/selling-Item/sell-grid.module.css';

import SellingPostItem from './sellingPostItem';

function SellingPostItemList() {
    return (
        <div className={sellStyle['selling-grid-container']}>
            <div className={sellStyle['grid-item']}> <SellingPostItem /> </div>
        </div>
    )
}

export default SellingPostItemList;