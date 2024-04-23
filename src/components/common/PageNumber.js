import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/PageNumber.module.css';

function PageNumber() {
    const [selected, setSelected] = useState('1');

    const handleSelectedClick = (number) => {
        setSelected(number);
    };

    return (
        <>
            <div className={styles['selectDiv']}>
                <div className={styles[selected === '1' ? 'selected' : '']} onClick={() => handleSelectedClick('1')}> <p>1</p> </div>
            </div>
        </>
    )
}

export default PageNumber;