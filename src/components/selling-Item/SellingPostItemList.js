import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from './SellingPostItem-change';

import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../config/Config";

function SellingPostItemList() {
    const [sellingPostList, setsellingPostList] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        // `${HOST}/selling-posts`
        const response = await axios.get('http://localhost:8080/selling-posts');
        console.log(response.data);
        setsellingPostList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (sellingPostList.length === 0) {
      return <p>게시글이 존재하지 않음.</p>
    }

    const pathName = window.location.pathname;
    let className = '';
    if (pathName === '/') {
      className = 'four-grid-container';
    } else if (pathName === '/profile') {
      className = 'three-grid-container';
    } else {
      className = 'all-grid-container';
    }

    return (
        <div className={styles[className]}>
            {sellingPostList.map((item, index) => (
                <div key={index} className={styles['grid-item']}> 
                    <SellingPostItem
                        title={item.title}
                        status={item.krStatus}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    )
}

export default SellingPostItemList;