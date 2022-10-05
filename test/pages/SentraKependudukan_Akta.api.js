import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    add_akta: (data) => BaseAPI_JSON.post('/aktaLahir',data),

    //web
    get_id: () => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_akta"}'),
    index_by_id: (id) => BaseAPI.get('/aktaLahir/'+id),
    update_akta: (id, data) => BaseAPI.put('/aktaLahir/' + id, data),
    update_status_verif: (id, data) => BaseAPI.put('/aktaLahirStatusVerifikasi/' + id, data),
    update_status: (id, data) => BaseAPI.put('/aktaLahirStatus/' + id, data),
    update_jadwal: (data) => BaseAPI_JSON.put('/aktaLahirJadwal', data),
    update_status_konfirmasi: (id, data) => BaseAPI.put('/aktaLahirStatusKonfirmasi/' + id, data)
}

export default QoinAPI --