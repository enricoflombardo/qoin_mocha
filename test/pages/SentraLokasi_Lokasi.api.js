import BaseAPI from '$root/pages/base.api';
import BaseAPI_JSON from '$root/pages/base_json.api';
import LoginAPI from '$root/pages/baselogin.api';

const QoinAPI = {
    
    login: (data) => LoginAPI.post('/access/login/web', data, {
        headers: {
            "app-id": "a1bd947020265d9f8a42dbc44d4fd62d3008294b3bff9cff7598697f0401ab6c87313f967b73c09f8b78acb012518843e0ecded2e0ce4f51f0b6f86609d0fe9ba85fc10e0d60aafbc145af719f0fa062315c4092923fdc74d21289e42f7f246278dc00b459d32a30fefee37c97e2f378b3a0de72213109e33d3c2eefc1208706d4ffc7bc7b66a83e3ef167d332138b9e27af7170b10cde237a471c1b3172298f0c1878aeda41d6c4a2689aaad1e96f9c4f0b6b8efba083476f1f7d05c04faa908ebf3c93c873c2f669b415a680014636c4a37a0c14db44784a51ba8487ccb9a6d46199b64096132f642f64202d43f0ecd8d86f3e2d57da9609f76781cf44680ac5020c55f17f801d447b5ff77cb4a1cc3d48cd8df0050198ebfdc782f16ce60765583c06c5ef88812d4b0a1bf238a23b3ce730d9c3e594b275a62c44b17f17dd6b19a64828627f41bfb1886f73ccc2243e16ebfbeec9ec351b79c0cb0233e21dd04b820379994c3ba90f65ca68012d58f43b04f397da7b6e0986e4fa75a3947e6fd2c3e4d28af8eea93eec8c109ef23640f82339f557e5b63ab0d9299bf3b157908aeab41c98d3f223168299d982f8148a9abaf37e9f47fa5868bd6a74d03c6dfacc825f4cb729067b555ae7f7d284b099ebf01742bc239f16ccf00613a1c87caca6be7bc3586e990fbd7baaa926c038ac6f96377d2881859e63a507f9e388ff27aebaff4e2cd4ce9f5c1c3b19e23779b488f22df532b4cfdc6d0cad"
        }
    }),
    //mobile
    loginMobile: (data) => BaseAPI.post('/access/login/app', data, {
        headers: {
            "app-id": "6ca9b8e6253b1ecb124ecc76c81ba73711a82f3ccd691929784724045ca5c7800b09f8936e0ec2677dfe81f8d29192376c7fdd1a70c4a5566aa040128397980627af05470c68ef162b0bad241659e8842bcd5da65b403f70857716be897382e4a693aa6eb99574054833b6a79a10b002e8547340f1279adf389fb42b82247272c4263aff4039a135bc1e9471c2cf919553eafe836a9ec1642c4ce1850256611d5bb24075b98da3c2765c2c621ecfdcf8fb6e38ac7f92510bbaa9394aa4c313ef6ee7cbe0578f5b52de94dd02138d080174c17f13942be77995212ff71b6a30db6d501b6780ada391c30f952057136c1cc6da0689f88580d934fbdc3b347e4c5313ef9e5fba61bbdb03cf44d42be32c178f07ae8471a7f38cf3e1f159ae37fa155d8362cb81f92d7a262d8c5ee4b9027448114b1ee6b15d3cc489bc17638e914948d520d45e59a9d4aace8e95cdbafcbd50048fb86be9bd940256c3f2d5bd754fa9a0b6e00ef357a98e8dbd85293d95094ec210db033f1a80153886825e2551a3afc0e61f0a924468fc8cfcb0ae4f75f206f9a24e7a85df7d74ce1efd5c899f7d867ad47763011c83df3605d6e79ba0fa37ae7c2d19301697335e5ab81de23bd13d125aa953a4dd562de6af0871b03a75c78680f931db142a2eb9063c1dec396ad2594914e8ec8139a2f3bbf1f48ce87541331458f31a6262a240d5f33256409d4a1bbb8de3b105774460318ca2a67e81010d792d19d4573c844b53ef"
        }
    }),

    get_haversin_circle: () => BaseAPI.get('/get-haversinCircle?limit=100&offset=0&filter={"name":""}&radius=50&lat=-10.159057614578971&long=123.59398038991114&bahasa=id', {
        headers: {
            "app-id": "a1bd947020265d9f8a42dbc44d4fd62d3008294b3bff9cff7598697f0401ab6c87313f967b73c09f8b78acb012518843e0ecded2e0ce4f51f0b6f86609d0fe9ba85fc10e0d60aafbc145af719f0fa062315c4092923fdc74d21289e42f7f246278dc00b459d32a30fefee37c97e2f378b3a0de72213109e33d3c2eefc1208706d4ffc7bc7b66a83e3ef167d332138b9e27af7170b10cde237a471c1b3172298f0c1878aeda41d6c4a2689aaad1e96f9c4f0b6b8efba083476f1f7d05c04faa908ebf3c93c873c2f669b415a680014636c4a37a0c14db44784a51ba8487ccb9a6d46199b64096132f642f64202d43f0ecd8d86f3e2d57da9609f76781cf44680ac5020c55f17f801d447b5ff77cb4a1cc3d48cd8df0050198ebfdc782f16ce60765583c06c5ef88812d4b0a1bf238a23b3ce730d9c3e594b275a62c44b17f17dd6b19a64828627f41bfb1886f73ccc2243e16ebfbeec9ec351b79c0cb0233e21dd04b820379994c3ba90f65ca68012d58f43b04f397da7b6e0986e4fa75a3947e6fd2c3e4d28af8eea93eec8c109ef23640f82339f557e5b63ab0d9299bf3b157908aeab41c98d3f223168299d982f8148a9abaf37e9f47fa5868bd6a74d03c6dfacc825f4cb729067b555ae7f7d284b099ebf01742bc239f16ccf00613a1c87caca6be7bc3586e990fbd7baaa926c038ac6f96377d2881859e63a507f9e388ff27aebaff4e2cd4ce9f5c1c3b19e23779b488f22df532b4cfdc6d0cad"
        }
    }),
    get_haversin_circle_bykategori: () => BaseAPI.get('/get-haversin-circle-byKategori/320?lat=-7.951605927250341&long=112.61400523563555&radius=500&bahasa=id', {
        headers: {
            Authorization: "Bearer " + token
        }
    }),
    get_lokasi_byid: () => BaseAPI.get('/get-lokasi-byId/1?lat=-7.938337447142101&long=112.59039767966426&bahasa=id', {
        headers: {
            Authorization: "Bearer " + token
        }
    }),

    //web
    addLokasi: (data, token) => BaseAPI_JSON.post('/Lokasi', data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    addMultilokasi: (data, token) => BaseAPI_JSON.post('/multiLokasi', data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getLokasi: (token) => BaseAPI.get('/Lokasi', {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    updateLokasi: (id, data, token) => BaseAPI_JSON.put('/Lokasi/' + id, data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    deleteLokasi: (id, token) => BaseAPI.delete('/Lokasi/' + id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    addImagelokasi: (id, data, token) => BaseAPI.post('/lokasiAddImage/' + id, data, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getImagelokasi: (id, token) => BaseAPI.get('/lokasiGetImage/'+ id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    deleteImagelokasi: (id, token) => BaseAPI.delete('/lokasiDeleteImage/' + id, {
        headers : {
            Authorization: "Bearer " + token
        }
    }),
    getFasilitaslokasi: (id, token) => BaseAPI.get('/fasilitasLokasi/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getLokasibyid: (id, token) => BaseAPI.get('/lokasiById/' + id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    readExcel: () => BaseAPI.post('/readExcel'),
    getTemplateexcel: () => BaseAPI.get('/template-excel'),
}

export default QoinAPI