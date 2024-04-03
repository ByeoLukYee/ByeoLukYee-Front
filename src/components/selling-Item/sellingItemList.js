import sellStyle from '../../styles/selling-Item/sellDiv.module.css';

import SellPostItem from '../../components/selling-Item/sellPostItem';

function SellingItemList() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <SellPostItem />
        </div>
    )
}

export default SellingItemList;