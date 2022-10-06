import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addLokasi: (data) => BaseAPI.post('/Lokasi', data),
    addMultilokasi: (data) => BaseAPI_JSON.post('/multiLokasi', data),
    getLokasi: () => BaseAPI.get('/Lokasi'),
    updateLokasi: (data) => BaseAPI.put('/lokasi', data),
    deleteLokasi: (data) => BaseAPI.del('lokasi', data),
    addImagelokasi: (data) => BaseAPI.post('/lokasiAddImage/1', data),
    getImagelokasi: () => BaseAPI.get('/lokasiGetImage/1'),
    deleteImagelokasi: () => BaseAPI.del('/lokasiDeleteImage/18'),
    getFasilitaslokasi: () => BaseAPI.get('/fasilitasLokasi/6'),
    readExcel: () => BaseAPI.post('/readExcel'),
    getTemplateexcel: () => BaseAPI.get('/template-excel'),
    getLokasibyid: () => BaseAPI.get('/lokasiById/308')
}

export default QoinAPI