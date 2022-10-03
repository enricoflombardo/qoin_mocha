export const VALIDATE_ADD_KK_SCHEMA = 
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
                "rincian_alamat",
                "rincian_anggota",
                "rincian_domisili",
                "rincian_kedatangan",
                "rincian_pemohon"
            ],
            "properties": {
                "rincian_alamat": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_alamat Schema",
                    "required": [
                        "alamat",
                        "kecamatan_pemohon",
                        "kelurahan_pemohon",
                        "kodepos",
                        "kota_pemohon",
                        "provinsi_pemohon",
                        "rt",
                        "rw"
                    ],
                    "properties": {
                        "alamat": {
                            "type": "string",
                            "default": "",
                            "title": "The alamat Schema",
                            "examples": [
                                "Kuto Bedah"
                            ]
                        },
                        "kecamatan_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_pemohon Schema",
                            "examples": [
                                "Jabung"
                            ]
                        },
                        "kelurahan_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_pemohon Schema",
                            "examples": [
                                "Kemantren"
                            ]
                        },
                        "kodepos": {
                            "type": "string",
                            "default": "",
                            "title": "The kodepos Schema",
                            "examples": [
                                "65155"
                            ]
                        },
                        "kota_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_pemohon Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "provinsi_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_pemohon Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        },
                        "rt": {
                            "type": "string",
                            "default": "",
                            "title": "The rt Schema",
                            "examples": [
                                "005"
                            ]
                        },
                        "rw": {
                            "type": "string",
                            "default": "",
                            "title": "The rw Schema",
                            "examples": [
                                "006"
                            ]
                        }
                    },
                    "examples": [{
                        "alamat": "Kuto Bedah",
                        "kecamatan_pemohon": "Jabung",
                        "kelurahan_pemohon": "Kemantren",
                        "kodepos": "65155",
                        "kota_pemohon": "Malang",
                        "provinsi_pemohon": "Jawa Timur",
                        "rt": "005",
                        "rw": "006"
                    }]
                },
                "rincian_anggota": {
                    "type": "array",
                    "default": [],
                    "title": "The rincian_anggota Schema",
                    "items": {
                        "type": "object",
                        "title": "A Schema",
                        "required": [
                            "nama",
                            "no_nik",
                            "status_hubungan",
                            "status_hubungan_lainnya"
                        ],
                        "properties": {
                            "nama": {
                                "type": "string",
                                "title": "The nama Schema",
                                "examples": [
                                    "Rahman",
                                    "Kirana",
                                    "Dani"
                                ]
                            },
                            "no_nik": {
                                "type": "string",
                                "title": "The no_nik Schema",
                                "examples": [
                                    "3507171769723006",
                                    "3507171769723007",
                                    "3507171769723008"
                                ]
                            },
                            "status_hubungan": {
                                "type": "string",
                                "title": "The status_hubungan Schema",
                                "examples": [
                                    "Kepala Keluarga ",
                                    "Istri ",
                                    "Anak"
                                ]
                            },
                            "status_hubungan_lainnya": {
                                "type": [
                                    "null",
                                    "string"
                                ],
                                "title": "The status_hubungan_lainnya Schema",
                                "examples": [
                                    null,
                                    "-"
                                ]
                            }
                        },
                        "examples": [{
                            "nama": "Rahman",
                            "no_nik": "3507171769723006",
                            "status_hubungan": "Kepala Keluarga ",
                            "status_hubungan_lainnya": null
                        },
                        {
                            "nama": "Kirana",
                            "no_nik": "3507171769723007",
                            "status_hubungan": "Istri ",
                            "status_hubungan_lainnya": null
                        },
                        {
                            "nama": "Dani",
                            "no_nik": "3507171769723008",
                            "status_hubungan": "Anak",
                            "status_hubungan_lainnya": "-"
                        }]
                    },
                    "examples": [
                        [{
                            "nama": "Rahman",
                            "no_nik": "3507171769723006",
                            "status_hubungan": "Kepala Keluarga ",
                            "status_hubungan_lainnya": null
                        },
                        {
                            "nama": "Kirana",
                            "no_nik": "3507171769723007",
                            "status_hubungan": "Istri ",
                            "status_hubungan_lainnya": null
                        },
                        {
                            "nama": "Dani",
                            "no_nik": "3507171769723008",
                            "status_hubungan": "Anak",
                            "status_hubungan_lainnya": "-"
                        }]
                    ]
                },
                "rincian_domisili": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_domisili Schema",
                    "required": [
                        "kecamatan_domisili",
                        "kelurahan_domisili",
                        "kota_domisili",
                        "provinsi_domisili"
                    ],
                    "properties": {
                        "kecamatan_domisili": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_domisili Schema",
                            "examples": [
                                "Jabung"
                            ]
                        },
                        "kelurahan_domisili": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_domisili Schema",
                            "examples": [
                                "Kemantren"
                            ]
                        },
                        "kota_domisili": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_domisili Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "provinsi_domisili": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_domisili Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        }
                    },
                    "examples": [{
                        "kecamatan_domisili": "Jabung",
                        "kelurahan_domisili": "Kemantren",
                        "kota_domisili": "Malang",
                        "provinsi_domisili": "Jawa Timur"
                    }]
                },
                "rincian_kedatangan": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_kedatangan Schema",
                    "required": [
                        "jam_kedatangan",
                        "tanggal_kedatangan",
                        "tempat_kedatangan"
                    ],
                    "properties": {
                        "jam_kedatangan": {
                            "type": "string",
                            "default": "",
                            "title": "The jam_kedatangan Schema",
                            "examples": [
                                ""
                            ]
                        },
                        "tanggal_kedatangan": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_kedatangan Schema",
                            "examples": [
                                ""
                            ]
                        },
                        "tempat_kedatangan": {
                            "type": "string",
                            "default": "",
                            "title": "The tempat_kedatangan Schema",
                            "examples": [
                                "Jabung"
                            ]
                        }
                    },
                    "examples": [{
                        "jam_kedatangan": "",
                        "tanggal_kedatangan": "",
                        "tempat_kedatangan": "Jabung"
                    }]
                },
                "rincian_pemohon": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_pemohon Schema",
                    "required": [
                        "alasan_permohonan",
                        "jumlah_anggota",
                        "nama_pemohon",
                        "nik_pemohon",
                        "no_registrasi",
                        "status",
                        "tanggal_permohonan"
                    ],
                    "properties": {
                        "alasan_permohonan": {
                            "type": "string",
                            "default": "",
                            "title": "The alasan_permohonan Schema",
                            "examples": [
                                "Membentuk Rumah Tangga Baru"
                            ]
                        },
                        "jumlah_anggota": {
                            "type": "integer",
                            "default": 0,
                            "title": "The jumlah_anggota Schema",
                            "examples": [
                                3
                            ]
                        },
                        "nama_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_pemohon Schema",
                            "examples": [
                                "Kirana"
                            ]
                        },
                        "nik_pemohon": {
                            "type": "string",
                            "default": "",
                            "title": "The nik_pemohon Schema",
                            "examples": [
                                "35071717697230008"
                            ]
                        },
                        "no_registrasi": {
                            "type": "string",
                            "default": "",
                            "title": "The no_registrasi Schema",
                            "examples": [
                                "NTT2022092921002"
                            ]
                        },
                        "status": {
                            "type": "string",
                            "default": "",
                            "title": "The status Schema",
                            "examples": [
                                "Diproses"
                            ]
                        },
                        "tanggal_permohonan": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_permohonan Schema",
                            "examples": [
                                "29-09-2022"
                            ]
                        }
                    },
                    "examples": [{
                        "alasan_permohonan": "Membentuk Rumah Tangga Baru",
                        "jumlah_anggota": 3,
                        "nama_pemohon": "Kirana",
                        "nik_pemohon": "35071717697230008",
                        "no_registrasi": "NTT2022092921002",
                        "status": "Diproses",
                        "tanggal_permohonan": "29-09-2022"
                    }]
                }
            },
            "examples": [{
                "rincian_alamat": {
                    "alamat": "Kuto Bedah",
                    "kecamatan_pemohon": "Jabung",
                    "kelurahan_pemohon": "Kemantren",
                    "kodepos": "65155",
                    "kota_pemohon": "Malang",
                    "provinsi_pemohon": "Jawa Timur",
                    "rt": "005",
                    "rw": "006"
                },
                "rincian_anggota": [{
                    "nama": "Rahman",
                    "no_nik": "3507171769723006",
                    "status_hubungan": "Kepala Keluarga ",
                    "status_hubungan_lainnya": null
                },
                {
                    "nama": "Kirana",
                    "no_nik": "3507171769723007",
                    "status_hubungan": "Istri ",
                    "status_hubungan_lainnya": null
                },
                {
                    "nama": "Dani",
                    "no_nik": "3507171769723008",
                    "status_hubungan": "Anak",
                    "status_hubungan_lainnya": "-"
                }],
                "rincian_domisili": {
                    "kecamatan_domisili": "Jabung",
                    "kelurahan_domisili": "Kemantren",
                    "kota_domisili": "Malang",
                    "provinsi_domisili": "Jawa Timur"
                },
                "rincian_kedatangan": {
                    "jam_kedatangan": "",
                    "tanggal_kedatangan": "",
                    "tempat_kedatangan": "Jabung"
                },
                "rincian_pemohon": {
                    "alasan_permohonan": "Membentuk Rumah Tangga Baru",
                    "jumlah_anggota": 3,
                    "nama_pemohon": "Kirana",
                    "nik_pemohon": "35071717697230008",
                    "no_registrasi": "NTT2022092921002",
                    "status": "Diproses",
                    "tanggal_permohonan": "29-09-2022"
                }
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "rincian_alamat": {
                "alamat": "Kuto Bedah",
                "kecamatan_pemohon": "Jabung",
                "kelurahan_pemohon": "Kemantren",
                "kodepos": "65155",
                "kota_pemohon": "Malang",
                "provinsi_pemohon": "Jawa Timur",
                "rt": "005",
                "rw": "006"
            },
            "rincian_anggota": [{
                "nama": "Rahman",
                "no_nik": "3507171769723006",
                "status_hubungan": "Kepala Keluarga ",
                "status_hubungan_lainnya": null
            },
            {
                "nama": "Kirana",
                "no_nik": "3507171769723007",
                "status_hubungan": "Istri ",
                "status_hubungan_lainnya": null
            },
            {
                "nama": "Dani",
                "no_nik": "3507171769723008",
                "status_hubungan": "Anak",
                "status_hubungan_lainnya": "-"
            }],
            "rincian_domisili": {
                "kecamatan_domisili": "Jabung",
                "kelurahan_domisili": "Kemantren",
                "kota_domisili": "Malang",
                "provinsi_domisili": "Jawa Timur"
            },
            "rincian_kedatangan": {
                "jam_kedatangan": "",
                "tanggal_kedatangan": "",
                "tempat_kedatangan": "Jabung"
            },
            "rincian_pemohon": {
                "alasan_permohonan": "Membentuk Rumah Tangga Baru",
                "jumlah_anggota": 3,
                "nama_pemohon": "Kirana",
                "nik_pemohon": "35071717697230008",
                "no_registrasi": "NTT2022092921002",
                "status": "Diproses",
                "tanggal_permohonan": "29-09-2022"
            }
        }
    }]
}

