import axios from "axios";

const getLinkedApi = axios.create({
    baseURL: 'https://backend.getlinked.ai',
    maxRedirects: 0,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    validateStatus: function (status) {
        return status < 500;
    },
});

export default getLinkedApi;
