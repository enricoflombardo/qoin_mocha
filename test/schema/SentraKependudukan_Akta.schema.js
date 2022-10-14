export const VALID_ADD_AKTA_SCHEMA = {
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
                "rincian_ayah",
                "rincian_biodata_anak",
                "rincian_ibu",
                "rincian_kedatangan",
                "rincian_kk",
                "rincian_pelapor",
                "rincian_pemohon"
            ],
            "properties": {
                "rincian_ayah": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_ayah Schema",
                    "required": [
                        "alamat_ayah",
                        "kebangsaan_ayah",
                        "kecamatan_ayah",
                        "kelurahan_ayah",
                        "kewarganegaraan_ayah",
                        "kota_ayah",
                        "nama_ayah",
                        "nik_ayah",
                        "pekerjaan_ayah",
                        "provinsi_ayah",
                        "tgl_lahir_ayah"
                    ],
                    "properties": {
                        "alamat_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The alamat_ayah Schema",
                            "examples": [
                                "Jl. Rumah Keluarga"
                            ]
                        },
                        "kebangsaan_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The kebangsaan_ayah Schema",
                            "examples": [
                                "Indonesia"
                            ]
                        },
                        "kecamatan_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_ayah Schema",
                            "examples": [
                                "Wagir"
                            ]
                        },
                        "kelurahan_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_ayah Schema",
                            "examples": [
                                "Sidorahayu"
                            ]
                        },
                        "kewarganegaraan_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The kewarganegaraan_ayah Schema",
                            "examples": [
                                "Wni"
                            ]
                        },
                        "kota_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_ayah Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "nama_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_ayah Schema",
                            "examples": [
                                "Si Ayah"
                            ]
                        },
                        "nik_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The nik_ayah Schema",
                            "examples": [
                                "54321"
                            ]
                        },
                        "pekerjaan_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The pekerjaan_ayah Schema",
                            "examples": [
                                "Korupsi"
                            ]
                        },
                        "provinsi_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_ayah Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        },
                        "tgl_lahir_ayah": {
                            "type": "string",
                            "default": "",
                            "title": "The tgl_lahir_ayah Schema",
                            "examples": [
                                "15-03-1981"
                            ]
                        }
                    },
                    "examples": [{
                        "alamat_ayah": "Jl. Rumah Keluarga",
                        "kebangsaan_ayah": "Indonesia",
                        "kecamatan_ayah": "Wagir",
                        "kelurahan_ayah": "Sidorahayu",
                        "kewarganegaraan_ayah": "Wni",
                        "kota_ayah": "Malang",
                        "nama_ayah": "Si Ayah",
                        "nik_ayah": "54321",
                        "pekerjaan_ayah": "Korupsi",
                        "provinsi_ayah": "Jawa Timur",
                        "tgl_lahir_ayah": "15-03-1981"
                    }]
                },
                "rincian_biodata_anak": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_biodata_anak Schema",
                    "required": [
                        "berat_bayi",
                        "dengan_orang_tua",
                        "jenis_kelahiran",
                        "jenis_kelamin",
                        "kelahiran_ke",
                        "kelahiran_ke_spell_en",
                        "kelahiran_ke_spell_id",
                        "nama_lengkap",
                        "panjang_bayi",
                        "penolong_kelahiran",
                        "pukul_kelahiran",
                        "tahun_spell_en",
                        "tahun_spell_id",
                        "tanggal_lahir",
                        "tanggal_lahir_spell_en",
                        "tanggal_lahir_spell_id",
                        "tempat_dilahirkan",
                        "tempat_lahir"
                    ],
                    "properties": {
                        "berat_bayi": {
                            "type": "number",
                            "default": 0.0,
                            "title": "The berat_bayi Schema",
                            "examples": [
                                5.6
                            ]
                        },
                        "dengan_orang_tua": {
                            "type": "string",
                            "default": "",
                            "title": "The dengan_orang_tua Schema",
                            "examples": [
                                "YA"
                            ]
                        },
                        "jenis_kelahiran": {
                            "type": "string",
                            "default": "",
                            "title": "The jenis_kelahiran Schema",
                            "examples": [
                                "Tunggal"
                            ]
                        },
                        "jenis_kelamin": {
                            "type": "string",
                            "default": "",
                            "title": "The jenis_kelamin Schema",
                            "examples": [
                                "Laki-Laki"
                            ]
                        },
                        "kelahiran_ke": {
                            "type": "integer",
                            "default": 0,
                            "title": "The kelahiran_ke Schema",
                            "examples": [
                                1
                            ]
                        },
                        "kelahiran_ke_spell_en": {
                            "type": "string",
                            "default": "",
                            "title": "The kelahiran_ke_spell_en Schema",
                            "examples": [
                                "first"
                            ]
                        },
                        "kelahiran_ke_spell_id": {
                            "type": "string",
                            "default": "",
                            "title": "The kelahiran_ke_spell_id Schema",
                            "examples": [
                                "satu"
                            ]
                        },
                        "nama_lengkap": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_lengkap Schema",
                            "examples": [
                                "Si Anak"
                            ]
                        },
                        "panjang_bayi": {
                            "type": "number",
                            "default": 0.0,
                            "title": "The panjang_bayi Schema",
                            "examples": [
                                50.7
                            ]
                        },
                        "penolong_kelahiran": {
                            "type": "string",
                            "default": "",
                            "title": "The penolong_kelahiran Schema",
                            "examples": [
                                "Dokter"
                            ]
                        },
                        "pukul_kelahiran": {
                            "type": "string",
                            "default": "",
                            "title": "The pukul_kelahiran Schema",
                            "examples": [
                                "00:00:19"
                            ]
                        },
                        "tahun_spell_en": {
                            "type": "string",
                            "default": "",
                            "title": "The tahun_spell_en Schema",
                            "examples": [
                                "one thousand nine hundred ninety nine"
                            ]
                        },
                        "tahun_spell_id": {
                            "type": "string",
                            "default": "",
                            "title": "The tahun_spell_id Schema",
                            "examples": [
                                "seribu sembilan ratus sembilan puluh sembilan"
                            ]
                        },
                        "tanggal_lahir": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_lahir Schema",
                            "examples": [
                                "05-10-1999"
                            ]
                        },
                        "tanggal_lahir_spell_en": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_lahir_spell_en Schema",
                            "examples": [
                                "five October"
                            ]
                        },
                        "tanggal_lahir_spell_id": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_lahir_spell_id Schema",
                            "examples": [
                                "lima Oktober"
                            ]
                        },
                        "tempat_dilahirkan": {
                            "type": "string",
                            "default": "",
                            "title": "The tempat_dilahirkan Schema",
                            "examples": [
                                "Gubuk Sentosa"
                            ]
                        },
                        "tempat_lahir": {
                            "type": "string",
                            "default": "",
                            "title": "The tempat_lahir Schema",
                            "examples": [
                                "Malang"
                            ]
                        }
                    },
                    "examples": [{
                        "berat_bayi": 5.6,
                        "dengan_orang_tua": "YA",
                        "jenis_kelahiran": "Tunggal",
                        "jenis_kelamin": "Laki-Laki",
                        "kelahiran_ke": 1,
                        "kelahiran_ke_spell_en": "first",
                        "kelahiran_ke_spell_id": "satu",
                        "nama_lengkap": "Si Anak",
                        "panjang_bayi": 50.7,
                        "penolong_kelahiran": "Dokter",
                        "pukul_kelahiran": "00:00:19",
                        "tahun_spell_en": "one thousand nine hundred ninety nine",
                        "tahun_spell_id": "seribu sembilan ratus sembilan puluh sembilan",
                        "tanggal_lahir": "05-10-1999",
                        "tanggal_lahir_spell_en": "five October",
                        "tanggal_lahir_spell_id": "lima Oktober",
                        "tempat_dilahirkan": "Gubuk Sentosa",
                        "tempat_lahir": "Malang"
                    }]
                },
                "rincian_ibu": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_ibu Schema",
                    "required": [
                        "alamat_ibu",
                        "kebangsaan_ibu",
                        "kecamatan_ibu",
                        "kelurahan_ibu",
                        "kewarganegaraan_ibu",
                        "kota_ibu",
                        "nama_ibu",
                        "nik_ibu",
                        "pekerjaan_ibu",
                        "provinsi_ibu",
                        "tanggal_pernikahan_ibu",
                        "tgl_lahir_ibu"
                    ],
                    "properties": {
                        "alamat_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The alamat_ibu Schema",
                            "examples": [
                                "Jl. Rumah Keluarga "
                            ]
                        },
                        "kebangsaan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The kebangsaan_ibu Schema",
                            "examples": [
                                "Amsterdam"
                            ]
                        },
                        "kecamatan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_ibu Schema",
                            "examples": [
                                "Wagir"
                            ]
                        },
                        "kelurahan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_ibu Schema",
                            "examples": [
                                "Sidorahayu"
                            ]
                        },
                        "kewarganegaraan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The kewarganegaraan_ibu Schema",
                            "examples": [
                                "Wna"
                            ]
                        },
                        "kota_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_ibu Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "nama_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_ibu Schema",
                            "examples": [
                                "Si Ibu"
                            ]
                        },
                        "nik_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The nik_ibu Schema",
                            "examples": [
                                "12345"
                            ]
                        },
                        "pekerjaan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The pekerjaan_ibu Schema",
                            "examples": [
                                "Ibu Rumah Tangga  "
                            ]
                        },
                        "provinsi_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_ibu Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        },
                        "tanggal_pernikahan_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The tanggal_pernikahan_ibu Schema",
                            "examples": [
                                "20-10-1998"
                            ]
                        },
                        "tgl_lahir_ibu": {
                            "type": "string",
                            "default": "",
                            "title": "The tgl_lahir_ibu Schema",
                            "examples": [
                                "05-10-1979"
                            ]
                        }
                    },
                    "examples": [{
                        "alamat_ibu": "Jl. Rumah Keluarga ",
                        "kebangsaan_ibu": "Amsterdam",
                        "kecamatan_ibu": "Wagir",
                        "kelurahan_ibu": "Sidorahayu",
                        "kewarganegaraan_ibu": "Wna",
                        "kota_ibu": "Malang",
                        "nama_ibu": "Si Ibu",
                        "nik_ibu": "12345",
                        "pekerjaan_ibu": "Ibu Rumah Tangga  ",
                        "provinsi_ibu": "Jawa Timur",
                        "tanggal_pernikahan_ibu": "20-10-1998",
                        "tgl_lahir_ibu": "05-10-1979"
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
                                "Wagir"
                            ]
                        }
                    },
                    "examples": [{
                        "jam_kedatangan": "",
                        "tanggal_kedatangan": "",
                        "tempat_kedatangan": "Wagir"
                    }]
                },
                "rincian_kk": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_kk Schema",
                    "required": [
                        "kecamatan_kk",
                        "kelurahan_kk",
                        "kota_kk",
                        "nama_kepala_keluarga",
                        "no_kk",
                        "provinsi_kk"
                    ],
                    "properties": {
                        "kecamatan_kk": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_kk Schema",
                            "examples": [
                                "Wagir"
                            ]
                        },
                        "kelurahan_kk": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_kk Schema",
                            "examples": [
                                "Sidorahayu"
                            ]
                        },
                        "kota_kk": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_kk Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "nama_kepala_keluarga": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_kepala_keluarga Schema",
                            "examples": [
                                "Si Bapak"
                            ]
                        },
                        "no_kk": {
                            "type": "string",
                            "default": "",
                            "title": "The no_kk Schema",
                            "examples": [
                                "21212"
                            ]
                        },
                        "provinsi_kk": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_kk Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        }
                    },
                    "examples": [{
                        "kecamatan_kk": "Wagir",
                        "kelurahan_kk": "Sidorahayu",
                        "kota_kk": "Malang",
                        "nama_kepala_keluarga": "Si Bapak",
                        "no_kk": "21212",
                        "provinsi_kk": "Jawa Timur"
                    }]
                },
                "rincian_pelapor": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_pelapor Schema",
                    "required": [
                        "jenis_kelamin",
                        "kecamatan_pelapor",
                        "kelurahan_pelapor",
                        "kota_pelapor",
                        "nama_lengkap",
                        "nik_pelapor",
                        "pekerjaan_pelapor",
                        "provinsi_pelapor",
                        "umur"
                    ],
                    "properties": {
                        "jenis_kelamin": {
                            "type": "string",
                            "default": "",
                            "title": "The jenis_kelamin Schema",
                            "examples": [
                                "Laki-Laki "
                            ]
                        },
                        "kecamatan_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The kecamatan_pelapor Schema",
                            "examples": [
                                "Wagir"
                            ]
                        },
                        "kelurahan_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The kelurahan_pelapor Schema",
                            "examples": [
                                "Sidorahayu"
                            ]
                        },
                        "kota_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The kota_pelapor Schema",
                            "examples": [
                                "Malang"
                            ]
                        },
                        "nama_lengkap": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_lengkap Schema",
                            "examples": [
                                "Tes Akta Lahir Baru"
                            ]
                        },
                        "nik_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The nik_pelapor Schema",
                            "examples": [
                                "555555"
                            ]
                        },
                        "pekerjaan_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The pekerjaan_pelapor Schema",
                            "examples": [
                                "Tukang Lapor "
                            ]
                        },
                        "provinsi_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The provinsi_pelapor Schema",
                            "examples": [
                                "Jawa Timur"
                            ]
                        },
                        "umur": {
                            "type": "integer",
                            "default": 0,
                            "title": "The umur Schema",
                            "examples": [
                                15
                            ]
                        }
                    },
                    "examples": [{
                        "jenis_kelamin": "Laki-Laki ",
                        "kecamatan_pelapor": "Wagir",
                        "kelurahan_pelapor": "Sidorahayu",
                        "kota_pelapor": "Malang",
                        "nama_lengkap": "Tes Akta Lahir Baru",
                        "nik_pelapor": "555555",
                        "pekerjaan_pelapor": "Tukang Lapor ",
                        "provinsi_pelapor": "Jawa Timur",
                        "umur": 15
                    }]
                },
                "rincian_pemohon": {
                    "type": "object",
                    "default": {},
                    "title": "The rincian_pemohon Schema",
                    "required": [
                        "nama_pelapor",
                        "nik_pelapor",
                        "no_registrasi",
                        "status",
                        "tanggal_permohonan"
                    ],
                    "properties": {
                        "nama_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The nama_pelapor Schema",
                            "examples": [
                                "Tes Akta Lahir Baru"
                            ]
                        },
                        "nik_pelapor": {
                            "type": "string",
                            "default": "",
                            "title": "The nik_pelapor Schema",
                            "examples": [
                                "555555"
                            ]
                        },
                        "no_registrasi": {
                            "type": "string",
                            "default": "",
                            "title": "The no_registrasi Schema",
                            "examples": [
                                "NTT2022100331026"
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
                                "03-10-2022 13:30"
                            ]
                        }
                    },
                    "examples": [{
                        "nama_pelapor": "Tes Akta Lahir Baru",
                        "nik_pelapor": "555555",
                        "no_registrasi": "NTT2022100331026",
                        "status": "Diproses",
                        "tanggal_permohonan": "03-10-2022 13:30"
                    }]
                }
            },
            "examples": [{
                "rincian_ayah": {
                    "alamat_ayah": "Jl. Rumah Keluarga",
                    "kebangsaan_ayah": "Indonesia",
                    "kecamatan_ayah": "Wagir",
                    "kelurahan_ayah": "Sidorahayu",
                    "kewarganegaraan_ayah": "Wni",
                    "kota_ayah": "Malang",
                    "nama_ayah": "Si Ayah",
                    "nik_ayah": "54321",
                    "pekerjaan_ayah": "Korupsi",
                    "provinsi_ayah": "Jawa Timur",
                    "tgl_lahir_ayah": "15-03-1981"
                },
                "rincian_biodata_anak": {
                    "berat_bayi": 5.6,
                    "dengan_orang_tua": "YA",
                    "jenis_kelahiran": "Tunggal",
                    "jenis_kelamin": "Laki-Laki",
                    "kelahiran_ke": 1,
                    "kelahiran_ke_spell_en": "first",
                    "kelahiran_ke_spell_id": "satu",
                    "nama_lengkap": "Si Anak",
                    "panjang_bayi": 50.7,
                    "penolong_kelahiran": "Dokter",
                    "pukul_kelahiran": "00:00:19",
                    "tahun_spell_en": "one thousand nine hundred ninety nine",
                    "tahun_spell_id": "seribu sembilan ratus sembilan puluh sembilan",
                    "tanggal_lahir": "05-10-1999",
                    "tanggal_lahir_spell_en": "five October",
                    "tanggal_lahir_spell_id": "lima Oktober",
                    "tempat_dilahirkan": "Gubuk Sentosa",
                    "tempat_lahir": "Malang"
                },
                "rincian_ibu": {
                    "alamat_ibu": "Jl. Rumah Keluarga ",
                    "kebangsaan_ibu": "Amsterdam",
                    "kecamatan_ibu": "Wagir",
                    "kelurahan_ibu": "Sidorahayu",
                    "kewarganegaraan_ibu": "Wna",
                    "kota_ibu": "Malang",
                    "nama_ibu": "Si Ibu",
                    "nik_ibu": "12345",
                    "pekerjaan_ibu": "Ibu Rumah Tangga  ",
                    "provinsi_ibu": "Jawa Timur",
                    "tanggal_pernikahan_ibu": "20-10-1998",
                    "tgl_lahir_ibu": "05-10-1979"
                },
                "rincian_kedatangan": {
                    "jam_kedatangan": "",
                    "tanggal_kedatangan": "",
                    "tempat_kedatangan": "Wagir"
                },
                "rincian_kk": {
                    "kecamatan_kk": "Wagir",
                    "kelurahan_kk": "Sidorahayu",
                    "kota_kk": "Malang",
                    "nama_kepala_keluarga": "Si Bapak",
                    "no_kk": "21212",
                    "provinsi_kk": "Jawa Timur"
                },
                "rincian_pelapor": {
                    "jenis_kelamin": "Laki-Laki ",
                    "kecamatan_pelapor": "Wagir",
                    "kelurahan_pelapor": "Sidorahayu",
                    "kota_pelapor": "Malang",
                    "nama_lengkap": "Tes Akta Lahir Baru",
                    "nik_pelapor": "555555",
                    "pekerjaan_pelapor": "Tukang Lapor ",
                    "provinsi_pelapor": "Jawa Timur",
                    "umur": 15
                },
                "rincian_pemohon": {
                    "nama_pelapor": "Tes Akta Lahir Baru",
                    "nik_pelapor": "555555",
                    "no_registrasi": "NTT2022100331026",
                    "status": "Diproses",
                    "tanggal_permohonan": "03-10-2022 13:30"
                }
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "rincian_ayah": {
                "alamat_ayah": "Jl. Rumah Keluarga",
                "kebangsaan_ayah": "Indonesia",
                "kecamatan_ayah": "Wagir",
                "kelurahan_ayah": "Sidorahayu",
                "kewarganegaraan_ayah": "Wni",
                "kota_ayah": "Malang",
                "nama_ayah": "Si Ayah",
                "nik_ayah": "54321",
                "pekerjaan_ayah": "Korupsi",
                "provinsi_ayah": "Jawa Timur",
                "tgl_lahir_ayah": "15-03-1981"
            },
            "rincian_biodata_anak": {
                "berat_bayi": 5.6,
                "dengan_orang_tua": "YA",
                "jenis_kelahiran": "Tunggal",
                "jenis_kelamin": "Laki-Laki",
                "kelahiran_ke": 1,
                "kelahiran_ke_spell_en": "first",
                "kelahiran_ke_spell_id": "satu",
                "nama_lengkap": "Si Anak",
                "panjang_bayi": 50.7,
                "penolong_kelahiran": "Dokter",
                "pukul_kelahiran": "00:00:19",
                "tahun_spell_en": "one thousand nine hundred ninety nine",
                "tahun_spell_id": "seribu sembilan ratus sembilan puluh sembilan",
                "tanggal_lahir": "05-10-1999",
                "tanggal_lahir_spell_en": "five October",
                "tanggal_lahir_spell_id": "lima Oktober",
                "tempat_dilahirkan": "Gubuk Sentosa",
                "tempat_lahir": "Malang"
            },
            "rincian_ibu": {
                "alamat_ibu": "Jl. Rumah Keluarga ",
                "kebangsaan_ibu": "Amsterdam",
                "kecamatan_ibu": "Wagir",
                "kelurahan_ibu": "Sidorahayu",
                "kewarganegaraan_ibu": "Wna",
                "kota_ibu": "Malang",
                "nama_ibu": "Si Ibu",
                "nik_ibu": "12345",
                "pekerjaan_ibu": "Ibu Rumah Tangga  ",
                "provinsi_ibu": "Jawa Timur",
                "tanggal_pernikahan_ibu": "20-10-1998",
                "tgl_lahir_ibu": "05-10-1979"
            },
            "rincian_kedatangan": {
                "jam_kedatangan": "",
                "tanggal_kedatangan": "",
                "tempat_kedatangan": "Wagir"
            },
            "rincian_kk": {
                "kecamatan_kk": "Wagir",
                "kelurahan_kk": "Sidorahayu",
                "kota_kk": "Malang",
                "nama_kepala_keluarga": "Si Bapak",
                "no_kk": "21212",
                "provinsi_kk": "Jawa Timur"
            },
            "rincian_pelapor": {
                "jenis_kelamin": "Laki-Laki ",
                "kecamatan_pelapor": "Wagir",
                "kelurahan_pelapor": "Sidorahayu",
                "kota_pelapor": "Malang",
                "nama_lengkap": "Tes Akta Lahir Baru",
                "nik_pelapor": "555555",
                "pekerjaan_pelapor": "Tukang Lapor ",
                "provinsi_pelapor": "Jawa Timur",
                "umur": 15
            },
            "rincian_pemohon": {
                "nama_pelapor": "Tes Akta Lahir Baru",
                "nik_pelapor": "555555",
                "no_registrasi": "NTT2022100331026",
                "status": "Diproses",
                "tanggal_permohonan": "03-10-2022 13:30"
            }
        }
    }]
};

