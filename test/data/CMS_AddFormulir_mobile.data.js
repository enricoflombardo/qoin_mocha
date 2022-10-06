export const VALID_ADDFORMULIR = [ {
    "pekerjaan_1": "Wiraswasta",
    "nama_lengkap_2": "HTes",
    "umur_2": "11",
    "tanggal_lahir_2": "12/08/2022",
    "tempat_lahir_2": "mkj",
    "provinsi_2": "Jawa Tengah",
    "kecamatan_2": "Wagir",
    "m_doc_id": "1",
    "layout_mobile": [
        {
            "desc": "",
            "forms": [
                [
                    {
                        "desc": "Dropdown or list options",
                        "format": {
                            "type": "list"
                        },
                        "iconId": 7,
                        "id": "form-8-1",
                        "key": "pekerjaan_1",
                        "name": "Tombol Radio",
                        "option": [
                            {
                                "id": 1,
                                "label": "Wiraswasta"
                            },
                            {
                                "id": 2,
                                "label": "Swasta"
                            },
                            {
                                "id": 3,
                                "label": "Karyawan"
                            }
                        ],
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Pilih Pekerjaan"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Pekerjaan"
                            }
                        },
                        "tampilan": {
                            "deskripsi": true,
                            "wajib_diisi": true
                        },
                        "type": "select",
                        "value": "2b9282b1-6cab-422b-bb6c-2c57a56fb33e"
                    }
                ],
                [
                    {
                        "desc": "Berkas, gambar, video dll",
                        "iconId": 9,
                        "id": "form-7-1",
                        "key": "foto_1",
                        "name": "Media",
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Foto"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Foto"
                            }
                        },
                        "tampilan": {
                            "deskripsi": false,
                            "primary_key": false,
                            "wajib_diisi": true
                        },
                        "type": "media"
                    }
                ]
            ],
            "id": "section-2",
            "title": "FORM PEMBUATAN KTP"
        },
        {
            "desc": "",
            "forms": [
                [
                    {
                        "desc": "Isi data teks dalam satu baris",
                        "iconId": 1,
                        "id": "form-1-1",
                        "key": "nama_lengkap_2",
                        "name": "Kolom Satu Baris",
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": "Nama sesuai KTP"
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Nama Lengkap"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Nama Lengkap"
                            }
                        },
                        "tampilan": {
                            "batasi_karakter": false,
                            "deskripsi": true,
                            "primary_key": false,
                            "wajib_diisi": true
                        },
                        "type": "single-line"
                    }
                ],
                [
                    {
                        "desc": "Bilangan bulat atau desimal",
                        "format": {
                            "is_negative": false,
                            "option": [
                                {
                                    "label": "Bilangan Bulat"
                                },
                                {
                                    "label": "Bilangan Desimal"
                                }
                            ],
                            "value": {
                                "label": "Bilangan Bulat"
                            }
                        },
                        "iconId": 3,
                        "id": "form-2-1",
                        "key": "umur_2",
                        "name": "Angka",
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": "Umur sesuai KTP"
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Umur"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Umur"
                            }
                        },
                        "tampilan": {
                            "batasi_karakter": false,
                            "deskripsi": true,
                            "primary_key": false,
                            "wajib_diisi": true
                        },
                        "type": "number"
                    }
                ],
                [
                    {
                        "desc": "Tanggal",
                        "format": {
                            "date": {
                                "option": [
                                    {
                                        "label": "DD/MM/YYYY",
                                        "value": "dd/MM/yyyy"
                                    },
                                    {
                                        "label": "MM/DD/YYYY",
                                        "value": "MM/dd/yyyy"
                                    },
                                    {
                                        "label": "YYYY/MM/DD",
                                        "value": "yyyy/MM/dd"
                                    },
                                    {
                                        "label": "YYYY/DD/MM",
                                        "value": "yyyy/dd/MM"
                                    },
                                    {
                                        "label": "DD-MM-YYYY",
                                        "value": "dd-MM-yyyy"
                                    },
                                    {
                                        "label": "MM-DD-YYYY",
                                        "value": "MM-dd-yyyy"
                                    },
                                    {
                                        "label": "YYYY-MM-DD",
                                        "value": "yyyy-MM-dd"
                                    },
                                    {
                                        "label": "YYYY-DD-MM",
                                        "value": "yyyy-dd-MM"
                                    }
                                ],
                                "value": {
                                    "label": "DD/MM/YYYY",
                                    "value": "dd/MM/yyyy"
                                }
                            }
                        },
                        "iconId": 4,
                        "id": "form-3-1",
                        "key": "tanggal_lahir_2",
                        "name": "Tanggal",
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Tanggal Lahir"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Tanggal Lahir"
                            }
                        },
                        "tampilan": {
                            "deskripsi": false,
                            "wajib_diisi": true
                        },
                        "type": "date",
                        "value": null
                    }
                ],
                [
                    {
                        "desc": "Isi data teks dalam satu baris",
                        "iconId": 1,
                        "id": "form-4-1",
                        "key": "tempat_lahir_2",
                        "name": "Kolom Satu Baris",
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Tempat Lahir"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Tempat Lahir"
                            }
                        },
                        "tampilan": {
                            "batasi_karakter": false,
                            "deskripsi": false,
                            "primary_key": false,
                            "wajib_diisi": true
                        },
                        "type": "single-line"
                    }
                ],
                [
                    {
                        "desc": "Dropdown or list options",
                        "format": {
                            "type": "dropdown"
                        },
                        "iconId": 7,
                        "id": "form-5-1",
                        "key": "provinsi_2",
                        "name": "Tombol Radio",
                        "option": [
                            {
                                "id": 1,
                                "label": "Jawa Timur"
                            },
                            {
                                "id": 2,
                                "label": "Jawa Tengah"
                            },
                            {
                                "id": 3,
                                "label": "Jawa Barat"
                            }
                        ],
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Provinsi"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Provinsi"
                            }
                        },
                        "tampilan": {
                            "deskripsi": false,
                            "wajib_diisi": true
                        },
                        "type": "select",
                        "value": "2b9282b1-6cab-422b-bb6c-2c57a56fb33e"
                    }
                ],
                [
                    {
                        "desc": "Dropdown or list options",
                        "format": {
                            "type": "dropdown"
                        },
                        "iconId": 7,
                        "id": "form-6-1",
                        "key": "kecamatan_2",
                        "name": "Tombol Radio",
                        "option": [
                            {
                                "id": 1,
                                "label": "Wagir"
                            },
                            {
                                "id": 2,
                                "label": "Sukun"
                            },
                            {
                                "id": 3,
                                "label": "Lowokwaru"
                            }
                        ],
                        "property": {
                            "deskripsi": {
                                "placeholder": "Edit deskripsi kolom",
                                "type": "text",
                                "value": ""
                            },
                            "keterangan": {
                                "placeholder": "Tambah keterangan kolom",
                                "type": "text",
                                "value": "Masukan Kecamatan"
                            },
                            "label": {
                                "placeholder": "Edit label",
                                "type": "text",
                                "value": "Kecamatan"
                            }
                        },
                        "tampilan": {
                            "deskripsi": true,
                            "wajib_diisi": true
                        },
                        "type": "select",
                        "value": "2b9282b1-6cab-422b-bb6c-2c57a56fb33e"
                    }
                ]
            ],
            "id": "section-1",
            "title": "FORM PEMBUATAN KTP"
        }
    ]
} ]