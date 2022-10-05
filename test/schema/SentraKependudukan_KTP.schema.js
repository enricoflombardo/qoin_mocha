
export const VALIDATE_CREATE_KTP_SCHEMA = 
{
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
                    "alamat",
                    "created_at",
                    "id",
                    "jenis_permohonan",
                    "kecamatan",
                    "kecamatan_id",
                    "kelurahan",
                    "kelurahan_id",
                    "kode_pos",
                    "kota",
                    "kota_id",
                    "lokasi_id",
                    "m_user_id",
                    "nama",
                    "no_kk",
                    "no_nik",
                    "no_registrasi",
                    "provinsi",
                    "provinsi_id",
                    "rt",
                    "rw",
                    "tempat_kedatangan",
                    "updated_at"
                ],
                "properties": {
                    "alamat": {
                        "type": "string",
                        "default": "",
                        "title": "The alamat Schema",
                        "examples": [
                            "Lorem Ipsum"
                        ]
                    },
                    "created_at": {
                        "type": "string",
                        "default": "",
                        "title": "The created_at Schema",
                        "examples": [
                            "2022-09-26 11:49:11"
                        ]
                    },
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            107
                        ]
                    },
                    "jenis_permohonan": {
                        "type": "string",
                        "default": "",
                        "title": "The jenis_permohonan Schema",
                        "examples": [
                            "Pembuatan Baru"
                        ]
                    },
                    "kecamatan": {
                        "type": "string",
                        "default": "",
                        "title": "The kecamatan Schema",
                        "examples": [
                            "Wagir"
                        ]
                    },
                    "kecamatan_id": {
                        "type": "string",
                        "default": "",
                        "title": "The kecamatan_id Schema",
                        "examples": [
                            "350721"
                        ]
                    },
                    "kelurahan": {
                        "type": "string",
                        "default": "",
                        "title": "The kelurahan Schema",
                        "examples": [
                            "Sidorahayu"
                        ]
                    },
                    "kelurahan_id": {
                        "type": "string",
                        "default": "",
                        "title": "The kelurahan_id Schema",
                        "examples": [
                            "3507210009"
                        ]
                    },
                    "kode_pos": {
                        "type": "string",
                        "default": "",
                        "title": "The kode_pos Schema",
                        "examples": [
                            "777333"
                        ]
                    },
                    "kota": {
                        "type": "string",
                        "default": "",
                        "title": "The kota Schema",
                        "examples": [
                            "Malang"
                        ]
                    },
                    "kota_id": {
                        "type": "string",
                        "default": "",
                        "title": "The kota_id Schema",
                        "examples": [
                            "3507"
                        ]
                    },
                    "lokasi_id": {
                        "type": "string",
                        "default": "",
                        "title": "The lokasi_id Schema",
                        "examples": [
                            "350721"
                        ]
                    },
                    "m_user_id": {
                        "type": "string",
                        "default": "",
                        "title": "The m_user_id Schema",
                        "examples": [
                            "20"
                        ]
                    },
                    "nama": {
                        "type": "string",
                        "default": "",
                        "title": "The nama Schema",
                        "examples": [
                            "TES KTP BARU"
                        ]
                    },
                    "no_kk": {
                        "type": "string",
                        "default": "",
                        "title": "The no_kk Schema",
                        "examples": [
                            "1111111"
                        ]
                    },
                    "no_nik": {
                        "type": "string",
                        "default": "",
                        "title": "The no_nik Schema",
                        "examples": [
                            "222222"
                        ]
                    },
                    "no_registrasi": {
                        "type": "string",
                        "default": "",
                        "title": "The no_registrasi Schema",
                        "examples": [
                            "NTT2022092611001"
                        ]
                    },
                    "provinsi": {
                        "type": "string",
                        "default": "",
                        "title": "The provinsi Schema",
                        "examples": [
                            "Jawa Timur"
                        ]
                    },
                    "provinsi_id": {
                        "type": "string",
                        "default": "",
                        "title": "The provinsi_id Schema",
                        "examples": [
                            "35"
                        ]
                    },
                    "rt": {
                        "type": "string",
                        "default": "",
                        "title": "The rt Schema",
                        "examples": [
                            "55"
                        ]
                    },
                    "rw": {
                        "type": "string",
                        "default": "",
                        "title": "The rw Schema",
                        "examples": [
                            "345"
                        ]
                    },
                    "tempat_kedatangan": {
                        "type": "string",
                        "default": "",
                        "title": "The tempat_kedatangan Schema",
                        "examples": [
                            "Wagir"
                        ]
                    },
                    "updated_at": {
                        "type": "string",
                        "default": "",
                        "title": "The updated_at Schema",
                        "examples": [
                            "2022-09-26 11:49:11"
                        ]
                    }
                },
                "examples": [{
                    "alamat": "Lorem Ipsum",
                    "created_at": "2022-09-26 11:49:11",
                    "id": 107,
                    "jenis_permohonan": "Pembuatan Baru",
                    "kecamatan": "Wagir",
                    "kecamatan_id": "350721",
                    "kelurahan": "Sidorahayu",
                    "kelurahan_id": "3507210009",
                    "kode_pos": "777333",
                    "kota": "Malang",
                    "kota_id": "3507",
                    "lokasi_id": "350721",
                    "m_user_id": "20",
                    "nama": "TES KTP BARU",
                    "no_kk": "1111111",
                    "no_nik": "222222",
                    "no_registrasi": "NTT2022092611001",
                    "provinsi": "Jawa Timur",
                    "provinsi_id": "35",
                    "rt": "55",
                    "rw": "345",
                    "tempat_kedatangan": "Wagir",
                    "updated_at": "2022-09-26 11:49:11"
                }]
            }
        },
        "examples": [{
            "status_code": 200,
            "message": "Success",
            "data": {
                "alamat": "Lorem Ipsum",
                "created_at": "2022-09-26 11:49:11",
                "id": 107,
                "jenis_permohonan": "Pembuatan Baru",
                "kecamatan": "Wagir",
                "kecamatan_id": "350721",
                "kelurahan": "Sidorahayu",
                "kelurahan_id": "3507210009",
                "kode_pos": "777333",
                "kota": "Malang",
                "kota_id": "3507",
                "lokasi_id": "350721",
                "m_user_id": "20",
                "nama": "TES KTP BARU",
                "no_kk": "1111111",
                "no_nik": "222222",
                "no_registrasi": "NTT2022092611001",
                "provinsi": "Jawa Timur",
                "provinsi_id": "35",
                "rt": "55",
                "rw": "345",
                "tempat_kedatangan": "Wagir",
                "updated_at": "2022-09-26 11:49:11"
            }
        }]
};

