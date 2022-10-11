import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';

const QoinAPI = {
    addKTP: (data) => BaseAPI.post('/addKtp',data)
}

export default QoinAPI 