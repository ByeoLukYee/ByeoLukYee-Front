import axios from 'axios';
import { useEffect } from 'react';

import { useLocation, useNavigate  } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOAuthToken = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');

            if (code) {
                try {
                    const response = await axios.post(`${process.env.REACT_APP_HOST}/oauth2/token`, { code });
                    const { userInfo } = response.data;
                    console.log(userInfo); // 유저 정보 출력

                    if (userInfo && userInfo.id) {
                        localStorage.setItem('id', userInfo.id);
                        navigate('/');
                    }
                } catch (error) {
                    console.error('OAuth2 token fetch error:', error);
                }
            }
        };
        fetchOAuthToken();
    }, [location]);
};

export default OAuth2RedirectHandler;
