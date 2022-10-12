export const VALIDATE_ADDSENTRAMULTILOKASI_WEBADMIN_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "data",
                    "fasilitas"
                ],
                "properties": {
                    "data": {
                        "type": "array",
                        "title": "The data Schema",
                        "items": {
                            "type": "object",
                            "title": "A Schema",
                            "required": [
                                "alamat",
                                "created_at",
                                "description",
                                "latitude",
                                "longitude",
                                "m_lokasi_kategori_id",
                                "name",
                                "updated_at"
                            ],
                            "properties": {
                                "alamat": {
                                    "type": "string",
                                    "title": "The alamat Schema",
                                    "examples": [
                                        "jl raya"
                                    ]
                                },
                                "created_at": {
                                    "type": "string",
                                    "title": "The created_at Schema",
                                    "examples": [
                                        "2022-06-09 09:18:21"
                                    ]
                                },
                                "description": {
                                    "type": "string",
                                    "title": "The description Schema",
                                    "examples": [
                                        "deskripsi"
                                    ]
                                },
                                "latitude": {
                                    "type": "string",
                                    "title": "The latitude Schema",
                                    "examples": [
                                        "-7.942348725600281"
                                    ]
                                },
                                "longitude": {
                                    "type": "string",
                                    "title": "The longitude Schema",
                                    "examples": [
                                        "112.62298581228141"
                                    ]
                                },
                                "m_lokasi_kategori_id": {
                                    "type": "integer",
                                    "title": "The m_lokasi_kategori_id Schema",
                                    "examples": [
                                        1
                                    ]
                                },
                                "name": {
                                    "type": "string",
                                    "title": "The name Schema",
                                    "examples": [
                                        "Rumah Sakit Venturo",
                                        "Rumah Sakit Venturo2"
                                    ]
                                },
                                "updated_at": {
                                    "type": "string",
                                    "title": "The updated_at Schema",
                                    "examples": [
                                        "2022-06-09 09:18:21"
                                    ]
                                }
                            },
                            "examples": [{
                                "alamat": "jl raya",
                                "created_at": "2022-06-09 09:18:21",
                                "description": "deskripsi",
                                "latitude": "-7.942348725600281",
                                "longitude": "112.62298581228141",
                                "m_lokasi_kategori_id": 1,
                                "name": "Rumah Sakit Venturo",
                                "updated_at": "2022-06-09 09:18:21"
                            },
                            {
                                "alamat": "jl raya",
                                "created_at": "2022-06-09 09:18:21",
                                "description": "deskripsi",
                                "latitude": "-7.942348725600281",
                                "longitude": "112.62298581228141",
                                "m_lokasi_kategori_id": 1,
                                "name": "Rumah Sakit Venturo2",
                                "updated_at": "2022-06-09 09:18:21"
                            }]
                        },
                        "examples": [
                            [{
                                "alamat": "jl raya",
                                "created_at": "2022-06-09 09:18:21",
                                "description": "deskripsi",
                                "latitude": "-7.942348725600281",
                                "longitude": "112.62298581228141",
                                "m_lokasi_kategori_id": 1,
                                "name": "Rumah Sakit Venturo",
                                "updated_at": "2022-06-09 09:18:21"
                            }],
                            [{
                                "alamat": "jl raya",
                                "created_at": "2022-06-09 09:18:21",
                                "description": "deskripsi",
                                "latitude": "-7.942348725600281",
                                "longitude": "112.62298581228141",
                                "m_lokasi_kategori_id": 1,
                                "name": "Rumah Sakit Venturo2",
                                "updated_at": "2022-06-09 09:18:21"
                            }]
                        ]
                    },
                    "fasilitas": {
                        "type": "array",
                        "title": "The fasilitas Schema",
                        "items": {
                            "type": "object",
                            "title": "A Schema",
                            "required": [
                                "m_lokasi_id",
                                "name"
                            ],
                            "properties": {
                                "m_lokasi_id": {
                                    "type": "integer",
                                    "title": "The m_lokasi_id Schema",
                                    "examples": [
                                        19,
                                        20
                                    ]
                                },
                                "name": {
                                    "type": "string",
                                    "title": "The name Schema",
                                    "examples": [
                                        "abc",
                                        "bbbb",
                                        "cccc"
                                    ]
                                }
                            },
                            "examples": [{
                                "m_lokasi_id": 19,
                                "name": "abc"
                            },
                            {
                                "m_lokasi_id": 20,
                                "name": "bbbb"
                            },
                            {
                                "m_lokasi_id": 20,
                                "name": "cccc"
                            }]
                        },
                        "examples": [
                            [{
                                "m_lokasi_id": 19,
                                "name": "abc"
                            }],
                            [{
                                "m_lokasi_id": 20,
                                "name": "bbbb"
                            },
                            {
                                "m_lokasi_id": 20,
                                "name": "cccc"
                            }]
                        ]
                    }
                },
                "examples": [{
                    "data": [{
                        "alamat": "jl raya",
                        "created_at": "2022-06-09 09:18:21",
                        "description": "deskripsi",
                        "latitude": "-7.942348725600281",
                        "longitude": "112.62298581228141",
                        "m_lokasi_kategori_id": 1,
                        "name": "Rumah Sakit Venturo",
                        "updated_at": "2022-06-09 09:18:21"
                    }],
                    "fasilitas": [{
                        "m_lokasi_id": 19,
                        "name": "abc"
                    }]
                },
                {
                    "data": [{
                        "alamat": "jl raya",
                        "created_at": "2022-06-09 09:18:21",
                        "description": "deskripsi",
                        "latitude": "-7.942348725600281",
                        "longitude": "112.62298581228141",
                        "m_lokasi_kategori_id": 1,
                        "name": "Rumah Sakit Venturo2",
                        "updated_at": "2022-06-09 09:18:21"
                    }],
                    "fasilitas": [{
                        "m_lokasi_id": 20,
                        "name": "bbbb"
                    },
                    {
                        "m_lokasi_id": 20,
                        "name": "cccc"
                    }]
                }]
            },
            "examples": [
                [{
                    "data": [{
                        "alamat": "jl raya",
                        "created_at": "2022-06-09 09:18:21",
                        "description": "deskripsi",
                        "latitude": "-7.942348725600281",
                        "longitude": "112.62298581228141",
                        "m_lokasi_kategori_id": 1,
                        "name": "Rumah Sakit Venturo",
                        "updated_at": "2022-06-09 09:18:21"
                    }],
                    "fasilitas": [{
                        "m_lokasi_id": 19,
                        "name": "abc"
                    }]
                },
                {
                    "data": [{
                        "alamat": "jl raya",
                        "created_at": "2022-06-09 09:18:21",
                        "description": "deskripsi",
                        "latitude": "-7.942348725600281",
                        "longitude": "112.62298581228141",
                        "m_lokasi_kategori_id": 1,
                        "name": "Rumah Sakit Venturo2",
                        "updated_at": "2022-06-09 09:18:21"
                    }],
                    "fasilitas": [{
                        "m_lokasi_id": 20,
                        "name": "bbbb"
                    },
                    {
                        "m_lokasi_id": 20,
                        "name": "cccc"
                    }]
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "data": [{
                "alamat": "jl raya",
                "created_at": "2022-06-09 09:18:21",
                "description": "deskripsi",
                "latitude": "-7.942348725600281",
                "longitude": "112.62298581228141",
                "m_lokasi_kategori_id": 1,
                "name": "Rumah Sakit Venturo",
                "updated_at": "2022-06-09 09:18:21"
            }],
            "fasilitas": [{
                "m_lokasi_id": 19,
                "name": "abc"
            }]
        },
        {
            "data": [{
                "alamat": "jl raya",
                "created_at": "2022-06-09 09:18:21",
                "description": "deskripsi",
                "latitude": "-7.942348725600281",
                "longitude": "112.62298581228141",
                "m_lokasi_kategori_id": 1,
                "name": "Rumah Sakit Venturo2",
                "updated_at": "2022-06-09 09:18:21"
            }],
            "fasilitas": [{
                "m_lokasi_id": 20,
                "name": "bbbb"
            },
            {
                "m_lokasi_id": 20,
                "name": "cccc"
            }]
        }]
    }]
}

