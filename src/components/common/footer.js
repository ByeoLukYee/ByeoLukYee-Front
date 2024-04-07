import footerStyle from '../../styles/common/footer.module.css';

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
                        <p>w2216@e-mirim.hs.kr</p>
                    </div>
                    <div className={footerStyle['textStyle']}>
                        <p>Github</p>
                        <p>github.com/bhark.065</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;