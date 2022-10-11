import Getid from '$root/helper/helper-kk'; //import id

const id = await Getid()

export const VALID_ADDKK = {
    "data":{
        "m_user_id": 9,
        "jenis_permohonan": "Pembuatan Baru",
        "provinsi_domisili_id": "35",
        "kota_domisili_id": "3507",
        "kecamatan_domisili_id": "350717",
        "kelurahan_domisili_id": "3507172010",
        "nik_pemohon": "35071717697230008",
        "nama_pemohon": "KIRANA",
        "alasan_permohonan": "Membentuk Rumah Tangga Baru",
        "jumlah_anggota": "3",
        "provinsi_id": "35",
        "kota_id": "3507",
        "kecamatan_id": "350717",
        "kelurahan_id": "3507172010",
        "alamat": "Kuto Bedah",
        "rt": "5",
        "rw": "6",
        "kodepos": "65155",
        "lokasi_id": "350717",
        "provinsi_domisili": "Jawa Timur",
        "kota_domisili": "Malang",
        "kecamatan_domisili": "Jabung",
        "kelurahan_domisili": "Kemantren",
        "provinsi_pemohon": "Jawa Timur",
        "kota_pemohon": "Malang",
        "kecamatan_pemohon": "Jabung",
        "kelurahan_pemohon": "Kemantren",
        "tempat_kedatangan": "Jabung",
      	// "client_id": 123,
        // "created_by": "Rizqi"
    },
    "anggota":[
        {
            "no_nik": "3507171769723006",
            "nama": "RAHMAN",
            "status_hubungan": "Kepala Keluarga "
        },
        {
            "no_nik": "3507171769723007",
            "nama": "KIRANA",
            "status_hubungan": "Istri "
        },
        {
            "no_nik": "3507171769723008",
            "nama": "DANI",
            "status_hubungan": "Anak",
            "status_hubungan_lainnya": "-"
        }
    ]
};

export const VALID_UPDATEKK = {
    "kecamatan_domisili_id": "350717",
    "kelurahan_domisili_id": "3507172010",
    "kota_domisili_id": "3507",
    "provinsi_domisili_id": "35",
    "kecamatan_domisili" : "Jabung",
    "provinsi_id" : "35",
    "nama_pemohon" : "KIRANA DWI ARIANTI"
};

export const VALID_STATUSVERIFKK = {
    "updatebyid": "1",
    "notes": "Pembuatan KK KIRANA DWI ARIANTI di verifikasi",
};

export const VALID_STATUSKK = {
    "status": "dijadwalkan"
};

export const VALID_UPDATE_JADWAL_KK = [{
    "id" : id,
    "tanggal_kedatangan" : "2022-10-01",
}];

export const VALID_UPDATE_ANGGOTA = {
    'nama': ' DANI SETIAWAN',
    'no_nik': '35071717697230008',
    'status_hubungan': 'Anak'
};

export const VALID_STATUSKONFIRKK = {
    "updatebyid" : "1",
    "notes" : "Mohon segera diselesaikan",
    "tanggal_kedatangan" : "2022-10-02",
    "status" : "dijadwalkan",
    "lokasi_id" : "350717",
    "jam_kedatangan": "10:59:00"
};

export const VALID_LOGINAPP = {
    "email": "ilyas@loyalto.id",
    "password": "123123",
    "Source" : "app"
};

export const VALID_LOGINLV2 = {
    "email": "adminlv2@loyalto.id",
    "password": "123123",
    "Source" : "web"
};

export const VALID_LOGINLV3 = {
    "email": "adminlv3@loyalto.id",
    "password": "123123",
    "Source" : "web"
};

export const UPDATE_DATA = {
    "name": "ocir",
    "job": "zion resident"
};