export const VALIDATE_GETSENTRALOKASI_WEBADMIN_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "list",
                "total_item"
            ],
            "properties": {
                "list": {
                    "type": "array",
                    "default": [],
                    "title": "The list Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "alamat",
                            "bahasa",
                            "created_at",
                            "deleted_at",
                            "description",
                            "id",
                            "is_active",
                            "kategori",
                            "latitude",
                            "longitude",
                            "m_lokasi_kategori_id",
                            "name",
                            "updated_at"
                        ],
                        "properties": {
                            "alamat": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "title": "The alamat Schema",
                                "examples": [
                                    "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                                    "Jl. Cemara",
                                    "MT Hariyono",
                                    "Jl. Tanjung Duren Raya No.54 C, RT.1/RW.4, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
                                    "Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559",
                                    "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
                                    "18 Parc Place SCBD Tower C Ground Floor, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                                    "Kota Tangerang, Banten 19120",
                                    "Jl. Halim Perdana Kusuma No.1, RW.9, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
                                    "Jl. Prof. DR. G.A. Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                                    "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                                    "Jl. Matraman Raya No.1, RT.2/RW.1, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150",
                                    "Jl. Pegambiran No.31A, RT.16/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                                    "Jalan A.M Sangaji No. 22-24 Petojo Utara Gambir RT.2/RW.5 2 5, RT.2/RW.5, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
                                    "Jl. Prihatin No.8, RW.2, Klp. Gading Bar., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
                                    "Jl. Budi Utomo, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
                                    "Bukit Gading Raya Blok A Kav No.19-20, Klp. Gading Bar., Kec. Klp. Gading, Daerah Khusus Ibukota Jakarta 14240",
                                    "Bank Rakyat Indonesia KI I / 21, Jl. Taman Sunter Indah No.12, RT.14/RW.12, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
                                    "Jalan Letjend Suprapto No.30 EF, RW.3, Cemp. Putih Bar., Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 Phone: (021) 0500888",
                                    "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                                    "A",
                                    "Malang",
                                    null
                                ]
                            },
                            "bahasa": {
                                "type": "string",
                                "title": "The bahasa Schema",
                                "examples": [
                                    "id",
                                    "en"
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-09-12T17:12:24+07:00",
                                    "2022-04-01T10:49:02+07:00",
                                    "2022-04-01T09:34:09+07:00",
                                    "2022-03-30T15:55:04+07:00",
                                    "2022-03-30T12:53:56+07:00",
                                    "2022-03-30T12:46:54+07:00",
                                    "2022-03-24T15:59:25+07:00",
                                    "2022-03-24T08:50:10+07:00",
                                    "2022-03-23T16:37:18+07:00",
                                    "2022-03-23T16:29:21+07:00",
                                    "2022-03-15T16:40:08+07:00",
                                    "2022-03-14T10:36:41+07:00",
                                    "2022-03-14T10:31:10+07:00",
                                    "2022-03-14T10:23:16+07:00",
                                    "2022-03-14T10:10:02+07:00",
                                    "2022-03-14T10:04:45+07:00",
                                    "2022-03-11T17:07:51+07:00",
                                    "2022-03-11T16:39:57+07:00",
                                    "2022-03-11T13:18:32+07:00",
                                    "2022-02-10T17:00:48+07:00",
                                    "2022-01-27T13:48:31+07:00",
                                    "2022-01-20T14:26:15+07:00",
                                    "2022-01-19T15:01:29+07:00",
                                    "2022-01-19T15:01:02+07:00",
                                    "2022-01-19T14:54:22+07:00",
                                    "2022-01-19T14:52:40+07:00",
                                    "2022-01-19T14:52:09+07:00",
                                    "2022-01-19T14:51:46+07:00",
                                    "2022-01-19T14:51:24+07:00",
                                    "2022-01-19T14:50:50+07:00",
                                    "2022-01-19T14:50:23+07:00",
                                    "2022-01-19T14:49:57+07:00",
                                    "2022-01-19T14:49:22+07:00",
                                    "2022-01-19T14:48:41+07:00",
                                    "2022-01-19T14:48:11+07:00",
                                    "2022-01-19T14:47:45+07:00",
                                    "2022-01-19T14:42:18+07:00",
                                    "2022-01-19T14:41:26+07:00",
                                    "2022-01-19T14:40:41+07:00",
                                    "2022-01-19T14:40:03+07:00"
                                ]
                            },
                            "deleted_at": {
                                "type": "null",
                                "title": "The deleted_at Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "description": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "title": "The description Schema",
                                "examples": [
                                    "Kepolisian Daerah Metropolitan Jakarta Raya atau Polda Metro Jaya adalah pelaksana tugas Kepolisian RI di wilayah Provinsi Daerah Khusus Ibukota Jakarta. Polda Metro Jaya dipimpin oleh seorang kepala kepolisian daerah yang berpangkat bintang dua",
                                    "Sekolah",
                                    "Bank",
                                    "Restoran ayam goreng",
                                    "Kampus Politeknik Negeri pertama di Indonesia",
                                    "Kampus utama untuk pendidikan tinggi bidang sains \u0026 teknologi ini didirikan pada tahun 1959.\n",
                                    "Restoran kasual yang menyajikan potongan steak klasik, masakan Italia \u0026 koktail di tempat elegan dan luas.",
                                    "Bandar Udara Internasional Soekarno–Hatta disingkat SHIA atau Soetta, sebelumnya secara hukum disebut Bandar Udara Cengkareng Jakarta, merupakan sebuah bandar udara utama yang melayani penerbangan untuk wilayah Jabodetabek dan sekitarnya.",
                                    "Bandar Udara Internasional Halim Perdanakusuma (bahasa Inggris: Halim Perdanakusuma International Airport) (IATA: HLP, ICAO: WIHH) adalah sebuah bandar udara di Jakarta, Indonesia. Bandar udara ini juga merupakan markas Komando Operasi Angkatan Udara I. Sejak tanggal 10 Januari 2014, bandar udara ini juga digunakan sebagai bandar udara komersial untuk wilayah Jabodetabek, awalnya untuk mengalihkan penerbangan dari Bandar Udara Internasional Soekarno–Hatta, yang dinilai telah penuh sesak",
                                    "Politeknik Negeri Jakarta adalah salah satu perguruan tinggi negeri politeknik yang terdapat di areal kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia.",
                                    "Universitas Negeri Jakarta adalah Perguruan Tinggi Negeri yang terdapat di kota Jakarta, Indonesia yang didirikan pada tahun 1964. Sebelumnya, Universitas Negeri Jakarta bernama Institut Keguruan dan Ilmu Pendidikan Jakarta (IKIP Jakarta).\n\nPada Januari 2021, Universitas Negeri Jakarta melakukan reakreditasi Perguruan Tinggi yang sebelumnya telah memperoleh akreditasi \"B\". Akreditasi yang dilakukan oleh Tim Asesor BAN PT tahun 2021 ini, Universitas Negeri Jakarta memperoleh Akreditasi Unggul berdasarkan Surat Keputusan BAN-PT No. 45/SK/BAN-PT/Akred/PT/II/2021. Universitas Negeri Jakarta dinyatakan memenuhi syarat peringkat Akreditasi Unggul dengan memperoleh skor nilai 366 dan status akreditasi ini berlaku sejak tanggal 2 Februari 2021 sampai dengan 2 Februari 2026.[",
                                    "Bank Artha Graha Internasional adalah perusahaan swasta yang berbentuk perseroan terbatas dan bergerak di bidang jasa keuangan perbankan. Bank ini berbasis di Jakarta. Didirikan pada tahun 1973.",
                                    "Terminal Rawamangun adalah terminal yang terletak di Kecamatan Pulo Gadung, Jakarta Timur, DKI Jakarta. Terminal ini merupakan salah satu proyek revitalisasi terminal yang dilakukan oleh Pemerintah Provinsi DKI Jakarta. Proyek diprakarsai oleh Dinas Perhubungan Provinsi DKI Jakarta dan mulai dilelang pada tahun 2013.[1] Konstruksi dimulai pada 2014 dan dipergunakan kembali sejak tahun 2015.[1][2] Proyek ini menelan dana Rp57 miliar dari APBD Provinsi DKI Jakarta.[3][4] Proyek ini bermasalah dan dianggap tidak selesai karena konstruksi terminal dipaksakan walau ada lahan yang belum bebas.[5] Hal ini mengakibatkan lajur utama bus yang seharusnya lurus dengan lebar 3,5 meter dibuat berbelok dan menyempit dari desain awal, sehingga bus antar kota antar provinsi (AKAP) berbadan besar tidak bisa masuk ke terminal.",
                                    "-",
                                    "Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia. Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara Depok dengan wilayah Jakarta Selatan, sementara kampus utama lainnya terdapat di Salemba, Jakarta Pusat.",
                                    "test",
                                    "\u003cp\u003eaa\u003c/p\u003e",
                                    "\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ipsum augue. Praesent pretium lectus non risus porta laoreet. Pellentesque lobortis tempor nisl, a fermentum est finibus sed. Maecenas non odio a ex porttitor aliquet quis eget leo. Nullam varius ipsum id faucibus lobortis. Nulla sed leo in augue semper tincidunt. Nunc eget mi gravida, bibendum risus vitae, finibus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit ullamcorper metus ut dignissim. Maecenas porta feugiat vestibulum. Cras auctor, neque a malesuada posuere, lectus orci placerat nulla, sit amet euismod nisl nulla vitae est. Etiam eget urna feugiat, placerat tellus quis, aliquet leo.\u003c/p\u003e",
                                    null
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    303,
                                    270,
                                    258,
                                    253,
                                    252,
                                    251,
                                    250,
                                    249,
                                    247,
                                    245,
                                    244,
                                    243,
                                    239,
                                    238,
                                    237,
                                    236,
                                    235,
                                    234,
                                    232,
                                    231,
                                    229,
                                    211,
                                    195,
                                    165,
                                    136,
                                    135,
                                    124,
                                    120,
                                    119,
                                    118,
                                    117,
                                    116,
                                    115,
                                    114,
                                    113,
                                    112,
                                    111,
                                    110,
                                    102,
                                    101,
                                    100,
                                    99
                                ]
                            },
                            "is_active": {
                                "type": "integer",
                                "title": "The is_active Schema",
                                "examples": [
                                    1,
                                    0
                                ]
                            },
                            "kategori": {
                                "type": "string",
                                "title": "The kategori Schema",
                                "examples": [
                                    "Kantor Polisi",
                                    "Pendidikan",
                                    "Bank",
                                    "Restoran",
                                    "Terminal Bus",
                                    "Bandara1"
                                ]
                            },
                            "latitude": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "title": "The latitude Schema",
                                "examples": [
                                    "-6.222690268768212",
                                    "0",
                                    null,
                                    "-6.871973056376472",
                                    "-6.89148",
                                    "-6.2300513",
                                    "-6.127119",
                                    "-6.2652088",
                                    "-6.3706274",
                                    "-6.1361694",
                                    "-6.198016305409278",
                                    "-6.3143936",
                                    "-6.113382",
                                    "-6.1315654",
                                    "-6.1392697",
                                    "-6.369904922142188",
                                    "-6.2241035",
                                    "-7.962507465557346",
                                    "-7.950829986164169",
                                    "-7.942398405602773",
                                    "-7.932500934731806",
                                    "-7.925193681479986",
                                    "-7.966488963518006",
                                    "-7.968450706635415",
                                    "-7.956233778215897",
                                    "-7.955659410974291",
                                    "-7.955716187956503",
                                    "-7.939568374700675",
                                    "-7.943846049926229",
                                    "-7.946459264382789",
                                    "-7.9384433206759555",
                                    "-8.31113952755366",
                                    "-7.378517830367639",
                                    "-7.937096630297807",
                                    "-7.929828754645295",
                                    "-7.980807715179765",
                                    "-8.00338076502255",
                                    "-7.932158691103069"
                                ]
                            },
                            "longitude": {
                                "type": [
                                    "string",
                                    "null"
                                ],
                                "title": "The longitude Schema",
                                "examples": [
                                    "106.81246824371375",
                                    "0",
                                    null,
                                    "107.5737724972937",
                                    "107.6084704",
                                    "106.8078514",
                                    "106.6534595",
                                    "106.8841572",
                                    "106.8214396",
                                    "106.93640470000001",
                                    "106.89123272895813",
                                    "106.8793856",
                                    "106.9111076",
                                    "106.9042417",
                                    "106.8799169",
                                    "106.82856186012776",
                                    "106.8116504",
                                    "112.613549260998",
                                    "112.61505603790283",
                                    "112.62286663055421",
                                    "112.65823001195365",
                                    "112.59801074817261",
                                    "112.61379712492504",
                                    "112.61326088277917",
                                    "112.61663865064091",
                                    "112.61573204008184",
                                    "112.61584669757713",
                                    "112.62504708472129",
                                    "112.61956993727063",
                                    "112.61258407767342",
                                    "112.63490438312644",
                                    "114.33924209607112",
                                    "112.78732674259327",
                                    "112.71153669325685",
                                    "112.65058759155978",
                                    "112.62531946563851",
                                    "112.61855767194521",
                                    "112.6087773701503"
                                ]
                            },
                            "m_lokasi_kategori_id": {
                                "type": "integer",
                                "title": "The m_lokasi_kategori_id Schema",
                                "examples": [
                                    2,
                                    6,
                                    3,
                                    260,
                                    5,
                                    4
                                ]
                            },
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "Polda Metro Jaya",
                                    "Sekolah SD",
                                    "Bank Jago",
                                    "KFC",
                                    "Politeknik Negeri Bandung",
                                    "Institut Teknologi Bandung",
                                    "Bistecca",
                                    "Bandar Udara Internasional Soekarno–Hatta",
                                    "Halim Perdanakusuma International Airport",
                                    "Politeknik Negeri Jakarta",
                                    "Universitas Negeri Jakarta",
                                    "Bank Artha Graha",
                                    "TERMINAL BUS RAWAMANGUN",
                                    "SMA NEGERI 25 Jakarta",
                                    "SMA NEGERI 72 Jakarta",
                                    "SMA NEGERI 1 JAKARTA",
                                    "BANK BNI",
                                    "BANK BRI",
                                    "BCA Cempaka Putih",
                                    "Universitas Indonesia",
                                    "Universitas Brawijaya",
                                    "Politeknik Negeri Malang",
                                    "Terminal Arjosari Malang",
                                    "Terminal Landungsari Malang",
                                    "Bank OCBC NISP GALUNGGUNG",
                                    "Bank \u0026 ATM Mandiri",
                                    "Bank Jatim",
                                    "BNI KCP Universitas Brawijaya Malang",
                                    "Bank Btn",
                                    "Bank Mandiri KCP Soekarno Hatta",
                                    "PermataBank",
                                    "Bank BRI 2",
                                    "Bank Mandiri KCP Borobudur",
                                    "Bandar Udara Internasional Banyuwangi",
                                    "Bandar Udara Internasional Juanda",
                                    "Bandar Udara Abdulrachman Saleh",
                                    "Polsek Blimbing",
                                    "Polsekta Klojen",
                                    "Polsek Sukun",
                                    "Polsek Lowokwaru"
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-09-12T17:12:24+07:00",
                                    "2022-04-01T11:35:46+07:00",
                                    "2022-04-01T09:34:09+07:00",
                                    "2022-03-30T15:55:04+07:00",
                                    "2022-03-30T12:53:56+07:00",
                                    "2022-03-30T12:46:54+07:00",
                                    "2022-03-24T16:01:31+07:00",
                                    "2022-03-24T08:52:51+07:00",
                                    "2022-03-23T16:37:18+07:00",
                                    "2022-03-23T16:29:21+07:00",
                                    "2022-03-15T16:42:52+07:00",
                                    "2022-03-14T10:37:52+07:00",
                                    "2022-03-14T10:33:16+07:00",
                                    "2022-03-14T10:23:47+07:00",
                                    "2022-03-14T10:11:47+07:00",
                                    "2022-03-14T10:08:15+07:00",
                                    "2022-03-11T17:09:09+07:00",
                                    "2022-03-11T16:43:32+07:00",
                                    "2022-03-11T13:22:26+07:00",
                                    "2022-02-18T13:52:51+07:00",
                                    "2022-03-11T10:53:12+07:00",
                                    "2022-03-11T16:01:56+07:00",
                                    "2022-01-27T14:21:51+07:00",
                                    "2022-01-27T14:21:46+07:00",
                                    "2022-01-27T14:21:39+07:00",
                                    "2022-01-27T14:20:43+07:00",
                                    "2022-01-27T14:20:34+07:00",
                                    "2022-01-27T14:20:14+07:00",
                                    "2022-01-27T14:20:05+07:00",
                                    "2022-01-27T14:19:58+07:00",
                                    "2022-01-27T14:19:51+07:00",
                                    "2022-01-27T14:19:43+07:00",
                                    "2022-01-27T14:19:30+07:00",
                                    "2022-01-27T14:19:19+07:00",
                                    "2022-01-27T14:14:27+07:00",
                                    "2022-01-27T14:19:10+07:00",
                                    "2022-01-19T14:42:18+07:00",
                                    "2022-01-19T14:41:26+07:00",
                                    "2022-01-27T14:54:36+07:00",
                                    "2022-04-01T15:22:10+07:00"
                                ]
                            }
                        },
                        "examples": [{
                            "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-09-12T17:12:24+07:00",
                            "deleted_at": null,
                            "description": "Kepolisian Daerah Metropolitan Jakarta Raya atau Polda Metro Jaya adalah pelaksana tugas Kepolisian RI di wilayah Provinsi Daerah Khusus Ibukota Jakarta. Polda Metro Jaya dipimpin oleh seorang kepala kepolisian daerah yang berpangkat bintang dua",
                            "id": 303,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-6.222690268768212",
                            "longitude": "106.81246824371375",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polda Metro Jaya",
                            "updated_at": "2022-09-12T17:12:24+07:00"
                        },
                        {
                            "alamat": "Jl. Cemara",
                            "bahasa": "id",
                            "created_at": "2022-04-01T10:49:02+07:00",
                            "deleted_at": null,
                            "description": "Sekolah",
                            "id": 270,
                            "is_active": 0,
                            "kategori": "Pendidikan",
                            "latitude": "0",
                            "longitude": "0",
                            "m_lokasi_kategori_id": 6,
                            "name": "Sekolah SD",
                            "updated_at": "2022-04-01T11:35:46+07:00"
                        },
                        {
                            "alamat": "MT Hariyono",
                            "bahasa": "id",
                            "created_at": "2022-04-01T09:34:09+07:00",
                            "deleted_at": null,
                            "description": "Bank",
                            "id": 258,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": null,
                            "longitude": null,
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Jago",
                            "updated_at": "2022-04-01T09:34:09+07:00"
                        },
                        {
                            "alamat": "Jl. Tanjung Duren Raya No.54 C, RT.1/RW.4, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
                            "bahasa": "id",
                            "created_at": "2022-03-30T15:55:04+07:00",
                            "deleted_at": null,
                            "description": "Restoran ayam goreng",
                            "id": 253,
                            "is_active": 1,
                            "kategori": "Restoran",
                            "latitude": null,
                            "longitude": null,
                            "m_lokasi_kategori_id": 260,
                            "name": "KFC",
                            "updated_at": "2022-03-30T15:55:04+07:00"
                        },
                        {
                            "alamat": "Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:53:56+07:00",
                            "deleted_at": null,
                            "description": "Kampus Politeknik Negeri pertama di Indonesia",
                            "id": 252,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.871973056376472",
                            "longitude": "107.5737724972937",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Bandung",
                            "updated_at": "2022-03-30T12:53:56+07:00"
                        },
                        {
                            "alamat": "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Kampus utama untuk pendidikan tinggi bidang sains \u0026 teknologi ini didirikan pada tahun 1959.\n",
                            "id": 251,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.89148",
                            "longitude": "107.6084704",
                            "m_lokasi_kategori_id": 6,
                            "name": "Institut Teknologi Bandung",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "18 Parc Place SCBD Tower C Ground Floor, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Restoran kasual yang menyajikan potongan steak klasik, masakan Italia \u0026 koktail di tempat elegan dan luas.",
                            "id": 250,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-6.2300513",
                            "longitude": "106.8078514",
                            "m_lokasi_kategori_id": 5,
                            "name": "Bistecca",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "Kota Tangerang, Banten 19120",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Bandar Udara Internasional Soekarno–Hatta disingkat SHIA atau Soetta, sebelumnya secara hukum disebut Bandar Udara Cengkareng Jakarta, merupakan sebuah bandar udara utama yang melayani penerbangan untuk wilayah Jabodetabek dan sekitarnya.",
                            "id": 249,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-6.127119",
                            "longitude": "106.6534595",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Soekarno–Hatta",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "Jl. Halim Perdana Kusuma No.1, RW.9, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
                            "bahasa": "id",
                            "created_at": "2022-03-24T15:59:25+07:00",
                            "deleted_at": null,
                            "description": "Bandar Udara Internasional Halim Perdanakusuma (bahasa Inggris: Halim Perdanakusuma International Airport) (IATA: HLP, ICAO: WIHH) adalah sebuah bandar udara di Jakarta, Indonesia. Bandar udara ini juga merupakan markas Komando Operasi Angkatan Udara I. Sejak tanggal 10 Januari 2014, bandar udara ini juga digunakan sebagai bandar udara komersial untuk wilayah Jabodetabek, awalnya untuk mengalihkan penerbangan dari Bandar Udara Internasional Soekarno–Hatta, yang dinilai telah penuh sesak",
                            "id": 247,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-6.2652088",
                            "longitude": "106.8841572",
                            "m_lokasi_kategori_id": 4,
                            "name": "Halim Perdanakusuma International Airport",
                            "updated_at": "2022-03-24T16:01:31+07:00"
                        },
                        {
                            "alamat": "Jl. Prof. DR. G.A. Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                            "bahasa": "id",
                            "created_at": "2022-03-24T08:50:10+07:00",
                            "deleted_at": null,
                            "description": "Politeknik Negeri Jakarta adalah salah satu perguruan tinggi negeri politeknik yang terdapat di areal kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia.",
                            "id": 245,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3706274",
                            "longitude": "106.8214396",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Jakarta",
                            "updated_at": "2022-03-24T08:52:51+07:00"
                        },
                        {
                            "alamat": "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                            "bahasa": "id",
                            "created_at": "2022-03-23T16:37:18+07:00",
                            "deleted_at": null,
                            "description": "Universitas Negeri Jakarta adalah Perguruan Tinggi Negeri yang terdapat di kota Jakarta, Indonesia yang didirikan pada tahun 1964. Sebelumnya, Universitas Negeri Jakarta bernama Institut Keguruan dan Ilmu Pendidikan Jakarta (IKIP Jakarta).\n\nPada Januari 2021, Universitas Negeri Jakarta melakukan reakreditasi Perguruan Tinggi yang sebelumnya telah memperoleh akreditasi \"B\". Akreditasi yang dilakukan oleh Tim Asesor BAN PT tahun 2021 ini, Universitas Negeri Jakarta memperoleh Akreditasi Unggul berdasarkan Surat Keputusan BAN-PT No. 45/SK/BAN-PT/Akred/PT/II/2021. Universitas Negeri Jakarta dinyatakan memenuhi syarat peringkat Akreditasi Unggul dengan memperoleh skor nilai 366 dan status akreditasi ini berlaku sejak tanggal 2 Februari 2021 sampai dengan 2 Februari 2026.[",
                            "id": 244,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.1361694",
                            "longitude": "106.93640470000001",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Negeri Jakarta",
                            "updated_at": "2022-03-23T16:37:18+07:00"
                        },
                        {
                            "alamat": "Jl. Matraman Raya No.1, RT.2/RW.1, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150",
                            "bahasa": "id",
                            "created_at": "2022-03-23T16:29:21+07:00",
                            "deleted_at": null,
                            "description": "Bank Artha Graha Internasional adalah perusahaan swasta yang berbentuk perseroan terbatas dan bergerak di bidang jasa keuangan perbankan. Bank ini berbasis di Jakarta. Didirikan pada tahun 1973.",
                            "id": 243,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1361694",
                            "longitude": "106.93640470000001",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Artha Graha",
                            "updated_at": "2022-03-23T16:29:21+07:00"
                        },
                        {
                            "alamat": "Jl. Pegambiran No.31A, RT.16/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                            "bahasa": "id",
                            "created_at": "2022-03-15T16:40:08+07:00",
                            "deleted_at": null,
                            "description": "Terminal Rawamangun adalah terminal yang terletak di Kecamatan Pulo Gadung, Jakarta Timur, DKI Jakarta. Terminal ini merupakan salah satu proyek revitalisasi terminal yang dilakukan oleh Pemerintah Provinsi DKI Jakarta. Proyek diprakarsai oleh Dinas Perhubungan Provinsi DKI Jakarta dan mulai dilelang pada tahun 2013.[1] Konstruksi dimulai pada 2014 dan dipergunakan kembali sejak tahun 2015.[1][2] Proyek ini menelan dana Rp57 miliar dari APBD Provinsi DKI Jakarta.[3][4] Proyek ini bermasalah dan dianggap tidak selesai karena konstruksi terminal dipaksakan walau ada lahan yang belum bebas.[5] Hal ini mengakibatkan lajur utama bus yang seharusnya lurus dengan lebar 3,5 meter dibuat berbelok dan menyempit dari desain awal, sehingga bus antar kota antar provinsi (AKAP) berbadan besar tidak bisa masuk ke terminal.",
                            "id": 239,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-6.198016305409278",
                            "longitude": "106.89123272895813",
                            "m_lokasi_kategori_id": 5,
                            "name": "TERMINAL BUS RAWAMANGUN",
                            "updated_at": "2022-03-15T16:42:52+07:00"
                        },
                        {
                            "alamat": "Jalan A.M Sangaji No. 22-24 Petojo Utara Gambir RT.2/RW.5 2 5, RT.2/RW.5, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:36:41+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 238,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 25 Jakarta",
                            "updated_at": "2022-03-14T10:37:52+07:00"
                        },
                        {
                            "alamat": "Jl. Prihatin No.8, RW.2, Klp. Gading Bar., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:31:10+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 237,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 72 Jakarta",
                            "updated_at": "2022-03-14T10:33:16+07:00"
                        },
                        {
                            "alamat": "Jl. Budi Utomo, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:23:16+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 236,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.113382",
                            "longitude": "106.9111076",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 1 JAKARTA",
                            "updated_at": "2022-03-14T10:23:47+07:00"
                        },
                        {
                            "alamat": "Bukit Gading Raya Blok A Kav No.19-20, Klp. Gading Bar., Kec. Klp. Gading, Daerah Khusus Ibukota Jakarta 14240",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:10:02+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 235,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 3,
                            "name": "BANK BNI",
                            "updated_at": "2022-03-14T10:11:47+07:00"
                        },
                        {
                            "alamat": "Bank Rakyat Indonesia KI I / 21, Jl. Taman Sunter Indah No.12, RT.14/RW.12, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:04:45+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 234,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1315654",
                            "longitude": "106.9042417",
                            "m_lokasi_kategori_id": 3,
                            "name": "BANK BRI",
                            "updated_at": "2022-03-14T10:08:15+07:00"
                        },
                        {
                            "alamat": "Jalan Letjend Suprapto No.30 EF, RW.3, Cemp. Putih Bar., Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 Phone: (021) 0500888",
                            "bahasa": "id",
                            "created_at": "2022-03-11T17:07:51+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 232,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1392697",
                            "longitude": "106.8799169",
                            "m_lokasi_kategori_id": 3,
                            "name": "BCA Cempaka Putih",
                            "updated_at": "2022-03-11T17:09:09+07:00"
                        },
                        {
                            "alamat": "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                            "bahasa": "id",
                            "created_at": "2022-03-11T16:39:57+07:00",
                            "deleted_at": null,
                            "description": "Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia. Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara Depok dengan wilayah Jakarta Selatan, sementara kampus utama lainnya terdapat di Salemba, Jakarta Pusat.",
                            "id": 231,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.369904922142188",
                            "longitude": "106.82856186012776",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Indonesia",
                            "updated_at": "2022-03-11T16:43:32+07:00"
                        },
                        {
                            "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-03-11T13:18:32+07:00",
                            "deleted_at": null,
                            "description": "test",
                            "id": 229,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-6.2241035",
                            "longitude": "106.8116504",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polda Metro Jaya",
                            "updated_at": "2022-03-11T13:22:26+07:00"
                        },
                        {
                            "alamat": "A",
                            "bahasa": "id",
                            "created_at": "2022-02-10T17:00:48+07:00",
                            "deleted_at": null,
                            "description": "\u003cp\u003eaa\u003c/p\u003e",
                            "id": 211,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.962507465557346",
                            "longitude": "112.613549260998",
                            "m_lokasi_kategori_id": 2,
                            "name": "Universitas Brawijaya",
                            "updated_at": "2022-02-18T13:52:51+07:00"
                        },
                        {
                            "alamat": "Malang",
                            "bahasa": "id",
                            "created_at": "2022-01-27T13:48:31+07:00",
                            "deleted_at": null,
                            "description": "\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ipsum augue. Praesent pretium lectus non risus porta laoreet. Pellentesque lobortis tempor nisl, a fermentum est finibus sed. Maecenas non odio a ex porttitor aliquet quis eget leo. Nullam varius ipsum id faucibus lobortis. Nulla sed leo in augue semper tincidunt. Nunc eget mi gravida, bibendum risus vitae, finibus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit ullamcorper metus ut dignissim. Maecenas porta feugiat vestibulum. Cras auctor, neque a malesuada posuere, lectus orci placerat nulla, sit amet euismod nisl nulla vitae est. Etiam eget urna feugiat, placerat tellus quis, aliquet leo.\u003c/p\u003e",
                            "id": 195,
                            "is_active": 0,
                            "kategori": "Pendidikan",
                            "latitude": "-7.950829986164169",
                            "longitude": "112.61505603790283",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Brawijaya",
                            "updated_at": "2022-03-11T10:53:12+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-20T14:26:15+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 165,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-7.942398405602773",
                            "longitude": "112.62286663055421",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Malang",
                            "updated_at": "2022-03-11T16:01:56+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T15:01:29+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 136,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-7.932500934731806",
                            "longitude": "112.65823001195365",
                            "m_lokasi_kategori_id": 5,
                            "name": "Terminal Arjosari Malang",
                            "updated_at": "2022-01-27T14:21:51+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T15:01:02+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 135,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-7.925193681479986",
                            "longitude": "112.59801074817261",
                            "m_lokasi_kategori_id": 5,
                            "name": "Terminal Landungsari Malang",
                            "updated_at": "2022-01-27T14:21:46+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:54:22+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 124,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.966488963518006",
                            "longitude": "112.61379712492504",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank OCBC NISP GALUNGGUNG",
                            "updated_at": "2022-01-27T14:21:39+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:52:40+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 120,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.968450706635415",
                            "longitude": "112.61326088277917",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank \u0026 ATM Mandiri",
                            "updated_at": "2022-01-27T14:20:43+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:52:09+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 119,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.956233778215897",
                            "longitude": "112.61663865064091",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Jatim",
                            "updated_at": "2022-01-27T14:20:34+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:51:46+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 118,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.955659410974291",
                            "longitude": "112.61573204008184",
                            "m_lokasi_kategori_id": 3,
                            "name": "BNI KCP Universitas Brawijaya Malang",
                            "updated_at": "2022-01-27T14:20:14+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:51:24+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 117,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.955716187956503",
                            "longitude": "112.61584669757713",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Btn",
                            "updated_at": "2022-01-27T14:20:05+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:50:50+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 116,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.939568374700675",
                            "longitude": "112.62504708472129",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Mandiri KCP Soekarno Hatta",
                            "updated_at": "2022-01-27T14:19:58+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:50:23+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 115,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.943846049926229",
                            "longitude": "112.61956993727063",
                            "m_lokasi_kategori_id": 3,
                            "name": "PermataBank",
                            "updated_at": "2022-01-27T14:19:51+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:49:57+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 114,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.946459264382789",
                            "longitude": "112.61258407767342",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank BRI 2",
                            "updated_at": "2022-01-27T14:19:43+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:49:22+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 113,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.9384433206759555",
                            "longitude": "112.63490438312644",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Mandiri KCP Borobudur",
                            "updated_at": "2022-01-27T14:19:30+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:48:41+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 112,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-8.31113952755366",
                            "longitude": "114.33924209607112",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Banyuwangi",
                            "updated_at": "2022-01-27T14:19:19+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:48:11+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 111,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-7.378517830367639",
                            "longitude": "112.78732674259327",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Juanda",
                            "updated_at": "2022-01-27T14:14:27+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:47:45+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 110,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-7.937096630297807",
                            "longitude": "112.71153669325685",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Abdulrachman Saleh",
                            "updated_at": "2022-01-27T14:19:10+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:42:18+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 102,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.929828754645295",
                            "longitude": "112.65058759155978",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Blimbing",
                            "updated_at": "2022-01-19T14:42:18+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:41:26+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 101,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.980807715179765",
                            "longitude": "112.62531946563851",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsekta Klojen",
                            "updated_at": "2022-01-19T14:41:26+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:40:41+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 100,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-8.00338076502255",
                            "longitude": "112.61855767194521",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Sukun",
                            "updated_at": "2022-01-27T14:54:36+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:40:03+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 99,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.932158691103069",
                            "longitude": "112.6087773701503",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Lowokwaru",
                            "updated_at": "2022-04-01T15:22:10+07:00"
                        }]
                    },
                    "examples": [
                        [{
                            "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-09-12T17:12:24+07:00",
                            "deleted_at": null,
                            "description": "Kepolisian Daerah Metropolitan Jakarta Raya atau Polda Metro Jaya adalah pelaksana tugas Kepolisian RI di wilayah Provinsi Daerah Khusus Ibukota Jakarta. Polda Metro Jaya dipimpin oleh seorang kepala kepolisian daerah yang berpangkat bintang dua",
                            "id": 303,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-6.222690268768212",
                            "longitude": "106.81246824371375",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polda Metro Jaya",
                            "updated_at": "2022-09-12T17:12:24+07:00"
                        },
                        {
                            "alamat": "Jl. Cemara",
                            "bahasa": "id",
                            "created_at": "2022-04-01T10:49:02+07:00",
                            "deleted_at": null,
                            "description": "Sekolah",
                            "id": 270,
                            "is_active": 0,
                            "kategori": "Pendidikan",
                            "latitude": "0",
                            "longitude": "0",
                            "m_lokasi_kategori_id": 6,
                            "name": "Sekolah SD",
                            "updated_at": "2022-04-01T11:35:46+07:00"
                        },
                        {
                            "alamat": "MT Hariyono",
                            "bahasa": "id",
                            "created_at": "2022-04-01T09:34:09+07:00",
                            "deleted_at": null,
                            "description": "Bank",
                            "id": 258,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": null,
                            "longitude": null,
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Jago",
                            "updated_at": "2022-04-01T09:34:09+07:00"
                        },
                        {
                            "alamat": "Jl. Tanjung Duren Raya No.54 C, RT.1/RW.4, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
                            "bahasa": "id",
                            "created_at": "2022-03-30T15:55:04+07:00",
                            "deleted_at": null,
                            "description": "Restoran ayam goreng",
                            "id": 253,
                            "is_active": 1,
                            "kategori": "Restoran",
                            "latitude": null,
                            "longitude": null,
                            "m_lokasi_kategori_id": 260,
                            "name": "KFC",
                            "updated_at": "2022-03-30T15:55:04+07:00"
                        },
                        {
                            "alamat": "Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:53:56+07:00",
                            "deleted_at": null,
                            "description": "Kampus Politeknik Negeri pertama di Indonesia",
                            "id": 252,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.871973056376472",
                            "longitude": "107.5737724972937",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Bandung",
                            "updated_at": "2022-03-30T12:53:56+07:00"
                        },
                        {
                            "alamat": "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Kampus utama untuk pendidikan tinggi bidang sains \u0026 teknologi ini didirikan pada tahun 1959.\n",
                            "id": 251,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.89148",
                            "longitude": "107.6084704",
                            "m_lokasi_kategori_id": 6,
                            "name": "Institut Teknologi Bandung",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "18 Parc Place SCBD Tower C Ground Floor, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Restoran kasual yang menyajikan potongan steak klasik, masakan Italia \u0026 koktail di tempat elegan dan luas.",
                            "id": 250,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-6.2300513",
                            "longitude": "106.8078514",
                            "m_lokasi_kategori_id": 5,
                            "name": "Bistecca",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "Kota Tangerang, Banten 19120",
                            "bahasa": "id",
                            "created_at": "2022-03-30T12:46:54+07:00",
                            "deleted_at": null,
                            "description": "Bandar Udara Internasional Soekarno–Hatta disingkat SHIA atau Soetta, sebelumnya secara hukum disebut Bandar Udara Cengkareng Jakarta, merupakan sebuah bandar udara utama yang melayani penerbangan untuk wilayah Jabodetabek dan sekitarnya.",
                            "id": 249,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-6.127119",
                            "longitude": "106.6534595",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Soekarno–Hatta",
                            "updated_at": "2022-03-30T12:46:54+07:00"
                        },
                        {
                            "alamat": "Jl. Halim Perdana Kusuma No.1, RW.9, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
                            "bahasa": "id",
                            "created_at": "2022-03-24T15:59:25+07:00",
                            "deleted_at": null,
                            "description": "Bandar Udara Internasional Halim Perdanakusuma (bahasa Inggris: Halim Perdanakusuma International Airport) (IATA: HLP, ICAO: WIHH) adalah sebuah bandar udara di Jakarta, Indonesia. Bandar udara ini juga merupakan markas Komando Operasi Angkatan Udara I. Sejak tanggal 10 Januari 2014, bandar udara ini juga digunakan sebagai bandar udara komersial untuk wilayah Jabodetabek, awalnya untuk mengalihkan penerbangan dari Bandar Udara Internasional Soekarno–Hatta, yang dinilai telah penuh sesak",
                            "id": 247,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-6.2652088",
                            "longitude": "106.8841572",
                            "m_lokasi_kategori_id": 4,
                            "name": "Halim Perdanakusuma International Airport",
                            "updated_at": "2022-03-24T16:01:31+07:00"
                        },
                        {
                            "alamat": "Jl. Prof. DR. G.A. Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                            "bahasa": "id",
                            "created_at": "2022-03-24T08:50:10+07:00",
                            "deleted_at": null,
                            "description": "Politeknik Negeri Jakarta adalah salah satu perguruan tinggi negeri politeknik yang terdapat di areal kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia.",
                            "id": 245,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3706274",
                            "longitude": "106.8214396",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Jakarta",
                            "updated_at": "2022-03-24T08:52:51+07:00"
                        },
                        {
                            "alamat": "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                            "bahasa": "id",
                            "created_at": "2022-03-23T16:37:18+07:00",
                            "deleted_at": null,
                            "description": "Universitas Negeri Jakarta adalah Perguruan Tinggi Negeri yang terdapat di kota Jakarta, Indonesia yang didirikan pada tahun 1964. Sebelumnya, Universitas Negeri Jakarta bernama Institut Keguruan dan Ilmu Pendidikan Jakarta (IKIP Jakarta).\n\nPada Januari 2021, Universitas Negeri Jakarta melakukan reakreditasi Perguruan Tinggi yang sebelumnya telah memperoleh akreditasi \"B\". Akreditasi yang dilakukan oleh Tim Asesor BAN PT tahun 2021 ini, Universitas Negeri Jakarta memperoleh Akreditasi Unggul berdasarkan Surat Keputusan BAN-PT No. 45/SK/BAN-PT/Akred/PT/II/2021. Universitas Negeri Jakarta dinyatakan memenuhi syarat peringkat Akreditasi Unggul dengan memperoleh skor nilai 366 dan status akreditasi ini berlaku sejak tanggal 2 Februari 2021 sampai dengan 2 Februari 2026.[",
                            "id": 244,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.1361694",
                            "longitude": "106.93640470000001",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Negeri Jakarta",
                            "updated_at": "2022-03-23T16:37:18+07:00"
                        },
                        {
                            "alamat": "Jl. Matraman Raya No.1, RT.2/RW.1, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150",
                            "bahasa": "id",
                            "created_at": "2022-03-23T16:29:21+07:00",
                            "deleted_at": null,
                            "description": "Bank Artha Graha Internasional adalah perusahaan swasta yang berbentuk perseroan terbatas dan bergerak di bidang jasa keuangan perbankan. Bank ini berbasis di Jakarta. Didirikan pada tahun 1973.",
                            "id": 243,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1361694",
                            "longitude": "106.93640470000001",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Artha Graha",
                            "updated_at": "2022-03-23T16:29:21+07:00"
                        },
                        {
                            "alamat": "Jl. Pegambiran No.31A, RT.16/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                            "bahasa": "id",
                            "created_at": "2022-03-15T16:40:08+07:00",
                            "deleted_at": null,
                            "description": "Terminal Rawamangun adalah terminal yang terletak di Kecamatan Pulo Gadung, Jakarta Timur, DKI Jakarta. Terminal ini merupakan salah satu proyek revitalisasi terminal yang dilakukan oleh Pemerintah Provinsi DKI Jakarta. Proyek diprakarsai oleh Dinas Perhubungan Provinsi DKI Jakarta dan mulai dilelang pada tahun 2013.[1] Konstruksi dimulai pada 2014 dan dipergunakan kembali sejak tahun 2015.[1][2] Proyek ini menelan dana Rp57 miliar dari APBD Provinsi DKI Jakarta.[3][4] Proyek ini bermasalah dan dianggap tidak selesai karena konstruksi terminal dipaksakan walau ada lahan yang belum bebas.[5] Hal ini mengakibatkan lajur utama bus yang seharusnya lurus dengan lebar 3,5 meter dibuat berbelok dan menyempit dari desain awal, sehingga bus antar kota antar provinsi (AKAP) berbadan besar tidak bisa masuk ke terminal.",
                            "id": 239,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-6.198016305409278",
                            "longitude": "106.89123272895813",
                            "m_lokasi_kategori_id": 5,
                            "name": "TERMINAL BUS RAWAMANGUN",
                            "updated_at": "2022-03-15T16:42:52+07:00"
                        },
                        {
                            "alamat": "Jalan A.M Sangaji No. 22-24 Petojo Utara Gambir RT.2/RW.5 2 5, RT.2/RW.5, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:36:41+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 238,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 25 Jakarta",
                            "updated_at": "2022-03-14T10:37:52+07:00"
                        },
                        {
                            "alamat": "Jl. Prihatin No.8, RW.2, Klp. Gading Bar., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:31:10+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 237,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 72 Jakarta",
                            "updated_at": "2022-03-14T10:33:16+07:00"
                        },
                        {
                            "alamat": "Jl. Budi Utomo, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:23:16+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 236,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.113382",
                            "longitude": "106.9111076",
                            "m_lokasi_kategori_id": 6,
                            "name": "SMA NEGERI 1 JAKARTA",
                            "updated_at": "2022-03-14T10:23:47+07:00"
                        },
                        {
                            "alamat": "Bukit Gading Raya Blok A Kav No.19-20, Klp. Gading Bar., Kec. Klp. Gading, Daerah Khusus Ibukota Jakarta 14240",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:10:02+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 235,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.3143936",
                            "longitude": "106.8793856",
                            "m_lokasi_kategori_id": 3,
                            "name": "BANK BNI",
                            "updated_at": "2022-03-14T10:11:47+07:00"
                        },
                        {
                            "alamat": "Bank Rakyat Indonesia KI I / 21, Jl. Taman Sunter Indah No.12, RT.14/RW.12, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
                            "bahasa": "id",
                            "created_at": "2022-03-14T10:04:45+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 234,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1315654",
                            "longitude": "106.9042417",
                            "m_lokasi_kategori_id": 3,
                            "name": "BANK BRI",
                            "updated_at": "2022-03-14T10:08:15+07:00"
                        },
                        {
                            "alamat": "Jalan Letjend Suprapto No.30 EF, RW.3, Cemp. Putih Bar., Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 Phone: (021) 0500888",
                            "bahasa": "id",
                            "created_at": "2022-03-11T17:07:51+07:00",
                            "deleted_at": null,
                            "description": "-",
                            "id": 232,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-6.1392697",
                            "longitude": "106.8799169",
                            "m_lokasi_kategori_id": 3,
                            "name": "BCA Cempaka Putih",
                            "updated_at": "2022-03-11T17:09:09+07:00"
                        },
                        {
                            "alamat": "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                            "bahasa": "id",
                            "created_at": "2022-03-11T16:39:57+07:00",
                            "deleted_at": null,
                            "description": "Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia. Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara Depok dengan wilayah Jakarta Selatan, sementara kampus utama lainnya terdapat di Salemba, Jakarta Pusat.",
                            "id": 231,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-6.369904922142188",
                            "longitude": "106.82856186012776",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Indonesia",
                            "updated_at": "2022-03-11T16:43:32+07:00"
                        },
                        {
                            "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                            "bahasa": "id",
                            "created_at": "2022-03-11T13:18:32+07:00",
                            "deleted_at": null,
                            "description": "test",
                            "id": 229,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-6.2241035",
                            "longitude": "106.8116504",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polda Metro Jaya",
                            "updated_at": "2022-03-11T13:22:26+07:00"
                        },
                        {
                            "alamat": "A",
                            "bahasa": "id",
                            "created_at": "2022-02-10T17:00:48+07:00",
                            "deleted_at": null,
                            "description": "\u003cp\u003eaa\u003c/p\u003e",
                            "id": 211,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.962507465557346",
                            "longitude": "112.613549260998",
                            "m_lokasi_kategori_id": 2,
                            "name": "Universitas Brawijaya",
                            "updated_at": "2022-02-18T13:52:51+07:00"
                        },
                        {
                            "alamat": "Malang",
                            "bahasa": "id",
                            "created_at": "2022-01-27T13:48:31+07:00",
                            "deleted_at": null,
                            "description": "\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ipsum augue. Praesent pretium lectus non risus porta laoreet. Pellentesque lobortis tempor nisl, a fermentum est finibus sed. Maecenas non odio a ex porttitor aliquet quis eget leo. Nullam varius ipsum id faucibus lobortis. Nulla sed leo in augue semper tincidunt. Nunc eget mi gravida, bibendum risus vitae, finibus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit ullamcorper metus ut dignissim. Maecenas porta feugiat vestibulum. Cras auctor, neque a malesuada posuere, lectus orci placerat nulla, sit amet euismod nisl nulla vitae est. Etiam eget urna feugiat, placerat tellus quis, aliquet leo.\u003c/p\u003e",
                            "id": 195,
                            "is_active": 0,
                            "kategori": "Pendidikan",
                            "latitude": "-7.950829986164169",
                            "longitude": "112.61505603790283",
                            "m_lokasi_kategori_id": 6,
                            "name": "Universitas Brawijaya",
                            "updated_at": "2022-03-11T10:53:12+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-20T14:26:15+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 165,
                            "is_active": 1,
                            "kategori": "Pendidikan",
                            "latitude": "-7.942398405602773",
                            "longitude": "112.62286663055421",
                            "m_lokasi_kategori_id": 6,
                            "name": "Politeknik Negeri Malang",
                            "updated_at": "2022-03-11T16:01:56+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T15:01:29+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 136,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-7.932500934731806",
                            "longitude": "112.65823001195365",
                            "m_lokasi_kategori_id": 5,
                            "name": "Terminal Arjosari Malang",
                            "updated_at": "2022-01-27T14:21:51+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T15:01:02+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 135,
                            "is_active": 1,
                            "kategori": "Terminal Bus",
                            "latitude": "-7.925193681479986",
                            "longitude": "112.59801074817261",
                            "m_lokasi_kategori_id": 5,
                            "name": "Terminal Landungsari Malang",
                            "updated_at": "2022-01-27T14:21:46+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:54:22+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 124,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.966488963518006",
                            "longitude": "112.61379712492504",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank OCBC NISP GALUNGGUNG",
                            "updated_at": "2022-01-27T14:21:39+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:52:40+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 120,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.968450706635415",
                            "longitude": "112.61326088277917",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank \u0026 ATM Mandiri",
                            "updated_at": "2022-01-27T14:20:43+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:52:09+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 119,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.956233778215897",
                            "longitude": "112.61663865064091",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Jatim",
                            "updated_at": "2022-01-27T14:20:34+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:51:46+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 118,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.955659410974291",
                            "longitude": "112.61573204008184",
                            "m_lokasi_kategori_id": 3,
                            "name": "BNI KCP Universitas Brawijaya Malang",
                            "updated_at": "2022-01-27T14:20:14+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:51:24+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 117,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.955716187956503",
                            "longitude": "112.61584669757713",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Btn",
                            "updated_at": "2022-01-27T14:20:05+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:50:50+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 116,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.939568374700675",
                            "longitude": "112.62504708472129",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Mandiri KCP Soekarno Hatta",
                            "updated_at": "2022-01-27T14:19:58+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:50:23+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 115,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.943846049926229",
                            "longitude": "112.61956993727063",
                            "m_lokasi_kategori_id": 3,
                            "name": "PermataBank",
                            "updated_at": "2022-01-27T14:19:51+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:49:57+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 114,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.946459264382789",
                            "longitude": "112.61258407767342",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank BRI 2",
                            "updated_at": "2022-01-27T14:19:43+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:49:22+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 113,
                            "is_active": 1,
                            "kategori": "Bank",
                            "latitude": "-7.9384433206759555",
                            "longitude": "112.63490438312644",
                            "m_lokasi_kategori_id": 3,
                            "name": "Bank Mandiri KCP Borobudur",
                            "updated_at": "2022-01-27T14:19:30+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:48:41+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 112,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-8.31113952755366",
                            "longitude": "114.33924209607112",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Banyuwangi",
                            "updated_at": "2022-01-27T14:19:19+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:48:11+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 111,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-7.378517830367639",
                            "longitude": "112.78732674259327",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Internasional Juanda",
                            "updated_at": "2022-01-27T14:14:27+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "id",
                            "created_at": "2022-01-19T14:47:45+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 110,
                            "is_active": 1,
                            "kategori": "Bandara1",
                            "latitude": "-7.937096630297807",
                            "longitude": "112.71153669325685",
                            "m_lokasi_kategori_id": 4,
                            "name": "Bandar Udara Abdulrachman Saleh",
                            "updated_at": "2022-01-27T14:19:10+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:42:18+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 102,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.929828754645295",
                            "longitude": "112.65058759155978",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Blimbing",
                            "updated_at": "2022-01-19T14:42:18+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:41:26+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 101,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.980807715179765",
                            "longitude": "112.62531946563851",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsekta Klojen",
                            "updated_at": "2022-01-19T14:41:26+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:40:41+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 100,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-8.00338076502255",
                            "longitude": "112.61855767194521",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Sukun",
                            "updated_at": "2022-01-27T14:54:36+07:00"
                        },
                        {
                            "alamat": null,
                            "bahasa": "en",
                            "created_at": "2022-01-19T14:40:03+07:00",
                            "deleted_at": null,
                            "description": null,
                            "id": 99,
                            "is_active": 1,
                            "kategori": "Kantor Polisi",
                            "latitude": "-7.932158691103069",
                            "longitude": "112.6087773701503",
                            "m_lokasi_kategori_id": 2,
                            "name": "Polsek Lowokwaru",
                            "updated_at": "2022-04-01T15:22:10+07:00"
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        42
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                    "bahasa": "id",
                    "created_at": "2022-09-12T17:12:24+07:00",
                    "deleted_at": null,
                    "description": "Kepolisian Daerah Metropolitan Jakarta Raya atau Polda Metro Jaya adalah pelaksana tugas Kepolisian RI di wilayah Provinsi Daerah Khusus Ibukota Jakarta. Polda Metro Jaya dipimpin oleh seorang kepala kepolisian daerah yang berpangkat bintang dua",
                    "id": 303,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-6.222690268768212",
                    "longitude": "106.81246824371375",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polda Metro Jaya",
                    "updated_at": "2022-09-12T17:12:24+07:00"
                },
                {
                    "alamat": "Jl. Cemara",
                    "bahasa": "id",
                    "created_at": "2022-04-01T10:49:02+07:00",
                    "deleted_at": null,
                    "description": "Sekolah",
                    "id": 270,
                    "is_active": 0,
                    "kategori": "Pendidikan",
                    "latitude": "0",
                    "longitude": "0",
                    "m_lokasi_kategori_id": 6,
                    "name": "Sekolah SD",
                    "updated_at": "2022-04-01T11:35:46+07:00"
                },
                {
                    "alamat": "MT Hariyono",
                    "bahasa": "id",
                    "created_at": "2022-04-01T09:34:09+07:00",
                    "deleted_at": null,
                    "description": "Bank",
                    "id": 258,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": null,
                    "longitude": null,
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Jago",
                    "updated_at": "2022-04-01T09:34:09+07:00"
                },
                {
                    "alamat": "Jl. Tanjung Duren Raya No.54 C, RT.1/RW.4, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
                    "bahasa": "id",
                    "created_at": "2022-03-30T15:55:04+07:00",
                    "deleted_at": null,
                    "description": "Restoran ayam goreng",
                    "id": 253,
                    "is_active": 1,
                    "kategori": "Restoran",
                    "latitude": null,
                    "longitude": null,
                    "m_lokasi_kategori_id": 260,
                    "name": "KFC",
                    "updated_at": "2022-03-30T15:55:04+07:00"
                },
                {
                    "alamat": "Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559",
                    "bahasa": "id",
                    "created_at": "2022-03-30T12:53:56+07:00",
                    "deleted_at": null,
                    "description": "Kampus Politeknik Negeri pertama di Indonesia",
                    "id": 252,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.871973056376472",
                    "longitude": "107.5737724972937",
                    "m_lokasi_kategori_id": 6,
                    "name": "Politeknik Negeri Bandung",
                    "updated_at": "2022-03-30T12:53:56+07:00"
                },
                {
                    "alamat": "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
                    "bahasa": "id",
                    "created_at": "2022-03-30T12:46:54+07:00",
                    "deleted_at": null,
                    "description": "Kampus utama untuk pendidikan tinggi bidang sains \u0026 teknologi ini didirikan pada tahun 1959.\n",
                    "id": 251,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.89148",
                    "longitude": "107.6084704",
                    "m_lokasi_kategori_id": 6,
                    "name": "Institut Teknologi Bandung",
                    "updated_at": "2022-03-30T12:46:54+07:00"
                },
                {
                    "alamat": "18 Parc Place SCBD Tower C Ground Floor, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                    "bahasa": "id",
                    "created_at": "2022-03-30T12:46:54+07:00",
                    "deleted_at": null,
                    "description": "Restoran kasual yang menyajikan potongan steak klasik, masakan Italia \u0026 koktail di tempat elegan dan luas.",
                    "id": 250,
                    "is_active": 1,
                    "kategori": "Terminal Bus",
                    "latitude": "-6.2300513",
                    "longitude": "106.8078514",
                    "m_lokasi_kategori_id": 5,
                    "name": "Bistecca",
                    "updated_at": "2022-03-30T12:46:54+07:00"
                },
                {
                    "alamat": "Kota Tangerang, Banten 19120",
                    "bahasa": "id",
                    "created_at": "2022-03-30T12:46:54+07:00",
                    "deleted_at": null,
                    "description": "Bandar Udara Internasional Soekarno–Hatta disingkat SHIA atau Soetta, sebelumnya secara hukum disebut Bandar Udara Cengkareng Jakarta, merupakan sebuah bandar udara utama yang melayani penerbangan untuk wilayah Jabodetabek dan sekitarnya.",
                    "id": 249,
                    "is_active": 1,
                    "kategori": "Bandara1",
                    "latitude": "-6.127119",
                    "longitude": "106.6534595",
                    "m_lokasi_kategori_id": 4,
                    "name": "Bandar Udara Internasional Soekarno–Hatta",
                    "updated_at": "2022-03-30T12:46:54+07:00"
                },
                {
                    "alamat": "Jl. Halim Perdana Kusuma No.1, RW.9, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
                    "bahasa": "id",
                    "created_at": "2022-03-24T15:59:25+07:00",
                    "deleted_at": null,
                    "description": "Bandar Udara Internasional Halim Perdanakusuma (bahasa Inggris: Halim Perdanakusuma International Airport) (IATA: HLP, ICAO: WIHH) adalah sebuah bandar udara di Jakarta, Indonesia. Bandar udara ini juga merupakan markas Komando Operasi Angkatan Udara I. Sejak tanggal 10 Januari 2014, bandar udara ini juga digunakan sebagai bandar udara komersial untuk wilayah Jabodetabek, awalnya untuk mengalihkan penerbangan dari Bandar Udara Internasional Soekarno–Hatta, yang dinilai telah penuh sesak",
                    "id": 247,
                    "is_active": 1,
                    "kategori": "Bandara1",
                    "latitude": "-6.2652088",
                    "longitude": "106.8841572",
                    "m_lokasi_kategori_id": 4,
                    "name": "Halim Perdanakusuma International Airport",
                    "updated_at": "2022-03-24T16:01:31+07:00"
                },
                {
                    "alamat": "Jl. Prof. DR. G.A. Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                    "bahasa": "id",
                    "created_at": "2022-03-24T08:50:10+07:00",
                    "deleted_at": null,
                    "description": "Politeknik Negeri Jakarta adalah salah satu perguruan tinggi negeri politeknik yang terdapat di areal kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia.",
                    "id": 245,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.3706274",
                    "longitude": "106.8214396",
                    "m_lokasi_kategori_id": 6,
                    "name": "Politeknik Negeri Jakarta",
                    "updated_at": "2022-03-24T08:52:51+07:00"
                },
                {
                    "alamat": "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                    "bahasa": "id",
                    "created_at": "2022-03-23T16:37:18+07:00",
                    "deleted_at": null,
                    "description": "Universitas Negeri Jakarta adalah Perguruan Tinggi Negeri yang terdapat di kota Jakarta, Indonesia yang didirikan pada tahun 1964. Sebelumnya, Universitas Negeri Jakarta bernama Institut Keguruan dan Ilmu Pendidikan Jakarta (IKIP Jakarta).\n\nPada Januari 2021, Universitas Negeri Jakarta melakukan reakreditasi Perguruan Tinggi yang sebelumnya telah memperoleh akreditasi \"B\". Akreditasi yang dilakukan oleh Tim Asesor BAN PT tahun 2021 ini, Universitas Negeri Jakarta memperoleh Akreditasi Unggul berdasarkan Surat Keputusan BAN-PT No. 45/SK/BAN-PT/Akred/PT/II/2021. Universitas Negeri Jakarta dinyatakan memenuhi syarat peringkat Akreditasi Unggul dengan memperoleh skor nilai 366 dan status akreditasi ini berlaku sejak tanggal 2 Februari 2021 sampai dengan 2 Februari 2026.[",
                    "id": 244,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.1361694",
                    "longitude": "106.93640470000001",
                    "m_lokasi_kategori_id": 6,
                    "name": "Universitas Negeri Jakarta",
                    "updated_at": "2022-03-23T16:37:18+07:00"
                },
                {
                    "alamat": "Jl. Matraman Raya No.1, RT.2/RW.1, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150",
                    "bahasa": "id",
                    "created_at": "2022-03-23T16:29:21+07:00",
                    "deleted_at": null,
                    "description": "Bank Artha Graha Internasional adalah perusahaan swasta yang berbentuk perseroan terbatas dan bergerak di bidang jasa keuangan perbankan. Bank ini berbasis di Jakarta. Didirikan pada tahun 1973.",
                    "id": 243,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-6.1361694",
                    "longitude": "106.93640470000001",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Artha Graha",
                    "updated_at": "2022-03-23T16:29:21+07:00"
                },
                {
                    "alamat": "Jl. Pegambiran No.31A, RT.16/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                    "bahasa": "id",
                    "created_at": "2022-03-15T16:40:08+07:00",
                    "deleted_at": null,
                    "description": "Terminal Rawamangun adalah terminal yang terletak di Kecamatan Pulo Gadung, Jakarta Timur, DKI Jakarta. Terminal ini merupakan salah satu proyek revitalisasi terminal yang dilakukan oleh Pemerintah Provinsi DKI Jakarta. Proyek diprakarsai oleh Dinas Perhubungan Provinsi DKI Jakarta dan mulai dilelang pada tahun 2013.[1] Konstruksi dimulai pada 2014 dan dipergunakan kembali sejak tahun 2015.[1][2] Proyek ini menelan dana Rp57 miliar dari APBD Provinsi DKI Jakarta.[3][4] Proyek ini bermasalah dan dianggap tidak selesai karena konstruksi terminal dipaksakan walau ada lahan yang belum bebas.[5] Hal ini mengakibatkan lajur utama bus yang seharusnya lurus dengan lebar 3,5 meter dibuat berbelok dan menyempit dari desain awal, sehingga bus antar kota antar provinsi (AKAP) berbadan besar tidak bisa masuk ke terminal.",
                    "id": 239,
                    "is_active": 1,
                    "kategori": "Terminal Bus",
                    "latitude": "-6.198016305409278",
                    "longitude": "106.89123272895813",
                    "m_lokasi_kategori_id": 5,
                    "name": "TERMINAL BUS RAWAMANGUN",
                    "updated_at": "2022-03-15T16:42:52+07:00"
                },
                {
                    "alamat": "Jalan A.M Sangaji No. 22-24 Petojo Utara Gambir RT.2/RW.5 2 5, RT.2/RW.5, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
                    "bahasa": "id",
                    "created_at": "2022-03-14T10:36:41+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 238,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.3143936",
                    "longitude": "106.8793856",
                    "m_lokasi_kategori_id": 6,
                    "name": "SMA NEGERI 25 Jakarta",
                    "updated_at": "2022-03-14T10:37:52+07:00"
                },
                {
                    "alamat": "Jl. Prihatin No.8, RW.2, Klp. Gading Bar., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
                    "bahasa": "id",
                    "created_at": "2022-03-14T10:31:10+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 237,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.3143936",
                    "longitude": "106.8793856",
                    "m_lokasi_kategori_id": 6,
                    "name": "SMA NEGERI 72 Jakarta",
                    "updated_at": "2022-03-14T10:33:16+07:00"
                },
                {
                    "alamat": "Jl. Budi Utomo, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
                    "bahasa": "id",
                    "created_at": "2022-03-14T10:23:16+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 236,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.113382",
                    "longitude": "106.9111076",
                    "m_lokasi_kategori_id": 6,
                    "name": "SMA NEGERI 1 JAKARTA",
                    "updated_at": "2022-03-14T10:23:47+07:00"
                },
                {
                    "alamat": "Bukit Gading Raya Blok A Kav No.19-20, Klp. Gading Bar., Kec. Klp. Gading, Daerah Khusus Ibukota Jakarta 14240",
                    "bahasa": "id",
                    "created_at": "2022-03-14T10:10:02+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 235,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-6.3143936",
                    "longitude": "106.8793856",
                    "m_lokasi_kategori_id": 3,
                    "name": "BANK BNI",
                    "updated_at": "2022-03-14T10:11:47+07:00"
                },
                {
                    "alamat": "Bank Rakyat Indonesia KI I / 21, Jl. Taman Sunter Indah No.12, RT.14/RW.12, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
                    "bahasa": "id",
                    "created_at": "2022-03-14T10:04:45+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 234,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-6.1315654",
                    "longitude": "106.9042417",
                    "m_lokasi_kategori_id": 3,
                    "name": "BANK BRI",
                    "updated_at": "2022-03-14T10:08:15+07:00"
                },
                {
                    "alamat": "Jalan Letjend Suprapto No.30 EF, RW.3, Cemp. Putih Bar., Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 Phone: (021) 0500888",
                    "bahasa": "id",
                    "created_at": "2022-03-11T17:07:51+07:00",
                    "deleted_at": null,
                    "description": "-",
                    "id": 232,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-6.1392697",
                    "longitude": "106.8799169",
                    "m_lokasi_kategori_id": 3,
                    "name": "BCA Cempaka Putih",
                    "updated_at": "2022-03-11T17:09:09+07:00"
                },
                {
                    "alamat": "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                    "bahasa": "id",
                    "created_at": "2022-03-11T16:39:57+07:00",
                    "deleted_at": null,
                    "description": "Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia. Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara Depok dengan wilayah Jakarta Selatan, sementara kampus utama lainnya terdapat di Salemba, Jakarta Pusat.",
                    "id": 231,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-6.369904922142188",
                    "longitude": "106.82856186012776",
                    "m_lokasi_kategori_id": 6,
                    "name": "Universitas Indonesia",
                    "updated_at": "2022-03-11T16:43:32+07:00"
                },
                {
                    "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                    "bahasa": "id",
                    "created_at": "2022-03-11T13:18:32+07:00",
                    "deleted_at": null,
                    "description": "test",
                    "id": 229,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-6.2241035",
                    "longitude": "106.8116504",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polda Metro Jaya",
                    "updated_at": "2022-03-11T13:22:26+07:00"
                },
                {
                    "alamat": "A",
                    "bahasa": "id",
                    "created_at": "2022-02-10T17:00:48+07:00",
                    "deleted_at": null,
                    "description": "\u003cp\u003eaa\u003c/p\u003e",
                    "id": 211,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-7.962507465557346",
                    "longitude": "112.613549260998",
                    "m_lokasi_kategori_id": 2,
                    "name": "Universitas Brawijaya",
                    "updated_at": "2022-02-18T13:52:51+07:00"
                },
                {
                    "alamat": "Malang",
                    "bahasa": "id",
                    "created_at": "2022-01-27T13:48:31+07:00",
                    "deleted_at": null,
                    "description": "\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ipsum augue. Praesent pretium lectus non risus porta laoreet. Pellentesque lobortis tempor nisl, a fermentum est finibus sed. Maecenas non odio a ex porttitor aliquet quis eget leo. Nullam varius ipsum id faucibus lobortis. Nulla sed leo in augue semper tincidunt. Nunc eget mi gravida, bibendum risus vitae, finibus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit ullamcorper metus ut dignissim. Maecenas porta feugiat vestibulum. Cras auctor, neque a malesuada posuere, lectus orci placerat nulla, sit amet euismod nisl nulla vitae est. Etiam eget urna feugiat, placerat tellus quis, aliquet leo.\u003c/p\u003e",
                    "id": 195,
                    "is_active": 0,
                    "kategori": "Pendidikan",
                    "latitude": "-7.950829986164169",
                    "longitude": "112.61505603790283",
                    "m_lokasi_kategori_id": 6,
                    "name": "Universitas Brawijaya",
                    "updated_at": "2022-03-11T10:53:12+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-20T14:26:15+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 165,
                    "is_active": 1,
                    "kategori": "Pendidikan",
                    "latitude": "-7.942398405602773",
                    "longitude": "112.62286663055421",
                    "m_lokasi_kategori_id": 6,
                    "name": "Politeknik Negeri Malang",
                    "updated_at": "2022-03-11T16:01:56+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T15:01:29+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 136,
                    "is_active": 1,
                    "kategori": "Terminal Bus",
                    "latitude": "-7.932500934731806",
                    "longitude": "112.65823001195365",
                    "m_lokasi_kategori_id": 5,
                    "name": "Terminal Arjosari Malang",
                    "updated_at": "2022-01-27T14:21:51+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T15:01:02+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 135,
                    "is_active": 1,
                    "kategori": "Terminal Bus",
                    "latitude": "-7.925193681479986",
                    "longitude": "112.59801074817261",
                    "m_lokasi_kategori_id": 5,
                    "name": "Terminal Landungsari Malang",
                    "updated_at": "2022-01-27T14:21:46+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:54:22+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 124,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.966488963518006",
                    "longitude": "112.61379712492504",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank OCBC NISP GALUNGGUNG",
                    "updated_at": "2022-01-27T14:21:39+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:52:40+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 120,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.968450706635415",
                    "longitude": "112.61326088277917",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank \u0026 ATM Mandiri",
                    "updated_at": "2022-01-27T14:20:43+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:52:09+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 119,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.956233778215897",
                    "longitude": "112.61663865064091",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Jatim",
                    "updated_at": "2022-01-27T14:20:34+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:51:46+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 118,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.955659410974291",
                    "longitude": "112.61573204008184",
                    "m_lokasi_kategori_id": 3,
                    "name": "BNI KCP Universitas Brawijaya Malang",
                    "updated_at": "2022-01-27T14:20:14+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:51:24+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 117,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.955716187956503",
                    "longitude": "112.61584669757713",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Btn",
                    "updated_at": "2022-01-27T14:20:05+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:50:50+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 116,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.939568374700675",
                    "longitude": "112.62504708472129",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Mandiri KCP Soekarno Hatta",
                    "updated_at": "2022-01-27T14:19:58+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:50:23+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 115,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.943846049926229",
                    "longitude": "112.61956993727063",
                    "m_lokasi_kategori_id": 3,
                    "name": "PermataBank",
                    "updated_at": "2022-01-27T14:19:51+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:49:57+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 114,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.946459264382789",
                    "longitude": "112.61258407767342",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank BRI 2",
                    "updated_at": "2022-01-27T14:19:43+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:49:22+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 113,
                    "is_active": 1,
                    "kategori": "Bank",
                    "latitude": "-7.9384433206759555",
                    "longitude": "112.63490438312644",
                    "m_lokasi_kategori_id": 3,
                    "name": "Bank Mandiri KCP Borobudur",
                    "updated_at": "2022-01-27T14:19:30+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:48:41+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 112,
                    "is_active": 1,
                    "kategori": "Bandara1",
                    "latitude": "-8.31113952755366",
                    "longitude": "114.33924209607112",
                    "m_lokasi_kategori_id": 4,
                    "name": "Bandar Udara Internasional Banyuwangi",
                    "updated_at": "2022-01-27T14:19:19+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:48:11+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 111,
                    "is_active": 1,
                    "kategori": "Bandara1",
                    "latitude": "-7.378517830367639",
                    "longitude": "112.78732674259327",
                    "m_lokasi_kategori_id": 4,
                    "name": "Bandar Udara Internasional Juanda",
                    "updated_at": "2022-01-27T14:14:27+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-01-19T14:47:45+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 110,
                    "is_active": 1,
                    "kategori": "Bandara1",
                    "latitude": "-7.937096630297807",
                    "longitude": "112.71153669325685",
                    "m_lokasi_kategori_id": 4,
                    "name": "Bandar Udara Abdulrachman Saleh",
                    "updated_at": "2022-01-27T14:19:10+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "en",
                    "created_at": "2022-01-19T14:42:18+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 102,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-7.929828754645295",
                    "longitude": "112.65058759155978",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polsek Blimbing",
                    "updated_at": "2022-01-19T14:42:18+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "en",
                    "created_at": "2022-01-19T14:41:26+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 101,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-7.980807715179765",
                    "longitude": "112.62531946563851",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polsekta Klojen",
                    "updated_at": "2022-01-19T14:41:26+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "en",
                    "created_at": "2022-01-19T14:40:41+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 100,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-8.00338076502255",
                    "longitude": "112.61855767194521",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polsek Sukun",
                    "updated_at": "2022-01-27T14:54:36+07:00"
                },
                {
                    "alamat": null,
                    "bahasa": "en",
                    "created_at": "2022-01-19T14:40:03+07:00",
                    "deleted_at": null,
                    "description": null,
                    "id": 99,
                    "is_active": 1,
                    "kategori": "Kantor Polisi",
                    "latitude": "-7.932158691103069",
                    "longitude": "112.6087773701503",
                    "m_lokasi_kategori_id": 2,
                    "name": "Polsek Lowokwaru",
                    "updated_at": "2022-04-01T15:22:10+07:00"
                }],
                "total_item": 42
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                "bahasa": "id",
                "created_at": "2022-09-12T17:12:24+07:00",
                "deleted_at": null,
                "description": "Kepolisian Daerah Metropolitan Jakarta Raya atau Polda Metro Jaya adalah pelaksana tugas Kepolisian RI di wilayah Provinsi Daerah Khusus Ibukota Jakarta. Polda Metro Jaya dipimpin oleh seorang kepala kepolisian daerah yang berpangkat bintang dua",
                "id": 303,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-6.222690268768212",
                "longitude": "106.81246824371375",
                "m_lokasi_kategori_id": 2,
                "name": "Polda Metro Jaya",
                "updated_at": "2022-09-12T17:12:24+07:00"
            },
            {
                "alamat": "Jl. Cemara",
                "bahasa": "id",
                "created_at": "2022-04-01T10:49:02+07:00",
                "deleted_at": null,
                "description": "Sekolah",
                "id": 270,
                "is_active": 0,
                "kategori": "Pendidikan",
                "latitude": "0",
                "longitude": "0",
                "m_lokasi_kategori_id": 6,
                "name": "Sekolah SD",
                "updated_at": "2022-04-01T11:35:46+07:00"
            },
            {
                "alamat": "MT Hariyono",
                "bahasa": "id",
                "created_at": "2022-04-01T09:34:09+07:00",
                "deleted_at": null,
                "description": "Bank",
                "id": 258,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": null,
                "longitude": null,
                "m_lokasi_kategori_id": 3,
                "name": "Bank Jago",
                "updated_at": "2022-04-01T09:34:09+07:00"
            },
            {
                "alamat": "Jl. Tanjung Duren Raya No.54 C, RT.1/RW.4, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470",
                "bahasa": "id",
                "created_at": "2022-03-30T15:55:04+07:00",
                "deleted_at": null,
                "description": "Restoran ayam goreng",
                "id": 253,
                "is_active": 1,
                "kategori": "Restoran",
                "latitude": null,
                "longitude": null,
                "m_lokasi_kategori_id": 260,
                "name": "KFC",
                "updated_at": "2022-03-30T15:55:04+07:00"
            },
            {
                "alamat": "Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559",
                "bahasa": "id",
                "created_at": "2022-03-30T12:53:56+07:00",
                "deleted_at": null,
                "description": "Kampus Politeknik Negeri pertama di Indonesia",
                "id": 252,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.871973056376472",
                "longitude": "107.5737724972937",
                "m_lokasi_kategori_id": 6,
                "name": "Politeknik Negeri Bandung",
                "updated_at": "2022-03-30T12:53:56+07:00"
            },
            {
                "alamat": "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
                "bahasa": "id",
                "created_at": "2022-03-30T12:46:54+07:00",
                "deleted_at": null,
                "description": "Kampus utama untuk pendidikan tinggi bidang sains \u0026 teknologi ini didirikan pada tahun 1959.\n",
                "id": 251,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.89148",
                "longitude": "107.6084704",
                "m_lokasi_kategori_id": 6,
                "name": "Institut Teknologi Bandung",
                "updated_at": "2022-03-30T12:46:54+07:00"
            },
            {
                "alamat": "18 Parc Place SCBD Tower C Ground Floor, Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                "bahasa": "id",
                "created_at": "2022-03-30T12:46:54+07:00",
                "deleted_at": null,
                "description": "Restoran kasual yang menyajikan potongan steak klasik, masakan Italia \u0026 koktail di tempat elegan dan luas.",
                "id": 250,
                "is_active": 1,
                "kategori": "Terminal Bus",
                "latitude": "-6.2300513",
                "longitude": "106.8078514",
                "m_lokasi_kategori_id": 5,
                "name": "Bistecca",
                "updated_at": "2022-03-30T12:46:54+07:00"
            },
            {
                "alamat": "Kota Tangerang, Banten 19120",
                "bahasa": "id",
                "created_at": "2022-03-30T12:46:54+07:00",
                "deleted_at": null,
                "description": "Bandar Udara Internasional Soekarno–Hatta disingkat SHIA atau Soetta, sebelumnya secara hukum disebut Bandar Udara Cengkareng Jakarta, merupakan sebuah bandar udara utama yang melayani penerbangan untuk wilayah Jabodetabek dan sekitarnya.",
                "id": 249,
                "is_active": 1,
                "kategori": "Bandara1",
                "latitude": "-6.127119",
                "longitude": "106.6534595",
                "m_lokasi_kategori_id": 4,
                "name": "Bandar Udara Internasional Soekarno–Hatta",
                "updated_at": "2022-03-30T12:46:54+07:00"
            },
            {
                "alamat": "Jl. Halim Perdana Kusuma No.1, RW.9, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
                "bahasa": "id",
                "created_at": "2022-03-24T15:59:25+07:00",
                "deleted_at": null,
                "description": "Bandar Udara Internasional Halim Perdanakusuma (bahasa Inggris: Halim Perdanakusuma International Airport) (IATA: HLP, ICAO: WIHH) adalah sebuah bandar udara di Jakarta, Indonesia. Bandar udara ini juga merupakan markas Komando Operasi Angkatan Udara I. Sejak tanggal 10 Januari 2014, bandar udara ini juga digunakan sebagai bandar udara komersial untuk wilayah Jabodetabek, awalnya untuk mengalihkan penerbangan dari Bandar Udara Internasional Soekarno–Hatta, yang dinilai telah penuh sesak",
                "id": 247,
                "is_active": 1,
                "kategori": "Bandara1",
                "latitude": "-6.2652088",
                "longitude": "106.8841572",
                "m_lokasi_kategori_id": 4,
                "name": "Halim Perdanakusuma International Airport",
                "updated_at": "2022-03-24T16:01:31+07:00"
            },
            {
                "alamat": "Jl. Prof. DR. G.A. Siwabessy, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                "bahasa": "id",
                "created_at": "2022-03-24T08:50:10+07:00",
                "deleted_at": null,
                "description": "Politeknik Negeri Jakarta adalah salah satu perguruan tinggi negeri politeknik yang terdapat di areal kampus Universitas Indonesia, Depok, Jawa Barat, Indonesia.",
                "id": 245,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.3706274",
                "longitude": "106.8214396",
                "m_lokasi_kategori_id": 6,
                "name": "Politeknik Negeri Jakarta",
                "updated_at": "2022-03-24T08:52:51+07:00"
            },
            {
                "alamat": "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                "bahasa": "id",
                "created_at": "2022-03-23T16:37:18+07:00",
                "deleted_at": null,
                "description": "Universitas Negeri Jakarta adalah Perguruan Tinggi Negeri yang terdapat di kota Jakarta, Indonesia yang didirikan pada tahun 1964. Sebelumnya, Universitas Negeri Jakarta bernama Institut Keguruan dan Ilmu Pendidikan Jakarta (IKIP Jakarta).\n\nPada Januari 2021, Universitas Negeri Jakarta melakukan reakreditasi Perguruan Tinggi yang sebelumnya telah memperoleh akreditasi \"B\". Akreditasi yang dilakukan oleh Tim Asesor BAN PT tahun 2021 ini, Universitas Negeri Jakarta memperoleh Akreditasi Unggul berdasarkan Surat Keputusan BAN-PT No. 45/SK/BAN-PT/Akred/PT/II/2021. Universitas Negeri Jakarta dinyatakan memenuhi syarat peringkat Akreditasi Unggul dengan memperoleh skor nilai 366 dan status akreditasi ini berlaku sejak tanggal 2 Februari 2021 sampai dengan 2 Februari 2026.[",
                "id": 244,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.1361694",
                "longitude": "106.93640470000001",
                "m_lokasi_kategori_id": 6,
                "name": "Universitas Negeri Jakarta",
                "updated_at": "2022-03-23T16:37:18+07:00"
            },
            {
                "alamat": "Jl. Matraman Raya No.1, RT.2/RW.1, Kb. Manggis, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13150",
                "bahasa": "id",
                "created_at": "2022-03-23T16:29:21+07:00",
                "deleted_at": null,
                "description": "Bank Artha Graha Internasional adalah perusahaan swasta yang berbentuk perseroan terbatas dan bergerak di bidang jasa keuangan perbankan. Bank ini berbasis di Jakarta. Didirikan pada tahun 1973.",
                "id": 243,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-6.1361694",
                "longitude": "106.93640470000001",
                "m_lokasi_kategori_id": 3,
                "name": "Bank Artha Graha",
                "updated_at": "2022-03-23T16:29:21+07:00"
            },
            {
                "alamat": "Jl. Pegambiran No.31A, RT.16/RW.6, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
                "bahasa": "id",
                "created_at": "2022-03-15T16:40:08+07:00",
                "deleted_at": null,
                "description": "Terminal Rawamangun adalah terminal yang terletak di Kecamatan Pulo Gadung, Jakarta Timur, DKI Jakarta. Terminal ini merupakan salah satu proyek revitalisasi terminal yang dilakukan oleh Pemerintah Provinsi DKI Jakarta. Proyek diprakarsai oleh Dinas Perhubungan Provinsi DKI Jakarta dan mulai dilelang pada tahun 2013.[1] Konstruksi dimulai pada 2014 dan dipergunakan kembali sejak tahun 2015.[1][2] Proyek ini menelan dana Rp57 miliar dari APBD Provinsi DKI Jakarta.[3][4] Proyek ini bermasalah dan dianggap tidak selesai karena konstruksi terminal dipaksakan walau ada lahan yang belum bebas.[5] Hal ini mengakibatkan lajur utama bus yang seharusnya lurus dengan lebar 3,5 meter dibuat berbelok dan menyempit dari desain awal, sehingga bus antar kota antar provinsi (AKAP) berbadan besar tidak bisa masuk ke terminal.",
                "id": 239,
                "is_active": 1,
                "kategori": "Terminal Bus",
                "latitude": "-6.198016305409278",
                "longitude": "106.89123272895813",
                "m_lokasi_kategori_id": 5,
                "name": "TERMINAL BUS RAWAMANGUN",
                "updated_at": "2022-03-15T16:42:52+07:00"
            },
            {
                "alamat": "Jalan A.M Sangaji No. 22-24 Petojo Utara Gambir RT.2/RW.5 2 5, RT.2/RW.5, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
                "bahasa": "id",
                "created_at": "2022-03-14T10:36:41+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 238,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.3143936",
                "longitude": "106.8793856",
                "m_lokasi_kategori_id": 6,
                "name": "SMA NEGERI 25 Jakarta",
                "updated_at": "2022-03-14T10:37:52+07:00"
            },
            {
                "alamat": "Jl. Prihatin No.8, RW.2, Klp. Gading Bar., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
                "bahasa": "id",
                "created_at": "2022-03-14T10:31:10+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 237,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.3143936",
                "longitude": "106.8793856",
                "m_lokasi_kategori_id": 6,
                "name": "SMA NEGERI 72 Jakarta",
                "updated_at": "2022-03-14T10:33:16+07:00"
            },
            {
                "alamat": "Jl. Budi Utomo, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710",
                "bahasa": "id",
                "created_at": "2022-03-14T10:23:16+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 236,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.113382",
                "longitude": "106.9111076",
                "m_lokasi_kategori_id": 6,
                "name": "SMA NEGERI 1 JAKARTA",
                "updated_at": "2022-03-14T10:23:47+07:00"
            },
            {
                "alamat": "Bukit Gading Raya Blok A Kav No.19-20, Klp. Gading Bar., Kec. Klp. Gading, Daerah Khusus Ibukota Jakarta 14240",
                "bahasa": "id",
                "created_at": "2022-03-14T10:10:02+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 235,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-6.3143936",
                "longitude": "106.8793856",
                "m_lokasi_kategori_id": 3,
                "name": "BANK BNI",
                "updated_at": "2022-03-14T10:11:47+07:00"
            },
            {
                "alamat": "Bank Rakyat Indonesia KI I / 21, Jl. Taman Sunter Indah No.12, RT.14/RW.12, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
                "bahasa": "id",
                "created_at": "2022-03-14T10:04:45+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 234,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-6.1315654",
                "longitude": "106.9042417",
                "m_lokasi_kategori_id": 3,
                "name": "BANK BRI",
                "updated_at": "2022-03-14T10:08:15+07:00"
            },
            {
                "alamat": "Jalan Letjend Suprapto No.30 EF, RW.3, Cemp. Putih Bar., Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 Phone: (021) 0500888",
                "bahasa": "id",
                "created_at": "2022-03-11T17:07:51+07:00",
                "deleted_at": null,
                "description": "-",
                "id": 232,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-6.1392697",
                "longitude": "106.8799169",
                "m_lokasi_kategori_id": 3,
                "name": "BCA Cempaka Putih",
                "updated_at": "2022-03-11T17:09:09+07:00"
            },
            {
                "alamat": "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
                "bahasa": "id",
                "created_at": "2022-03-11T16:39:57+07:00",
                "deleted_at": null,
                "description": "Universitas Indonesia disingkat sebagai UI, adalah sebuah perguruan tinggi di Indonesia. Kampus utamanya terletak di bagian Utara dari Depok, Jawa Barat tepat di perbatasan antara Depok dengan wilayah Jakarta Selatan, sementara kampus utama lainnya terdapat di Salemba, Jakarta Pusat.",
                "id": 231,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-6.369904922142188",
                "longitude": "106.82856186012776",
                "m_lokasi_kategori_id": 6,
                "name": "Universitas Indonesia",
                "updated_at": "2022-03-11T16:43:32+07:00"
            },
            {
                "alamat": "Jl. Jenderal Sudirman No.Kav. 55, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
                "bahasa": "id",
                "created_at": "2022-03-11T13:18:32+07:00",
                "deleted_at": null,
                "description": "test",
                "id": 229,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-6.2241035",
                "longitude": "106.8116504",
                "m_lokasi_kategori_id": 2,
                "name": "Polda Metro Jaya",
                "updated_at": "2022-03-11T13:22:26+07:00"
            },
            {
                "alamat": "A",
                "bahasa": "id",
                "created_at": "2022-02-10T17:00:48+07:00",
                "deleted_at": null,
                "description": "\u003cp\u003eaa\u003c/p\u003e",
                "id": 211,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-7.962507465557346",
                "longitude": "112.613549260998",
                "m_lokasi_kategori_id": 2,
                "name": "Universitas Brawijaya",
                "updated_at": "2022-02-18T13:52:51+07:00"
            },
            {
                "alamat": "Malang",
                "bahasa": "id",
                "created_at": "2022-01-27T13:48:31+07:00",
                "deleted_at": null,
                "description": "\u003cp\u003eLorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ipsum augue. Praesent pretium lectus non risus porta laoreet. Pellentesque lobortis tempor nisl, a fermentum est finibus sed. Maecenas non odio a ex porttitor aliquet quis eget leo. Nullam varius ipsum id faucibus lobortis. Nulla sed leo in augue semper tincidunt. Nunc eget mi gravida, bibendum risus vitae, finibus eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit ullamcorper metus ut dignissim. Maecenas porta feugiat vestibulum. Cras auctor, neque a malesuada posuere, lectus orci placerat nulla, sit amet euismod nisl nulla vitae est. Etiam eget urna feugiat, placerat tellus quis, aliquet leo.\u003c/p\u003e",
                "id": 195,
                "is_active": 0,
                "kategori": "Pendidikan",
                "latitude": "-7.950829986164169",
                "longitude": "112.61505603790283",
                "m_lokasi_kategori_id": 6,
                "name": "Universitas Brawijaya",
                "updated_at": "2022-03-11T10:53:12+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-20T14:26:15+07:00",
                "deleted_at": null,
                "description": null,
                "id": 165,
                "is_active": 1,
                "kategori": "Pendidikan",
                "latitude": "-7.942398405602773",
                "longitude": "112.62286663055421",
                "m_lokasi_kategori_id": 6,
                "name": "Politeknik Negeri Malang",
                "updated_at": "2022-03-11T16:01:56+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T15:01:29+07:00",
                "deleted_at": null,
                "description": null,
                "id": 136,
                "is_active": 1,
                "kategori": "Terminal Bus",
                "latitude": "-7.932500934731806",
                "longitude": "112.65823001195365",
                "m_lokasi_kategori_id": 5,
                "name": "Terminal Arjosari Malang",
                "updated_at": "2022-01-27T14:21:51+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T15:01:02+07:00",
                "deleted_at": null,
                "description": null,
                "id": 135,
                "is_active": 1,
                "kategori": "Terminal Bus",
                "latitude": "-7.925193681479986",
                "longitude": "112.59801074817261",
                "m_lokasi_kategori_id": 5,
                "name": "Terminal Landungsari Malang",
                "updated_at": "2022-01-27T14:21:46+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:54:22+07:00",
                "deleted_at": null,
                "description": null,
                "id": 124,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.966488963518006",
                "longitude": "112.61379712492504",
                "m_lokasi_kategori_id": 3,
                "name": "Bank OCBC NISP GALUNGGUNG",
                "updated_at": "2022-01-27T14:21:39+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:52:40+07:00",
                "deleted_at": null,
                "description": null,
                "id": 120,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.968450706635415",
                "longitude": "112.61326088277917",
                "m_lokasi_kategori_id": 3,
                "name": "Bank \u0026 ATM Mandiri",
                "updated_at": "2022-01-27T14:20:43+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:52:09+07:00",
                "deleted_at": null,
                "description": null,
                "id": 119,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.956233778215897",
                "longitude": "112.61663865064091",
                "m_lokasi_kategori_id": 3,
                "name": "Bank Jatim",
                "updated_at": "2022-01-27T14:20:34+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:51:46+07:00",
                "deleted_at": null,
                "description": null,
                "id": 118,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.955659410974291",
                "longitude": "112.61573204008184",
                "m_lokasi_kategori_id": 3,
                "name": "BNI KCP Universitas Brawijaya Malang",
                "updated_at": "2022-01-27T14:20:14+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:51:24+07:00",
                "deleted_at": null,
                "description": null,
                "id": 117,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.955716187956503",
                "longitude": "112.61584669757713",
                "m_lokasi_kategori_id": 3,
                "name": "Bank Btn",
                "updated_at": "2022-01-27T14:20:05+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:50:50+07:00",
                "deleted_at": null,
                "description": null,
                "id": 116,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.939568374700675",
                "longitude": "112.62504708472129",
                "m_lokasi_kategori_id": 3,
                "name": "Bank Mandiri KCP Soekarno Hatta",
                "updated_at": "2022-01-27T14:19:58+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:50:23+07:00",
                "deleted_at": null,
                "description": null,
                "id": 115,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.943846049926229",
                "longitude": "112.61956993727063",
                "m_lokasi_kategori_id": 3,
                "name": "PermataBank",
                "updated_at": "2022-01-27T14:19:51+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:49:57+07:00",
                "deleted_at": null,
                "description": null,
                "id": 114,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.946459264382789",
                "longitude": "112.61258407767342",
                "m_lokasi_kategori_id": 3,
                "name": "Bank BRI 2",
                "updated_at": "2022-01-27T14:19:43+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:49:22+07:00",
                "deleted_at": null,
                "description": null,
                "id": 113,
                "is_active": 1,
                "kategori": "Bank",
                "latitude": "-7.9384433206759555",
                "longitude": "112.63490438312644",
                "m_lokasi_kategori_id": 3,
                "name": "Bank Mandiri KCP Borobudur",
                "updated_at": "2022-01-27T14:19:30+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:48:41+07:00",
                "deleted_at": null,
                "description": null,
                "id": 112,
                "is_active": 1,
                "kategori": "Bandara1",
                "latitude": "-8.31113952755366",
                "longitude": "114.33924209607112",
                "m_lokasi_kategori_id": 4,
                "name": "Bandar Udara Internasional Banyuwangi",
                "updated_at": "2022-01-27T14:19:19+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:48:11+07:00",
                "deleted_at": null,
                "description": null,
                "id": 111,
                "is_active": 1,
                "kategori": "Bandara1",
                "latitude": "-7.378517830367639",
                "longitude": "112.78732674259327",
                "m_lokasi_kategori_id": 4,
                "name": "Bandar Udara Internasional Juanda",
                "updated_at": "2022-01-27T14:14:27+07:00"
            },
            {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-01-19T14:47:45+07:00",
                "deleted_at": null,
                "description": null,
                "id": 110,
                "is_active": 1,
                "kategori": "Bandara1",
                "latitude": "-7.937096630297807",
                "longitude": "112.71153669325685",
                "m_lokasi_kategori_id": 4,
                "name": "Bandar Udara Abdulrachman Saleh",
                "updated_at": "2022-01-27T14:19:10+07:00"
            },
            {
                "alamat": null,
                "bahasa": "en",
                "created_at": "2022-01-19T14:42:18+07:00",
                "deleted_at": null,
                "description": null,
                "id": 102,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-7.929828754645295",
                "longitude": "112.65058759155978",
                "m_lokasi_kategori_id": 2,
                "name": "Polsek Blimbing",
                "updated_at": "2022-01-19T14:42:18+07:00"
            },
            {
                "alamat": null,
                "bahasa": "en",
                "created_at": "2022-01-19T14:41:26+07:00",
                "deleted_at": null,
                "description": null,
                "id": 101,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-7.980807715179765",
                "longitude": "112.62531946563851",
                "m_lokasi_kategori_id": 2,
                "name": "Polsekta Klojen",
                "updated_at": "2022-01-19T14:41:26+07:00"
            },
            {
                "alamat": null,
                "bahasa": "en",
                "created_at": "2022-01-19T14:40:41+07:00",
                "deleted_at": null,
                "description": null,
                "id": 100,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-8.00338076502255",
                "longitude": "112.61855767194521",
                "m_lokasi_kategori_id": 2,
                "name": "Polsek Sukun",
                "updated_at": "2022-01-27T14:54:36+07:00"
            },
            {
                "alamat": null,
                "bahasa": "en",
                "created_at": "2022-01-19T14:40:03+07:00",
                "deleted_at": null,
                "description": null,
                "id": 99,
                "is_active": 1,
                "kategori": "Kantor Polisi",
                "latitude": "-7.932158691103069",
                "longitude": "112.6087773701503",
                "m_lokasi_kategori_id": 2,
                "name": "Polsek Lowokwaru",
                "updated_at": "2022-04-01T15:22:10+07:00"
            }],
            "total_item": 42
        }
    }]
}

