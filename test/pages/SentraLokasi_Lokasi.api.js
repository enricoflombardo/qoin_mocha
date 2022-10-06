import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_haversin_circle: () => BaseAPI.get('/get-haversinCircle?limit=100&offset=0&filter={"name":""}&radius=50&lat=-10.159057614578971&long=123.59398038991114&bahasa=id'),
    get_haversin_circle_bykategori: () => BaseAPI.get('/get-haversin-circle-byKategori/320?lat=-7.951605927250341&long=112.61400523563555&radius=500&bahasa=id'),
    get_lokasi_byid: () => BaseAPI.get('/get-lokasi-byId/1?lat=-7.938337447142101&long=112.59039767966426&bahasa=id'),

    //web
    addLokasi: (data) => BaseAPI.post('/Lokasi', data),
    addMultilokasi: (data) => BaseAPI_JSON.post('/multiLokasi', data),
    getLokasi: () => BaseAPI.get('/Lokasi'),
    updateLokasi: (data) => BaseAPI.put('/lokasi', data),
    deleteLokasi: (data) => BaseAPI.delete('lokasi', data),
    addImagelokasi: (data) => BaseAPI.post('/lokasiAddImage/1', data),
    getImagelokasi: () => BaseAPI.get('/lokasiGetImage/1'),
    deleteImagelokasi: () => BaseAPI.delete('/lokasiDeleteImage/18'),
    getFasilitaslokasi: () => BaseAPI.get('/fasilitasLokasi/6'),
    readExcel: () => BaseAPI.post('/readExcel'),
    getTemplateexcel: () => BaseAPI.get('/template-excel'),
    getLokasibyid: () => BaseAPI.get('/lokasiById/308')
}

export default QoinAPI