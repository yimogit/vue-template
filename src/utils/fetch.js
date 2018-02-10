
import axios from 'axios';
import webConfig from 'config';
import common from '@/utils/common';
import qs from 'qs';

const instance = axios.create({
    baseURL: webConfig.apiBaseUrl, // api的base_url
    timeout: 10000, // 请求超时时间
    transformRequest: data => qs.stringify(data),
});

// request拦截器
instance.interceptors.request.use((e) => {
    e.params = e.params || {};
    // 添加通用参数
    e.params['X-GuestToken'] = common.getGuestToken();
    return e;
}, error => ({ status: 0, msg: error.message }));

// respone拦截器
instance.interceptors.response.use(
    response => response.data,
    (error) => {
        if (error.response && error.response.status === 401) {
            return { status: 0, msg: 'Invalid API Token' };
        }
        return { status: 0, msg: error.message };
    },
);

export default instance;
