import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

const LoginAPI = axios.create({
    baseURL: process.env.LOGIN_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json"
    },
    transformRequest: [
        function(data) {
            return querystring.stringify(data)
        }
    ],
    validateStatus: function () {
        return true;
    }
});

export default LoginAPI