import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_lokasi: () => BaseAPI.get('/kategoriLokasi'),

    //web
    createkategoriLokasi: (data) => BaseAPI.post('/kategoriLokasi', data),
    getdetailkategoriLokasi: () => BaseAPI.get('/detailKategoriLokasiWeb/2'),
    updatekategoriLokasi: (id, data) => BaseAPI.put('/KategoriLokasi/' + id, data),
    deletekategoriLokasi: (id) => BaseAPI.delete('/kategoriLokasi/' + id),
    readkategoriLokasi: (id) => BaseAPI.get('/kategoriLokasiWeb/' + id)
}

export default QoinAPI