export const VALIDATE_GETIMAGELOKASI_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "default": {},
                "title": "A Schema",
                "required": [
                    "id",
                    "is_picture",
                    "link_picture",
                    "m_lokasi_id",
                    "picture"
                ],
                "properties": {
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            1
                        ]
                    },
                    "is_picture": {
                        "type": "string",
                        "default": "",
                        "title": "The is_picture Schema",
                        "examples": [
                            "1"
                        ]
                    },
                    "link_picture": {
                        "type": "string",
                        "default": "",
                        "title": "The link_picture Schema",
                        "examples": [
                            "https://s3.loyalto.id/inisadev/imagepublic/1644379195579535311.jpeg"
                        ]
                    },
                    "m_lokasi_id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The m_lokasi_id Schema",
                        "examples": [
                            1
                        ]
                    },
                    "picture": {
                        "type": "string",
                        "default": "",
                        "title": "The picture Schema",
                        "examples": [
                            "1644379195579535311.jpeg"
                        ]
                    }
                },
                "examples": [{
                    "id": 1,
                    "is_picture": "1",
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/1644379195579535311.jpeg",
                    "m_lokasi_id": 1,
                    "picture": "1644379195579535311.jpeg"
                }]
            },
            "examples": [
                [{
                    "id": 1,
                    "is_picture": "1",
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/1644379195579535311.jpeg",
                    "m_lokasi_id": 1,
                    "picture": "1644379195579535311.jpeg"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "id": 1,
            "is_picture": "1",
            "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/1644379195579535311.jpeg",
            "m_lokasi_id": 1,
            "picture": "1644379195579535311.jpeg"
        }]
    }]
}

