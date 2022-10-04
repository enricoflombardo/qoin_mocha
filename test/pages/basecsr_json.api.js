import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

const BaseAPI_JSON = axios.create({
    baseURL: process.env.CSR_URL,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    },
    validateStatus: function () {
        return true;
    }
});

export default BaseAPI_JSON