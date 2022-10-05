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