import axios from 'axios';
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
    const location = useLocation();

    useEffect(() => {
        const fetchOAuthToken = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');

            if (code) {
                try {
                    const response = await axios.post(`${process.env.REACT_APP_HOST}/oauth2/token`, { code });
                    const { userInfo } = response.data;

                    console.log(userInfo); // 유저 정보 출력
                } catch (error) {
                    console.error('OAuth2 token fetch error:', error);
                }
            }
        };

        fetchOAuthToken();
    }, [location]);

    return <div>OAuth2 Redirect Handler</div>;
};

export default OAuth2RedirectHandler;
