import auctionDivStyle from '../../styles/store/auctionDiv.module.css';

function AuctionDiv() {
    return(
        <div className={auctionDivStyle['boxContainer']}>
            <div className={auctionDivStyle['lookImgStyle']}>
                <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} alt="example"/>
            </div>
            <div className={auctionDivStyle['textContainer']}>
                <p>#낙찰전</p>
                <p>제목입니다.</p>
                <p style={{top: "20%"}}>40,000원</p>
            </div>
        </div>
    )
}

export default AuctionDiv;