import footerStyle from '../../styles/common/footer.module.css';

function Footer() {
    return (
        <footer>
            <div>
                <p>벼룩이</p>
                <div>
                    <p>서비스 소개</p>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <p>게시글 수집 및 이용 안내</p>
                    <p>오류제보</p>
                </div>
                <div>
                    <div>
                        <p>Email</p>
                        <p>{/* email */}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;