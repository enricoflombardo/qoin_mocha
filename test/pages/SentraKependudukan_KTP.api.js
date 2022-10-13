import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    login: (data) => BaseAPI.post('/access/login/web', data),
    addKTP: (token, data) => BaseAPI.post('/addKtp',data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    // ktp: (data) => BaseAPI.post('/ktp/1', data),
    getid: (token) => BaseAPI.get('/getDocument?limit=1&user_id=1619&filter={"type":"m_ktp"}', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    get_index_by_id: (id, token) => BaseAPI.get('/ktp/'+id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatektp: (id, token, data) => BaseAPI.put('/ktp/'+id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatestatusverif: (id, token, data) => BaseAPI.put('/ktpStatusVerifikasi/'+id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatejadwal: (id, token, data) => BaseAPI_JSON.put('/ktpJadwal', id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatekonfirmasi: (id, token, data) => BaseAPI.put('/ktpStatusKonfirmasi/'+id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatestatus: (id, token, data) => BaseAPI.put('/ktpStatus/'+id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
}

export default QoinAPI