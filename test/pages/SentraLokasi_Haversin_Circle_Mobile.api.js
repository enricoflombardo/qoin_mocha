import BaseAPI from "$root/pages/base.api";

const qoinAPI = {
    //Lokasi
    get_haversin_circle: () => BaseAPI.get('/get-haversinCircle?limit=100&offset=0&filter={"name":""}&radius=50&lat=-10.159057614578971&long=123.59398038991114&bahasa=id'),
    get_haversin_circle_bykategori: () => BaseAPI.get('/get-haversin-circle-byKategori/320?lat=-7.951605927250341&long=112.61400523563555&radius=500&bahasa=id'),
    get_lokasi_byid: () => BaseAPI.get('/get-lokasi-byId/1?lat=-7.938337447142101&long=112.59039767966426&bahasa=id')
}

export default qoinAPI