import sellStyle from '../../styles/selling-Item/sellDiv.module.css';

import SellPostItem from '../../components/selling-Item/sellPostItem';

function SellingItemList() {
    return (
        <div className={sellStyle['grid-container']}>
            <div className={sellStyle['grid-item']}> <SellPostItem /> </div>
        </div>
    )
}

export default SellingItemList;