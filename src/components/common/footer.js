import '../../styles/common/Styles.css';
import footerStyle from '../../styles/common/Footer.module.css';

function Footer() {
    return (
        <footer className={footerStyle['footer']}>
            <div className={footerStyle['background']}>
                <p>벼룩이</p>
                <div className={footerStyle['divStyle']}>
                    <p>서비스 소개</p>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <p>게시글 수집 및 이용 안내</p>
                    <p>오류제보</p>
                </div>
                <div className={footerStyle['divStyle']}>
                    <div className={footerStyle['textStyle']}>
                        <p>Email</p>
                        <div>
                            <p>w2218@e-mirim.hs.kr</p>
                        </div>
                    </div>
                    <div className={footerStyle['textStyle']}>
                        <p>Github</p>
                        <div>
                            <p>github.com/hyeg0121</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;