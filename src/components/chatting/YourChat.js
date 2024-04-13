import '../../styles/common/Styles.css'
import style from '../../styles/chatting/YourChat.module.css'

function YourChat({ text }){
    return(
        <div className={style['your-chat']}>{text}</div>
        
    )
}

export default YourChat;