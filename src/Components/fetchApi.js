import axios from 'axios';

const api_url =  '127.0.0.1:8000';
exports.getAllUsers = async() => {
    try {
        return await axios.get(`${api_url}/users/all`)

    } catch(err) {
        console.log(err)
    }
    
}
