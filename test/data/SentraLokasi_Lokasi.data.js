import Getid from "$root/helper/get-id-lokasi";

const id_lokasi = await GetID_Lokasi()

export const VALID_ADDMULTILOKASI = [
    {
        "data":[
            {
            "m_lokasi_kategori_id" : 1,
            "name" : "Rumah Sakit Venturo",
            "latitude" : "-7.942348725600281",
            "longitude" : "112.62298581228141",
            "description": "deskripsi",
            "alamat": "jl raya"
            }
        ],
        "fasilitas":[
            {"name":"abc"}
        ]
    },
    {
        "data":[
            {
                "m_lokasi_kategori_id" : 1,
                "name" : "Rumah Sakit Venturo2",
                "latitude" : "-7.942348725600281",
                "longitude" : "112.62298581228141",
                "description": "deskripsi",
                "alamat": "jl raya"
            }
        ],
        "fasilitas":[
            {
                "name": "bbbb"
            },
            {
                "name": "cccc"
            }
        ]
    }
]

export const VALID_ADDLOKASI = {
    "data": {
        "latitude": "-7.942348725600281",
        "longitude": "112.62298581228141",
        "m_lokasi_kategori_id": 1,
        "bahasa": "id",
        "name": "Rumah Sakit Venturo 2",
        "description": "Ini Cabang Rumah Sakit Venturo"
    },
    "fasilitas" : [
        {
            "name" : "UGD"
        },
        {
            "name" : "USG"
        }
    ]   
}

export const VALID_PUTLOKASI = {
    "data": {
        "id": 6,
        "latitude": "-7.264188839148579",
        "longitude": "112.69104859142386",
        "m_lokasi_kategori_id": 1,
        "bahasa": "id",
        "name": "Mitra Keluarga Surabaya"
    },
    "fasilitas" : [
        {
            "name" : "UGD"
        },
        {
            "name" : "USG"
        }
    ]   
}

export const VALID_ADDLOCATIONIMAGE = {
    "picture": "https://cdn.antaranews.com/cache/800x533/2022/06/21/FOTO-Advent.png"
}