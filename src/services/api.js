import axios from "axios";


/// Minha Chave: 059f649b974c54e29afc5fa28e8ca8329f99847e

export const Key = "059f649b974c54e29afc5fa28e8ca8329f99847e"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        "Authorization": `Bearer ${Key}`
    }
})

export default api