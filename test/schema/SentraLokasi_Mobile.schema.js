export const VALIDATE_LOKASI_SCHEMA = {
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
                            "color",
                            "created_at",
                            "extention",
                            "icon",
                            "id",
                            "is_active",
                            "name",
                            "name_en",
                            "updated_at"
                        ],
                        "properties": {
                            "color": {
                                "type": "string",
                                "title": "The color Schema",
                                "examples": [
                                    "#ba68c8",
                                    "#eb4034",
                                    "#f47373",
                                    "#307aec",
                                    "#6859dd",
                                    "#22a173",
                                    "#f78416"
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-06-07T11:16:49+07:00",
                                    "2022-06-07T11:09:29+07:00",
                                    "2022-06-07T11:08:58+07:00",
                                    "2022-06-07T11:05:11+07:00",
                                    "2022-06-06T17:15:20+07:00",
                                    "2022-06-06T17:14:04+07:00",
                                    "2022-06-06T17:07:27+07:00",
                                    "2022-06-06T16:44:48+07:00",
                                    "2022-06-06T10:41:33+07:00",
                                    "2022-06-06T10:39:13+07:00",
                                    "2022-06-06T10:31:13+07:00",
                                    "2022-06-06T10:23:39+07:00",
                                    "2022-06-06T10:23:03+07:00",
                                    "2022-01-18T08:52:20+07:00",
                                    "2022-01-18T08:52:06+07:00",
                                    "2022-01-18T08:51:50+07:00",
                                    "2022-01-18T08:51:33+07:00",
                                    "2022-01-18T10:20:36+07:00"
                                ]
                            },
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    "",
                                    "svg"
                                ]
                            },
                            "icon": {
                                "type": "string",
                                "title": "The icon Schema",
                                "examples": [
                                    "https://s3.loyalto.id/inisadev/public/noimage.png",
                                    "http://localhost:9000/inisadev/1645080803877885400.svg",
                                    "http://localhost:9000/inisadev/220124145312.svg",
                                    "http://localhost:9000/inisadev/220124145327.svg",
                                    "http://localhost:9000/inisadev/220124145334.svg",
                                    "http://localhost:9000/inisadev/220124145340.svg"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    400,
                                    399,
                                    398,
                                    397,
                                    396,
                                    395,
                                    394,
                                    393,
                                    392,
                                    391,
                                    390,
                                    389,
                                    388,
                                    6,
                                    5,
                                    4,
                                    3,
                                    2
                                ]
                            },
                            "is_active": {
                                "type": "string",
                                "title": "The is_active Schema",
                                "examples": [
                                    "1"
                                ]
                            },
                            "name": {
                                "type": "string",
                                "title": "The name Schema",
                                "examples": [
                                    "Sepeda",
                                    "Bengkel",
                                    "mobil",
                                    "Pendidikan",
                                    "Terminal Bus",
                                    "Bandara",
                                    "Bank",
                                    "Kantor Polisi"
                                ]
                            },
                            "name_en": {
                                "type": "string",
                                "title": "The name_en Schema",
                                "examples": [
                                    "",
                                    "Test",
                                    "Education",
                                    "Bus Station",
                                    "Airport",
                                    "Bank",
                                    "Police Station"
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-06-07T11:16:49+07:00",
                                    "2022-06-07T11:09:29+07:00",
                                    "2022-06-07T11:08:58+07:00",
                                    "2022-06-07T11:05:11+07:00",
                                    "2022-06-06T17:15:20+07:00",
                                    "2022-06-06T17:14:04+07:00",
                                    "2022-06-06T17:07:27+07:00",
                                    "2022-06-06T16:44:48+07:00",
                                    "2022-06-06T10:41:33+07:00",
                                    "2022-06-06T10:39:13+07:00",
                                    "2022-06-06T10:31:13+07:00",
                                    "2022-06-06T10:23:39+07:00",
                                    "2022-06-06T10:23:03+07:00",
                                    "2022-02-17T13:53:24+07:00",
                                    "2022-01-24T14:53:12+07:00",
                                    "2022-01-24T14:53:27+07:00",
                                    "2022-02-18T10:53:23+07:00",
                                    "2022-04-05T15:40:46+07:00"
                                ]
                            }
                        },
                        "examples": [{
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:16:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 400,
                            "is_active": "1",
                            "name": "Sepeda",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:16:49+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:09:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 399,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:09:29+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:08:58+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 398,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:08:58+07:00"
                        },
                        {
                            "color": "#eb4034",
                            "created_at": "2022-06-07T11:05:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 397,
                            "is_active": "1",
                            "name": "mobil",
                            "name_en": "Test",
                            "updated_at": "2022-06-07T11:05:11+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:15:20+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 396,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:15:20+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 395,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:14:04+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:07:27+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 394,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:07:27+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T16:44:48+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 393,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-06-06T16:44:48+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:41:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 392,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:41:33+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:39:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 391,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:39:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:31:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 390,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:31:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:23:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 389,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:23:39+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:23:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 388,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-06-06T10:23:03+07:00"
                        },
                        {
                            "color": "#f47373",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/1645080803877885400.svg",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-02-17T13:53:24+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145312.svg",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-01-24T14:53:12+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145327.svg",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara",
                            "name_en": "Airport",
                            "updated_at": "2022-01-24T14:53:27+07:00"
                        },
                        {
                            "color": "#22a173",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145334.svg",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-02-18T10:53:23+07:00"
                        },
                        {
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145340.svg",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-04-05T15:40:46+07:00"
                        }]
                    },
                    "examples": [
                        [{
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:16:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 400,
                            "is_active": "1",
                            "name": "Sepeda",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:16:49+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:09:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 399,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:09:29+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-07T11:08:58+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 398,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-07T11:08:58+07:00"
                        },
                        {
                            "color": "#eb4034",
                            "created_at": "2022-06-07T11:05:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 397,
                            "is_active": "1",
                            "name": "mobil",
                            "name_en": "Test",
                            "updated_at": "2022-06-07T11:05:11+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:15:20+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 396,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:15:20+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 395,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:14:04+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T17:07:27+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 394,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T17:07:27+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T16:44:48+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 393,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-06-06T16:44:48+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:41:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 392,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:41:33+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:39:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 391,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:39:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:31:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 390,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:31:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:23:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 389,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-06-06T10:23:39+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-06T10:23:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 388,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-06-06T10:23:03+07:00"
                        },
                        {
                            "color": "#f47373",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/1645080803877885400.svg",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-02-17T13:53:24+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145312.svg",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-01-24T14:53:12+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145327.svg",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara",
                            "name_en": "Airport",
                            "updated_at": "2022-01-24T14:53:27+07:00"
                        },
                        {
                            "color": "#22a173",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145334.svg",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-02-18T10:53:23+07:00"
                        },
                        {
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "svg",
                            "icon": "http://localhost:9000/inisadev/220124145340.svg",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-04-05T15:40:46+07:00"
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        18
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "color": "#ba68c8",
                    "created_at": "2022-06-07T11:16:49+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 400,
                    "is_active": "1",
                    "name": "Sepeda",
                    "name_en": "",
                    "updated_at": "2022-06-07T11:16:49+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-07T11:09:29+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 399,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-07T11:09:29+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-07T11:08:58+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 398,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-07T11:08:58+07:00"
                },
                {
                    "color": "#eb4034",
                    "created_at": "2022-06-07T11:05:11+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 397,
                    "is_active": "1",
                    "name": "mobil",
                    "name_en": "Test",
                    "updated_at": "2022-06-07T11:05:11+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T17:15:20+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 396,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T17:15:20+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T17:14:04+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 395,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T17:14:04+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T17:07:27+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 394,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T17:07:27+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T16:44:48+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 393,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-06-06T16:44:48+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T10:41:33+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 392,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T10:41:33+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T10:39:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 391,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T10:39:13+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T10:31:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 390,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T10:31:13+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T10:23:39+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 389,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-06-06T10:23:39+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-06T10:23:03+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 388,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-06-06T10:23:03+07:00"
                },
                {
                    "color": "#f47373",
                    "created_at": "2022-01-18T08:52:20+07:00",
                    "extention": "svg",
                    "icon": "http://localhost:9000/inisadev/1645080803877885400.svg",
                    "id": 6,
                    "is_active": "1",
                    "name": "Pendidikan",
                    "name_en": "Education",
                    "updated_at": "2022-02-17T13:53:24+07:00"
                },
                {
                    "color": "#307aec",
                    "created_at": "2022-01-18T08:52:06+07:00",
                    "extention": "svg",
                    "icon": "http://localhost:9000/inisadev/220124145312.svg",
                    "id": 5,
                    "is_active": "1",
                    "name": "Terminal Bus",
                    "name_en": "Bus Station",
                    "updated_at": "2022-01-24T14:53:12+07:00"
                },
                {
                    "color": "#6859dd",
                    "created_at": "2022-01-18T08:51:50+07:00",
                    "extention": "svg",
                    "icon": "http://localhost:9000/inisadev/220124145327.svg",
                    "id": 4,
                    "is_active": "1",
                    "name": "Bandara",
                    "name_en": "Airport",
                    "updated_at": "2022-01-24T14:53:27+07:00"
                },
                {
                    "color": "#22a173",
                    "created_at": "2022-01-18T08:51:33+07:00",
                    "extention": "svg",
                    "icon": "http://localhost:9000/inisadev/220124145334.svg",
                    "id": 3,
                    "is_active": "1",
                    "name": "Bank",
                    "name_en": "Bank",
                    "updated_at": "2022-02-18T10:53:23+07:00"
                },
                {
                    "color": "#f78416",
                    "created_at": "2022-01-18T10:20:36+07:00",
                    "extention": "svg",
                    "icon": "http://localhost:9000/inisadev/220124145340.svg",
                    "id": 2,
                    "is_active": "1",
                    "name": "Kantor Polisi",
                    "name_en": "Police Station",
                    "updated_at": "2022-04-05T15:40:46+07:00"
                }],
                "total_item": 18
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "color": "#ba68c8",
                "created_at": "2022-06-07T11:16:49+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 400,
                "is_active": "1",
                "name": "Sepeda",
                "name_en": "",
                "updated_at": "2022-06-07T11:16:49+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-07T11:09:29+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 399,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-07T11:09:29+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-07T11:08:58+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 398,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-07T11:08:58+07:00"
            },
            {
                "color": "#eb4034",
                "created_at": "2022-06-07T11:05:11+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 397,
                "is_active": "1",
                "name": "mobil",
                "name_en": "Test",
                "updated_at": "2022-06-07T11:05:11+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T17:15:20+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 396,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T17:15:20+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T17:14:04+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 395,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T17:14:04+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T17:07:27+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 394,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T17:07:27+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T16:44:48+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 393,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-06-06T16:44:48+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T10:41:33+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 392,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T10:41:33+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T10:39:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 391,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T10:39:13+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T10:31:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 390,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T10:31:13+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T10:23:39+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 389,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-06-06T10:23:39+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-06T10:23:03+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 388,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-06-06T10:23:03+07:00"
            },
            {
                "color": "#f47373",
                "created_at": "2022-01-18T08:52:20+07:00",
                "extention": "svg",
                "icon": "http://localhost:9000/inisadev/1645080803877885400.svg",
                "id": 6,
                "is_active": "1",
                "name": "Pendidikan",
                "name_en": "Education",
                "updated_at": "2022-02-17T13:53:24+07:00"
            },
            {
                "color": "#307aec",
                "created_at": "2022-01-18T08:52:06+07:00",
                "extention": "svg",
                "icon": "http://localhost:9000/inisadev/220124145312.svg",
                "id": 5,
                "is_active": "1",
                "name": "Terminal Bus",
                "name_en": "Bus Station",
                "updated_at": "2022-01-24T14:53:12+07:00"
            },
            {
                "color": "#6859dd",
                "created_at": "2022-01-18T08:51:50+07:00",
                "extention": "svg",
                "icon": "http://localhost:9000/inisadev/220124145327.svg",
                "id": 4,
                "is_active": "1",
                "name": "Bandara",
                "name_en": "Airport",
                "updated_at": "2022-01-24T14:53:27+07:00"
            },
            {
                "color": "#22a173",
                "created_at": "2022-01-18T08:51:33+07:00",
                "extention": "svg",
                "icon": "http://localhost:9000/inisadev/220124145334.svg",
                "id": 3,
                "is_active": "1",
                "name": "Bank",
                "name_en": "Bank",
                "updated_at": "2022-02-18T10:53:23+07:00"
            },
            {
                "color": "#f78416",
                "created_at": "2022-01-18T10:20:36+07:00",
                "extention": "svg",
                "icon": "http://localhost:9000/inisadev/220124145340.svg",
                "id": 2,
                "is_active": "1",
                "name": "Kantor Polisi",
                "name_en": "Police Station",
                "updated_at": "2022-04-05T15:40:46+07:00"
            }],
            "total_item": 18
        }
    }]
}