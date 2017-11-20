import axios from 'axios';

const api = (config, token) => {
    const options = getHeaders(config, token);
    return axios(options);
};

function getHeaders(config, token) {
    return token ? {...config,
        headers: {'Authorization': 'Bearer 8ab70d45611a07883d6f0d1e65f062171f0c5f69b0aef4bdd1ab78aa48c216c0'}}: config;
}

export default api;