export const VALIDATE_GETFASILITASLOKASI_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "id",
                    "m_lokasi_id",
                    "name"
                ],
                "properties": {
                    "id": {
                        "type": "integer",
                        "title": "The id Schema",
                        "examples": [
                            3,
                            6,
                            7
                        ]
                    },
                    "m_lokasi_id": {
                        "type": "integer",
                        "title": "The m_lokasi_id Schema",
                        "examples": [
                            2
                        ]
                    },
                    "name": {
                        "type": "string",
                        "title": "The name Schema",
                        "examples": [
                            "Kantor",
                            "Pasar",
                            "Mushola"
                        ]
                    }
                },
                "examples": [{
                    "id": 3,
                    "m_lokasi_id": 2,
                    "name": "Kantor"
                },
                {
                    "id": 6,
                    "m_lokasi_id": 2,
                    "name": "Pasar"
                },
                {
                    "id": 7,
                    "m_lokasi_id": 2,
                    "name": "Mushola"
                }]
            },
            "examples": [
                [{
                    "id": 3,
                    "m_lokasi_id": 2,
                    "name": "Kantor"
                },
                {
                    "id": 6,
                    "m_lokasi_id": 2,
                    "name": "Pasar"
                },
                {
                    "id": 7,
                    "m_lokasi_id": 2,
                    "name": "Mushola"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "id": 3,
            "m_lokasi_id": 2,
            "name": "Kantor"
        },
        {
            "id": 6,
            "m_lokasi_id": 2,
            "name": "Pasar"
        },
        {
            "id": 7,
            "m_lokasi_id": 2,
            "name": "Mushola"
        }]
    }]
}

