import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addLokasi: (data) => BaseAPI.post('/Lokasi', data),
    addMultilokasi: (data) => BaseAPI.post('/multiLokasi', data),
    getLokasi: (data) => BaseAPI.get('/Lokasi'),
    updateLokasi: (data) => BaseAPI.put('/lokasi', data),
    deleteLokasi: (data) => BaseAPI.del('lokasi', data),
    addImagelokasi: (data) => BaseAPI.post('/lokasiAddImage/1', data),
    getImagelokasi: (data) => BaseAPI.get('/lokasiGetImage/1'),
    deleteImagelokasi: (data) => BaseAPI.del('/lokasiDeleteImage/18'),
    getFasilitaslokasi: (data) => BaseAPI.get('/fasilitasLokasi/6'),
    readExcel: (data) => BaseAPI.post('/readExcel')
}