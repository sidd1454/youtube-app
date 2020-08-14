import axios from 'axios';

const KEY = 'AIzaSyAtm-G8P9JqGSU_-leMaTuqYO2uDIr_JJE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});