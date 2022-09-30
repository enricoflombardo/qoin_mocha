export const ValidateAddkkKSchema = 
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

export const ValidateGetAllDocumentSchema = {
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
                "total_items"
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
                            "UserId",
                            "created_at",
                            "doc_id",
                            "id",
                            "job_adj_id",
                            "job_assign_to",
                            "job_status",
                            "nama",
                            "no_registrasi",
                            "type"
                        ],
                        "properties": {
                            "UserId": {
                                "type": "integer",
                                "default": 0,
                                "title": "The UserId Schema",
                                "examples": [
                                    2
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "default": "",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-09-30 09:04:50"
                                ]
                            },
                            "doc_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The doc_id Schema",
                                "examples": [
                                    56
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    270
                                ]
                            },
                            "job_adj_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The job_adj_id Schema",
                                "examples": [
                                    1619
                                ]
                            },
                            "job_assign_to": {
                                "type": "string",
                                "default": "",
                                "title": "The job_assign_to Schema",
                                "examples": [
                                    "ADMIN LVTIGA"
                                ]
                            },
                            "job_status": {
                                "type": "integer",
                                "default": 0,
                                "title": "The job_status Schema",
                                "examples": [
                                    0
                                ]
                            },
                            "nama": {
                                "type": "string",
                                "default": "",
                                "title": "The nama Schema",
                                "examples": [
                                    "KIRANA"
                                ]
                            },
                            "no_registrasi": {
                                "type": "string",
                                "default": "",
                                "title": "The no_registrasi Schema",
                                "examples": [
                                    "NTT2022093021001"
                                ]
                            },
                            "type": {
                                "type": "string",
                                "default": "",
                                "title": "The type Schema",
                                "examples": [
                                    "M_KK"
                                ]
                            }
                        },
                        "examples": [{
                            "UserId": 2,
                            "created_at": "2022-09-30 09:04:50",
                            "doc_id": 56,
                            "id": 270,
                            "job_adj_id": 1619,
                            "job_assign_to": "ADMIN LVTIGA",
                            "job_status": 0,
                            "nama": "KIRANA",
                            "no_registrasi": "NTT2022093021001",
                            "type": "M_KK"
                        }]
                    },
                    "examples": [
                        [{
                            "UserId": 2,
                            "created_at": "2022-09-30 09:04:50",
                            "doc_id": 56,
                            "id": 270,
                            "job_adj_id": 1619,
                            "job_assign_to": "ADMIN LVTIGA",
                            "job_status": 0,
                            "nama": "KIRANA",
                            "no_registrasi": "NTT2022093021001",
                            "type": "M_KK"
                        }]
                    ]
                },
                "total_items": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_items Schema",
                    "examples": [
                        1
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "UserId": 2,
                    "created_at": "2022-09-30 09:04:50",
                    "doc_id": 56,
                    "id": 270,
                    "job_adj_id": 1619,
                    "job_assign_to": "ADMIN LVTIGA",
                    "job_status": 0,
                    "nama": "KIRANA",
                    "no_registrasi": "NTT2022093021001",
                    "type": "M_KK"
                }],
                "total_items": 1
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "UserId": 2,
                "created_at": "2022-09-30 09:04:50",
                "doc_id": 56,
                "id": 270,
                "job_adj_id": 1619,
                "job_assign_to": "ADMIN LVTIGA",
                "job_status": 0,
                "nama": "KIRANA",
                "no_registrasi": "NTT2022093021001",
                "type": "M_KK"
            }],
            "total_items": 1
        }
    }]
}

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

export const ValidateUpdateKTPSchema = 
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

export const ValidateUpdateStatusVerifSchema = 
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

export const ValidateKtpJadwalSchema = 
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