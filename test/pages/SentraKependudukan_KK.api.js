import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addKk: (data) => BaseAPI_JSON.post('/Kk',data),
    login: (data) => BaseAPI.post('/access/login/web', data),
    getid: () => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_kk"}'),
    getid_anggota: (id) => BaseAPI.get('/kkAnggota/'+ id),
    index_by_id: (id) => BaseAPI.get('/Kk/'+ id),
    updatekk: (id, data) => BaseAPI.put('/kk/'+ id, data),
    updatestatusverif: (id, data) => BaseAPI.put('/kkStatusVerifikasi/'+ id, data),
    updatestatus: (id, data) => BaseAPI.put('/kkStatus/' + id, data),
    updatejadwal: (data) => BaseAPI_JSON.put('/kkJadwal', data),
    updateanggota: (id, id_anggota, data) => BaseAPI_JSON.put('/kkAnggota/'+ id +'/'+ id_anggota, data),
    updatekonfirmasi: (id, data) => BaseAPI.put('/kkStatusKonfirmasi/'+ id, data)
}

export default QoinAPI 