import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdProducerInfo.module.css';

function BuyingPostIdProducerInfo({ user }) {
    // 사용자의 정보를 보여주는 컴포넌트
    // user/ name, studentId를 props로 받아서 넣기
    // 팝니다와 삽니다 갯수는 api 다시 살펴보기
    let studentId = user.studentId;
    let grade = studentId[0];
    let classroom = studentId[1];
    let number = studentId.slice(2);
    let formattedStudentId = `${grade}학년 ${classroom}반 ${number}번`;
    
    return (
        <>
        <div className={styles['userImg']}>
            {
                user.profileUrl ?
                <img src={`${user.profileUrl}`} /> : <img src={'/images/profileImage.png'} />

            }
        </div>
            <div className={styles['profileDiv']}>
                <p>{user.name}</p>
                <div className={styles['myInformation']}>
                    <p>{formattedStudentId}</p>
                    <div style={{display: 'flex', columnGap: '15px'}}>
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>팝니다</p> <p>6</p> </div> 
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>삽니다</p> <p>2</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyingPostIdProducerInfo;