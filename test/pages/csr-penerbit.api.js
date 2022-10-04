import LoginAPI from '$root/pages/login.api';
import BaseAPI from '$root/pages/basecsr.api';
import BaseAPI_JSON from '$root/pages/basecsr_json.api';

const QoinAPI = {
    login: (data) => LoginAPI.post('/access/login/web',data),
    penerbit: (data) => BaseAPI_JSON.post('/Penerbit',data),
    multipenerbit: (data) => BaseAPI.post('/multiPenerbit', data),
    getpenerbit: (id) => BaseAPI.get('/Penerbit'+ id),
    getmultipenerbit: (id) => BaseAPI.get('Penerbit/List?filter={"id":"'+ id +'}"}'),
    updatepenerbit: (id) => BaseAPI.put('/Penerbit/'+ id)
}

export default QoinAPI 