import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //DASHBOARD
    get_dashboard: (token) => BaseAPI.get('/getDocument?limit=10&offset=0&role=supervisor&type=kk', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),

    //DOCUMENT
    get_allDoc: (token) => BaseAPI.get('/getDocument?limit=10&user_id=1619&filter={"type":"m_ktp"}', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),

    //RIWAYAT
    get_riwayat: (token) => BaseAPI.get('/Riwayat/0?type=ktp', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    get_detailRiwayat: (token) => BaseAPI.get('/detailRiwayat/1?type=ktp', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    get_riwayatAll: (token) => BaseAPI.get('/RiwayatAll/0', {
        headers : {
            Authorization: "Bearer "+ token
        }
    })

}

export default QoinAPI 