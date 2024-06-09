import axios from 'axios'
 
const request = axios.create({
    baseURL: 'http://localhost:8848',
    timeout: 20000
})
export default request