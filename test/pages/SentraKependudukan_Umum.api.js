import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    //DASHBOARD
    get_dashboard: () => BaseAPI.get('/getDocument?limit=10&offset=0&role=supervisor&type=kk'),

    //DOCUMENT
    get_allDoc: () => BaseAPI.get('/getDocument?limit=10&user_id=1619&filter={"type":"m_ktp"}'),

    //RIWAYAT
    get_riwayat: () => BaseAPI.get('/Riwayat/0?type=ktp'),
    get_detailRiwayat: () => BaseAPI.get('/detailRiwayat/1?type=ktp'),
    get_riwayatAll: () => BaseAPI.get('/RiwayatAll/0'),

}

export default QoinAPI 