export const VALIDATE_GETLOKASIBYID_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "data",
                "fasilitas"
            ],
            "properties": {
                "data": {
                    "type": "null",
                    "default": null,
                    "title": "The data Schema",
                    "examples": [
                        null
                    ]
                },
                "fasilitas": {
                    "type": "array",
                    "default": [],
                    "title": "The fasilitas Schema",
                    "items": {
                        "type": "object",
                        "default": {},
                        "title": "A Schema",
                        "required": [
                            "id",
                            "name"
                        ],
                        "properties": {
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    296
                                ]
                            },
                            "name": {
                                "type": "string",
                                "default": "",
                                "title": "The name Schema",
                                "examples": [
                                    "abc"
                                ]
                            }
                        },
                        "examples": [{
                            "id": 296,
                            "name": "abc"
                        }]
                    },
                    "examples": [
                        [{
                            "id": 296,
                            "name": "abc"
                        }]
                    ]
                }
            },
            "examples": [{
                "data": null,
                "fasilitas": [{
                    "id": 296,
                    "name": "abc"
                }]
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "data": null,
            "fasilitas": [{
                "id": 296,
                "name": "abc"
            }]
        }
    }]
}

export const VALIDATE_HAVERSINCIRCLE_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "default": {},
                "title": "A Schema",
                "required": [
                    "color",
                    "distance",
                    "distance_to_km",
                    "extention",
                    "id",
                    "kategori",
                    "kategori_en",
                    "latitude",
                    "link_picture",
                    "longitude",
                    "name"
                ],
                "properties": {
                    "color": {
                        "type": "string",
                        "default": "",
                        "title": "The color Schema",
                        "examples": [
                            "0xFFff495c"
                        ]
                    },
                    "distance": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The distance Schema",
                        "examples": [
                            2.847250798780315
                        ]
                    },
                    "distance_to_km": {
                        "type": "string",
                        "default": "",
                        "title": "The distance_to_km Schema",
                        "examples": [
                            "2.85"
                        ]
                    },
                    "extention": {
                        "type": "string",
                        "default": "",
                        "title": "The extention Schema",
                        "examples": [
                            "jpg"
                        ]
                    },
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            297
                        ]
                    },
                    "kategori": {
                        "type": "string",
                        "default": "",
                        "title": "The kategori Schema",
                        "examples": [
                            "Pendidikan"
                        ]
                    },
                    "kategori_en": {
                        "type": "string",
                        "default": "",
                        "title": "The kategori_en Schema",
                        "examples": [
                            "Education"
                        ]
                    },
                    "latitude": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The latitude Schema",
                        "examples": [
                            -
                            10.14595085886646
                        ]
                    },
                    "link_picture": {
                        "type": "string",
                        "default": "",
                        "title": "The link_picture Schema",
                        "examples": [
                            "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg"
                        ]
                    },
                    "longitude": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The longitude Schema",
                        "examples": [
                            123.61632750861
                        ]
                    },
                    "name": {
                        "type": "string",
                        "default": "",
                        "title": "The name Schema",
                        "examples": [
                            "ASTON Kupang Hotel \u0026 Convention Center"
                        ]
                    }
                },
                "examples": [{
                    "color": "0xFFff495c",
                    "distance": 2.847250798780315,
                    "distance_to_km": "2.85",
                    "extention": "jpg",
                    "id": 297,
                    "kategori": "Pendidikan",
                    "kategori_en": "Education",
                    "latitude":
                        -
                        10.14595085886646,
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
                    "longitude": 123.61632750861,
                    "name": "ASTON Kupang Hotel \u0026 Convention Center"
                }]
            },
            "examples": [
                [{
                    "color": "0xFFff495c",
                    "distance": 2.847250798780315,
                    "distance_to_km": "2.85",
                    "extention": "jpg",
                    "id": 297,
                    "kategori": "Pendidikan",
                    "kategori_en": "Education",
                    "latitude":
                        -
                        10.14595085886646,
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
                    "longitude": 123.61632750861,
                    "name": "ASTON Kupang Hotel \u0026 Convention Center"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "color": "0xFFff495c",
            "distance": 2.847250798780315,
            "distance_to_km": "2.85",
            "extention": "jpg",
            "id": 297,
            "kategori": "Pendidikan",
            "kategori_en": "Education",
            "latitude":
                -
                10.14595085886646,
            "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
            "longitude": 123.61632750861,
            "name": "ASTON Kupang Hotel \u0026 Convention Center"
        }]
    }]
}