export const VALID_GET_INDEX_BY_ID_SCHEMA = {
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
                            "alamat_ayah",
                            "alamat_ibu",
                            "alamat_pelapor",
                            "alamat_saksi1",
                            "alamat_saksi2",
                            "berat",
                            "id",
                            "is_dengan_ortu",
                            "jam_kedatangan",
                            "jenis_kelahiran",
                            "jenis_kelahiran_lainnya",
                            "jenis_kelamin_anak",
                            "jenis_kelamin_pelapor",
                            "jenis_permohonan",
                            "kebangsaan_ayah",
                            "kebangsaan_ibu",
                            "kecamatan_ayah",
                            "kecamatan_ayah_id",
                            "kecamatan_ibu",
                            "kecamatan_ibu_id",
                            "kecamatan_id",
                            "kecamatan_kk",
                            "kecamatan_pelapor",
                            "kecamatan_pelapor_id",
                            "kecamatan_saksi1",
                            "kecamatan_saksi1_id",
                            "kecamatan_saksi2",
                            "kecamatan_saksi2_id",
                            "kelahiran_ke",
                            "kelurahan_ayah",
                            "kelurahan_ayah_id",
                            "kelurahan_ibu",
                            "kelurahan_ibu_id",
                            "kelurahan_id",
                            "kelurahan_kk",
                            "kelurahan_pelapor",
                            "kelurahan_pelapor_id",
                            "kelurahan_saksi1",
                            "kelurahan_saksi1_id",
                            "kelurahan_saksi2",
                            "kelurahan_saksi2_id",
                            "kewarganegaraan_ayah",
                            "kewarganegaraan_ibu",
                            "kode_wilayah",
                            "konfirmasi_at",
                            "konfirmasi_by",
                            "kota_ayah",
                            "kota_ayah_id",
                            "kota_ibu",
                            "kota_ibu_id",
                            "kota_id",
                            "kota_kk",
                            "kota_pelapor",
                            "kota_pelapor_id",
                            "kota_saksi1",
                            "kota_saksi1_id",
                            "kota_saksi2",
                            "kota_saksi2_id",
                            "lokasi_id",
                            "m_user_id",
                            "nama_anak",
                            "nama_ayah",
                            "nama_ibu",
                            "nama_kepala_keluarga",
                            "nama_pelapor",
                            "nama_saksi1",
                            "nama_saksi2",
                            "nik_pelapor",
                            "no_kk",
                            "no_nik_ayah",
                            "no_nik_ibu",
                            "no_nik_saksi1",
                            "no_nik_saksi2",
                            "no_registrasi",
                            "notes",
                            "notes_operator",
                            "notes_supervisor",
                            "panjang",
                            "pekerjaan_ayah",
                            "pekerjaan_ayah_lainnya",
                            "pekerjaan_ibu",
                            "pekerjaan_ibu_lainnya",
                            "pekerjaan_pelapor",
                            "pekerjaan_pelapor_lainnya",
                            "pekerjaan_saksi1",
                            "pekerjaan_saksi1_lainnya",
                            "pekerjaan_saksi2",
                            "pekerjaan_saksi2_lainnya",
                            "penolong_kelahiran",
                            "penolong_kelahiran_lainnya",
                            "provinsi_ayah",
                            "provinsi_ayah_id",
                            "provinsi_ibu",
                            "provinsi_ibu_id",
                            "provinsi_id",
                            "provinsi_kk",
                            "provinsi_pelapor",
                            "provinsi_pelapor_id",
                            "provinsi_saksi1",
                            "provinsi_saksi1_id",
                            "provinsi_saksi2",
                            "provinsi_saksi2_id",
                            "pukul_kelahiran",
                            "status",
                            "tanggal_kedatangan",
                            "tanggal_lahir",
                            "tanggal_lahir_ayah",
                            "tanggal_lahir_ibu",
                            "tanggal_pernikahan_ibu",
                            "tempat_dilahirkan",
                            "tempat_kedatangan",
                            "tempat_lahir",
                            "umur_pelapor",
                            "umur_saksi1",
                            "umur_saksi2",
                            "updated_at",
                            "verifikasi_at",
                            "verifikasi_by"
                        ],
                        "properties": {
                            "alamat_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The alamat_ayah Schema",
                                "examples": [
                                    "JL. RUMAH KELUARGA"
                                ]
                            },
                            "alamat_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The alamat_ibu Schema",
                                "examples": [
                                    "JL. RUMAH KELUARGA"
                                ]
                            },
                            "alamat_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The alamat_pelapor Schema",
                                "examples": [
                                    "JL. RUMAH PELAPOR"
                                ]
                            },
                            "alamat_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The alamat_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "alamat_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The alamat_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "berat": {
                                "type": "string",
                                "default": "",
                                "title": "The berat Schema",
                                "examples": [
                                    "5.6"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id Schema",
                                "examples": [
                                    125
                                ]
                            },
                            "is_dengan_ortu": {
                                "type": "string",
                                "default": "",
                                "title": "The is_dengan_ortu Schema",
                                "examples": [
                                    "1"
                                ]
                            },
                            "jam_kedatangan": {
                                "type": "string",
                                "default": "",
                                "title": "The jam_kedatangan Schema",
                                "examples": [
                                    "12:12:12"
                                ]
                            },
                            "jenis_kelahiran": {
                                "type": "string",
                                "default": "",
                                "title": "The jenis_kelahiran Schema",
                                "examples": [
                                    "TUNGGAL"
                                ]
                            },
                            "jenis_kelahiran_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The jenis_kelahiran_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "jenis_kelamin_anak": {
                                "type": "string",
                                "default": "",
                                "title": "The jenis_kelamin_anak Schema",
                                "examples": [
                                    "LAKI-LAKI"
                                ]
                            },
                            "jenis_kelamin_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The jenis_kelamin_pelapor Schema",
                                "examples": [
                                    "LAKI-LAKI"
                                ]
                            },
                            "jenis_permohonan": {
                                "type": "string",
                                "default": "",
                                "title": "The jenis_permohonan Schema",
                                "examples": [
                                    "BIKIN BARU "
                                ]
                            },
                            "kebangsaan_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kebangsaan_ayah Schema",
                                "examples": [
                                    "INDONESIA"
                                ]
                            },
                            "kebangsaan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The kebangsaan_ibu Schema",
                                "examples": [
                                    "AMSTERDAM"
                                ]
                            },
                            "kecamatan_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_ayah Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "kecamatan_ayah_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_ayah_id Schema",
                                "examples": [
                                    "3507210"
                                ]
                            },
                            "kecamatan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_ibu Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "kecamatan_ibu_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_ibu_id Schema",
                                "examples": [
                                    "3507210"
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
                            "kecamatan_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_kk Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "kecamatan_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_pelapor Schema",
                                "examples": [
                                    "WAGIR"
                                ]
                            },
                            "kecamatan_pelapor_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kecamatan_pelapor_id Schema",
                                "examples": [
                                    "3507210"
                                ]
                            },
                            "kecamatan_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The kecamatan_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kecamatan_saksi1_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kecamatan_saksi1_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kecamatan_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The kecamatan_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kecamatan_saksi2_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kecamatan_saksi2_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kelahiran_ke": {
                                "type": "integer",
                                "default": 0,
                                "title": "The kelahiran_ke Schema",
                                "examples": [
                                    1
                                ]
                            },
                            "kelurahan_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_ayah Schema",
                                "examples": [
                                    "SIDORAHAYU"
                                ]
                            },
                            "kelurahan_ayah_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_ayah_id Schema",
                                "examples": [
                                    "3507210009"
                                ]
                            },
                            "kelurahan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_ibu Schema",
                                "examples": [
                                    "SIDORAHAYU"
                                ]
                            },
                            "kelurahan_ibu_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_ibu_id Schema",
                                "examples": [
                                    "3507210009"
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
                            "kelurahan_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_kk Schema",
                                "examples": [
                                    "SIDORAHAYU"
                                ]
                            },
                            "kelurahan_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_pelapor Schema",
                                "examples": [
                                    "SIDORAHAYU"
                                ]
                            },
                            "kelurahan_pelapor_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kelurahan_pelapor_id Schema",
                                "examples": [
                                    "3507210009"
                                ]
                            },
                            "kelurahan_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The kelurahan_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kelurahan_saksi1_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kelurahan_saksi1_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kelurahan_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The kelurahan_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kelurahan_saksi2_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kelurahan_saksi2_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kewarganegaraan_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kewarganegaraan_ayah Schema",
                                "examples": [
                                    "WNI"
                                ]
                            },
                            "kewarganegaraan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The kewarganegaraan_ibu Schema",
                                "examples": [
                                    "WNA"
                                ]
                            },
                            "kode_wilayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kode_wilayah Schema",
                                "examples": [
                                    "35"
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
                            "kota_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_ayah Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_ayah_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_ayah_id Schema",
                                "examples": [
                                    "3507"
                                ]
                            },
                            "kota_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_ibu Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_ibu_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_ibu_id Schema",
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
                            "kota_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_kk Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_pelapor Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "kota_pelapor_id": {
                                "type": "string",
                                "default": "",
                                "title": "The kota_pelapor_id Schema",
                                "examples": [
                                    "3507"
                                ]
                            },
                            "kota_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The kota_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kota_saksi1_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kota_saksi1_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kota_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The kota_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "kota_saksi2_id": {
                                "type": "null",
                                "default": null,
                                "title": "The kota_saksi2_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "lokasi_id": {
                                "type": "string",
                                "default": "",
                                "title": "The lokasi_id Schema",
                                "examples": [
                                    "3507210"
                                ]
                            },
                            "m_user_id": {
                                "type": "string",
                                "default": "",
                                "title": "The m_user_id Schema",
                                "examples": [
                                    "9"
                                ]
                            },
                            "nama_anak": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_anak Schema",
                                "examples": [
                                    "SI ANAK"
                                ]
                            },
                            "nama_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_ayah Schema",
                                "examples": [
                                    "SI AYAH"
                                ]
                            },
                            "nama_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_ibu Schema",
                                "examples": [
                                    "SI IBU"
                                ]
                            },
                            "nama_kepala_keluarga": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_kepala_keluarga Schema",
                                "examples": [
                                    "SI BAPAK"
                                ]
                            },
                            "nama_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The nama_pelapor Schema",
                                "examples": [
                                    "AHMAD"
                                ]
                            },
                            "nama_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The nama_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "nama_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The nama_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "nik_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The nik_pelapor Schema",
                                "examples": [
                                    "555555"
                                ]
                            },
                            "no_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The no_kk Schema",
                                "examples": [
                                    "21212"
                                ]
                            },
                            "no_nik_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The no_nik_ayah Schema",
                                "examples": [
                                    "54321"
                                ]
                            },
                            "no_nik_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The no_nik_ibu Schema",
                                "examples": [
                                    "12345"
                                ]
                            },
                            "no_nik_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The no_nik_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "no_nik_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The no_nik_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "no_registrasi": {
                                "type": "string",
                                "default": "",
                                "title": "The no_registrasi Schema",
                                "examples": [
                                    "NTT2022101331004"
                                ]
                            },
                            "notes": {
                                "type": "string",
                                "default": "",
                                "title": "The notes Schema",
                                "examples": [
                                    "LANJUT"
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
                            "panjang": {
                                "type": "string",
                                "default": "",
                                "title": "The panjang Schema",
                                "examples": [
                                    "50.7"
                                ]
                            },
                            "pekerjaan_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The pekerjaan_ayah Schema",
                                "examples": [
                                    "NOTARIS"
                                ]
                            },
                            "pekerjaan_ayah_lainnya": {
                                "type": "string",
                                "default": "",
                                "title": "The pekerjaan_ayah_lainnya Schema",
                                "examples": [
                                    "KORUPSI"
                                ]
                            },
                            "pekerjaan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The pekerjaan_ibu Schema",
                                "examples": [
                                    "IBU RUMAH TANGGA"
                                ]
                            },
                            "pekerjaan_ibu_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_ibu_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The pekerjaan_pelapor Schema",
                                "examples": [
                                    "TUKANG LAPOR"
                                ]
                            },
                            "pekerjaan_pelapor_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_pelapor_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_saksi1_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_saksi1_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pekerjaan_saksi2_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The pekerjaan_saksi2_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "penolong_kelahiran": {
                                "type": "string",
                                "default": "",
                                "title": "The penolong_kelahiran Schema",
                                "examples": [
                                    "DOKTER"
                                ]
                            },
                            "penolong_kelahiran_lainnya": {
                                "type": "null",
                                "default": null,
                                "title": "The penolong_kelahiran_lainnya Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "provinsi_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_ayah Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_ayah_id": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_ayah_id Schema",
                                "examples": [
                                    "35"
                                ]
                            },
                            "provinsi_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_ibu Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_ibu_id": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_ibu_id Schema",
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
                            "provinsi_kk": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_kk Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_pelapor Schema",
                                "examples": [
                                    "JAWA TIMUR"
                                ]
                            },
                            "provinsi_pelapor_id": {
                                "type": "string",
                                "default": "",
                                "title": "The provinsi_pelapor_id Schema",
                                "examples": [
                                    "35"
                                ]
                            },
                            "provinsi_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The provinsi_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "provinsi_saksi1_id": {
                                "type": "null",
                                "default": null,
                                "title": "The provinsi_saksi1_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "provinsi_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The provinsi_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "provinsi_saksi2_id": {
                                "type": "null",
                                "default": null,
                                "title": "The provinsi_saksi2_id Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "pukul_kelahiran": {
                                "type": "string",
                                "default": "",
                                "title": "The pukul_kelahiran Schema",
                                "examples": [
                                    "19.55"
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
                            "tanggal_lahir": {
                                "type": "string",
                                "default": "",
                                "title": "The tanggal_lahir Schema",
                                "examples": [
                                    "1999-10-05"
                                ]
                            },
                            "tanggal_lahir_ayah": {
                                "type": "string",
                                "default": "",
                                "title": "The tanggal_lahir_ayah Schema",
                                "examples": [
                                    "1981-03-15"
                                ]
                            },
                            "tanggal_lahir_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The tanggal_lahir_ibu Schema",
                                "examples": [
                                    "1979-10-05"
                                ]
                            },
                            "tanggal_pernikahan_ibu": {
                                "type": "string",
                                "default": "",
                                "title": "The tanggal_pernikahan_ibu Schema",
                                "examples": [
                                    "1998-10-20"
                                ]
                            },
                            "tempat_dilahirkan": {
                                "type": "string",
                                "default": "",
                                "title": "The tempat_dilahirkan Schema",
                                "examples": [
                                    "GUBUK SENTOSA"
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
                            "tempat_lahir": {
                                "type": "string",
                                "default": "",
                                "title": "The tempat_lahir Schema",
                                "examples": [
                                    "MALANG"
                                ]
                            },
                            "umur_pelapor": {
                                "type": "string",
                                "default": "",
                                "title": "The umur_pelapor Schema",
                                "examples": [
                                    "15"
                                ]
                            },
                            "umur_saksi1": {
                                "type": "null",
                                "default": null,
                                "title": "The umur_saksi1 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "umur_saksi2": {
                                "type": "null",
                                "default": null,
                                "title": "The umur_saksi2 Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "default": "",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-10-13 15:39:05"
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
                            "alamat_ayah": "JL. RUMAH KELUARGA",
                            "alamat_ibu": "JL. RUMAH KELUARGA",
                            "alamat_pelapor": "JL. RUMAH PELAPOR",
                            "alamat_saksi1": null,
                            "alamat_saksi2": null,
                            "berat": "5.6",
                            "id": 125,
                            "is_dengan_ortu": "1",
                            "jam_kedatangan": "12:12:12",
                            "jenis_kelahiran": "TUNGGAL",
                            "jenis_kelahiran_lainnya": null,
                            "jenis_kelamin_anak": "LAKI-LAKI",
                            "jenis_kelamin_pelapor": "LAKI-LAKI",
                            "jenis_permohonan": "BIKIN BARU ",
                            "kebangsaan_ayah": "INDONESIA",
                            "kebangsaan_ibu": "AMSTERDAM",
                            "kecamatan_ayah": "WAGIR",
                            "kecamatan_ayah_id": "3507210",
                            "kecamatan_ibu": "WAGIR",
                            "kecamatan_ibu_id": "3507210",
                            "kecamatan_id": "3507210",
                            "kecamatan_kk": "WAGIR",
                            "kecamatan_pelapor": "WAGIR",
                            "kecamatan_pelapor_id": "3507210",
                            "kecamatan_saksi1": null,
                            "kecamatan_saksi1_id": null,
                            "kecamatan_saksi2": null,
                            "kecamatan_saksi2_id": null,
                            "kelahiran_ke": 1,
                            "kelurahan_ayah": "SIDORAHAYU",
                            "kelurahan_ayah_id": "3507210009",
                            "kelurahan_ibu": "SIDORAHAYU",
                            "kelurahan_ibu_id": "3507210009",
                            "kelurahan_id": "3507210009",
                            "kelurahan_kk": "SIDORAHAYU",
                            "kelurahan_pelapor": "SIDORAHAYU",
                            "kelurahan_pelapor_id": "3507210009",
                            "kelurahan_saksi1": null,
                            "kelurahan_saksi1_id": null,
                            "kelurahan_saksi2": null,
                            "kelurahan_saksi2_id": null,
                            "kewarganegaraan_ayah": "WNI",
                            "kewarganegaraan_ibu": "WNA",
                            "kode_wilayah": "35",
                            "konfirmasi_at": null,
                            "konfirmasi_by": null,
                            "kota_ayah": "MALANG",
                            "kota_ayah_id": "3507",
                            "kota_ibu": "MALANG",
                            "kota_ibu_id": "3507",
                            "kota_id": "3507",
                            "kota_kk": "MALANG",
                            "kota_pelapor": "MALANG",
                            "kota_pelapor_id": "3507",
                            "kota_saksi1": null,
                            "kota_saksi1_id": null,
                            "kota_saksi2": null,
                            "kota_saksi2_id": null,
                            "lokasi_id": "3507210",
                            "m_user_id": "9",
                            "nama_anak": "SI ANAK",
                            "nama_ayah": "SI AYAH",
                            "nama_ibu": "SI IBU",
                            "nama_kepala_keluarga": "SI BAPAK",
                            "nama_pelapor": "AHMAD",
                            "nama_saksi1": null,
                            "nama_saksi2": null,
                            "nik_pelapor": "555555",
                            "no_kk": "21212",
                            "no_nik_ayah": "54321",
                            "no_nik_ibu": "12345",
                            "no_nik_saksi1": null,
                            "no_nik_saksi2": null,
                            "no_registrasi": "NTT2022101331004",
                            "notes": "LANJUT",
                            "notes_operator": null,
                            "notes_supervisor": null,
                            "panjang": "50.7",
                            "pekerjaan_ayah": "NOTARIS",
                            "pekerjaan_ayah_lainnya": "KORUPSI",
                            "pekerjaan_ibu": "IBU RUMAH TANGGA",
                            "pekerjaan_ibu_lainnya": null,
                            "pekerjaan_pelapor": "TUKANG LAPOR",
                            "pekerjaan_pelapor_lainnya": null,
                            "pekerjaan_saksi1": null,
                            "pekerjaan_saksi1_lainnya": null,
                            "pekerjaan_saksi2": null,
                            "pekerjaan_saksi2_lainnya": null,
                            "penolong_kelahiran": "DOKTER",
                            "penolong_kelahiran_lainnya": null,
                            "provinsi_ayah": "JAWA TIMUR",
                            "provinsi_ayah_id": "35",
                            "provinsi_ibu": "JAWA TIMUR",
                            "provinsi_ibu_id": "35",
                            "provinsi_id": "35",
                            "provinsi_kk": "JAWA TIMUR",
                            "provinsi_pelapor": "JAWA TIMUR",
                            "provinsi_pelapor_id": "35",
                            "provinsi_saksi1": null,
                            "provinsi_saksi1_id": null,
                            "provinsi_saksi2": null,
                            "provinsi_saksi2_id": null,
                            "pukul_kelahiran": "19.55",
                            "status": "diproses",
                            "tanggal_kedatangan": null,
                            "tanggal_lahir": "1999-10-05",
                            "tanggal_lahir_ayah": "1981-03-15",
                            "tanggal_lahir_ibu": "1979-10-05",
                            "tanggal_pernikahan_ibu": "1998-10-20",
                            "tempat_dilahirkan": "GUBUK SENTOSA",
                            "tempat_kedatangan": "WAGIR",
                            "tempat_lahir": "MALANG",
                            "umur_pelapor": "15",
                            "umur_saksi1": null,
                            "umur_saksi2": null,
                            "updated_at": "2022-10-13 15:39:05",
                            "verifikasi_at": null,
                            "verifikasi_by": null
                        }]
                    },
                    "examples": [
                        [{
                            "alamat_ayah": "JL. RUMAH KELUARGA",
                            "alamat_ibu": "JL. RUMAH KELUARGA",
                            "alamat_pelapor": "JL. RUMAH PELAPOR",
                            "alamat_saksi1": null,
                            "alamat_saksi2": null,
                            "berat": "5.6",
                            "id": 125,
                            "is_dengan_ortu": "1",
                            "jam_kedatangan": "12:12:12",
                            "jenis_kelahiran": "TUNGGAL",
                            "jenis_kelahiran_lainnya": null,
                            "jenis_kelamin_anak": "LAKI-LAKI",
                            "jenis_kelamin_pelapor": "LAKI-LAKI",
                            "jenis_permohonan": "BIKIN BARU ",
                            "kebangsaan_ayah": "INDONESIA",
                            "kebangsaan_ibu": "AMSTERDAM",
                            "kecamatan_ayah": "WAGIR",
                            "kecamatan_ayah_id": "3507210",
                            "kecamatan_ibu": "WAGIR",
                            "kecamatan_ibu_id": "3507210",
                            "kecamatan_id": "3507210",
                            "kecamatan_kk": "WAGIR",
                            "kecamatan_pelapor": "WAGIR",
                            "kecamatan_pelapor_id": "3507210",
                            "kecamatan_saksi1": null,
                            "kecamatan_saksi1_id": null,
                            "kecamatan_saksi2": null,
                            "kecamatan_saksi2_id": null,
                            "kelahiran_ke": 1,
                            "kelurahan_ayah": "SIDORAHAYU",
                            "kelurahan_ayah_id": "3507210009",
                            "kelurahan_ibu": "SIDORAHAYU",
                            "kelurahan_ibu_id": "3507210009",
                            "kelurahan_id": "3507210009",
                            "kelurahan_kk": "SIDORAHAYU",
                            "kelurahan_pelapor": "SIDORAHAYU",
                            "kelurahan_pelapor_id": "3507210009",
                            "kelurahan_saksi1": null,
                            "kelurahan_saksi1_id": null,
                            "kelurahan_saksi2": null,
                            "kelurahan_saksi2_id": null,
                            "kewarganegaraan_ayah": "WNI",
                            "kewarganegaraan_ibu": "WNA",
                            "kode_wilayah": "35",
                            "konfirmasi_at": null,
                            "konfirmasi_by": null,
                            "kota_ayah": "MALANG",
                            "kota_ayah_id": "3507",
                            "kota_ibu": "MALANG",
                            "kota_ibu_id": "3507",
                            "kota_id": "3507",
                            "kota_kk": "MALANG",
                            "kota_pelapor": "MALANG",
                            "kota_pelapor_id": "3507",
                            "kota_saksi1": null,
                            "kota_saksi1_id": null,
                            "kota_saksi2": null,
                            "kota_saksi2_id": null,
                            "lokasi_id": "3507210",
                            "m_user_id": "9",
                            "nama_anak": "SI ANAK",
                            "nama_ayah": "SI AYAH",
                            "nama_ibu": "SI IBU",
                            "nama_kepala_keluarga": "SI BAPAK",
                            "nama_pelapor": "AHMAD",
                            "nama_saksi1": null,
                            "nama_saksi2": null,
                            "nik_pelapor": "555555",
                            "no_kk": "21212",
                            "no_nik_ayah": "54321",
                            "no_nik_ibu": "12345",
                            "no_nik_saksi1": null,
                            "no_nik_saksi2": null,
                            "no_registrasi": "NTT2022101331004",
                            "notes": "LANJUT",
                            "notes_operator": null,
                            "notes_supervisor": null,
                            "panjang": "50.7",
                            "pekerjaan_ayah": "NOTARIS",
                            "pekerjaan_ayah_lainnya": "KORUPSI",
                            "pekerjaan_ibu": "IBU RUMAH TANGGA",
                            "pekerjaan_ibu_lainnya": null,
                            "pekerjaan_pelapor": "TUKANG LAPOR",
                            "pekerjaan_pelapor_lainnya": null,
                            "pekerjaan_saksi1": null,
                            "pekerjaan_saksi1_lainnya": null,
                            "pekerjaan_saksi2": null,
                            "pekerjaan_saksi2_lainnya": null,
                            "penolong_kelahiran": "DOKTER",
                            "penolong_kelahiran_lainnya": null,
                            "provinsi_ayah": "JAWA TIMUR",
                            "provinsi_ayah_id": "35",
                            "provinsi_ibu": "JAWA TIMUR",
                            "provinsi_ibu_id": "35",
                            "provinsi_id": "35",
                            "provinsi_kk": "JAWA TIMUR",
                            "provinsi_pelapor": "JAWA TIMUR",
                            "provinsi_pelapor_id": "35",
                            "provinsi_saksi1": null,
                            "provinsi_saksi1_id": null,
                            "provinsi_saksi2": null,
                            "provinsi_saksi2_id": null,
                            "pukul_kelahiran": "19.55",
                            "status": "diproses",
                            "tanggal_kedatangan": null,
                            "tanggal_lahir": "1999-10-05",
                            "tanggal_lahir_ayah": "1981-03-15",
                            "tanggal_lahir_ibu": "1979-10-05",
                            "tanggal_pernikahan_ibu": "1998-10-20",
                            "tempat_dilahirkan": "GUBUK SENTOSA",
                            "tempat_kedatangan": "WAGIR",
                            "tempat_lahir": "MALANG",
                            "umur_pelapor": "15",
                            "umur_saksi1": null,
                            "umur_saksi2": null,
                            "updated_at": "2022-10-13 15:39:05",
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
                    "alamat_ayah": "JL. RUMAH KELUARGA",
                    "alamat_ibu": "JL. RUMAH KELUARGA",
                    "alamat_pelapor": "JL. RUMAH PELAPOR",
                    "alamat_saksi1": null,
                    "alamat_saksi2": null,
                    "berat": "5.6",
                    "id": 125,
                    "is_dengan_ortu": "1",
                    "jam_kedatangan": "12:12:12",
                    "jenis_kelahiran": "TUNGGAL",
                    "jenis_kelahiran_lainnya": null,
                    "jenis_kelamin_anak": "LAKI-LAKI",
                    "jenis_kelamin_pelapor": "LAKI-LAKI",
                    "jenis_permohonan": "BIKIN BARU ",
                    "kebangsaan_ayah": "INDONESIA",
                    "kebangsaan_ibu": "AMSTERDAM",
                    "kecamatan_ayah": "WAGIR",
                    "kecamatan_ayah_id": "3507210",
                    "kecamatan_ibu": "WAGIR",
                    "kecamatan_ibu_id": "3507210",
                    "kecamatan_id": "3507210",
                    "kecamatan_kk": "WAGIR",
                    "kecamatan_pelapor": "WAGIR",
                    "kecamatan_pelapor_id": "3507210",
                    "kecamatan_saksi1": null,
                    "kecamatan_saksi1_id": null,
                    "kecamatan_saksi2": null,
                    "kecamatan_saksi2_id": null,
                    "kelahiran_ke": 1,
                    "kelurahan_ayah": "SIDORAHAYU",
                    "kelurahan_ayah_id": "3507210009",
                    "kelurahan_ibu": "SIDORAHAYU",
                    "kelurahan_ibu_id": "3507210009",
                    "kelurahan_id": "3507210009",
                    "kelurahan_kk": "SIDORAHAYU",
                    "kelurahan_pelapor": "SIDORAHAYU",
                    "kelurahan_pelapor_id": "3507210009",
                    "kelurahan_saksi1": null,
                    "kelurahan_saksi1_id": null,
                    "kelurahan_saksi2": null,
                    "kelurahan_saksi2_id": null,
                    "kewarganegaraan_ayah": "WNI",
                    "kewarganegaraan_ibu": "WNA",
                    "kode_wilayah": "35",
                    "konfirmasi_at": null,
                    "konfirmasi_by": null,
                    "kota_ayah": "MALANG",
                    "kota_ayah_id": "3507",
                    "kota_ibu": "MALANG",
                    "kota_ibu_id": "3507",
                    "kota_id": "3507",
                    "kota_kk": "MALANG",
                    "kota_pelapor": "MALANG",
                    "kota_pelapor_id": "3507",
                    "kota_saksi1": null,
                    "kota_saksi1_id": null,
                    "kota_saksi2": null,
                    "kota_saksi2_id": null,
                    "lokasi_id": "3507210",
                    "m_user_id": "9",
                    "nama_anak": "SI ANAK",
                    "nama_ayah": "SI AYAH",
                    "nama_ibu": "SI IBU",
                    "nama_kepala_keluarga": "SI BAPAK",
                    "nama_pelapor": "AHMAD",
                    "nama_saksi1": null,
                    "nama_saksi2": null,
                    "nik_pelapor": "555555",
                    "no_kk": "21212",
                    "no_nik_ayah": "54321",
                    "no_nik_ibu": "12345",
                    "no_nik_saksi1": null,
                    "no_nik_saksi2": null,
                    "no_registrasi": "NTT2022101331004",
                    "notes": "LANJUT",
                    "notes_operator": null,
                    "notes_supervisor": null,
                    "panjang": "50.7",
                    "pekerjaan_ayah": "NOTARIS",
                    "pekerjaan_ayah_lainnya": "KORUPSI",
                    "pekerjaan_ibu": "IBU RUMAH TANGGA",
                    "pekerjaan_ibu_lainnya": null,
                    "pekerjaan_pelapor": "TUKANG LAPOR",
                    "pekerjaan_pelapor_lainnya": null,
                    "pekerjaan_saksi1": null,
                    "pekerjaan_saksi1_lainnya": null,
                    "pekerjaan_saksi2": null,
                    "pekerjaan_saksi2_lainnya": null,
                    "penolong_kelahiran": "DOKTER",
                    "penolong_kelahiran_lainnya": null,
                    "provinsi_ayah": "JAWA TIMUR",
                    "provinsi_ayah_id": "35",
                    "provinsi_ibu": "JAWA TIMUR",
                    "provinsi_ibu_id": "35",
                    "provinsi_id": "35",
                    "provinsi_kk": "JAWA TIMUR",
                    "provinsi_pelapor": "JAWA TIMUR",
                    "provinsi_pelapor_id": "35",
                    "provinsi_saksi1": null,
                    "provinsi_saksi1_id": null,
                    "provinsi_saksi2": null,
                    "provinsi_saksi2_id": null,
                    "pukul_kelahiran": "19.55",
                    "status": "diproses",
                    "tanggal_kedatangan": null,
                    "tanggal_lahir": "1999-10-05",
                    "tanggal_lahir_ayah": "1981-03-15",
                    "tanggal_lahir_ibu": "1979-10-05",
                    "tanggal_pernikahan_ibu": "1998-10-20",
                    "tempat_dilahirkan": "GUBUK SENTOSA",
                    "tempat_kedatangan": "WAGIR",
                    "tempat_lahir": "MALANG",
                    "umur_pelapor": "15",
                    "umur_saksi1": null,
                    "umur_saksi2": null,
                    "updated_at": "2022-10-13 15:39:05",
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
                "alamat_ayah": "JL. RUMAH KELUARGA",
                "alamat_ibu": "JL. RUMAH KELUARGA",
                "alamat_pelapor": "JL. RUMAH PELAPOR",
                "alamat_saksi1": null,
                "alamat_saksi2": null,
                "berat": "5.6",
                "id": 125,
                "is_dengan_ortu": "1",
                "jam_kedatangan": "12:12:12",
                "jenis_kelahiran": "TUNGGAL",
                "jenis_kelahiran_lainnya": null,
                "jenis_kelamin_anak": "LAKI-LAKI",
                "jenis_kelamin_pelapor": "LAKI-LAKI",
                "jenis_permohonan": "BIKIN BARU ",
                "kebangsaan_ayah": "INDONESIA",
                "kebangsaan_ibu": "AMSTERDAM",
                "kecamatan_ayah": "WAGIR",
                "kecamatan_ayah_id": "3507210",
                "kecamatan_ibu": "WAGIR",
                "kecamatan_ibu_id": "3507210",
                "kecamatan_id": "3507210",
                "kecamatan_kk": "WAGIR",
                "kecamatan_pelapor": "WAGIR",
                "kecamatan_pelapor_id": "3507210",
                "kecamatan_saksi1": null,
                "kecamatan_saksi1_id": null,
                "kecamatan_saksi2": null,
                "kecamatan_saksi2_id": null,
                "kelahiran_ke": 1,
                "kelurahan_ayah": "SIDORAHAYU",
                "kelurahan_ayah_id": "3507210009",
                "kelurahan_ibu": "SIDORAHAYU",
                "kelurahan_ibu_id": "3507210009",
                "kelurahan_id": "3507210009",
                "kelurahan_kk": "SIDORAHAYU",
                "kelurahan_pelapor": "SIDORAHAYU",
                "kelurahan_pelapor_id": "3507210009",
                "kelurahan_saksi1": null,
                "kelurahan_saksi1_id": null,
                "kelurahan_saksi2": null,
                "kelurahan_saksi2_id": null,
                "kewarganegaraan_ayah": "WNI",
                "kewarganegaraan_ibu": "WNA",
                "kode_wilayah": "35",
                "konfirmasi_at": null,
                "konfirmasi_by": null,
                "kota_ayah": "MALANG",
                "kota_ayah_id": "3507",
                "kota_ibu": "MALANG",
                "kota_ibu_id": "3507",
                "kota_id": "3507",
                "kota_kk": "MALANG",
                "kota_pelapor": "MALANG",
                "kota_pelapor_id": "3507",
                "kota_saksi1": null,
                "kota_saksi1_id": null,
                "kota_saksi2": null,
                "kota_saksi2_id": null,
                "lokasi_id": "3507210",
                "m_user_id": "9",
                "nama_anak": "SI ANAK",
                "nama_ayah": "SI AYAH",
                "nama_ibu": "SI IBU",
                "nama_kepala_keluarga": "SI BAPAK",
                "nama_pelapor": "AHMAD",
                "nama_saksi1": null,
                "nama_saksi2": null,
                "nik_pelapor": "555555",
                "no_kk": "21212",
                "no_nik_ayah": "54321",
                "no_nik_ibu": "12345",
                "no_nik_saksi1": null,
                "no_nik_saksi2": null,
                "no_registrasi": "NTT2022101331004",
                "notes": "LANJUT",
                "notes_operator": null,
                "notes_supervisor": null,
                "panjang": "50.7",
                "pekerjaan_ayah": "NOTARIS",
                "pekerjaan_ayah_lainnya": "KORUPSI",
                "pekerjaan_ibu": "IBU RUMAH TANGGA",
                "pekerjaan_ibu_lainnya": null,
                "pekerjaan_pelapor": "TUKANG LAPOR",
                "pekerjaan_pelapor_lainnya": null,
                "pekerjaan_saksi1": null,
                "pekerjaan_saksi1_lainnya": null,
                "pekerjaan_saksi2": null,
                "pekerjaan_saksi2_lainnya": null,
                "penolong_kelahiran": "DOKTER",
                "penolong_kelahiran_lainnya": null,
                "provinsi_ayah": "JAWA TIMUR",
                "provinsi_ayah_id": "35",
                "provinsi_ibu": "JAWA TIMUR",
                "provinsi_ibu_id": "35",
                "provinsi_id": "35",
                "provinsi_kk": "JAWA TIMUR",
                "provinsi_pelapor": "JAWA TIMUR",
                "provinsi_pelapor_id": "35",
                "provinsi_saksi1": null,
                "provinsi_saksi1_id": null,
                "provinsi_saksi2": null,
                "provinsi_saksi2_id": null,
                "pukul_kelahiran": "19.55",
                "status": "diproses",
                "tanggal_kedatangan": null,
                "tanggal_lahir": "1999-10-05",
                "tanggal_lahir_ayah": "1981-03-15",
                "tanggal_lahir_ibu": "1979-10-05",
                "tanggal_pernikahan_ibu": "1998-10-20",
                "tempat_dilahirkan": "GUBUK SENTOSA",
                "tempat_kedatangan": "WAGIR",
                "tempat_lahir": "MALANG",
                "umur_pelapor": "15",
                "umur_saksi1": null,
                "umur_saksi2": null,
                "updated_at": "2022-10-13 15:39:05",
                "verifikasi_at": null,
                "verifikasi_by": null
            }],
            "total_item": 1
        }
    }]
};

