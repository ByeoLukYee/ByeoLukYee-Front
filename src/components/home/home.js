import styles from '../../styles/common/styles.css';
import homeStyle from '../../styles/home/home.module.css';
import TitleBar from '../common/titleBar';
import SearchInput from '../common/searchInput';

function Home() {
    return(
        <div className={homeStyle['divContainer']}>
            <TitleBar />
            <div className={homeStyle['DivStyle']}>
                <p>벼룩이</p>
            </div>
            <SearchInput />
            <div className={homeStyle['lookContainer']}>
                <p className={homeStyle['lookUserP']}>사용자님이 최근 본 글</p>
                <div className={homeStyle['boxContainer']}>
                    <div className={homeStyle['lookImgStyle']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'}/> </div>
                    <div className={homeStyle['textContainer']}>
                        <p>#판매중</p>
                        <h4>제목입니다.</h4>
                    </div>
                    <h2>40,000원</h2>
                    <div>
                        {/* 몇명 봤는지, 누가 찜했는지 */}
                    </div>
                </div>
                <div className={homeStyle['newContainer']}>
                    <p className={homeStyle['lookUserP']}>따끈따끈 최신 글</p>
                    <div className={homeStyle['newBoxContainer']}>
                        <div className={homeStyle['newLookImgStyle']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'}/> </div>
                        <div className={homeStyle['newTextContainer']}>
                            <p>#판매중</p>
                            <h4>제목입니다.</h4>
                            <h3 style={{top: "10%"}}>40,000원</h3>
                        </div>
                        <div>
                            {/* 몇명 봤는지, 누가 찜했는지 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;