export const VALIDATE_HAVERSINCIRCLE_BYKATEGORI_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "default": {},
                "title": "A Schema",
                "required": [
                    "color",
                    "distance",
                    "distance_to_km",
                    "extention",
                    "id",
                    "kategori",
                    "kategori_en",
                    "latitude",
                    "link_picture",
                    "longitude",
                    "name"
                ],
                "properties": {
                    "color": {
                        "type": "string",
                        "default": "",
                        "title": "The color Schema",
                        "examples": [
                            "0xFFff495c"
                        ]
                    },
                    "distance": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The distance Schema",
                        "examples": [
                            2.847250798780315
                        ]
                    },
                    "distance_to_km": {
                        "type": "string",
                        "default": "",
                        "title": "The distance_to_km Schema",
                        "examples": [
                            "2.85"
                        ]
                    },
                    "extention": {
                        "type": "string",
                        "default": "",
                        "title": "The extention Schema",
                        "examples": [
                            "jpg"
                        ]
                    },
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            297
                        ]
                    },
                    "kategori": {
                        "type": "string",
                        "default": "",
                        "title": "The kategori Schema",
                        "examples": [
                            "Pendidikan"
                        ]
                    },
                    "kategori_en": {
                        "type": "string",
                        "default": "",
                        "title": "The kategori_en Schema",
                        "examples": [
                            "Education"
                        ]
                    },
                    "latitude": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The latitude Schema",
                        "examples": [
                            -
                            10.14595085886646
                        ]
                    },
                    "link_picture": {
                        "type": "string",
                        "default": "",
                        "title": "The link_picture Schema",
                        "examples": [
                            "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg"
                        ]
                    },
                    "longitude": {
                        "type": "number",
                        "default": 0.0,
                        "title": "The longitude Schema",
                        "examples": [
                            123.61632750861
                        ]
                    },
                    "name": {
                        "type": "string",
                        "default": "",
                        "title": "The name Schema",
                        "examples": [
                            "ASTON Kupang Hotel \u0026 Convention Center"
                        ]
                    }
                },
                "examples": [{
                    "color": "0xFFff495c",
                    "distance": 2.847250798780315,
                    "distance_to_km": "2.85",
                    "extention": "jpg",
                    "id": 297,
                    "kategori": "Pendidikan",
                    "kategori_en": "Education",
                    "latitude":
                        -
                        10.14595085886646,
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
                    "longitude": 123.61632750861,
                    "name": "ASTON Kupang Hotel \u0026 Convention Center"
                }]
            },
            "examples": [
                [{
                    "color": "0xFFff495c",
                    "distance": 2.847250798780315,
                    "distance_to_km": "2.85",
                    "extention": "jpg",
                    "id": 297,
                    "kategori": "Pendidikan",
                    "kategori_en": "Education",
                    "latitude":
                        -
                        10.14595085886646,
                    "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
                    "longitude": 123.61632750861,
                    "name": "ASTON Kupang Hotel \u0026 Convention Center"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "color": "0xFFff495c",
            "distance": 2.847250798780315,
            "distance_to_km": "2.85",
            "extention": "jpg",
            "id": 297,
            "kategori": "Pendidikan",
            "kategori_en": "Education",
            "latitude":
                -
                10.14595085886646,
            "link_picture": "https://s3.loyalto.id/inisadev/imagepublic/hfYwqMlX1654297546-d211e32f80b068439f16473fb02e2a1b.jpg",
            "longitude": 123.61632750861,
            "name": "ASTON Kupang Hotel \u0026 Convention Center"
        }]
    }]
}

