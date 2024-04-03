import buyStyle from '../../styles/buying-Item/buyDiv.module.css';

import BuyPostItem from '../../components/buying-Item/buyPostItem';

function BuyingItemList() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <BuyPostItem />
        </div>
    )
}

export default BuyingItemList;