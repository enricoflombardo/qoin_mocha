import BaseAPI from '$root/pages/base.api';

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    user: (data) => BaseAPI.get('/users/2'),
    update_user: (data) => BaseAPI.put('/users/2', data)
}
const ReqresAPI2 = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    user: (data) => BaseAPI.get('/users/2'),
    update_user: (data) => BaseAPI.put('/users/2', data)
}

export default ReqresAPI && ReqresAPI2 