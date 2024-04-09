import '../../styles/common/Styles.css';
import styles from '../../styles/common/Footer.module.css';

function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['background']}>
                <p>벼룩이</p>
                <div className={styles['divStyle']}>
                    <p>서비스 소개</p>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <p>게시글 수집 및 이용 안내</p>
                    <p>오류제보</p>
                </div>
                <div className={styles['divStyle']}>
                    <div className={styles['textStyle']}>
                        <p>Email</p>
                        <p>w2218@e-mirim.hs.kr</p>
                    </div>
                    <div className={styles['textStyle']}>
                        <p>Github</p>
                        <p>github.com/hyeg0121</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;