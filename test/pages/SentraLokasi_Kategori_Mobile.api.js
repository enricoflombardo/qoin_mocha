import BaseAPI from "$root/pages/base.api";

const qoinAPI = {
    //Lokasi
    get_lokasi: () => BaseAPI.get('/kategoriLokasi'),
}

export default qoinAPI