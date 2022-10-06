import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_lokasi: () => BaseAPI.get('/kategoriLokasi'),

    //web
    createkategoriLokasi: (data) => BaseAPI.post('/kategoriLokasi', data),
    getdetailkategoriLokasi: () => BaseAPI.get('/detailKategoriLokasiWeb/2'),
    updatekategoriLokasi: (data) => BaseAPI.put('/detailKategoriLokasiWeb/2', data),
    deletekategoriLokasi: () => BaseAPI.del('/kategoriLokasi/{{id}}'),
    readkategoriLokasi: () => BaseAPI.get('/kategoriLokasiWeb/{{id}}')
}

export default QoinAPI