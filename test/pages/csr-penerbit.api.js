import LoginAPI from '$root/pages/baselogin.api';
import BaseAPI from '$root/pages/basecsr.api';
import BaseAPI_JSON from '$root/pages/basecsr_json.api';

const QoinAPI = {
    login: (data) => LoginAPI.post('/access/login/web', data, {
        headers: {
            "app-id": "a1bd947020265d9f8a42dbc44d4fd62d3008294b3bff9cff7598697f0401ab6c87313f967b73c09f8b78acb012518843e0ecded2e0ce4f51f0b6f86609d0fe9ba85fc10e0d60aafbc145af719f0fa062315c4092923fdc74d21289e42f7f246278dc00b459d32a30fefee37c97e2f378b3a0de72213109e33d3c2eefc1208706d4ffc7bc7b66a83e3ef167d332138b9e27af7170b10cde237a471c1b3172298f0c1878aeda41d6c4a2689aaad1e96f9c4f0b6b8efba083476f1f7d05c04faa908ebf3c93c873c2f669b415a680014636c4a37a0c14db44784a51ba8487ccb9a6d46199b64096132f642f64202d43f0ecd8d86f3e2d57da9609f76781cf44680ac5020c55f17f801d447b5ff77cb4a1cc3d48cd8df0050198ebfdc782f16ce60765583c06c5ef88812d4b0a1bf238a23b3ce730d9c3e594b275a62c44b17f17dd6b19a64828627f41bfb1886f73ccc2243e16ebfbeec9ec351b79c0cb0233e21dd04b820379994c3ba90f65ca68012d58f43b04f397da7b6e0986e4fa75a3947e6fd2c3e4d28af8eea93eec8c109ef23640f82339f557e5b63ab0d9299bf3b157908aeab41c98d3f223168299d982f8148a9abaf37e9f47fa5868bd6a74d03c6dfacc825f4cb729067b555ae7f7d284b099ebf01742bc239f16ccf00613a1c87caca6be7bc3586e990fbd7baaa926c038ac6f96377d2881859e63a507f9e388ff27aebaff4e2cd4ce9f5c1c3b19e23779b488f22df532b4cfdc6d0cad"
        }
    }),
    multipenerbit: (data, token) => BaseAPI_JSON.post('/multiPenerbit', data, {
        headers : {
            Authorization : "Bearer "+ token
        }
    }),
    penerbit: (data, token) => BaseAPI.post('/Penerbit', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getid: () => BaseAPI.get('/Penerbit/List?limit=1', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    getpenerbit: (id) => BaseAPI.get('/Penerbit/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatepenerbit: (id, data) => BaseAPI.put('/Penerbit/'+ id, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    voucher: (data) => BaseAPI.post('/Voucher', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }), //id_voucher
    getvoucher: (id) => BaseAPI.get('/Voucher/'+ id, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    updatevoucher: (id_voucher, data) => BaseAPI.put('/Voucher/'+ id_voucher, data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    programbantuan: (data) => BaseAPI.post('/create-bansos-multi', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }), 
    listbansos: () => BaseAPI.get('/listBansos?limit=1', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }), //id_program
    listpenerimabansos: (id_program) => BaseAPI.get('/listPenerimaByProgram/'+ id_program, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    listvoucherbansos: (id_program) => BaseAPI.get('/listVoucherByBansos/'+ id_program, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    listbansospenerima: () => BaseAPI.get('/listBansosPenerima', {
        headers : {
            Authorization: "Bearer "+ token
        }
    }), //id_user dan id_penerima
    bansosuser: (id_penerima) => BaseAPI.get('/getBansosUser/'+ id_penerima, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }), //id_bansos
    listvoucheruser: (id_bansos, id_user) => BaseAPI.get('/listVoucherByBansosAndUserId/'+ id_bansos +'/'+ id_user, {
        headers : {
            Authorization: "Bearer "+ token
        }
    }),
    redeemvoucher: (data) => BaseAPI_JSON.put('/redeemVoucher', data, {
        headers : {
            Authorization: "Bearer "+ token
        }
    })
};

export default QoinAPI 