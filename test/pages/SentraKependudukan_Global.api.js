import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addKTP: (data, token) => BaseAPI.post('/addKtp',data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
}

export default QoinAPI 