export const VALIDATE_GET_INDEX_BY_ID_SCHEMA = 
{
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
                        "default": {},
                        "title": "A Schema",
                        "required": [
                            "alamat",
                            "foto",
                            "id",
                            "jam_kedatangan",
                            "jenis_permohonan",
                            "kecamatan",
                            "kecamatan_id",
                            "kelurahan",
                            "kelurahan_id",
                            "kode_pos",
                            "konfirmasi_at",
                            "konfirmasi_by",
                            "kota",
                            "kota_id",
                            "link_picture",
                            "lokasi_id",
                            "m_user_id",
                            "nama",
                            "no_kk",
                            "no_nik",
                            "no_registrasi",
                            "notes",
                            "notes_operator",
                            "notes_supervisor",
                            "path",
                            "pekerjaan_lainnya",
                            "provinsi",
                            "provinsi_id",
                            "rt",
                            "rw",
                            "status",
                            "tanggal_kedatangan",
                            "tempat_kedatangan",
                            "verifikasi_at",
                            "verifikasi_by"
                        ],
                        "properties": {
                            "alamat": {
                                "type": "string",
                                "default": "",
                                "title": "The alamat Schema",
                                "examples": [
                                    "LOREM IPSUM"
                                ]
                            },
                            "foto": {
                                "type": "null",
                                "default": null,
                                "title": "The foto Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    264
                                ]
                            },
                            "jam_kedatangan": {
                                "type": "null",
                                "default": null,
                                "title": "The jam_kedatangan Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "jenis_permohonan": {
                                "type": "string",
                                "default": "",
                                "title": "The jenis_permohonan Schema",
                                "examples": [
                                    "PEMBUATAN BARU"
                                ]
                            },
                            "kecamatan": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "kecamatan_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_id Schema",
                                "examples": [
                                    "350721"
                                ]
                            },
                            "kelurahan": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan Schema",
                                "examples": [
                                    "SIDORAHAYU"
                                ]
                            },
                            "kelurahan_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_id Schema",
                                "examples": [
                                    "3507210009"
                                ]
                            },
                            "kode_pos": {
                                "type": "string",
                                "default": "",
                                "title": "The kode_pos Schema",
                                "examples": [
                                    "777333"
                                ]
                            },
                            "konfirmasi_at": {
                                "type": "null",
                                "default": null,
                                "title": "The konfirmasi_at Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "konfirmasi_by": {
                                "type": "null",
                                "default": null,
                                "title": "The konfirmasi_by Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kota": {
                                "type": "string",
                                "default": "",
                                "title": "The kota Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_id Schema",
                                "examples": [
                                    "3507"
                                ]
                            },
                            "link_picture": {
                                "type": "string",
                                "default": "",
                                "title": "The link_picture Schema",
                                "examples": [
                                    "https://s3.loyalto.id/inisadev/public/noimage.png"
                                ]
                            },
                            "lokasi_id": {
                                "type": "string",
                                "default": "",
                                "title": "The lokasi_id Schema",
                                "examples": [
                                    "350721"
                                ]
                            },
                            "m_user_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The m_user_id Schema",
                                "examples": [
                                    21
                                ]
                            },
                            "nama": {
                                "type": "string",
                                "default": "",
                                "title": "The nama Schema",
                                "examples": [
                                    "QOIN MOCHA 3"
                                ]
                            },
                            "no_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The no_kk Schema",
                                "examples": [
                                    "35097235326"
                                ]
                            },
                            "no_nik": {
                                "type": "string",
                                "default": "",
                                "title": "The no_nik Schema",
                                "examples": [
                                    "35090623445"
                                ]
                            },
                            "no_registrasi": {
                                "type": "string",
                                "default": "",
                                "title": "The no_registrasi Schema",
                                "examples": [
                                    "NTT2022092811029"
                                ]
                            },
                            "notes": {
                                "type": "null",
                                "default": null,
                                "title": "The notes Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "notes_operator": {
                                "type": "null",
                                "default": null,
                                "title": "The notes_operator Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "notes_supervisor": {
                                "type": "null",
                                "default": null,
                                "title": "The notes_supervisor Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "path": {
                                "type": "null",
                                "default": null,
                                "title": "The path Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "provinsi": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_id": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_id Schema",
                                "examples": [
                                    "35"
                                ]
                            },
                            "rt": {
                                "type": "string",
                                "default": "",
                                "title": "The rt Schema",
                                "examples": [
                                    "55"
                                ]
                            },
                            "rw": {
                                "type": "string",
                                "default": "",
                                "title": "The rw Schema",
                                "examples": [
                                    "345"
                                ]
                            },
                            "status": {
                                "type": "string",
                                "default": "",
                                "title": "The status Schema",
                                "examples": [
                                    "diproses"
                                ]
                            },
                            "tanggal_kedatangan": {
                                "type": "null",
                                "default": null,
                                "title": "The tanggal_kedatangan Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "tempat_kedatangan": {
                                "type": "string",
                                "default": "",
                                "title": "The tempat_kedatangan Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "verifikasi_at": {
                                "type": "null",
                                "default": null,
                                "title": "The verifikasi_at Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "verifikasi_by": {
                                "type": "null",
                                "default": null,
                                "title": "The verifikasi_by Schema",
                                "examples": [
                                    null
                                ]
                            }
                        },
                        "examples": [{
                            "alamat": "LOREM IPSUM",
                            "foto": null,
                            "id": 264,
                            "jam_kedatangan": null,
                            "jenis_permohonan": "PEMBUATAN BARU",
                            "kecamatan": "WAGIR",
                            "kecamatan_id": "350721",
                            "kelurahan": "SIDORAHAYU",
                            "kelurahan_id": "3507210009",
                            "kode_pos": "777333",
                            "konfirmasi_at": null,
                            "konfirmasi_by": null,
                            "kota": "MALANG",
                            "kota_id": "3507",
                            "link_picture": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "lokasi_id": "350721",
                            "m_user_id": 21,
                            "nama": "QOIN MOCHA 3",
                            "no_kk": "35097235326",
                            "no_nik": "35090623445",
                            "no_registrasi": "NTT2022092811029",
                            "notes": null,
                            "notes_operator": null,
                            "notes_supervisor": null,
                            "path": null,
                            "pekerjaan_lainnya": null,
                            "provinsi": "JAWA TIMUR",
                            "provinsi_id": "35",
                            "rt": "55",
                            "rw": "345",
                            "status": "diproses",
                            "tanggal_kedatangan": null,
                            "tempat_kedatangan": "WAGIR",
                            "verifikasi_at": null,
                            "verifikasi_by": null
                        }]
                    },
                    "examples": [
                        [{
                            "alamat": "LOREM IPSUM",
                            "foto": null,
                            "id": 264,
                            "jam_kedatangan": null,
                            "jenis_permohonan": "PEMBUATAN BARU",
                            "kecamatan": "WAGIR",
                            "kecamatan_id": "350721",
                            "kelurahan": "SIDORAHAYU",
                            "kelurahan_id": "3507210009",
                            "kode_pos": "777333",
                            "konfirmasi_at": null,
                            "konfirmasi_by": null,
                            "kota": "MALANG",
                            "kota_id": "3507",
                            "link_picture": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "lokasi_id": "350721",
                            "m_user_id": 21,
                            "nama": "QOIN MOCHA 3",
                            "no_kk": "35097235326",
                            "no_nik": "35090623445",
                            "no_registrasi": "NTT2022092811029",
                            "notes": null,
                            "notes_operator": null,
                            "notes_supervisor": null,
                            "path": null,
                            "pekerjaan_lainnya": null,
                            "provinsi": "JAWA TIMUR",
                            "provinsi_id": "35",
                            "rt": "55",
                            "rw": "345",
                            "status": "diproses",
                            "tanggal_kedatangan": null,
                            "tempat_kedatangan": "WAGIR",
                            "verifikasi_at": null,
                            "verifikasi_by": null
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        1
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "alamat": "LOREM IPSUM",
                    "foto": null,
                    "id": 264,
                    "jam_kedatangan": null,
                    "jenis_permohonan": "PEMBUATAN BARU",
                    "kecamatan": "WAGIR",
                    "kecamatan_id": "350721",
                    "kelurahan": "SIDORAHAYU",
                    "kelurahan_id": "3507210009",
                    "kode_pos": "777333",
                    "konfirmasi_at": null,
                    "konfirmasi_by": null,
                    "kota": "MALANG",
                    "kota_id": "3507",
                    "link_picture": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "lokasi_id": "350721",
                    "m_user_id": 21,
                    "nama": "QOIN MOCHA 3",
                    "no_kk": "35097235326",
                    "no_nik": "35090623445",
                    "no_registrasi": "NTT2022092811029",
                    "notes": null,
                    "notes_operator": null,
                    "notes_supervisor": null,
                    "path": null,
                    "pekerjaan_lainnya": null,
                    "provinsi": "JAWA TIMUR",
                    "provinsi_id": "35",
                    "rt": "55",
                    "rw": "345",
                    "status": "diproses",
                    "tanggal_kedatangan": null,
                    "tempat_kedatangan": "WAGIR",
                    "verifikasi_at": null,
                    "verifikasi_by": null
                }],
                "total_item": 1
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "alamat": "LOREM IPSUM",
                "foto": null,
                "id": 264,
                "jam_kedatangan": null,
                "jenis_permohonan": "PEMBUATAN BARU",
                "kecamatan": "WAGIR",
                "kecamatan_id": "350721",
                "kelurahan": "SIDORAHAYU",
                "kelurahan_id": "3507210009",
                "kode_pos": "777333",
                "konfirmasi_at": null,
                "konfirmasi_by": null,
                "kota": "MALANG",
                "kota_id": "3507",
                "link_picture": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "lokasi_id": "350721",
                "m_user_id": 21,
                "nama": "QOIN MOCHA 3",
                "no_kk": "35097235326",
                "no_nik": "35090623445",
                "no_registrasi": "NTT2022092811029",
                "notes": null,
                "notes_operator": null,
                "notes_supervisor": null,
                "path": null,
                "pekerjaan_lainnya": null,
                "provinsi": "JAWA TIMUR",
                "provinsi_id": "35",
                "rt": "55",
                "rw": "345",
                "status": "diproses",
                "tanggal_kedatangan": null,
                "tempat_kedatangan": "WAGIR",
                "verifikasi_at": null,
                "verifikasi_by": null
            }],
            "total_item": 1
        }
    }]
};

