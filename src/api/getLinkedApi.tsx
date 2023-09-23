import axios from "axios";

const getLinkedApi = axios.create({
    baseURL: 'https://backend.getlinked.ai',
    timeout: 3000,
    maxRedirects: 0,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export default getLinkedApi;
