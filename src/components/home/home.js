import styles from '../../styles/common/styles.css';
import homeStyle from '../../styles/home/home.module.css';

import TitleBar from '../common/titleBar';
import SearchInput from '../common/searchInput';
import SellDiv from '../common/sellDiv';
import LookDiv from '../home/lookDiv';
import TextComponent from '../home/text';

function Home() {
    return(
        <div className={homeStyle['divContainer']}>
            <TitleBar />
            <div className={homeStyle['DivStyle']}>
                <p>벼룩이</p>
            </div>
            <SearchInput />
            <div className={homeStyle['lookContainer']}>
                <TextComponent />
                <div className={homeStyle['scrollContainer']}>
                    <LookDiv />
                </div>

                <div className={homeStyle['newContainer']}>
                    <p className={homeStyle['lookUserP']}>따끈따끈 최신 글</p>
                    <div className={homeStyle['newScrollContainer']}>
                        <SellDiv />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;