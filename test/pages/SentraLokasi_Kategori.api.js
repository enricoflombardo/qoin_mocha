import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    get_lokasi: () => BaseAPI.get('/kategoriLokasi'),

    //web
    createkategoriLokasi: (data) => BaseAPI.post('/kategoriLokasi', data),
    getdetailkategoriLokasi: () => BaseAPI.get('/detailKategoriLokasiWeb/2'),
<<<<<<< HEAD
    updatekategoriLokasi: (data) => BaseAPI.put('/detailKategoriLokasiWeb/2', data),
    deletekategoriLokasi: () => BaseAPI.delete('/kategoriLokasi/{{id}}'),
    readkategoriLokasi: () => BaseAPI.get('/kategoriLokasiWeb/{{id}}')
=======
    updatekategoriLokasi: (id, data) => BaseAPI.put('/KategoriLokasi/' + id, data),
    deletekategoriLokasi: (id) => BaseAPI.delete('/kategoriLokasi/' + id),
    readkategoriLokasi: (id) => BaseAPI.get('/kategoriLokasiWeb/' + id)
>>>>>>> 675ff4b4d91557b61d21d142e1563caa6bd392ff
}

export default QoinAPI