export const VALIDATE_KATEGORIBYID_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "description",
                "distance_to_km",
                "facility",
                "gallery",
                "latitude",
                "link_gmaps",
                "longitude",
                "name",
                "slider"
            ],
            "properties": {
                "description": {
                    "type": "string",
                    "default": "",
                    "title": "The description Schema",
                    "examples": [
                        "Vacation Place"
                    ]
                },
                "distance_to_km": {
                    "type": "string",
                    "default": "",
                    "title": "The distance_to_km Schema",
                    "examples": [
                        "5.49"
                    ]
                },
                "facility": {
                    "type": "array",
                    "default": [],
                    "title": "The facility Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "name"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "Market",
                                    "Office",
                                    "Mosque"
                                ]
                            }
                        },
                        "examples": [{
                            "name": "Market"
                        },
                        {
                            "name": "Office"
                        },
                        {
                            "name": "Mosque"
                        }]
                    },
                    "examples": [
                        [{
                            "name": "Market"
                        },
                        {
                            "name": "Office"
                        },
                        {
                            "name": "Mosque"
                        }]
                    ]
                },
                "gallery": {
                    "type": "array",
                    "default": [],
                    "title": "The gallery Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "extention",
                            "picture"
                        ],
                        "properties": {
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    "jpg",
                                    ""
                                ]
                            },
                            "picture": {
                                "type": "string",
                                "title": "The picture Schema",
                                "examples": [
                                    "http://localhost:9000/inisadev/1649315687164732800.jpg",
                                    "https://s3.loyalto.id/inisadev/public/noimage.png"
                                ]
                            }
                        },
                        "examples": [{
                            "extention": "jpg",
                            "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                        },
                        {
                            "extention": "",
                            "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                        }]
                    },
                    "examples": [
                        [{
                            "extention": "jpg",
                            "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                        },
                        {
                            "extention": "",
                            "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                        }]
                    ]
                },
                "latitude": {
                    "type": "number",
                    "default": 0.0,
                    "title": "The latitude Schema",
                    "examples": [
                        -
                        7.950436835029361
                    ]
                },
                "link_gmaps": {
                    "type": "string",
                    "default": "",
                    "title": "The link_gmaps Schema",
                    "examples": [
                        "https://www.google.com/maps/search/-7.950436835029361,112.63870239257814"
                    ]
                },
                "longitude": {
                    "type": "number",
                    "default": 0.0,
                    "title": "The longitude Schema",
                    "examples": [
                        112.63870239257814
                    ]
                },
                "name": {
                    "type": "string",
                    "default": "",
                    "title": "The name Schema",
                    "examples": [
                        "Borobudur Temple"
                    ]
                },
                "slider": {
                    "type": "array",
                    "default": [],
                    "title": "The slider Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "extention",
                            "picture"
                        ],
                        "properties": {
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    "jpg",
                                    ""
                                ]
                            },
                            "picture": {
                                "type": "string",
                                "title": "The picture Schema",
                                "examples": [
                                    "http://localhost:9000/inisadev/1649315687164732800.jpg",
                                    "https://s3.loyalto.id/inisadev/public/noimage.png"
                                ]
                            }
                        },
                        "examples": [{
                            "extention": "jpg",
                            "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                        },
                        {
                            "extention": "",
                            "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                        }]
                    },
                    "examples": [
                        [{
                            "extention": "jpg",
                            "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                        },
                        {
                            "extention": "",
                            "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                        }]
                    ]
                }
            },
            "examples": [{
                "description": "Vacation Place",
                "distance_to_km": "5.49",
                "facility": [{
                    "name": "Market"
                },
                {
                    "name": "Office"
                },
                {
                    "name": "Mosque"
                }],
                "gallery": [{
                    "extention": "jpg",
                    "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                },
                {
                    "extention": "",
                    "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                }],
                "latitude":
                    -
                    7.950436835029361,
                "link_gmaps": "https://www.google.com/maps/search/-7.950436835029361,112.63870239257814",
                "longitude": 112.63870239257814,
                "name": "Borobudur Temple",
                "slider": [{
                    "extention": "jpg",
                    "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
                },
                {
                    "extention": "",
                    "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
                }]
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "description": "Vacation Place",
            "distance_to_km": "5.49",
            "facility": [{
                "name": "Market"
            },
            {
                "name": "Office"
            },
            {
                "name": "Mosque"
            }],
            "gallery": [{
                "extention": "jpg",
                "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
            },
            {
                "extention": "",
                "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
            }],
            "latitude":
                -
                7.950436835029361,
            "link_gmaps": "https://www.google.com/maps/search/-7.950436835029361,112.63870239257814",
            "longitude": 112.63870239257814,
            "name": "Borobudur Temple",
            "slider": [{
                "extention": "jpg",
                "picture": "http://localhost:9000/inisadev/1649315687164732800.jpg"
            },
            {
                "extention": "",
                "picture": "https://s3.loyalto.id/inisadev/public/noimage.png"
            }]
        }
    }]
}

export const VALIDATE_ADD_LOKASI_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "data",
                "fasilitas"
            ],
            "properties": {
                "data": {
                    "type": "object",
                    "default": {},
                    "title": "The data Schema",
                    "required": [
                        "alamat",
                        "bahasa",
                        "created_at",
                        "deleted_at",
                        "description",
                        "id",
                        "is_active",
                        "latitude",
                        "longitude",
                        "m_lokasi_kategori_id",
                        "name",
                        "updated_at"
                    ],
                    "properties": {
                        "alamat": {
                            "type": "null",
                            "default": null,
                            "title": "The alamat Schema",
                            "examples": [
                                null
                            ]
                        },
                        "bahasa": {
                            "type": "string",
                            "default": "",
                            "title": "The bahasa Schema",
                            "examples": [
                                "id"
                            ]
                        },
                        "created_at": {
                            "type": "string",
                            "default": "",
                            "title": "The created_at Schema",
                            "examples": [
                                "2022-06-09T09:04:26+07:00"
                            ]
                        },
                        "deleted_at": {
                            "type": "null",
                            "default": null,
                            "title": "The deleted_at Schema",
                            "examples": [
                                null
                            ]
                        },
                        "description": {
                            "type": "string",
                            "default": "",
                            "title": "The description Schema",
                            "examples": [
                                "Ini Cabang Rumah Sakit Venturo"
                            ]
                        },
                        "id": {
                            "type": "integer",
                            "default": 0,
                            "title": "The id Schema",
                            "examples": [
                                18
                            ]
                        },
                        "is_active": {
                            "type": "integer",
                            "default": 0,
                            "title": "The is_active Schema",
                            "examples": [
                                1
                            ]
                        },
                        "latitude": {
                            "type": "string",
                            "default": "",
                            "title": "The latitude Schema",
                            "examples": [
                                "-7.942348725600281"
                            ]
                        },
                        "longitude": {
                            "type": "string",
                            "default": "",
                            "title": "The longitude Schema",
                            "examples": [
                                "112.62298581228141"
                            ]
                        },
                        "m_lokasi_kategori_id": {
                            "type": "integer",
                            "default": 0,
                            "title": "The m_lokasi_kategori_id Schema",
                            "examples": [
                                1
                            ]
                        },
                        "name": {
                            "type": "string",
                            "default": "",
                            "title": "The name Schema",
                            "examples": [
                                "Rumah Sakit Venturo 2"
                            ]
                        },
                        "updated_at": {
                            "type": "string",
                            "default": "",
                            "title": "The updated_at Schema",
                            "examples": [
                                "2022-06-09T09:04:26+07:00"
                            ]
                        }
                    },
                    "examples": [{
                        "alamat": null,
                        "bahasa": "id",
                        "created_at": "2022-06-09T09:04:26+07:00",
                        "deleted_at": null,
                        "description": "Ini Cabang Rumah Sakit Venturo",
                        "id": 18,
                        "is_active": 1,
                        "latitude": "-7.942348725600281",
                        "longitude": "112.62298581228141",
                        "m_lokasi_kategori_id": 1,
                        "name": "Rumah Sakit Venturo 2",
                        "updated_at": "2022-06-09T09:04:26+07:00"
                    }]
                },
                "fasilitas": {
                    "type": "array",
                    "default": [],
                    "title": "The fasilitas Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "m_lokasi_id",
                            "name"
                        ],
                        "properties": {
                            "m_lokasi_id": {
                                "type": "integer",
                                "title": "The m_lokasi_id Schema",
                                "examples": [
                                    18
                                ]
                            },
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "UGD",
                                    "USG"
                                ]
                            }
                        },
                        "examples": [{
                            "m_lokasi_id": 18,
                            "name": "UGD"
                        },
                        {
                            "m_lokasi_id": 18,
                            "name": "USG"
                        }]
                    },
                    "examples": [
                        [{
                            "m_lokasi_id": 18,
                            "name": "UGD"
                        },
                        {
                            "m_lokasi_id": 18,
                            "name": "USG"
                        }]
                    ]
                }
            },
            "examples": [{
                "data": {
                    "alamat": null,
                    "bahasa": "id",
                    "created_at": "2022-06-09T09:04:26+07:00",
                    "deleted_at": null,
                    "description": "Ini Cabang Rumah Sakit Venturo",
                    "id": 18,
                    "is_active": 1,
                    "latitude": "-7.942348725600281",
                    "longitude": "112.62298581228141",
                    "m_lokasi_kategori_id": 1,
                    "name": "Rumah Sakit Venturo 2",
                    "updated_at": "2022-06-09T09:04:26+07:00"
                },
                "fasilitas": [{
                    "m_lokasi_id": 18,
                    "name": "UGD"
                },
                {
                    "m_lokasi_id": 18,
                    "name": "USG"
                }]
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "data": {
                "alamat": null,
                "bahasa": "id",
                "created_at": "2022-06-09T09:04:26+07:00",
                "deleted_at": null,
                "description": "Ini Cabang Rumah Sakit Venturo",
                "id": 18,
                "is_active": 1,
                "latitude": "-7.942348725600281",
                "longitude": "112.62298581228141",
                "m_lokasi_kategori_id": 1,
                "name": "Rumah Sakit Venturo 2",
                "updated_at": "2022-06-09T09:04:26+07:00"
            },
            "fasilitas": [{
                "m_lokasi_id": 18,
                "name": "UGD"
            },
            {
                "m_lokasi_id": 18,
                "name": "USG"
            }]
        }
    }]
}

