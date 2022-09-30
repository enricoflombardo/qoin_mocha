import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addKk: (data) => BaseAPI_JSON.post('/Kk',data),
    login: (data) => BaseAPI.post('/access/login/web', data),
    getid: () => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_kk"}'),
    kk: () => BaseAPI.get('/Kk/270'),
    updatekk: (data) => BaseAPI.put('/kk/', data),
    updatestatusverif: (data) => BaseAPI.put('/kkStatusVerifikasi/', data),
    updatestatus: (data) => BaseAPI.put('/kkStatus/', data),
    updatejadwal: (data) => BaseAPI_JSON.put('/kkJadwal', data),
    updateanggota: (data) => BaseAPI_JSON.put('/kkAnggota/270/122', data),
    updatekonfirmasi: (data) => BaseAPI.put('/kkStatusKonfirmasi/', data)
}

export default QoinAPI 