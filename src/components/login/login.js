import loginStyles from '../../styles/login/login.module.css'
import styles from '../../styles/common/styles.module.css';

function Login() {
    return (
        <div className={loginStyles['container']}>
            <div className={loginStyles['titleContainer']}>
                <p className={loginStyles['titleP']}>우리 학교의 작은 마켓</p> {/* S-Core Dream 3Ling 글꼴 */}
                <h3 className={loginStyles['titleH3']}>벼룩이</h3> {/* Kyobo HandWriting 2019 Regular 글꼴 */}
            </div>
            <form className={loginStyles['formContainer']}>
                <div>
                    <p className={styles['textStyles']}>이메일</p> {/* SUIT Medium 글꼴(input도) */}
                    <input type="text" placeholder='학교 이메일을 작성하시오.' className={styles['inputStyles']}/>
                </div>
                <div style={{marginBottom: '15%'}}>
                    <p className={styles['textStyles']}>비밀번호</p> {/* SUIT Medium 글꼴(input도) */}
                    <input type='text' placeholder='비밀번호를 입력하시오.' className={styles['inputStyles']}/>
                </div>
            </form>
            <div className={loginStyles['buttonContainer']}>
                <button className={styles['buttonStyles']}>로그인</button> {/* SUIT Medium 글꼴 */}
                <button className={loginStyles['googleButton']}> <img src={process.env.PUBLIC_URL + '/images/GoogleImg.png'} /> 구글로 로그인</button>
            </div>
            <div className={styles['miniTextStyles']}>
                <p>계정이 없다면?</p>
                <p>회원가입</p>
            </div>
        </div>
    )
}

export default Login;