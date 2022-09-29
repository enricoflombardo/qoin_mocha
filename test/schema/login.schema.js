export const VALIDATE_LOGIN_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "status_code",
        "data",
        "message",
        "settings"
    ],
    "properties": {
        "status_code": {
            "type": "integer",
            "default": 0
        },
        "data": {
            "type": "object",
            "default": {},
            "title": "The data Schema",
            "required": [
                "access_token",
                "token_type",
                "user"
            ],
            "properties": {
                "access_token": {
                    "type": "string",
                    "default": ""
                },
                "token_type": {
                    "type": "string",
                    "default": ""
                },
                "user": {
                    "type": "object",
                    "default": {},
                    "title": "The user Schema",
                    "required": [
                        "akses",
                        "email",
                        "id",
                        "id_user",
                        "reff_type",
                        "user",
                        "username"
                    ],
                    "properties": {
                        "akses": {
                            "type": "object",
                            "default": {},
                            "title": "The akses Schema",
                            "required": [
                                "id",
                                "is_admin",
                                "nama",
                                "permissions"
                            ],
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "default": ""
                                },
                                "is_admin": {
                                    "type": "integer",
                                    "default": 0
                                },
                                "nama": {
                                    "type": "string",
                                    "default": ""
                                },
                                "permissions": {
                                    "type": "object",
                                    "default": {},
                                    "title": "The permissions Schema",
                                    "required": [
                                        "laporan_jadwal_ujian",
                                        "master_fasilitator",
                                        "master_penguji",
                                        "master_peserta",
                                        "setting_aplikasi",
                                        "setting_hak_akses",
                                        "setting_pengguna",
                                        "transaksi_jadwal_ujian",
                                        "transaksi_penilaian",
                                        "transaksi_review_paper",
                                        "transaksi_yudisium",
                                        "setting_profile"
                                    ],
                                    "properties": {
                                        "laporan_jadwal_ujian": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The laporan_jadwal_ujian Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "master_fasilitator": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The master_fasilitator Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "master_penguji": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The master_penguji Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "master_peserta": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The master_peserta Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "setting_aplikasi": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The setting_aplikasi Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "setting_hak_akses": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The setting_hak_akses Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "setting_pengguna": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The setting_pengguna Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "transaksi_jadwal_ujian": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The transaksi_jadwal_ujian Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "transaksi_penilaian": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The transaksi_penilaian Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "transaksi_review_paper": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The transaksi_review_paper Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "transaksi_yudisium": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The transaksi_yudisium Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        },
                                        "setting_profile": {
                                            "type": "object",
                                            "default": {},
                                            "title": "The setting_profile Schema",
                                            "required": [
                                                "create",
                                                "read",
                                                "update",
                                                "delete"
                                            ],
                                            "properties": {
                                                "create": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The create Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "read": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The read Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "update": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The update Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                },
                                                "delete": {
                                                    "type": "boolean",
                                                    "default": false,
                                                    "title": "The delete Schema",
                                                    "examples": [
                                                        true
                                                    ]
                                                }
                                            },
                                            "examples": [{
                                                "create": true,
                                                "read": true,
                                                "update": true,
                                                "delete": true
                                            }]
                                        }
                                    }
                                }
                            }
                        },
                        "email": {
                            "type": "string",
                            "default": "",
                            "title": "The email Schema",
                            "examples": [
                                "enricoflombardo5@simpel.com"
                            ]
                        },
                        "id": {
                            "type": "string",
                            "default": "",
                            "title": "The id Schema",
                            "examples": [
                                "af0d0933-4932-4f26-9898-154fa704e309"
                            ]
                        },
                        "id_user": {
                            "type": "string",
                            "default": "",
                            "title": "The id_user Schema",
                            "examples": [
                                "cb0605f6-aaa4-45af-91ab-56b562a43ace"
                            ]
                        },
                        "reff_type": {
                            "type": "string",
                            "default": "",
                            "title": "The reff_type Schema",
                            "examples": [
                                "m_user"
                            ]
                        },
                        "user": {
                            "type": "object",
                            "default": {},
                            "title": "The user Schema",
                            "required": [
                                "foto",
                                "nama",
                                "tipe"
                            ],
                            "properties": {
                                "foto": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The foto Schema",
                                    "examples": [
                                        "http://api.ypia.online/storage/assets/img/no-image.png"
                                    ]
                                },
                                "nama": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The nama Schema",
                                    "examples": [
                                        "Enrico Fatkhurrozi Lombardo"
                                    ]
                                },
                                "tipe": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The tipe Schema",
                                    "examples": [
                                        "simpel"
                                    ]
                                }
                            }
                        },
                        "username": {
                            "type": "string",
                            "default": "",
                            "title": "The username Schema",
                            "examples": [
                                "enricoflombardo5_simpel"
                            ]
                        }
                    }
                }
            }
        },
        "message": {
            "type": "string",
            "default": "",
            "title": "The message Schema",
            "examples": [
                ""
            ]
        },
        "settings": {
            "type": "array",
            "default": [],
            "title": "The settings Schema",
            "items": {},
            "examples": [
                []
            ]
        }
    }
}