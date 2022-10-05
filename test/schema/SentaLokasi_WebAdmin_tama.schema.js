const VALIDATE_SENTRALOKASI_WEBADMIN_SCHEMA = {
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