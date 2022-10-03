import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
<<<<<<< HEAD
    addKk: (data) => BaseAPI_JSON.post('/Kk',data),
    login: (data) => BaseAPI.post('/access/login/web', data),
    getid: () => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_kk"}'),
    index_by_id: (id) => BaseAPI.get('/Kk/'+id),
    updatekk: (data) => BaseAPI.put('/kk/', data),
    updatestatusverif: (data) => BaseAPI.put('/kkStatusVerifikasi/', data),
    updatestatus: (data) => BaseAPI.put('/kkStatus/', data),
    updatejadwal: (data) => BaseAPI_JSON.put('/kkJadwal', data),
    updateanggota: (data) => BaseAPI_JSON.put('/kkAnggota/270/122', data),
    updatekonfirmasi: (data) => BaseAPI.put('/kkStatusKonfirmasi/', data)
=======
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
>>>>>>> dev-rico
}

export default QoinAPI 