export const ValidateGetRiwayatWebSchema = 
{
    "status_code": 200,
    "message": "Success",
    "data": {
        "list": [
            {
                "alamat": "LOREM IPSUM",
                "foto": null,
                "id": 177,
                "jam_kedatangan": null,
                "jenis_permohonan": "PEMBUATAN BARU",
                "kecamatan": "WAGIR",
                "kecamatan_id": "350721",
                "kelurahan": "SIDORAHAYU",
                "kelurahan_id": "3507210009",
                "kode_pos": "777333",
                "konfirmasi_at": null,
                "konfirmasi_by": null,
                "kota": "MALANG",
                "kota_id": "3507",
                "link_picture": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "lokasi_id": "350721",
                "m_user_id": 21,
                "nama": "QOIN MOCHA 3",
                "no_kk": "35097235326",
                "no_nik": "35090623445",
                "no_registrasi": "NTT2022092711017",
                "notes": null,
                "notes_operator": null,
                "notes_supervisor": null,
                "path": null,
                "pekerjaan_lainnya": null,
                "provinsi": "JAWA TIMUR",
                "provinsi_id": "35",
                "rt": "55",
                "rw": "345",
                "status": "diproses",
                "tanggal_kedatangan": null,
                "tempat_kedatangan": "WAGIR",
                "verifikasi_at": null,
                "verifikasi_by": null
            }
        ],
        "total_item": 1
    }
}