export const VALIDATE_EDIT_LOKASI_SCHEMA ={
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "message",
        "data"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0,
            "title": "The status_code Schema",
            "examples": [
                200
            ]
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                "Success"
            ]
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "data",
                "fasilitas"
            ],
            "properties": {
                "data": {
                    "type": "object",
                    "default": {},
                    "title": "The data Schema",
                    "required": [
                        "bahasa",
                        "id",
                        "latitude",
                        "longitude",
                        "m_lokasi_kategori_id",
                        "name",
                        "updated_at"
                    ],
                    "properties": {
                        "bahasa": {
                            "type": "string",
                            "default": "",
                            "title": "The bahasa Schema",
                            "examples": [
                                "id"
                            ]
                        },
                        "id": {
                            "type": "integer",
                            "default": 0,
                            "title": "The id Schema",
                            "examples": [
                                6
                            ]
                        },
                        "latitude": {
                            "type": "string",
                            "default": "",
                            "title": "The latitude Schema",
                            "examples": [
                                "-7.264188839148579"
                            ]
                        },
                        "longitude": {
                            "type": "string",
                            "default": "",
                            "title": "The longitude Schema",
                            "examples": [
                                "112.69104859142386"
                            ]
                        },
                        "m_lokasi_kategori_id": {
                            "type": "integer",
                            "default": 0,
                            "title": "The m_lokasi_kategori_id Schema",
                            "examples": [
                                1
                            ]
                        },
                        "name": {
                            "type": "string",
                            "default": "",
                            "title": "The name Schema",
                            "examples": [
                                "Mitra Keluarga Surabaya"
                            ]
                        },
                        "updated_at": {
                            "type": "string",
                            "default": "",
                            "title": "The updated_at Schema",
                            "examples": [
                                "2022-06-09 09:05:42"
                            ]
                        }
                    },
                    "examples": [{
                        "bahasa": "id",
                        "id": 6,
                        "latitude": "-7.264188839148579",
                        "longitude": "112.69104859142386",
                        "m_lokasi_kategori_id": 1,
                        "name": "Mitra Keluarga Surabaya",
                        "updated_at": "2022-06-09 09:05:42"
                    }]
                },
                "fasilitas": {
                    "type": "array",
                    "default": [],
                    "title": "The fasilitas Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "m_lokasi_id",
                            "name"
                        ],
                        "properties": {
                            "m_lokasi_id": {
                                "type": "integer",
                                "title": "The m_lokasi_id Schema",
                                "examples": [
                                    6
                                ]
                            },
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "UGD",
                                    "USG"
                                ]
                            }
                        },
                        "examples": [{
                            "m_lokasi_id": 6,
                            "name": "UGD"
                        },
                        {
                            "m_lokasi_id": 6,
                            "name": "USG"
                        }]
                    },
                    "examples": [
                        [{
                            "m_lokasi_id": 6,
                            "name": "UGD"
                        },
                        {
                            "m_lokasi_id": 6,
                            "name": "USG"
                        }]
                    ]
                }
            },
            "examples": [{
                "data": {
                    "bahasa": "id",
                    "id": 6,
                    "latitude": "-7.264188839148579",
                    "longitude": "112.69104859142386",
                    "m_lokasi_kategori_id": 1,
                    "name": "Mitra Keluarga Surabaya",
                    "updated_at": "2022-06-09 09:05:42"
                },
                "fasilitas": [{
                    "m_lokasi_id": 6,
                    "name": "UGD"
                },
                {
                    "m_lokasi_id": 6,
                    "name": "USG"
                }]
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "data": {
                "bahasa": "id",
                "id": 6,
                "latitude": "-7.264188839148579",
                "longitude": "112.69104859142386",
                "m_lokasi_kategori_id": 1,
                "name": "Mitra Keluarga Surabaya",
                "updated_at": "2022-06-09 09:05:42"
            },
            "fasilitas": [{
                "m_lokasi_id": 6,
                "name": "UGD"
            },
            {
                "m_lokasi_id": 6,
                "name": "USG"
            }]
        }
    }]
}