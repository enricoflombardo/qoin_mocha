/*export const VALIDATE_FORMULIR_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "pekerjaan_1",
        "nama_lengkap_2",
        "umur_2",
        "tanggal_lahir_2",
        "tempat_lahir_2",
        "provinsi_2",
        "kecamatan_2",
        "m_doc_id",
        "layout_mobile"
    ],
    "properties": {
        "pekerjaan_1": {
            "type": "string",
            "default": "",
            "title": "The pekerjaan_1 Schema",
            "examples": [
                "Wiraswasta"
            ]
        },
        "nama_lengkap_2": {
            "type": "string",
            "default": "",
            "title": "The nama_lengkap_2 Schema",
            "examples": [
                "HTes"
            ]
        },
        "umur_2": {
            "type": "string",
            "default": "",
            "title": "The umur_2 Schema",
            "examples": [
                "11"
            ]
        },
        "tanggal_lahir_2": {
            "type": "string",
            "default": "",
            "title": "The tanggal_lahir_2 Schema",
            "examples": [
                "12/08/2022"
            ]
        },
        "tempat_lahir_2": {
            "type": "string",
            "default": "",
            "title": "The tempat_lahir_2 Schema",
            "examples": [
                "mkj"
            ]
        },
        "provinsi_2": {
            "type": "string",
            "default": "",
            "title": "The provinsi_2 Schema",
            "examples": [
                "Jawa Tengah"
            ]
        },
        "kecamatan_2": {
            "type": "string",
            "default": "",
            "title": "The kecamatan_2 Schema",
            "examples": [
                "Wagir"
            ]
        },
        "m_doc_id": {
            "type": "string",
            "default": "",
            "title": "The m_doc_id Schema",
            "examples": [
                "1"
            ]
        },
        "layout_mobile": {
            "type": "array",
            "default": [],
            "title": "The layout_mobile Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "desc",
                    "forms",
                    "id",
                    "title"
                ],
                "properties": {
                    "desc": {
                        "type": "string",
                        "title": "The desc Schema",
                        "examples": [
                            ""
                        ]
                    },
                    "forms": {
                        "type": "array",
                        "title": "The forms Schema",
                        "items": {
                            "type": "array",
                            "title": "A Schema",
                            "items": {
                                "type": "object",
                                "title": "A Schema",
                                "required": [
                                    "desc",
                                    "format",
                                    "iconId",
                                    "id",
                                    "key",
                                    "name",
                                    "option",
                                    "property",
                                    "tampilan",
                                    "type",
                                    "value"
                                ],
                                "properties": {
                                    "desc": {
                                        "type": "string",
                                        "title": "The desc Schema",
                                        "examples": [
                                            "Dropdown or list options",
                                            "Berkas, gambar, video dll",
                                            "Isi data teks dalam satu baris",
                                            "Bilangan bulat atau desimal",
                                            "Tanggal"
                                        ]
                                    },
                                    "format": {
                                        "type": "object",
                                        "title": "The format Schema",
                                        "required": [
                                            "type",
                                            "is_negative",
                                            "option",
                                            "value",
                                            "date"
                                        ],
                                        "properties": {
                                            "type": {
                                                "type": "string",
                                                "title": "The type Schema",
                                                "examples": [
                                                    "list",
                                                    "dropdown"
                                                ]
                                            },
                                            "is_negative": {
                                                "type": "boolean",
                                                "default": false,
                                                "title": "The is_negative Schema",
                                                "examples": [
                                                    false
                                                ]
                                            },
                                            "option": {
                                                "type": "array",
                                                "default": [],
                                                "title": "The option Schema",
                                                "items": {
                                                    "type": "object",
                                                    "title": "A Schema",
                                                    "required": [
                                                        "label"
                                                    ],
                                                    "properties": {
                                                        "label": {
                                                            "type": "string",
                                                            "title": "The label Schema",
                                                            "examples": [
                                                                "Bilangan Bulat",
                                                                "Bilangan Desimal"
                                                            ]
                                                        }
                                                    },
                                                    "examples": [{
                                                        "label": "Bilangan Bulat"
                                                    },
                                                    {
                                                        "label": "Bilangan Desimal"
                                                    }]
                                                },
                                                "examples": [
                                                    [{
                                                        "label": "Bilangan Bulat"
                                                    },
                                                    {
                                                        "label": "Bilangan Desimal"
                                                    }]
                                                ]
                                            },
                                            "value": {
                                                "type": "object",
                                                "default": {},
                                                "title": "The value Schema",
                                                "required": [
                                                    "label"
                                                ],
                                                "properties": {
                                                    "label": {
                                                        "type": "string",
                                                        "default": "",
                                                        "title": "The label Schema",
                                                        "examples": [
                                                            "Bilangan Bulat"
                                                        ]
                                                    }
                                                },
                                                "examples": [{
                                                    "label": "Bilangan Bulat"
                                                }]
                                            },
                                            "date": {
                                                "type": "object",
                                                "default": {},
                                                "title": "The date Schema",
                                                "required": [
                                                    "option",
                                                    "value"
                                                ],
                                                "properties": {
                                                    "option": {
                                                        "type": "array",
                                                        "default": [],
                                                        "title": "The option Schema",
                                                        "items": {
                                                            "type": "object",
                                                            "title": "A Schema",
                                                            "required": [
                                                                "label",
                                                                "value"
                                                            ],
                                                            "properties": {
                                                                "label": {
                                                                    "type": "string",
                                                                    "title": "The label Schema",
                                                                    "examples": [
                                                                        "DD/MM/YYYY",
                                                                        "MM/DD/YYYY",
                                                                        "YYYY/MM/DD",
                                                                        "YYYY/DD/MM",
                                                                        "DD-MM-YYYY",
                                                                        "MM-DD-YYYY",
                                                                        "YYYY-MM-DD",
                                                                        "YYYY-DD-MM"
                                                                    ]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "title": "The value Schema",
                                                                    "examples": [
                                                                        "dd/MM/yyyy",
                                                                        "MM/dd/yyyy",
                                                                        "yyyy/MM/dd",
                                                                        "yyyy/dd/MM",
                                                                        "dd-MM-yyyy",
                                                                        "MM-dd-yyyy",
                                                                        "yyyy-MM-dd",
                                                                        "yyyy-dd-MM"
                                                                    ]
                                                                }
                                                            },
                                                            "examples": [{
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
                                                            }]
                                                        },
                                                        "examples": [
                                                            [{
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
                                                            }]
                                                        ]
                                                    },
                                                    "value": {
                                                        "type": "object",
                                                        "default": {},
                                                        "title": "The value Schema",
                                                        "required": [
                                                            "label",
                                                            "value"
                                                        ],
                                                        "properties": {
                                                            "label": {
                                                                "type": "string",
                                                                "default": "",
                                                                "title": "The label Schema",
                                                                "examples": [
                                                                    "DD/MM/YYYY"
                                                                ]
                                                            },
                                                            "value": {
                                                                "type": "string",
                                                                "default": "",
                                                                "title": "The value Schema",
                                                                "examples": [
                                                                    "dd/MM/yyyy"
                                                                ]
                                                            }
                                                        },
                                                        "examples": [{
                                                            "label": "DD/MM/YYYY",
                                                            "value": "dd/MM/yyyy"
                                                        }]
                                                    }
                                                },
                                                "examples": [{
                                                    "option": [{
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
                                                    }],
                                                    "value": {
                                                        "label": "DD/MM/YYYY",
                                                        "value": "dd/MM/yyyy"
                                                    }
                                                }]
                                            }
                                        },
                                        "examples": [{
                                            "type": "list"
                                        },
                                        {
                                            "is_negative": false,
                                            "option": [{
                                                "label": "Bilangan Bulat"
                                            },
                                            {
                                                "label": "Bilangan Desimal"
                                            }],
                                            "value": {
                                                "label": "Bilangan Bulat"
                                            }
                                        },
                                        {
                                            "date": {
                                                "option": [{
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
                                                }],
                                                "value": {
                                                    "label": "DD/MM/YYYY",
                                                    "value": "dd/MM/yyyy"
                                                }
                                            }
                                        },
                                        {
                                            "type": "dropdown"
                                        },
                                        {
                                            "type": "dropdown"
                                        }]
                                    },
                                    "iconId": {
                                        "type": "integer",
                                        "title": "The iconId Schema",
                                        "examples": [
                                            7,
                                            9,
                                            1,
                                            3,
                                            4
                                        ]
                                    },
                                    "id": {
                                        "type": "string",
                                        "title": "The id Schema",
                                        "examples": [
                                            "form-8-1",
                                            "form-7-1",
                                            "form-1-1",
                                            "form-2-1",
                                            "form-3-1",
                                            "form-4-1",
                                            "form-5-1",
                                            "form-6-1"
                                        ]
                                    },
                                    "key": {
                                        "type": "string",
                                        "title": "The key Schema",
                                        "examples": [
                                            "pekerjaan_1",
                                            "foto_1",
                                            "nama_lengkap_2",
                                            "umur_2",
                                            "tanggal_lahir_2",
                                            "tempat_lahir_2",
                                            "provinsi_2",
                                            "kecamatan_2"
                                        ]
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "The name Schema",
                                        "examples": [
                                            "Tombol Radio",
                                            "Media",
                                            "Kolom Satu Baris",
                                            "Angka",
                                            "Tanggal"
                                        ]
                                    },
                                    "option": {
                                        "type": "array",
                                        "title": "The option Schema",
                                        "items": {
                                            "type": "object",
                                            "title": "A Schema",
                                            "required": [
                                                "id",
                                                "label"
                                            ],
                                            "properties": {
                                                "id": {
                                                    "type": "integer",
                                                    "title": "The id Schema",
                                                    "examples": [
                                                        1,
                                                        2,
                                                        3
                                                    ]
                                                },
                                                "label": {
                                                    "type": "string",
                                                    "title": "The label Schema",
                                                    "examples": [
                                                        "Wiraswasta",
                                                        "Swasta",
                                                        "Karyawan",
                                                        "Jawa Timur",
                                                        "Jawa Tengah",
                                                        "Jawa Barat",
                                                        "Wagir",
                                                        "Sukun",
                                                        "Lowokwaru"
                                                    ]
                                                }
                                            },
                                            "examples": [{
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
                                            },
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
                                            },
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
                                            }]
                                        },
                                        "examples": [
                                            [{
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
                                            }],
                                            [{
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
                                            }],
                                            [{
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
                                            }]
                                        ]
                                    },
                                    "property": {
                                        "type": "object",
                                        "title": "The property Schema",
                                        "required": [
                                            "deskripsi",
                                            "keterangan",
                                            "label"
                                        ],
                                        "properties": {
                                            "deskripsi": {
                                                "type": "object",
                                                "title": "The deskripsi Schema",
                                                "required": [
                                                    "placeholder",
                                                    "type",
                                                    "value"
                                                ],
                                                "properties": {
                                                    "placeholder": {
                                                        "type": "string",
                                                        "title": "The placeholder Schema",
                                                        "examples": [
                                                            "Edit deskripsi kolom"
                                                        ]
                                                    },
                                                    "type": {
                                                        "type": "string",
                                                        "title": "The type Schema",
                                                        "examples": [
                                                            "text"
                                                        ]
                                                    },
                                                    "value": {
                                                        "type": "string",
                                                        "title": "The value Schema",
                                                        "examples": [
                                                            "",
                                                            "Nama sesuai KTP",
                                                            "Umur sesuai KTP"
                                                        ]
                                                    }
                                                },
                                                "examples": [{
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": "Nama sesuai KTP"
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": "Umur sesuai KTP"
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                },
                                                {
                                                    "placeholder": "Edit deskripsi kolom",
                                                    "type": "text",
                                                    "value": ""
                                                }]
                                            },
                                            "keterangan": {
                                                "type": "object",
                                                "title": "The keterangan Schema",
                                                "required": [
                                                    "placeholder",
                                                    "type",
                                                    "value"
                                                ],
                                                "properties": {
                                                    "placeholder": {
                                                        "type": "string",
                                                        "title": "The placeholder Schema",
                                                        "examples": [
                                                            "Tambah keterangan kolom"
                                                        ]
                                                    },
                                                    "type": {
                                                        "type": "string",
                                                        "title": "The type Schema",
                                                        "examples": [
                                                            "text"
                                                        ]
                                                    },
                                                    "value": {
                                                        "type": "string",
                                                        "title": "The value Schema",
                                                        "examples": [
                                                            "Pilih Pekerjaan",
                                                            "Masukan Foto",
                                                            "Masukan Nama Lengkap",
                                                            "Masukan Umur",
                                                            "Masukan Tanggal Lahir",
                                                            "Masukan Tempat Lahir",
                                                            "Masukan Provinsi",
                                                            "Masukan Kecamatan"
                                                        ]
                                                    }
                                                },
                                                "examples": [{
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Pilih Pekerjaan"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Foto"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Nama Lengkap"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Umur"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Tanggal Lahir"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Tempat Lahir"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Provinsi"
                                                },
                                                {
                                                    "placeholder": "Tambah keterangan kolom",
                                                    "type": "text",
                                                    "value": "Masukan Kecamatan"
                                                }]
                                            },
                                            "label": {
                                                "type": "object",
                                                "title": "The label Schema",
                                                "required": [
                                                    "placeholder",
                                                    "type",
                                                    "value"
                                                ],
                                                "properties": {
                                                    "placeholder": {
                                                        "type": "string",
                                                        "title": "The placeholder Schema",
                                                        "examples": [
                                                            "Edit label"
                                                        ]
                                                    },
                                                    "type": {
                                                        "type": "string",
                                                        "title": "The type Schema",
                                                        "examples": [
                                                            "text"
                                                        ]
                                                    },
                                                    "value": {
                                                        "type": "string",
                                                        "title": "The value Schema",
                                                        "examples": [
                                                            "Pekerjaan",
                                                            "Foto",
                                                            "Nama Lengkap",
                                                            "Umur",
                                                            "Tanggal Lahir",
                                                            "Tempat Lahir",
                                                            "Provinsi",
                                                            "Kecamatan"
                                                        ]
                                                    }
                                                },
                                                "examples": [{
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Pekerjaan"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Foto"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Nama Lengkap"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Umur"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Tanggal Lahir"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Tempat Lahir"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Provinsi"
                                                },
                                                {
                                                    "placeholder": "Edit label",
                                                    "type": "text",
                                                    "value": "Kecamatan"
                                                }]
                                            }
                                        },
                                        "examples": [{
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
                                        {
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
                                        {
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
                                        {
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
                                        {
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
                                        {
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
                                        {
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
                                        {
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
                                        }]
                                    },
                                    "tampilan": {
                                        "type": "object",
                                        "title": "The tampilan Schema",
                                        "required": [
                                            "deskripsi",
                                            "wajib_diisi",
                                            "primary_key",
                                            "batasi_karakter"
                                        ],
                                        "properties": {
                                            "deskripsi": {
                                                "type": "boolean",
                                                "title": "The deskripsi Schema",
                                                "examples": [
                                                    true,
                                                    false
                                                ]
                                            },
                                            "wajib_diisi": {
                                                "type": "boolean",
                                                "title": "The wajib_diisi Schema",
                                                "examples": [
                                                    true
                                                ]
                                            },
                                            "primary_key": {
                                                "type": "boolean",
                                                "title": "The primary_key Schema",
                                                "examples": [
                                                    false
                                                ]
                                            },
                                            "batasi_karakter": {
                                                "type": "boolean",
                                                "title": "The batasi_karakter Schema",
                                                "examples": [
                                                    false
                                                ]
                                            }
                                        },
                                        "examples": [{
                                            "deskripsi": true,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "deskripsi": false,
                                            "primary_key": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "batasi_karakter": false,
                                            "deskripsi": true,
                                            "primary_key": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "batasi_karakter": false,
                                            "deskripsi": true,
                                            "primary_key": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "deskripsi": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "batasi_karakter": false,
                                            "deskripsi": false,
                                            "primary_key": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "deskripsi": false,
                                            "wajib_diisi": true
                                        },
                                        {
                                            "deskripsi": true,
                                            "wajib_diisi": true
                                        }]
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "The type Schema",
                                        "examples": [
                                            "select",
                                            "media",
                                            "single-line",
                                            "number",
                                            "date"
                                        ]
                                    },
                                    "value": {
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "title": "The value Schema",
                                        "examples": [
                                            "2b9282b1-6cab-422b-bb6c-2c57a56fb33e",
                                            null
                                        ]
                                    }
                                },
                                "examples": [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "list"
                                    },
                                    "iconId": 7,
                                    "id": "form-8-1",
                                    "key": "pekerjaan_1",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                },
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
                                },
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
                                },
                                {
                                    "desc": "Bilangan bulat atau desimal",
                                    "format": {
                                        "is_negative": false,
                                        "option": [{
                                            "label": "Bilangan Bulat"
                                        },
                                        {
                                            "label": "Bilangan Desimal"
                                        }],
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
                                },
                                {
                                    "desc": "Tanggal",
                                    "format": {
                                        "date": {
                                            "option": [{
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
                                            }],
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
                                },
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
                                },
                                {
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-5-1",
                                    "key": "provinsi_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                },
                                {
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-6-1",
                                    "key": "kecamatan_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }]
                            },
                            "examples": [
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "list"
                                    },
                                    "iconId": 7,
                                    "id": "form-8-1",
                                    "key": "pekerjaan_1",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }],
                                [{
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
                                }],
                                [{
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
                                }],
                                [{
                                    "desc": "Bilangan bulat atau desimal",
                                    "format": {
                                        "is_negative": false,
                                        "option": [{
                                            "label": "Bilangan Bulat"
                                        },
                                        {
                                            "label": "Bilangan Desimal"
                                        }],
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
                                }],
                                [{
                                    "desc": "Tanggal",
                                    "format": {
                                        "date": {
                                            "option": [{
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
                                            }],
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
                                }],
                                [{
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
                                }],
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-5-1",
                                    "key": "provinsi_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }],
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-6-1",
                                    "key": "kecamatan_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }]
                            ]
                        },
                        "examples": [
                            [
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "list"
                                    },
                                    "iconId": 7,
                                    "id": "form-8-1",
                                    "key": "pekerjaan_1",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }],
                                [{
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
                                }]
                            ],
                            [
                                [{
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
                                }],
                                [{
                                    "desc": "Bilangan bulat atau desimal",
                                    "format": {
                                        "is_negative": false,
                                        "option": [{
                                            "label": "Bilangan Bulat"
                                        },
                                        {
                                            "label": "Bilangan Desimal"
                                        }],
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
                                }],
                                [{
                                    "desc": "Tanggal",
                                    "format": {
                                        "date": {
                                            "option": [{
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
                                            }],
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
                                }],
                                [{
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
                                }],
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-5-1",
                                    "key": "provinsi_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }],
                                [{
                                    "desc": "Dropdown or list options",
                                    "format": {
                                        "type": "dropdown"
                                    },
                                    "iconId": 7,
                                    "id": "form-6-1",
                                    "key": "kecamatan_2",
                                    "name": "Tombol Radio",
                                    "option": [{
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
                                    }],
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
                                }]
                            ]
                        ]
                    },
                    "id": {
                        "type": "string",
                        "title": "The id Schema",
                        "examples": [
                            "section-2",
                            "section-1"
                        ]
                    },
                    "title": {
                        "type": "string",
                        "title": "The title Schema",
                        "examples": [
                            "FORM PEMBUATAN KTP"
                        ]
                    }
                },
                "examples": [{
                    "desc": "",
                    "forms": [
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "list"
                            },
                            "iconId": 7,
                            "id": "form-8-1",
                            "key": "pekerjaan_1",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }],
                        [{
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
                        }]
                    ],
                    "id": "section-2",
                    "title": "FORM PEMBUATAN KTP"
                },
                {
                    "desc": "",
                    "forms": [
                        [{
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
                        }],
                        [{
                            "desc": "Bilangan bulat atau desimal",
                            "format": {
                                "is_negative": false,
                                "option": [{
                                    "label": "Bilangan Bulat"
                                },
                                {
                                    "label": "Bilangan Desimal"
                                }],
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
                        }],
                        [{
                            "desc": "Tanggal",
                            "format": {
                                "date": {
                                    "option": [{
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
                                    }],
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
                        }],
                        [{
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
                        }],
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "dropdown"
                            },
                            "iconId": 7,
                            "id": "form-5-1",
                            "key": "provinsi_2",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }],
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "dropdown"
                            },
                            "iconId": 7,
                            "id": "form-6-1",
                            "key": "kecamatan_2",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }]
                    ],
                    "id": "section-1",
                    "title": "FORM PEMBUATAN KTP"
                }]
            },
            "examples": [
                [{
                    "desc": "",
                    "forms": [
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "list"
                            },
                            "iconId": 7,
                            "id": "form-8-1",
                            "key": "pekerjaan_1",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }],
                        [{
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
                        }]
                    ],
                    "id": "section-2",
                    "title": "FORM PEMBUATAN KTP"
                },
                {
                    "desc": "",
                    "forms": [
                        [{
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
                        }],
                        [{
                            "desc": "Bilangan bulat atau desimal",
                            "format": {
                                "is_negative": false,
                                "option": [{
                                    "label": "Bilangan Bulat"
                                },
                                {
                                    "label": "Bilangan Desimal"
                                }],
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
                        }],
                        [{
                            "desc": "Tanggal",
                            "format": {
                                "date": {
                                    "option": [{
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
                                    }],
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
                        }],
                        [{
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
                        }],
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "dropdown"
                            },
                            "iconId": 7,
                            "id": "form-5-1",
                            "key": "provinsi_2",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }],
                        [{
                            "desc": "Dropdown or list options",
                            "format": {
                                "type": "dropdown"
                            },
                            "iconId": 7,
                            "id": "form-6-1",
                            "key": "kecamatan_2",
                            "name": "Tombol Radio",
                            "option": [{
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
                            }],
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
                        }]
                    ],
                    "id": "section-1",
                    "title": "FORM PEMBUATAN KTP"
                }]
            ]
        }
    },
    "examples": [{
        "pekerjaan_1": "Wiraswasta",
        "nama_lengkap_2": "HTes",
        "umur_2": "11",
        "tanggal_lahir_2": "12/08/2022",
        "tempat_lahir_2": "mkj",
        "provinsi_2": "Jawa Tengah",
        "kecamatan_2": "Wagir",
        "m_doc_id": "1",
        "layout_mobile": [{
            "desc": "",
            "forms": [
                [{
                    "desc": "Dropdown or list options",
                    "format": {
                        "type": "list"
                    },
                    "iconId": 7,
                    "id": "form-8-1",
                    "key": "pekerjaan_1",
                    "name": "Tombol Radio",
                    "option": [{
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
                    }],
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
                }],
                [{
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
                }]
            ],
            "id": "section-2",
            "title": "FORM PEMBUATAN KTP"
        },
        {
            "desc": "",
            "forms": [
                [{
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
                }],
                [{
                    "desc": "Bilangan bulat atau desimal",
                    "format": {
                        "is_negative": false,
                        "option": [{
                            "label": "Bilangan Bulat"
                        },
                        {
                            "label": "Bilangan Desimal"
                        }],
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
                }],
                [{
                    "desc": "Tanggal",
                    "format": {
                        "date": {
                            "option": [{
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
                            }],
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
                }],
                [{
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
                }],
                [{
                    "desc": "Dropdown or list options",
                    "format": {
                        "type": "dropdown"
                    },
                    "iconId": 7,
                    "id": "form-5-1",
                    "key": "provinsi_2",
                    "name": "Tombol Radio",
                    "option": [{
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
                    }],
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
                }],
                [{
                    "desc": "Dropdown or list options",
                    "format": {
                        "type": "dropdown"
                    },
                    "iconId": 7,
                    "id": "form-6-1",
                    "key": "kecamatan_2",
                    "name": "Tombol Radio",
                    "option": [{
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
                    }],
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
                }]
            ],
            "id": "section-1",
            "title": "FORM PEMBUATAN KTP"
        }]
    }]
}

//export const VALIDATE_LIST_FORMULIR_SCHEMA = 

export const VALIDATE_LIST_DOCUMENT = {
    "status_code": 200,
    "message": "Success",
    "data": {
        "list": [
            {
                "adjudikasi": 0,
                "alias_formulir": "Akta Kematian",
                "created_at": "2022-08-09T11:54:26+07:00",
                "deleted_at": null,
                "gambar": "https://s3.loyalto.id/inisadev/imagepublic/0oqDKBWH1660020866-7ec65e0bf8130f25b759bc3d5edb4d73.jpg",
                "id": 5,
                "ikon": "https://s3.loyalto.id/inisadev/imagepublic/eNA0kq3k1660020866-d3bc2fb822b29e3ed1ee0727a751f390.png",
                "instansi": "Dukcapil",
                "kategori": "Digital ID",
                "m_form_id": 8,
                "menu": "Sentra Kependudukan",
                "status": 1,
                "sub_kategori": "Akta Kematian",
                "sub_menu": "Akta Kematian",
                "updated_at": "2022-08-09T11:54:26+07:00"
            },
            {
                "adjudikasi": 0,
                "alias_formulir": "Pengajuan Pindah Domisili",
                "created_at": "2022-08-05T16:55:48+07:00",
                "deleted_at": null,
                "gambar": "https://s3.loyalto.id/inisadev/imagepublic/Ma75UsLt1659693348-7ec65e0bf8130f25b759bc3d5edb4d73.jpg",
                "id": 4,
                "ikon": "https://s3.loyalto.id/inisadev/imagepublic/vCa5Bu1F1659693348-d3bc2fb822b29e3ed1ee0727a751f390.png",
                "instansi": "Dukcapil",
                "kategori": "Digital ID",
                "m_form_id": 16,
                "menu": "Sentra Kependudukan",
                "status": 1,
                "sub_kategori": "TEST",
                "sub_menu": "TEST",
                "updated_at": "2022-08-05T16:55:48+07:00"
            },
            {
                "adjudikasi": 0,
                "alias_formulir": "Formulir Pengajuan Pinjaman",
                "created_at": "2022-08-03T15:12:18+07:00",
                "deleted_at": null,
                "gambar": "https://s3.loyalto.id/inisadev/imagepublic/Y7kP2m8K1659514338-7d87adb972e1151b3fc69d4cf955d837.png",
                "id": 3,
                "ikon": "https://s3.loyalto.id/inisadev/imagepublic/VBiEMNEP1659514338-7d87adb972e1151b3fc69d4cf955d837.png",
                "instansi": "Dispenduk",
                "kategori": "Digital ID",
                "m_form_id": 14,
                "menu": "Sentra Kependudukan",
                "status": 1,
                "sub_kategori": "Akta Kematian",
                "sub_menu": "Akta Kematian",
                "updated_at": "2022-08-03T15:12:18+07:00"
            },
            {
                "adjudikasi": 0,
                "alias_formulir": "Akta Kematian",
                "created_at": "2022-07-22T09:55:27+07:00",
                "deleted_at": null,
                "gambar": "https://s3.loyalto.id/inisadev/imagepublic/HCT3lC8e1658458527-6e6007ce3512b40bd975c0e54fc99afa.png",
                "id": 1,
                "ikon": "https://s3.loyalto.id/inisadev/imagepublic/BrIy692Y1658458527-6e6007ce3512b40bd975c0e54fc99afa.png",
                "instansi": "Dispenduk",
                "kategori": "Digital ID",
                "m_form_id": 8,
                "menu": "Sentra Kependudukan",
                "status": 1,
                "sub_kategori": "Akta Kematian",
                "sub_menu": "Akta Kematian",
                "updated_at": "2022-07-22T09:55:27+07:00"
            }
        ],
        "total_items": 4
    }
}

export const VALIDATE_DETAILDOCUMENT_BYID = {
    "status_code": 200,
    "message": "Success",
    "data": [
        {
            "desc": "Mohon isikan data diri orang yang meninggal",
            "forms": [
                [
                    {
                        "id": "form-5-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "nama_yang_meninggal",
                        "label": "Nama yang Meninggal",
                        "name": "Kolom Satu Baris",
                        "placeholder": "Nama yang Meninggal",
                        "property": {},
                        "type": "single-line"
                    }
                ],
                [
                    {
                        "id": "form-1-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "warga_negara",
                        "label": "Warga Negara",
                        "name": "Kolom Satu Baris",
                        "placeholder": "Warga Negara",
                        "property": {},
                        "type": "single-line"
                    }
                ],
                [
                    {
                        "id": "form-2-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "tempat_meninggal",
                        "label": "Tempat Meninggal",
                        "name": "Kolom Satu Baris",
                        "placeholder": "Tempat Meninggal",
                        "property": {},
                        "type": "single-line"
                    }
                ],
                [
                    {
                        "id": "form-3-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "hari_meninggal",
                        "label": "Hari Meninggal",
                        "name": "Kolom Satu Baris",
                        "placeholder": "Hari Meninggal",
                        "property": {},
                        "type": "single-line"
                    },
                    {
                        "format_date": "dd/MM/yyyy",
                        "id": "form-3-2",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "tanggal_meninggal",
                        "label": "Tanggal Meninggal",
                        "name": "Tanggal",
                        "placeholder": "Tanggal Meninggal",
                        "property": {},
                        "type": "date"
                    }
                ],
                [
                    {
                        "format_time": "HH:mm",
                        "id": "form-4-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "jam_meninggal",
                        "label": "Jam Meninggal",
                        "name": "Waktu",
                        "placeholder": "Jam Meninggal",
                        "property": {},
                        "type": "time"
                    }
                ],
                [
                    {
                        "id": "form-6-1",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "tempat_lahir",
                        "label": "Tempat Lahir",
                        "name": "Kolom Satu Baris",
                        "placeholder": "Tempat Lahir",
                        "property": {},
                        "type": "single-line"
                    },
                    {
                        "format_date": "dd/MM/yyyy",
                        "id": "form-6-2",
                        "is_maxlength": false,
                        "is_primary_key": false,
                        "is_required": true,
                        "key": "tanggal_lahir",
                        "label": "Tanggal Lahir",
                        "name": "Tanggal",
                        "placeholder": "Tanggal Lahir",
                        "property": {},
                        "type": "date"
                    }
                ]
            ],
            "id": "section-1",
            "title": "Akta Kematian"
        }
    ]
}

export const VALIDATE_ADDFORMULIR_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "oh-my-god"
    ],
    "properties": {
        "oh-my-god": {
            "type": "string",
            "default": "",
            "title": "The oh-my-god Schema",
            "examples": [
                "What on earth are you requesting?"
            ]
        }
    },
    "examples": [{
        "oh-my-god": "What on earth are you requesting?"
    }]
}*/