export const VALIDATE_UPDATE_KTP_SCHEMA = 
{
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
                "id",
                "kecamatan",
                "kecamatan_id",
                "kota",
                "kota_id",
                "provinsi",
                "provinsi_id"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        171
                    ]
                },
                "kecamatan": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan Schema",
                    "examples": [
                        "p"
                    ]
                },
                "kecamatan_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_id Schema",
                    "examples": [
                        "3507210"
                    ]
                },
                "kota": {
                    "type": "string",
                    "default": "",
                    "title": "The kota Schema",
                    "examples": [
                        "mlg"
                    ]
                },
                "kota_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_id Schema",
                    "examples": [
                        "3507"
                    ]
                },
                "provinsi": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi Schema",
                    "examples": [
                        "Test"
                    ]
                },
                "provinsi_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_id Schema",
                    "examples": [
                        "35"
                    ]
                }
            },
            "examples": [{
                "id": 171,
                "kecamatan": "p",
                "kecamatan_id": "3507210",
                "kota": "mlg",
                "kota_id": "3507",
                "provinsi": "Test",
                "provinsi_id": "35"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 171,
            "kecamatan": "p",
            "kecamatan_id": "3507210",
            "kota": "mlg",
            "kota_id": "3507",
            "provinsi": "Test",
            "provinsi_id": "35"
        }
    }]
}

