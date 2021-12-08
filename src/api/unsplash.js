import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{   
        Authorization: 'Client-ID l2Ze-91PBtcuM7Qvnepu2BfWGG_aD_WSBb__cj706mw'
    }
})