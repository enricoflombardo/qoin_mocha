import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';
import LoginAPI from '$root/pages/baselogin.api';

var apiKey = "PMAK-635367c6e766f9002a00c0ab-7c4971d758dee03374d09f38f0a70e62c7";
var url = "https://api.getpostman.com/";

const PostmanAPI = {
    getCollection: (data) => LoginAPI.post(url + 'collections', data, {
        headers: {
            "X-Api-Key": apiKey
        }
    }),

    getCollectionById: (collectionId) => LoginAPI.post(url + 'collections/' + collectionId, {
        headers: {
            "X-Api-Key": apiKey
        }
    })
}

export default PostmanAPI