export const VALIDATE_UPDATE_STATUS_VERIFIKASI_SCHEMA = 
{
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
                "id",
                "notes",
                "updated_at"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        177
                    ]
                },
                "notes": {
                    "type": "string",
                    "default": "",
                    "title": "The notes Schema",
                    "examples": [
                        "test"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-09-27 15:35:54"
                    ]
                }
            },
            "examples": [{
                "id": 177,
                "notes": "test",
                "updated_at": "2022-09-27 15:35:54"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 177,
            "notes": "test",
            "updated_at": "2022-09-27 15:35:54"
        }
    }]
}

export const VALIDATE_UPDATE_JADWAL_SCHEMA = 
{
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
                    "status",
                    "tanggal_kedatangan"
                ],
                "properties": {
                    "id": {
                        "type": "integer",
                        "default": 0,
                        "title": "The id Schema",
                        "examples": [
                            177
                        ]
                    },
                    "status": {
                        "type": "string",
                        "default": "",
                        "title": "The status Schema",
                        "examples": [
                            "dijadwalkan"
                        ]
                    },
                    "tanggal_kedatangan": {
                        "type": "string",
                        "default": "",
                        "title": "The tanggal_kedatangan Schema",
                        "examples": [
                            "2021-12-12"
                        ]
                    }
                },
                "examples": [{
                    "id": 177,
                    "status": "dijadwalkan",
                    "tanggal_kedatangan": "2021-12-12"
                }]
            },
            "examples": [
                [{
                    "id": 177,
                    "status": "dijadwalkan",
                    "tanggal_kedatangan": "2021-12-12"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "id": 177,
            "status": "dijadwalkan",
            "tanggal_kedatangan": "2021-12-12"
        }]
    }]
};

