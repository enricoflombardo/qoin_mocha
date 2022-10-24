import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //mobile
    add_akta: (data, token) => BaseAPI_JSON.post('/aktaLahir',data, {
        headers : {
            Authorization: "Bearer "+ token,
            schema: schema_file
        }
    }),

    //web
    get_id: (token) => BaseAPI.get('/getDocument?limit=1&filter={"type":"m_akta"}', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    index_by_id: (id, token, schema_file) => BaseAPI.get('/aktaLahir/'+id, {
        headers : {
            Authorization: "Bearer "+ token,
            schema: schema_file
        }
    }),
    update_akta: (id, data, token) => BaseAPI.put('/aktaLahir/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    update_status_verif: (id, data, token) => BaseAPI.put('/aktaLahirStatusVerifikasi/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    update_status: (id, data, token) => BaseAPI.put('/aktaLahirStatus/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    update_jadwal: (data, token) => BaseAPI_JSON.put('/aktaLahirJadwal', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    update_status_konfirmasi: (id, data, token) => BaseAPI.put('/aktaLahirStatusKonfirmasi/' + id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
}

export default QoinAPI