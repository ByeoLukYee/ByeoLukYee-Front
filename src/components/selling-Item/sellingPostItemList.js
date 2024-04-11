import '../../styles/common/styles.css';
import sellStyle from '../../styles/selling-Item/sell-grid.module.css';

import SellingPostItem from './sellingPostItem';

import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../config/config";

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
    
    return (
        <div className={sellStyle['selling-grid-container']}>
            {sellingPostList.map((item, index) => (
                <div key={index} className={sellStyle['grid-item']}> 
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