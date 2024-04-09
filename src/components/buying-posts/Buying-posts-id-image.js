import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/Buying-posts-id-image.module.css';

function BuyingPostsIdImage() {
    return (
        <>
            <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
        </>
    )
}

export default BuyingPostsIdImage;