import buyStyle from '../../styles/buying-Item/buyDiv.module.css';

import BuyPostItem from '../../components/buying-Item/buyPostItem';

function BuyingItemList() {
    return (
        <div className={buyStyle['grid-container']}>
            <div className={buyStyle['grid-item']}> <BuyPostItem /> </div>
        </div>
    )
}

export default BuyingItemList;