export const VALID_UPDATE_AKTA_SCHEMA = {
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
                "alamat_ayah",
                "alamat_ibu",
                "alamat_pelapor",
                "berat",
                "id",
                "is_dengan_ortu",
                "jenis_kelahiran",
                "jenis_kelamin_anak",
                "jenis_kelamin_pelapor",
                "kebangsaan_ayah",
                "kebangsaan_ibu",
                "kecamatan_ayah_id",
                "kecamatan_ibu_id",
                "kecamatan_id",
                "kecamatan_pelapor_id",
                "kelurahan_ayah_id",
                "kelurahan_ibu_id",
                "kelurahan_id",
                "kelurahan_pelapor_id",
                "kewarganegaraan_ayah",
                "kewarganegaraan_ibu",
                "kode_wilayah",
                "kota_ayah_id",
                "kota_ibu_id",
                "kota_id",
                "kota_pelapor_id",
                "lokasi_id",
                "m_user_id",
                "nama_anak",
                "nama_ayah",
                "nama_ibu",
                "nama_kepala_keluarga",
                "nama_pelapor",
                "nik_pelapor",
                "no_kk",
                "no_nik_ayah",
                "no_nik_ibu",
                "panjang",
                "pekerjaan_ayah",
                "pekerjaan_ibu",
                "pekerjaan_pelapor",
                "penolong_kelahiran",
                "provinsi_ayah_id",
                "provinsi_ibu_id",
                "provinsi_pelapor_id",
                "pukul_kelahiran",
                "tanggal_lahir",
                "tanggal_lahir_ayah",
                "tanggal_lahir_ibu",
                "tanggal_pernikahan_ibu",
                "tempat_dilahirkan",
                "tempat_lahir",
                "umur_pelapor"
            ],
            "properties": {
                "alamat_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The alamat_ayah Schema",
                    "examples": [
                        "jl. rumah keluarga"
                    ]
                },
                "alamat_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The alamat_ibu Schema",
                    "examples": [
                        "jl. rumah keluarga"
                    ]
                },
                "alamat_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The alamat_pelapor Schema",
                    "examples": [
                        "jl. rumah pelapor"
                    ]
                },
                "berat": {
                    "type": "string",
                    "default": "",
                    "title": "The berat Schema",
                    "examples": [
                        "5.6"
                    ]
                },
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        326
                    ]
                },
                "is_dengan_ortu": {
                    "type": "string",
                    "default": "",
                    "title": "The is_dengan_ortu Schema",
                    "examples": [
                        "1"
                    ]
                },
                "jenis_kelahiran": {
                    "type": "string",
                    "default": "",
                    "title": "The jenis_kelahiran Schema",
                    "examples": [
                        "tunggal"
                    ]
                },
                "jenis_kelamin_anak": {
                    "type": "string",
                    "default": "",
                    "title": "The jenis_kelamin_anak Schema",
                    "examples": [
                        "laki-laki"
                    ]
                },
                "jenis_kelamin_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The jenis_kelamin_pelapor Schema",
                    "examples": [
                        "laki-laki"
                    ]
                },
                "kebangsaan_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The kebangsaan_ayah Schema",
                    "examples": [
                        "Indonesia"
                    ]
                },
                "kebangsaan_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The kebangsaan_ibu Schema",
                    "examples": [
                        "Amsterdam"
                    ]
                },
                "kecamatan_ayah_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_ayah_id Schema",
                    "examples": [
                        "3507210"
                    ]
                },
                "kecamatan_ibu_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_ibu_id Schema",
                    "examples": [
                        "3507210"
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
                "kecamatan_pelapor_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kecamatan_pelapor_id Schema",
                    "examples": [
                        "3507210"
                    ]
                },
                "kelurahan_ayah_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan_ayah_id Schema",
                    "examples": [
                        "3507210009"
                    ]
                },
                "kelurahan_ibu_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan_ibu_id Schema",
                    "examples": [
                        "3507210009"
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
                "kelurahan_pelapor_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kelurahan_pelapor_id Schema",
                    "examples": [
                        "3507210009"
                    ]
                },
                "kewarganegaraan_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The kewarganegaraan_ayah Schema",
                    "examples": [
                        "WNI"
                    ]
                },
                "kewarganegaraan_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The kewarganegaraan_ibu Schema",
                    "examples": [
                        "WNA"
                    ]
                },
                "kode_wilayah": {
                    "type": "string",
                    "default": "",
                    "title": "The kode_wilayah Schema",
                    "examples": [
                        "35"
                    ]
                },
                "kota_ayah_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_ayah_id Schema",
                    "examples": [
                        "3507"
                    ]
                },
                "kota_ibu_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_ibu_id Schema",
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
                "kota_pelapor_id": {
                    "type": "string",
                    "default": "",
                    "title": "The kota_pelapor_id Schema",
                    "examples": [
                        "3507"
                    ]
                },
                "lokasi_id": {
                    "type": "string",
                    "default": "",
                    "title": "The lokasi_id Schema",
                    "examples": [
                        "3507210"
                    ]
                },
                "m_user_id": {
                    "type": "string",
                    "default": "",
                    "title": "The m_user_id Schema",
                    "examples": [
                        "9"
                    ]
                },
                "nama_anak": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_anak Schema",
                    "examples": [
                        "si anak"
                    ]
                },
                "nama_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_ayah Schema",
                    "examples": [
                        "si ayah"
                    ]
                },
                "nama_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_ibu Schema",
                    "examples": [
                        "si ibu"
                    ]
                },
                "nama_kepala_keluarga": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_kepala_keluarga Schema",
                    "examples": [
                        "si bapak"
                    ]
                },
                "nama_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The nama_pelapor Schema",
                    "examples": [
                        "sase"
                    ]
                },
                "nik_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The nik_pelapor Schema",
                    "examples": [
                        "555555"
                    ]
                },
                "no_kk": {
                    "type": "string",
                    "default": "",
                    "title": "The no_kk Schema",
                    "examples": [
                        "21212"
                    ]
                },
                "no_nik_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The no_nik_ayah Schema",
                    "examples": [
                        "54321"
                    ]
                },
                "no_nik_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The no_nik_ibu Schema",
                    "examples": [
                        "12345"
                    ]
                },
                "panjang": {
                    "type": "string",
                    "default": "",
                    "title": "The panjang Schema",
                    "examples": [
                        "50.7"
                    ]
                },
                "pekerjaan_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The pekerjaan_ayah Schema",
                    "examples": [
                        "Notaris"
                    ]
                },
                "pekerjaan_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The pekerjaan_ibu Schema",
                    "examples": [
                        "ibu rumah tangga"
                    ]
                },
                "pekerjaan_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The pekerjaan_pelapor Schema",
                    "examples": [
                        "tukang lapor"
                    ]
                },
                "penolong_kelahiran": {
                    "type": "string",
                    "default": "",
                    "title": "The penolong_kelahiran Schema",
                    "examples": [
                        "dokter"
                    ]
                },
                "provinsi_ayah_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_ayah_id Schema",
                    "examples": [
                        "35"
                    ]
                },
                "provinsi_ibu_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_ibu_id Schema",
                    "examples": [
                        "35"
                    ]
                },
                "provinsi_pelapor_id": {
                    "type": "string",
                    "default": "",
                    "title": "The provinsi_pelapor_id Schema",
                    "examples": [
                        "35"
                    ]
                },
                "pukul_kelahiran": {
                    "type": "string",
                    "default": "",
                    "title": "The pukul_kelahiran Schema",
                    "examples": [
                        "19.55"
                    ]
                },
                "tanggal_lahir": {
                    "type": "string",
                    "default": "",
                    "title": "The tanggal_lahir Schema",
                    "examples": [
                        "1999-10-05"
                    ]
                },
                "tanggal_lahir_ayah": {
                    "type": "string",
                    "default": "",
                    "title": "The tanggal_lahir_ayah Schema",
                    "examples": [
                        "1981-03-15"
                    ]
                },
                "tanggal_lahir_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The tanggal_lahir_ibu Schema",
                    "examples": [
                        "1979-10-05"
                    ]
                },
                "tanggal_pernikahan_ibu": {
                    "type": "string",
                    "default": "",
                    "title": "The tanggal_pernikahan_ibu Schema",
                    "examples": [
                        "1998-10-20"
                    ]
                },
                "tempat_dilahirkan": {
                    "type": "string",
                    "default": "",
                    "title": "The tempat_dilahirkan Schema",
                    "examples": [
                        "gubuk sentosa"
                    ]
                },
                "tempat_lahir": {
                    "type": "string",
                    "default": "",
                    "title": "The tempat_lahir Schema",
                    "examples": [
                        "malang"
                    ]
                },
                "umur_pelapor": {
                    "type": "string",
                    "default": "",
                    "title": "The umur_pelapor Schema",
                    "examples": [
                        "15"
                    ]
                }
            },
            "examples": [{
                "alamat_ayah": "jl. rumah keluarga",
                "alamat_ibu": "jl. rumah keluarga",
                "alamat_pelapor": "jl. rumah pelapor",
                "berat": "5.6",
                "id": 326,
                "is_dengan_ortu": "1",
                "jenis_kelahiran": "tunggal",
                "jenis_kelamin_anak": "laki-laki",
                "jenis_kelamin_pelapor": "laki-laki",
                "kebangsaan_ayah": "Indonesia",
                "kebangsaan_ibu": "Amsterdam",
                "kecamatan_ayah_id": "3507210",
                "kecamatan_ibu_id": "3507210",
                "kecamatan_id": "3507210",
                "kecamatan_pelapor_id": "3507210",
                "kelurahan_ayah_id": "3507210009",
                "kelurahan_ibu_id": "3507210009",
                "kelurahan_id": "3507210009",
                "kelurahan_pelapor_id": "3507210009",
                "kewarganegaraan_ayah": "WNI",
                "kewarganegaraan_ibu": "WNA",
                "kode_wilayah": "35",
                "kota_ayah_id": "3507",
                "kota_ibu_id": "3507",
                "kota_id": "3507",
                "kota_pelapor_id": "3507",
                "lokasi_id": "3507210",
                "m_user_id": "9",
                "nama_anak": "si anak",
                "nama_ayah": "si ayah",
                "nama_ibu": "si ibu",
                "nama_kepala_keluarga": "si bapak",
                "nama_pelapor": "sase",
                "nik_pelapor": "555555",
                "no_kk": "21212",
                "no_nik_ayah": "54321",
                "no_nik_ibu": "12345",
                "panjang": "50.7",
                "pekerjaan_ayah": "Notaris",
                "pekerjaan_ibu": "ibu rumah tangga",
                "pekerjaan_pelapor": "tukang lapor",
                "penolong_kelahiran": "dokter",
                "provinsi_ayah_id": "35",
                "provinsi_ibu_id": "35",
                "provinsi_pelapor_id": "35",
                "pukul_kelahiran": "19.55",
                "tanggal_lahir": "1999-10-05",
                "tanggal_lahir_ayah": "1981-03-15",
                "tanggal_lahir_ibu": "1979-10-05",
                "tanggal_pernikahan_ibu": "1998-10-20",
                "tempat_dilahirkan": "gubuk sentosa",
                "tempat_lahir": "malang",
                "umur_pelapor": "15"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "alamat_ayah": "jl. rumah keluarga",
            "alamat_ibu": "jl. rumah keluarga",
            "alamat_pelapor": "jl. rumah pelapor",
            "berat": "5.6",
            "id": 326,
            "is_dengan_ortu": "1",
            "jenis_kelahiran": "tunggal",
            "jenis_kelamin_anak": "laki-laki",
            "jenis_kelamin_pelapor": "laki-laki",
            "kebangsaan_ayah": "Indonesia",
            "kebangsaan_ibu": "Amsterdam",
            "kecamatan_ayah_id": "3507210",
            "kecamatan_ibu_id": "3507210",
            "kecamatan_id": "3507210",
            "kecamatan_pelapor_id": "3507210",
            "kelurahan_ayah_id": "3507210009",
            "kelurahan_ibu_id": "3507210009",
            "kelurahan_id": "3507210009",
            "kelurahan_pelapor_id": "3507210009",
            "kewarganegaraan_ayah": "WNI",
            "kewarganegaraan_ibu": "WNA",
            "kode_wilayah": "35",
            "kota_ayah_id": "3507",
            "kota_ibu_id": "3507",
            "kota_id": "3507",
            "kota_pelapor_id": "3507",
            "lokasi_id": "3507210",
            "m_user_id": "9",
            "nama_anak": "si anak",
            "nama_ayah": "si ayah",
            "nama_ibu": "si ibu",
            "nama_kepala_keluarga": "si bapak",
            "nama_pelapor": "sase",
            "nik_pelapor": "555555",
            "no_kk": "21212",
            "no_nik_ayah": "54321",
            "no_nik_ibu": "12345",
            "panjang": "50.7",
            "pekerjaan_ayah": "Notaris",
            "pekerjaan_ibu": "ibu rumah tangga",
            "pekerjaan_pelapor": "tukang lapor",
            "penolong_kelahiran": "dokter",
            "provinsi_ayah_id": "35",
            "provinsi_ibu_id": "35",
            "provinsi_pelapor_id": "35",
            "pukul_kelahiran": "19.55",
            "tanggal_lahir": "1999-10-05",
            "tanggal_lahir_ayah": "1981-03-15",
            "tanggal_lahir_ibu": "1979-10-05",
            "tanggal_pernikahan_ibu": "1998-10-20",
            "tempat_dilahirkan": "gubuk sentosa",
            "tempat_lahir": "malang",
            "umur_pelapor": "15"
        }
    }]
};

