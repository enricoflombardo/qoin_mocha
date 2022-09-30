import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addKTP: (data) => BaseAPI.post('/addKtp',data),
    login: (data) => BaseAPI.post('/access/login/web', data),
    // ktp: (data) => BaseAPI.post('/ktp/1', data),
    getid: () => BaseAPI.get('/getDocument?limit=1&user_id=1619&filter={"type":"m_ktp"}'),
    riwayatweb: (id) => BaseAPI.get('/ktp/'+id),
    updatektp: (id, data) => BaseAPI.put('/ktp/'+id, data),
    updatestatusverif: (id, data) => BaseAPI.put('/ktpStatusVerifikasi/'+id, data),
    updatejadwal: (data) => BaseAPI_JSON.put('/ktpJadwal', data),
    updatekonfirmasi: (id, data) => BaseAPI.put('/ktpStatusKonfirmasi/'+id, data),
    updatestatus: (id, data) => BaseAPI.put('/ktpStatus/'+id, data)
}

export default QoinAPI 