export const VALIDATE_GET_INDEX_BY_ID = {
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
                            "alasan_permohonan",
                            "id",
                            "jenis_permohonan",
                            "jumlah_anggota",
                            "kecamatan_domisili",
                            "kecamatan_domisili_id",
                            "kecamatan_id",
                            "kecamatan_pemohon",
                            "kelurahan_domisili",
                            "kelurahan_domisili_id",
                            "kelurahan_id",
                            "kelurahan_pemohon",
                            "kodepos",
                            "kota_domisili",
                            "kota_domisili_id",
                            "kota_id",
                            "kota_pemohon",
                            "lokasi_id",
                            "m_user_id",
                            "nama_pemohon",
                            "nik_pemohon",
                            "no_registrasi",
                            "provinsi_domisili",
                            "provinsi_domisili_id",
                            "provinsi_id",
                            "provinsi_pemohon",
                            "rt",
                            "rw",
                            "status",
                            "tempat_kedatangan"
                        ],
                        "properties": {
                            "alamat": {
                                "type": "string",
                                "default": "",
                                "title": "The alamat Schema",
                                "examples": [
                                    "KUTO BEDAH"
                                ]
                            },
                            "alasan_permohonan": {
                                "type": "string",
                                "default": "",
                                "title": "The alasan_permohonan Schema",
                                "examples": [
                                    "MEMBENTUK RUMAH TANGGA BARU"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    275
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
                            "jumlah_anggota": {
                                "type": "string",
                                "default": "",
                                "title": "The jumlah_anggota Schema",
                                "examples": [
                                    "3"
                                ]
                            },
                            "kecamatan_domisili": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_domisili Schema",
                                "examples": [
                                    "JABUNG"
                                ]
                            },
                            "kecamatan_domisili_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_domisili_id Schema",
                                "examples": [
                                    "350717"
                                ]
                            },
                            "kecamatan_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_id Schema",
                                "examples": [
                                    "350717"
                                ]
                            },
                            "kecamatan_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_pemohon Schema",
                                "examples": [
                                    "JABUNG"
                                ]
                            },
                            "kelurahan_domisili": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_domisili Schema",
                                "examples": [
                                    "KEMANTREN"
                                ]
                            },
                            "kelurahan_domisili_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_domisili_id Schema",
                                "examples": [
                                    "3507172010"
                                ]
                            },
                            "kelurahan_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_id Schema",
                                "examples": [
                                    "3507172010"
                                ]
                            },
                            "kelurahan_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_pemohon Schema",
                                "examples": [
                                    "KEMANTREN"
                                ]
                            },
                            "kodepos": {
                                "type": "string",
                                "default": "",
                                "title": "The kodepos Schema",
                                "examples": [
                                    "65155"
                                ]
                            },
                            "kota_domisili": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_domisili Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_domisili_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_domisili_id Schema",
                                "examples": [
                                    "3507"
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
                            "kota_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_pemohon Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "lokasi_id": {
                                "type": "string",
                                "default": "",
                                "title": "The lokasi_id Schema",
                                "examples": [
                                    "350717"
                                ]
                            },
                            "m_user_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The m_user_id Schema",
                                "examples": [
                                    9
                                ]
                            },
                            "nama_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_pemohon Schema",
                                "examples": [
                                    "KIRANA"
                                ]
                            },
                            "nik_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The nik_pemohon Schema",
                                "examples": [
                                    "35071717697230008"
                                ]
                            },
                            "no_registrasi": {
                                "type": "string",
                                "default": "",
                                "title": "The no_registrasi Schema",
                                "examples": [
                                    "NTT2022093021006"
                                ]
                            },
                            "provinsi_domisili": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_domisili Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_domisili_id": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_domisili_id Schema",
                                "examples": [
                                    "35"
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
                            "provinsi_pemohon": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_pemohon Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "rt": {
                                "type": "string",
                                "default": "",
                                "title": "The rt Schema",
                                "examples": [
                                    "5"
                                ]
                            },
                            "rw": {
                                "type": "string",
                                "default": "",
                                "title": "The rw Schema",
                                "examples": [
                                    "6"
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
                            "tempat_kedatangan": {
                                "type": "string",
                                "default": "",
                                "title": "The tempat_kedatangan Schema",
                                "examples": [
                                    "JABUNG"
                                ]
                            }
                        },
                        "examples": [{
                            "alamat": "KUTO BEDAH",
                            "alasan_permohonan": "MEMBENTUK RUMAH TANGGA BARU",
                            "id": 275,
                            "jenis_permohonan": "PEMBUATAN BARU",
                            "jumlah_anggota": "3",
                            "kecamatan_domisili": "JABUNG",
                            "kecamatan_domisili_id": "350717",
                            "kecamatan_id": "350717",
                            "kecamatan_pemohon": "JABUNG",
                            "kelurahan_domisili": "KEMANTREN",
                            "kelurahan_domisili_id": "3507172010",
                            "kelurahan_id": "3507172010",
                            "kelurahan_pemohon": "KEMANTREN",
                            "kodepos": "65155",
                            "kota_domisili": "MALANG",
                            "kota_domisili_id": "3507",
                            "kota_id": "3507",
                            "kota_pemohon": "MALANG",
                            "lokasi_id": "350717",
                            "m_user_id": 9,
                            "nama_pemohon": "KIRANA",
                            "nik_pemohon": "35071717697230008",
                            "no_registrasi": "NTT2022093021006",
                            "provinsi_domisili": "JAWA TIMUR",
                            "provinsi_domisili_id": "35",
                            "provinsi_id": "35",
                            "provinsi_pemohon": "JAWA TIMUR",
                            "rt": "5",
                            "rw": "6",
                            "status": "diproses",
                            "tempat_kedatangan": "JABUNG"
                        }]
                    },
                    "examples": [
                        [{
                            "alamat": "KUTO BEDAH",
                            "alasan_permohonan": "MEMBENTUK RUMAH TANGGA BARU",
                            "id": 275,
                            "jenis_permohonan": "PEMBUATAN BARU",
                            "jumlah_anggota": "3",
                            "kecamatan_domisili": "JABUNG",
                            "kecamatan_domisili_id": "350717",
                            "kecamatan_id": "350717",
                            "kecamatan_pemohon": "JABUNG",
                            "kelurahan_domisili": "KEMANTREN",
                            "kelurahan_domisili_id": "3507172010",
                            "kelurahan_id": "3507172010",
                            "kelurahan_pemohon": "KEMANTREN",
                            "kodepos": "65155",
                            "kota_domisili": "MALANG",
                            "kota_domisili_id": "3507",
                            "kota_id": "3507",
                            "kota_pemohon": "MALANG",
                            "lokasi_id": "350717",
                            "m_user_id": 9,
                            "nama_pemohon": "KIRANA",
                            "nik_pemohon": "35071717697230008",
                            "no_registrasi": "NTT2022093021006",
                            "provinsi_domisili": "JAWA TIMUR",
                            "provinsi_domisili_id": "35",
                            "provinsi_id": "35",
                            "provinsi_pemohon": "JAWA TIMUR",
                            "rt": "5",
                            "rw": "6",
                            "status": "diproses",
                            "tempat_kedatangan": "JABUNG"
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
                    "alamat": "KUTO BEDAH",
                    "alasan_permohonan": "MEMBENTUK RUMAH TANGGA BARU",
                    "id": 275,
                    "jenis_permohonan": "PEMBUATAN BARU",
                    "jumlah_anggota": "3",
                    "kecamatan_domisili": "JABUNG",
                    "kecamatan_domisili_id": "350717",
                    "kecamatan_id": "350717",
                    "kecamatan_pemohon": "JABUNG",
                    "kelurahan_domisili": "KEMANTREN",
                    "kelurahan_domisili_id": "3507172010",
                    "kelurahan_id": "3507172010",
                    "kelurahan_pemohon": "KEMANTREN",
                    "kodepos": "65155",
                    "kota_domisili": "MALANG",
                    "kota_domisili_id": "3507",
                    "kota_id": "3507",
                    "kota_pemohon": "MALANG",
                    "lokasi_id": "350717",
                    "m_user_id": 9,
                    "nama_pemohon": "KIRANA",
                    "nik_pemohon": "35071717697230008",
                    "no_registrasi": "NTT2022093021006",
                    "provinsi_domisili": "JAWA TIMUR",
                    "provinsi_domisili_id": "35",
                    "provinsi_id": "35",
                    "provinsi_pemohon": "JAWA TIMUR",
                    "rt": "5",
                    "rw": "6",
                    "status": "diproses",
                    "tempat_kedatangan": "JABUNG"
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
                "alamat": "KUTO BEDAH",
                "alasan_permohonan": "MEMBENTUK RUMAH TANGGA BARU",
                "id": 275,
                "jenis_permohonan": "PEMBUATAN BARU",
                "jumlah_anggota": "3",
                "kecamatan_domisili": "JABUNG",
                "kecamatan_domisili_id": "350717",
                "kecamatan_id": "350717",
                "kecamatan_pemohon": "JABUNG",
                "kelurahan_domisili": "KEMANTREN",
                "kelurahan_domisili_id": "3507172010",
                "kelurahan_id": "3507172010",
                "kelurahan_pemohon": "KEMANTREN",
                "kodepos": "65155",
                "kota_domisili": "MALANG",
                "kota_domisili_id": "3507",
                "kota_id": "3507",
                "kota_pemohon": "MALANG",
                "lokasi_id": "350717",
                "m_user_id": 9,
                "nama_pemohon": "KIRANA",
                "nik_pemohon": "35071717697230008",
                "no_registrasi": "NTT2022093021006",
                "provinsi_domisili": "JAWA TIMUR",
                "provinsi_domisili_id": "35",
                "provinsi_id": "35",
                "provinsi_pemohon": "JAWA TIMUR",
                "rt": "5",
                "rw": "6",
                "status": "diproses",
                "tempat_kedatangan": "JABUNG"
            }],
            "total_item": 1
        }
    }]
}