export const VALID_UPDATE_STATUS_VERIFIKASI_SCHEMA = {
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
                        326
                    ]
                },
                "notes": {
                    "type": "string",
                    "default": "",
                    "title": "The notes Schema",
                    "examples": [
                        "sase"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-10-03 11:51:19"
                    ]
                }
            },
            "examples": [{
                "id": 326,
                "notes": "sase",
                "updated_at": "2022-10-03 11:51:19"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 326,
            "notes": "sase",
            "updated_at": "2022-10-03 11:51:19"
        }
    }]
};

export const VALID_UPDATE_STATUS_SCHEMA = {
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
                        326
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
                "id": 326,
                "status": "dibatalkan"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 326,
            "status": "dibatalkan"
        }
    }]
};

export const VALID_UPDATE_JADWAL_SCHEMA = {
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
                            326
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
                            "2022-12-12"
                        ]
                    }
                },
                "examples": [{
                    "id": 326,
                    "status": "dijadwalkan",
                    "tanggal_kedatangan": "2022-12-12"
                }]
            },
            "examples": [
                [{
                    "id": 326,
                    "status": "dijadwalkan",
                    "tanggal_kedatangan": "2022-12-12"
                }]
            ]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": [{
            "id": 326,
            "status": "dijadwalkan",
            "tanggal_kedatangan": "2022-12-12"
        }]
    }]
};

export const VALID_UPDATE_STATUS_KONFIRMASI_SCHEMA = {
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
                "jam_kedatangan",
                "updated_at"
            ],
            "properties": {
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        326
                    ]
                },
                "jam_kedatangan": {
                    "type": "string",
                    "default": "",
                    "title": "The jam_kedatangan Schema",
                    "examples": [
                        "12:12:12"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-10-03 11:54:14"
                    ]
                }
            },
            "examples": [{
                "id": 326,
                "jam_kedatangan": "12:12:12",
                "updated_at": "2022-10-03 11:54:14"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "id": 326,
            "jam_kedatangan": "12:12:12",
            "updated_at": "2022-10-03 11:54:14"
        }
    }]
};