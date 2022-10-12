import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_haversin_circle: () => BaseAPI.get('/get-haversinCircle?limit=100&offset=0&filter={"name":""}&radius=50&lat=-10.159057614578971&long=123.59398038991114&bahasa=id'),
    get_haversin_circle_bykategori: () => BaseAPI.get('/get-haversin-circle-byKategori/320?lat=-7.951605927250341&long=112.61400523563555&radius=500&bahasa=id'),
    get_lokasi_byid: () => BaseAPI.get('/get-lokasi-byId/1?lat=-7.938337447142101&long=112.59039767966426&bahasa=id'),

    //web
    addLokasi: (data, token) => BaseAPI_JSON.post('/Lokasi', data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    addMultilokasi: (data, token) => BaseAPI_JSON.post('/multiLokasi', data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getLokasi: (token) => BaseAPI.get('/Lokasi', {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    updateLokasi: (id, data, token) => BaseAPI_JSON.put('/Lokasi/' + id, data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    deleteLokasi: (id, token) => BaseAPI.delete('/Lokasi/' + id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    addImagelokasi: (id, data, token) => BaseAPI.post('/lokasiAddImage/' + id, data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getImagelokasi: (id, token) => BaseAPI.get('/lokasiGetImage/'+ id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    deleteImagelokasi: (id, token) => BaseAPI.delete('/lokasiDeleteImage/' + id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getFasilitaslokasi: (id, token) => BaseAPI.get('/fasilitasLokasi/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getLokasibyid: (id, token) => BaseAPI.get('/lokasiById/' + id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    readExcel: () => BaseAPI.post('/readExcel'),
    getTemplateexcel: () => BaseAPI.get('/template-excel'),
}

export default QoinAPI