export const VALIDATE_UPDATE_KK_SCHEMA =  {
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
                "kecamatan_domisili",
                "kecamatan_domisili_id",
                "kelurahan_domisili_id",
                "kota_domisili_id",
                "nama_pemohon",
                "provinsi_domisili_id",
                "provinsi_id"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        282
                    ]
                },
                "kecamatan_domisili": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_domisili Schema",
                    "examples": [
                        "Jabung"
                    ]
                },
                "kecamatan_domisili_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_domisili_id Schema",
                    "examples": [
                        "350717"
                    ]
                },
                "kelurahan_domisili_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan_domisili_id Schema",
                    "examples": [
                        "3507172010"
                    ]
                },
                "kota_domisili_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_domisili_id Schema",
                    "examples": [
                        "3507"
                    ]
                },
                "nama_pemohon": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_pemohon Schema",
                    "examples": [
                        "KIRANA DWI ARIANTI"
                    ]
                },
                "provinsi_domisili_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_domisili_id Schema",
                    "examples": [
                        "35"
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
                "id": 282,
                "kecamatan_domisili": "Jabung",
                "kecamatan_domisili_id": "350717",
                "kelurahan_domisili_id": "3507172010",
                "kota_domisili_id": "3507",
                "nama_pemohon": "KIRANA DWI ARIANTI",
                "provinsi_domisili_id": "35",
                "provinsi_id": "35"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 282,
            "kecamatan_domisili": "Jabung",
            "kecamatan_domisili_id": "350717",
            "kelurahan_domisili_id": "3507172010",
            "kota_domisili_id": "3507",
            "nama_pemohon": "KIRANA DWI ARIANTI",
            "provinsi_domisili_id": "35",
            "provinsi_id": "35"
        }
    }]
};

export const VALIDATE_UPDATE_JADWAL_SCHEMA =  {
    
};