export const VALIDATE_UPDATE_STATUS = {
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
                "id",
                "status"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        62
                    ]
                },
                "status": {
                    "type": "string",
                    "default": "",
                    "title": "The status Schema",
                    "examples": [
                        "dibatalkan"
                    ]
                }
            },
            "examples": [{
                "id": 62,
                "status": "dibatalkan"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 62,
            "status": "dibatalkan"
        }
    }]
};


const VALID_SCHEMA_ADD_KTP = {
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
                "alamat",
                "created_at",
                "id",
                "jenis_permohonan",
                "kecamatan",
                "kecamatan_id",
                "kelurahan",
                "kelurahan_id",
                "kode_pos",
                "kota",
                "kota_id",
                "lokasi_id",
                "m_user_id",
                "nama",
                "no_kk",
                "no_nik",
                "no_registrasi",
                "provinsi",
                "provinsi_id",
                "rt",
                "rw",
                "tempat_kedatangan",
                "updated_at"
            ],
            "properties": {
                "alamat": {
                    "type": "string",
                    "default": "",
                    "title": "The alamat Schema",
                    "examples": [
                        "Lorem Ipsum"
                    ]
                },
                "created_at": {
                    "type": "string",
                    "default": "",
                    "title": "The created_at Schema",
                    "examples": [
                        "2022-09-29 10:21:03"
                    ]
                },
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        239
                    ]
                },
                "jenis_permohonan": {
                    "type": "string",
                    "default": "",
                    "title": "The jenis_permohonan Schema",
                    "examples": [
                        "Pembuatan Baru"
                    ]
                },
                "kecamatan": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan Schema",
                    "examples": [
                        "Wagir"
                    ]
                },
                "kecamatan_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_id Schema",
                    "examples": [
                        "350721"
                    ]
                },
                "kelurahan": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan Schema",
                    "examples": [
                        "Sidorahayu"
                    ]
                },
                "kelurahan_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan_id Schema",
                    "examples": [
                        "3507210009"
                    ]
                },
                "kode_pos": {
                    "type": "string",
                    "default": "",
                    "title": "The kode_pos Schema",
                    "examples": [
                        "777333"
                    ]
                },
                "kota": {
                    "type": "string",
                    "default": "",
                    "title": "The kota Schema",
                    "examples": [
                        "Malang"
                    ]
                },
                "kota_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_id Schema",
                    "examples": [
                        "3507"
                    ]
                },
                "lokasi_id": {
                    "type": "string",
                    "default": "",
                    "title": "The lokasi_id Schema",
                    "examples": [
                        "350721"
                    ]
                },
                "m_user_id": {
                    "type": "string",
                    "default": "",
                    "title": "The m_user_id Schema",
                    "examples": [
                        "21"
                    ]
                },
                "nama": {
                    "type": "string",
                    "default": "",
                    "title": "The nama Schema",
                    "examples": [
                        "Qoin Mocha"
                    ]
                },
                "no_kk": {
                    "type": "string",
                    "default": "",
                    "title": "The no_kk Schema",
                    "examples": [
                        "35097235326"
                    ]
                },
                "no_nik": {
                    "type": "string",
                    "default": "",
                    "title": "The no_nik Schema",
                    "examples": [
                        "35090623445"
                    ]
                },
                "no_registrasi": {
                    "type": "string",
                    "default": "",
                    "title": "The no_registrasi Schema",
                    "examples": [
                        "NTT2022092911001"
                    ]
                },
                "provinsi": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi Schema",
                    "examples": [
                        "Jawa Timur"
                    ]
                },
                "provinsi_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_id Schema",
                    "examples": [
                        "35"
                    ]
                },
                "rt": {
                    "type": "string",
                    "default": "",
                    "title": "The rt Schema",
                    "examples": [
                        "55"
                    ]
                },
                "rw": {
                    "type": "string",
                    "default": "",
                    "title": "The rw Schema",
                    "examples": [
                        "345"
                    ]
                },
                "tempat_kedatangan": {
                    "type": "string",
                    "default": "",
                    "title": "The tempat_kedatangan Schema",
                    "examples": [
                        "Wagir"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-09-29 10:21:03"
                    ]
                }
            },
            "examples": [{
                "alamat": "Lorem Ipsum",
                "created_at": "2022-09-29 10:21:03",
                "id": 239,
                "jenis_permohonan": "Pembuatan Baru",
                "kecamatan": "Wagir",
                "kecamatan_id": "350721",
                "kelurahan": "Sidorahayu",
                "kelurahan_id": "3507210009",
                "kode_pos": "777333",
                "kota": "Malang",
                "kota_id": "3507",
                "lokasi_id": "350721",
                "m_user_id": "21",
                "nama": "Qoin Mocha",
                "no_kk": "35097235326",
                "no_nik": "35090623445",
                "no_registrasi": "NTT2022092911001",
                "provinsi": "Jawa Timur",
                "provinsi_id": "35",
                "rt": "55",
                "rw": "345",
                "tempat_kedatangan": "Wagir",
                "updated_at": "2022-09-29 10:21:03"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "alamat": "Lorem Ipsum",
            "created_at": "2022-09-29 10:21:03",
            "id": 239,
            "jenis_permohonan": "Pembuatan Baru",
            "kecamatan": "Wagir",
            "kecamatan_id": "350721",
            "kelurahan": "Sidorahayu",
            "kelurahan_id": "3507210009",
            "kode_pos": "777333",
            "kota": "Malang",
            "kota_id": "3507",
            "lokasi_id": "350721",
            "m_user_id": "21",
            "nama": "Qoin Mocha",
            "no_kk": "35097235326",
            "no_nik": "35090623445",
            "no_registrasi": "NTT2022092911001",
            "provinsi": "Jawa Timur",
            "provinsi_id": "35",
            "rt": "55",
            "rw": "345",
            "tempat_kedatangan": "Wagir",
            "updated_at": "2022-09-29 10:21:03"
        }
    }]
}