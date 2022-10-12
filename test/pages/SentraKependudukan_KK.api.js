import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    login: (data) => BaseAPI.post('/access/login/web', data),
    addKk: (token, data) => BaseAPI_JSON.post('/Kk', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getid: (token) => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_kk"}', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getid_anggota: (id, token) => BaseAPI.get('/kkAnggota/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    index_by_id: (id, token) => BaseAPI.get('/Kk/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatekk: (id, data, token) => BaseAPI.put('/kk/'+ id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatestatusverif: (id, data, token) => BaseAPI.put('/kkStatusVerifikasi/'+ id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatestatus: (id, data, token) => BaseAPI.put('/kkStatus/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatejadwal: (data) => BaseAPI_JSON.put('/kkJadwal', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updateanggota: (id, id_anggota, data, token) => BaseAPI_JSON.put('/kkAnggota/'+ id +'/'+ id_anggota, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatekonfirmasi: (id, data, token) => BaseAPI.put('/kkStatusKonfirmasi/'+ id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
}

export default QoinAPI 