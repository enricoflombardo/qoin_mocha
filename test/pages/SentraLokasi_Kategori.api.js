import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_lokasi: (token) => BaseAPI.get('/kategoriLokasi', {
        headers: {
            Authorization: "Bearer "+ token
        }
    }),

    //web
    createkategoriLokasi: (token, data) => BaseAPI.post('/kategoriLokasi', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getdetailkategoriLokasi: (id, token) => BaseAPI.get('/detailKategoriLokasiWeb/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatekategoriLokasi: (id, data, token) => BaseAPI.put('/kategoriLokasi/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    deletekategoriLokasi: (id, token) => BaseAPI.delete('/kategoriLokasi/' + id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    readkategoriLokasi: (id, token) => BaseAPI.get('/kategoriLokasiWeb/' + id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
}

export default QoinAPI