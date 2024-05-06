import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/BuyingPostRemoveButton.module.css';

function BuyingPostRemoveButton() {
    const navigate = useNavigate();
    // 팝니다 글쓰기 buying-posts/id DELETE
    // 삭제하기
    const { id } = useParams();
    const remove = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${HOST}/selling-posts/${id}`);
            if (response.status === 200) {
                console.log("게시글 삭제 완료");
                navigate('/selling-posts');
            } else {
                console.log("게시글 삭제 실패 : ", response.status);
            }
        } catch(error) {
            console.log("삭제 api 호출 실패 : ", error);
        }
    }

    return (
        <>
            <button className={styles['removeButtonStyle']} onClick={remove}>삭제하기</button>
        </>
    )
}

export default BuyingPostRemoveButton;