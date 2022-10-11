export const VALIDATE_GETDETAILKATEGORILOKASI = {
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
                    "default": "",
                    "title": "The color Schema",
                    "examples": [
                        "#f78416"
                    ]
                },
                "created_at": {
                    "type": "string",
                    "default": "",
                    "title": "The created_at Schema",
                    "examples": [
                        "2022-01-18T10:20:36+07:00"
                    ]
                },
                "extention": {
                    "type": "string",
                    "default": "",
                    "title": "The extention Schema",
                    "examples": [
                        ""
                    ]
                },
                "icon": {
                    "type": "string",
                    "default": "",
                    "title": "The icon Schema",
                    "examples": [
                        "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png"
                    ]
                },
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        2
                    ]
                },
                "is_active": {
                    "type": "string",
                    "default": "",
                    "title": "The is_active Schema",
                    "examples": [
                        "1"
                    ]
                },
                "name": {
                    "type": "string",
                    "default": "",
                    "title": "The name Schema",
                    "examples": [
                        "Kantor Polisi"
                    ]
                },
                "name_en": {
                    "type": "string",
                    "default": "",
                    "title": "The name_en Schema",
                    "examples": [
                        "Police Station"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-03-28T12:43:39+07:00"
                    ]
                }
            },
            "examples": [{
                "color": "#f78416",
                "created_at": "2022-01-18T10:20:36+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                "id": 2,
                "is_active": "1",
                "name": "Kantor Polisi",
                "name_en": "Police Station",
                "updated_at": "2022-03-28T12:43:39+07:00"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "color": "#f78416",
            "created_at": "2022-01-18T10:20:36+07:00",
            "extention": "",
            "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
            "id": 2,
            "is_active": "1",
            "name": "Kantor Polisi",
            "name_en": "Police Station",
            "updated_at": "2022-03-28T12:43:39+07:00"
        }
    }]
}

export const VALIDATE_READKATEGORILOKASI = {
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
                                    "#43194d",
                                    "#f54242",
                                    "#ba68c8",
                                    "#194d21",
                                    "#5632a8",
                                    "#fc1a04",
                                    "#f78416",
                                    "#ff495c",
                                    "#307aec",
                                    "#6859dd",
                                    "#2ad597"
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-07-07T14:02:57+07:00",
                                    "2022-06-13T14:36:49+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-04-21T15:22:59+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-03-30T15:52:42+07:00",
                                    "2022-01-18T10:20:36+07:00",
                                    "2022-01-18T08:52:20+07:00",
                                    "2022-01-18T08:52:06+07:00",
                                    "2022-01-18T08:51:50+07:00",
                                    "2022-01-18T08:51:33+07:00"
                                ]
                            },
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    ""
                                ]
                            },
                            "icon": {
                                "type": "string",
                                "title": "The icon Schema",
                                "examples": [
                                    "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/public/noimage.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    319,
                                    318,
                                    317,
                                    316,
                                    314,
                                    310,
                                    309,
                                    308,
                                    307,
                                    305,
                                    301,
                                    300,
                                    297,
                                    296,
                                    295,
                                    294,
                                    293,
                                    292,
                                    291,
                                    290,
                                    289,
                                    288,
                                    287,
                                    286,
                                    285,
                                    284,
                                    283,
                                    282,
                                    281,
                                    280,
                                    279,
                                    278,
                                    277,
                                    276,
                                    275,
                                    274,
                                    273,
                                    272,
                                    271,
                                    270,
                                    269,
                                    268,
                                    260,
                                    2,
                                    6,
                                    5,
                                    4,
                                    3
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
                                    "Rumah Sakit Brawijaya",
                                    "RS. Bakti Permai",
                                    "Bengkel 1",
                                    "Sekolah",
                                    "Mobil",
                                    "Pesawat",
                                    "Cat alon",
                                    "Bengkel",
                                    "",
                                    "Restoran",
                                    "Kantor Polisi",
                                    "Pendidikan",
                                    "Terminal Bus",
                                    "Bandara1",
                                    "Bank"
                                ]
                            },
                            "name_en": {
                                "type": "string",
                                "title": "The name_en Schema",
                                "examples": [
                                    "Brawijaya Hospital",
                                    "Hospital",
                                    "Test - Edit",
                                    "School",
                                    "Car",
                                    "",
                                    "Test Cat alon",
                                    "Restaurant",
                                    "Police Station",
                                    "Education",
                                    "Bus Station",
                                    "Airport",
                                    "Bank"
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-07-07T14:02:57+07:00",
                                    "2022-07-07T12:37:01+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-05-19T16:57:25+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-04-01T09:30:25+07:00",
                                    "2022-03-28T12:43:39+07:00",
                                    "2022-03-28T12:41:28+07:00",
                                    "2022-03-28T12:41:39+07:00",
                                    "2022-06-09T15:02:11+07:00",
                                    "2022-04-01T09:28:20+07:00"
                                ]
                            }
                        },
                        "examples": [{
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-03-28T12:43:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara1",
                            "name_en": "Airport",
                            "updated_at": "2022-06-09T15:02:11+07:00"
                        },
                        {
                            "color": "#2ad597",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-04-01T09:28:20+07:00"
                        }]
                    },
                    "examples": [
                        [{
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-03-28T12:43:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara1",
                            "name_en": "Airport",
                            "updated_at": "2022-06-09T15:02:11+07:00"
                        },
                        {
                            "color": "#2ad597",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-04-01T09:28:20+07:00"
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        48
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "color": "#43194d",
                    "created_at": "2022-07-07T14:02:57+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                    "id": 319,
                    "is_active": "1",
                    "name": "Rumah Sakit Brawijaya",
                    "name_en": "Brawijaya Hospital",
                    "updated_at": "2022-07-07T14:02:57+07:00"
                },
                {
                    "color": "#f54242",
                    "created_at": "2022-06-13T14:36:49+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 318,
                    "is_active": "1",
                    "name": "RS. Bakti Permai",
                    "name_en": "Hospital",
                    "updated_at": "2022-07-07T12:37:01+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-13T13:47:32+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 317,
                    "is_active": "1",
                    "name": "Bengkel 1",
                    "name_en": "Test - Edit",
                    "updated_at": "2022-06-13T13:47:32+07:00"
                },
                {
                    "color": "#194d21",
                    "created_at": "2022-06-13T10:39:16+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 316,
                    "is_active": "1",
                    "name": "Sekolah",
                    "name_en": "School",
                    "updated_at": "2022-06-13T10:39:16+07:00"
                },
                {
                    "color": "#5632a8",
                    "created_at": "2022-06-10T15:23:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                    "id": 314,
                    "is_active": "1",
                    "name": "Mobil",
                    "name_en": "Car",
                    "updated_at": "2022-06-10T15:23:01+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:49:53+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 310,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:49:53+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:48:31+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 309,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:48:31+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:47:51+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 308,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:47:51+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:46:50+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 307,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:46:50+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T14:02:03+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 305,
                    "is_active": "1",
                    "name": "Cat alon",
                    "name_en": "Test Cat alon",
                    "updated_at": "2022-06-09T14:02:03+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:59+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 301,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-05-19T16:57:25+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:28+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 300,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:22:28+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 297,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:02+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 296,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:02+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:17:17+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 295,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:17:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:37+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 294,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:37+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:26+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 293,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:26+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:15+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 292,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:15+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:04+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 291,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:04+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:46+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 290,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:46+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:35+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 289,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:35+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:24+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 288,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:24+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 287,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 286,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:01+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:49+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 285,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:49+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:39+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 284,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:39+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:29+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 283,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:29+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:17+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 282,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:06+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 281,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:06+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:54+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 280,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:54+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:44+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 279,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:44+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:33+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 278,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:33+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:22+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 277,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:22+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:11+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 276,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:11+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:00+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 275,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:00+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:43+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 274,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:43+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:31+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 273,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:31+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:21+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 272,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:21+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:09+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 271,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:09+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 270,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:13+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 269,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:01+07:00"
                },
                {
                    "created_at": "2022-04-21T14:55:50+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 268,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:55:50+07:00"
                },
                {
                    "color": "#fc1a04",
                    "created_at": "2022-03-30T15:52:42+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                    "id": 260,
                    "is_active": "1",
                    "name": "Restoran",
                    "name_en": "Restaurant",
                    "updated_at": "2022-04-01T09:30:25+07:00"
                },
                {
                    "color": "#f78416",
                    "created_at": "2022-01-18T10:20:36+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                    "id": 2,
                    "is_active": "1",
                    "name": "Kantor Polisi",
                    "name_en": "Police Station",
                    "updated_at": "2022-03-28T12:43:39+07:00"
                },
                {
                    "color": "#ff495c",
                    "created_at": "2022-01-18T08:52:20+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                    "id": 6,
                    "is_active": "1",
                    "name": "Pendidikan",
                    "name_en": "Education",
                    "updated_at": "2022-03-28T12:41:28+07:00"
                },
                {
                    "color": "#307aec",
                    "created_at": "2022-01-18T08:52:06+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                    "id": 5,
                    "is_active": "1",
                    "name": "Terminal Bus",
                    "name_en": "Bus Station",
                    "updated_at": "2022-03-28T12:41:39+07:00"
                },
                {
                    "color": "#6859dd",
                    "created_at": "2022-01-18T08:51:50+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                    "id": 4,
                    "is_active": "1",
                    "name": "Bandara1",
                    "name_en": "Airport",
                    "updated_at": "2022-06-09T15:02:11+07:00"
                },
                {
                    "color": "#2ad597",
                    "created_at": "2022-01-18T08:51:33+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                    "id": 3,
                    "is_active": "1",
                    "name": "Bank",
                    "name_en": "Bank",
                    "updated_at": "2022-04-01T09:28:20+07:00"
                }],
                "total_item": 48
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "color": "#43194d",
                "created_at": "2022-07-07T14:02:57+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                "id": 319,
                "is_active": "1",
                "name": "Rumah Sakit Brawijaya",
                "name_en": "Brawijaya Hospital",
                "updated_at": "2022-07-07T14:02:57+07:00"
            },
            {
                "color": "#f54242",
                "created_at": "2022-06-13T14:36:49+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 318,
                "is_active": "1",
                "name": "RS. Bakti Permai",
                "name_en": "Hospital",
                "updated_at": "2022-07-07T12:37:01+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-13T13:47:32+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 317,
                "is_active": "1",
                "name": "Bengkel 1",
                "name_en": "Test - Edit",
                "updated_at": "2022-06-13T13:47:32+07:00"
            },
            {
                "color": "#194d21",
                "created_at": "2022-06-13T10:39:16+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 316,
                "is_active": "1",
                "name": "Sekolah",
                "name_en": "School",
                "updated_at": "2022-06-13T10:39:16+07:00"
            },
            {
                "color": "#5632a8",
                "created_at": "2022-06-10T15:23:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                "id": 314,
                "is_active": "1",
                "name": "Mobil",
                "name_en": "Car",
                "updated_at": "2022-06-10T15:23:01+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:49:53+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 310,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:49:53+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:48:31+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 309,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:48:31+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:47:51+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 308,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:47:51+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:46:50+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 307,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:46:50+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T14:02:03+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 305,
                "is_active": "1",
                "name": "Cat alon",
                "name_en": "Test Cat alon",
                "updated_at": "2022-06-09T14:02:03+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:59+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 301,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-05-19T16:57:25+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:28+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 300,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:22:28+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 297,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:02+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 296,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:02+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:17:17+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 295,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:17:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:37+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 294,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:37+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:26+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 293,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:26+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:15+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 292,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:15+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:04+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 291,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:04+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:46+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 290,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:46+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:35+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 289,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:35+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:24+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 288,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:24+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 287,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 286,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:01+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:49+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 285,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:49+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:39+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 284,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:39+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:29+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 283,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:29+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:17+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 282,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:06+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 281,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:06+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:54+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 280,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:54+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:44+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 279,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:44+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:33+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 278,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:33+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:22+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 277,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:22+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:11+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 276,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:11+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:00+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 275,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:00+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:43+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 274,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:43+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:31+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 273,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:31+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:21+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 272,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:21+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:09+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 271,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:09+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 270,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:13+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 269,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:01+07:00"
            },
            {
                "created_at": "2022-04-21T14:55:50+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 268,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:55:50+07:00"
            },
            {
                "color": "#fc1a04",
                "created_at": "2022-03-30T15:52:42+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                "id": 260,
                "is_active": "1",
                "name": "Restoran",
                "name_en": "Restaurant",
                "updated_at": "2022-04-01T09:30:25+07:00"
            },
            {
                "color": "#f78416",
                "created_at": "2022-01-18T10:20:36+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                "id": 2,
                "is_active": "1",
                "name": "Kantor Polisi",
                "name_en": "Police Station",
                "updated_at": "2022-03-28T12:43:39+07:00"
            },
            {
                "color": "#ff495c",
                "created_at": "2022-01-18T08:52:20+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                "id": 6,
                "is_active": "1",
                "name": "Pendidikan",
                "name_en": "Education",
                "updated_at": "2022-03-28T12:41:28+07:00"
            },
            {
                "color": "#307aec",
                "created_at": "2022-01-18T08:52:06+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                "id": 5,
                "is_active": "1",
                "name": "Terminal Bus",
                "name_en": "Bus Station",
                "updated_at": "2022-03-28T12:41:39+07:00"
            },
            {
                "color": "#6859dd",
                "created_at": "2022-01-18T08:51:50+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                "id": 4,
                "is_active": "1",
                "name": "Bandara1",
                "name_en": "Airport",
                "updated_at": "2022-06-09T15:02:11+07:00"
            },
            {
                "color": "#2ad597",
                "created_at": "2022-01-18T08:51:33+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                "id": 3,
                "is_active": "1",
                "name": "Bank",
                "name_en": "Bank",
                "updated_at": "2022-04-01T09:28:20+07:00"
            }],
            "total_item": 48
        }
    }]
}

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
                                    "#f78416",
                                    "#2ad597",
                                    "#6859dd",
                                    "#307aec",
                                    "#ff495c",
                                    "#fc1a04",
                                    "#ba68c8",
                                    "#5632a8",
                                    "#194d21",
                                    "#f54242",
                                    "#43194d"
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-01-18T10:20:36+07:00",
                                    "2022-01-18T08:51:33+07:00",
                                    "2022-01-18T08:51:50+07:00",
                                    "2022-01-18T08:52:06+07:00",
                                    "2022-01-18T08:52:20+07:00",
                                    "2022-03-30T15:52:42+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-04-21T15:22:59+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-06-13T14:36:49+07:00",
                                    "2022-07-07T14:02:57+07:00"
                                ]
                            },
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    "png",
                                    "svg",
                                    "",
                                    "jpg"
                                ]
                            },
                            "icon": {
                                "type": "string",
                                "title": "The icon Schema",
                                "examples": [
                                    "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                                    "https://s3.loyalto.id/inisadev/public/noimage.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    260,
                                    268,
                                    269,
                                    270,
                                    271,
                                    272,
                                    273,
                                    274,
                                    275,
                                    276,
                                    277,
                                    278,
                                    279,
                                    280,
                                    281,
                                    282,
                                    283,
                                    284,
                                    285,
                                    286,
                                    287,
                                    288,
                                    289,
                                    290,
                                    291,
                                    292,
                                    293,
                                    294,
                                    295,
                                    296,
                                    297,
                                    300,
                                    301,
                                    305,
                                    307,
                                    308,
                                    309,
                                    310,
                                    314,
                                    316,
                                    317,
                                    318,
                                    319
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
                                    "Kantor Polisi",
                                    "Bank",
                                    "Bandara1",
                                    "Terminal Bus",
                                    "Pendidikan",
                                    "Restoran",
                                    "",
                                    "Bengkel",
                                    "Cat alon",
                                    "Pesawat",
                                    "Mobil",
                                    "Sekolah",
                                    "Bengkel 1",
                                    "RS. Bakti Permai",
                                    "Rumah Sakit Brawijaya"
                                ]
                            },
                            "name_en": {
                                "type": "string",
                                "title": "The name_en Schema",
                                "examples": [
                                    "Police Station",
                                    "Bank",
                                    "Airport",
                                    "Bus Station",
                                    "Education",
                                    "Restaurant",
                                    "",
                                    "Test Cat alon",
                                    "Car",
                                    "School",
                                    "Test - Edit",
                                    "Hospital",
                                    "Brawijaya Hospital"
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-03-28T12:43:39+07:00",
                                    "2022-04-01T09:28:20+07:00",
                                    "2022-06-09T15:02:11+07:00",
                                    "2022-03-28T12:41:39+07:00",
                                    "2022-03-28T12:41:28+07:00",
                                    "2022-04-01T09:30:25+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-05-19T16:57:25+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-07-07T12:37:01+07:00",
                                    "2022-07-07T14:02:57+07:00"
                                ]
                            }
                        },
                        "examples": [{
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-03-28T12:43:39+07:00"
                        },
                        {
                            "color": "#2ad597",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-04-01T09:28:20+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara1",
                            "name_en": "Airport",
                            "updated_at": "2022-06-09T15:02:11+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "svg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        }]
                    },
                    "examples": [
                        [{
                            "color": "#f78416",
                            "created_at": "2022-01-18T10:20:36+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                            "id": 2,
                            "is_active": "1",
                            "name": "Kantor Polisi",
                            "name_en": "Police Station",
                            "updated_at": "2022-03-28T12:43:39+07:00"
                        },
                        {
                            "color": "#2ad597",
                            "created_at": "2022-01-18T08:51:33+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                            "id": 3,
                            "is_active": "1",
                            "name": "Bank",
                            "name_en": "Bank",
                            "updated_at": "2022-04-01T09:28:20+07:00"
                        },
                        {
                            "color": "#6859dd",
                            "created_at": "2022-01-18T08:51:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                            "id": 4,
                            "is_active": "1",
                            "name": "Bandara1",
                            "name_en": "Airport",
                            "updated_at": "2022-06-09T15:02:11+07:00"
                        },
                        {
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "svg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        48
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "color": "#f78416",
                    "created_at": "2022-01-18T10:20:36+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                    "id": 2,
                    "is_active": "1",
                    "name": "Kantor Polisi",
                    "name_en": "Police Station",
                    "updated_at": "2022-03-28T12:43:39+07:00"
                },
                {
                    "color": "#2ad597",
                    "created_at": "2022-01-18T08:51:33+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                    "id": 3,
                    "is_active": "1",
                    "name": "Bank",
                    "name_en": "Bank",
                    "updated_at": "2022-04-01T09:28:20+07:00"
                },
                {
                    "color": "#6859dd",
                    "created_at": "2022-01-18T08:51:50+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                    "id": 4,
                    "is_active": "1",
                    "name": "Bandara1",
                    "name_en": "Airport",
                    "updated_at": "2022-06-09T15:02:11+07:00"
                },
                {
                    "color": "#307aec",
                    "created_at": "2022-01-18T08:52:06+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                    "id": 5,
                    "is_active": "1",
                    "name": "Terminal Bus",
                    "name_en": "Bus Station",
                    "updated_at": "2022-03-28T12:41:39+07:00"
                },
                {
                    "color": "#ff495c",
                    "created_at": "2022-01-18T08:52:20+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                    "id": 6,
                    "is_active": "1",
                    "name": "Pendidikan",
                    "name_en": "Education",
                    "updated_at": "2022-03-28T12:41:28+07:00"
                },
                {
                    "color": "#fc1a04",
                    "created_at": "2022-03-30T15:52:42+07:00",
                    "extention": "svg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                    "id": 260,
                    "is_active": "1",
                    "name": "Restoran",
                    "name_en": "Restaurant",
                    "updated_at": "2022-04-01T09:30:25+07:00"
                },
                {
                    "created_at": "2022-04-21T14:55:50+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 268,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:55:50+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 269,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:01+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 270,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:09+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 271,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:09+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:21+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 272,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:21+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:31+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 273,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:31+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:43+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 274,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:43+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:00+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 275,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:00+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:11+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 276,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:11+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:22+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 277,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:22+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:33+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 278,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:33+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:44+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 279,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:44+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:54+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 280,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:54+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:06+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 281,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:06+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:17+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 282,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:29+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 283,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:29+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:39+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 284,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:39+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:49+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 285,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:49+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 286,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:01+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 287,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:24+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 288,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:24+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:35+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 289,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:35+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:46+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 290,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:46+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:04+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 291,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:04+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:15+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 292,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:15+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:26+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 293,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:26+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:37+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 294,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:37+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:17:17+07:00",
                    "extention": "jpg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 295,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:17:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:02+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 296,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:02+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 297,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:13+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:28+07:00",
                    "extention": "jpg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 300,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:22:28+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:59+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 301,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-05-19T16:57:25+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T14:02:03+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 305,
                    "is_active": "1",
                    "name": "Cat alon",
                    "name_en": "Test Cat alon",
                    "updated_at": "2022-06-09T14:02:03+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:46:50+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 307,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:46:50+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:47:51+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 308,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:47:51+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:48:31+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 309,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:48:31+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:49:53+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 310,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:49:53+07:00"
                },
                {
                    "color": "#5632a8",
                    "created_at": "2022-06-10T15:23:01+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                    "id": 314,
                    "is_active": "1",
                    "name": "Mobil",
                    "name_en": "Car",
                    "updated_at": "2022-06-10T15:23:01+07:00"
                },
                {
                    "color": "#194d21",
                    "created_at": "2022-06-13T10:39:16+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 316,
                    "is_active": "1",
                    "name": "Sekolah",
                    "name_en": "School",
                    "updated_at": "2022-06-13T10:39:16+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-13T13:47:32+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 317,
                    "is_active": "1",
                    "name": "Bengkel 1",
                    "name_en": "Test - Edit",
                    "updated_at": "2022-06-13T13:47:32+07:00"
                },
                {
                    "color": "#f54242",
                    "created_at": "2022-06-13T14:36:49+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 318,
                    "is_active": "1",
                    "name": "RS. Bakti Permai",
                    "name_en": "Hospital",
                    "updated_at": "2022-07-07T12:37:01+07:00"
                },
                {
                    "color": "#43194d",
                    "created_at": "2022-07-07T14:02:57+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                    "id": 319,
                    "is_active": "1",
                    "name": "Rumah Sakit Brawijaya",
                    "name_en": "Brawijaya Hospital",
                    "updated_at": "2022-07-07T14:02:57+07:00"
                }],
                "total_item": 48
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "color": "#f78416",
                "created_at": "2022-01-18T10:20:36+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/CzWeuRb41648446079-ddc9a37fe424a06c87bc0887da6f6a57.png",
                "id": 2,
                "is_active": "1",
                "name": "Kantor Polisi",
                "name_en": "Police Station",
                "updated_at": "2022-03-28T12:43:39+07:00"
            },
            {
                "color": "#2ad597",
                "created_at": "2022-01-18T08:51:33+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/bRFCwyYL1648446013-335c8f2f910101da08dc06111d4bfab5.png",
                "id": 3,
                "is_active": "1",
                "name": "Bank",
                "name_en": "Bank",
                "updated_at": "2022-04-01T09:28:20+07:00"
            },
            {
                "color": "#6859dd",
                "created_at": "2022-01-18T08:51:50+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AjkTzdRK1648446184-8aeacc1527860584de8071dcc0f42f9d.png",
                "id": 4,
                "is_active": "1",
                "name": "Bandara1",
                "name_en": "Airport",
                "updated_at": "2022-06-09T15:02:11+07:00"
            },
            {
                "color": "#307aec",
                "created_at": "2022-01-18T08:52:06+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                "id": 5,
                "is_active": "1",
                "name": "Terminal Bus",
                "name_en": "Bus Station",
                "updated_at": "2022-03-28T12:41:39+07:00"
            },
            {
                "color": "#ff495c",
                "created_at": "2022-01-18T08:52:20+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                "id": 6,
                "is_active": "1",
                "name": "Pendidikan",
                "name_en": "Education",
                "updated_at": "2022-03-28T12:41:28+07:00"
            },
            {
                "color": "#fc1a04",
                "created_at": "2022-03-30T15:52:42+07:00",
                "extention": "svg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                "id": 260,
                "is_active": "1",
                "name": "Restoran",
                "name_en": "Restaurant",
                "updated_at": "2022-04-01T09:30:25+07:00"
            },
            {
                "created_at": "2022-04-21T14:55:50+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 268,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:55:50+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 269,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:01+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 270,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:09+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 271,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:09+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:21+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 272,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:21+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:31+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 273,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:31+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:43+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 274,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:43+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:00+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 275,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:00+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:11+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 276,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:11+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:22+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 277,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:22+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:33+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 278,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:33+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:44+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 279,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:44+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:54+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 280,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:54+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:06+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 281,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:06+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:17+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 282,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:29+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 283,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:29+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:39+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 284,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:39+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:49+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 285,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:49+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 286,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:01+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 287,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:24+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 288,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:24+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:35+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 289,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:35+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:46+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 290,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:46+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:04+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 291,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:04+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:15+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 292,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:15+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:26+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 293,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:26+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:37+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 294,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:37+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:17:17+07:00",
                "extention": "jpg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 295,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:17:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:02+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 296,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:02+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 297,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:13+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:28+07:00",
                "extention": "jpg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 300,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:22:28+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:59+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 301,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-05-19T16:57:25+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T14:02:03+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 305,
                "is_active": "1",
                "name": "Cat alon",
                "name_en": "Test Cat alon",
                "updated_at": "2022-06-09T14:02:03+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:46:50+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 307,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:46:50+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:47:51+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 308,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:47:51+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:48:31+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 309,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:48:31+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:49:53+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 310,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:49:53+07:00"
            },
            {
                "color": "#5632a8",
                "created_at": "2022-06-10T15:23:01+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                "id": 314,
                "is_active": "1",
                "name": "Mobil",
                "name_en": "Car",
                "updated_at": "2022-06-10T15:23:01+07:00"
            },
            {
                "color": "#194d21",
                "created_at": "2022-06-13T10:39:16+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 316,
                "is_active": "1",
                "name": "Sekolah",
                "name_en": "School",
                "updated_at": "2022-06-13T10:39:16+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-13T13:47:32+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 317,
                "is_active": "1",
                "name": "Bengkel 1",
                "name_en": "Test - Edit",
                "updated_at": "2022-06-13T13:47:32+07:00"
            },
            {
                "color": "#f54242",
                "created_at": "2022-06-13T14:36:49+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 318,
                "is_active": "1",
                "name": "RS. Bakti Permai",
                "name_en": "Hospital",
                "updated_at": "2022-07-07T12:37:01+07:00"
            },
            {
                "color": "#43194d",
                "created_at": "2022-07-07T14:02:57+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                "id": 319,
                "is_active": "1",
                "name": "Rumah Sakit Brawijaya",
                "name_en": "Brawijaya Hospital",
                "updated_at": "2022-07-07T14:02:57+07:00"
            }],
            "total_item": 48
        }
    }]
}

export const VALIDATE_ADDKATEGORILOKASI_SCHEMA = {
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
                "color",
                "created_at",
                "deleted_at",
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
                    "default": "",
                    "title": "The color Schema",
                    "examples": [
                        "#ba68c8"
                    ]
                },
                "created_at": {
                    "type": "string",
                    "default": "",
                    "title": "The created_at Schema",
                    "examples": [
                        "2022-06-07T11:17:59+07:00"
                    ]
                },
                "deleted_at": {
                    "type": "null",
                    "default": null,
                    "title": "The deleted_at Schema",
                    "examples": [
                        null
                    ]
                },
                "icon": {
                    "type": "null",
                    "default": null,
                    "title": "The icon Schema",
                    "examples": [
                        null
                    ]
                },
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        401
                    ]
                },
                "is_active": {
                    "type": "integer",
                    "default": 0,
                    "title": "The is_active Schema",
                    "examples": [
                        1
                    ]
                },
                "name": {
                    "type": "string",
                    "default": "",
                    "title": "The name Schema",
                    "examples": [
                        "Bengkel"
                    ]
                },
                "name_en": {
                    "type": "string",
                    "default": "",
                    "title": "The name_en Schema",
                    "examples": [
                        "Test"
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-06-07T11:17:59+07:00"
                    ]
                }
            },
            "examples": [{
                "color": "#ba68c8",
                "created_at": "2022-06-07T11:17:59+07:00",
                "deleted_at": null,
                "icon": null,
                "id": 401,
                "is_active": 1,
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-06-07T11:17:59+07:00"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "color": "#ba68c8",
            "created_at": "2022-06-07T11:17:59+07:00",
            "deleted_at": null,
            "icon": null,
            "id": 401,
            "is_active": 1,
            "name": "Bengkel",
            "name_en": "Test",
            "updated_at": "2022-06-07T11:17:59+07:00"
        }
    }]
}

export const VALIDATE_UPDATELOKASI_SCHEMA = {
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
                "color",
                "created_at",
                "deleted_at",
                "icon",
                "id",
                "is_active",
                "link_picture",
                "name",
                "name_en",
                "updated_at"
            ],
            "properties": {
                "color": {
                    "type": "string",
                    "default": "",
                    "title": "The color Schema",
                    "examples": [
                        "#6859dd"
                    ]
                },
                "created_at": {
                    "type": "string",
                    "default": "",
                    "title": "The created_at Schema",
                    "examples": [
                        "2022-01-18T08:50:58+07:00"
                    ]
                },
                "deleted_at": {
                    "type": "null",
                    "default": null,
                    "title": "The deleted_at Schema",
                    "examples": [
                        null
                    ]
                },
                "icon": {
                    "type": "string",
                    "default": "",
                    "title": "The icon Schema",
                    "examples": [
                        "1645669425488311900.svg"
                    ]
                },
                "id": {
                    "type": "integer",
                    "default": 0,
                    "title": "The id Schema",
                    "examples": [
                        1
                    ]
                },
                "is_active": {
                    "type": "string",
                    "default": "",
                    "title": "The is_active Schema",
                    "examples": [
                        "0"
                    ]
                },
                "link_picture": {
                    "type": "string",
                    "default": "",
                    "title": "The link_picture Schema",
                    "examples": [
                        "http://localhost:9000/inisadev/1645669425488311900.svg"
                    ]
                },
                "name": {
                    "type": "string",
                    "default": "",
                    "title": "The name Schema",
                    "examples": [
                        "Dealer"
                    ]
                },
                "name_en": {
                    "type": "string",
                    "default": "",
                    "title": "The name_en Schema",
                    "examples": [
                        ""
                    ]
                },
                "updated_at": {
                    "type": "string",
                    "default": "",
                    "title": "The updated_at Schema",
                    "examples": [
                        "2022-06-07T11:18:21+07:00"
                    ]
                }
            },
            "examples": [{
                "color": "#6859dd",
                "created_at": "2022-01-18T08:50:58+07:00",
                "deleted_at": null,
                "icon": "1645669425488311900.svg",
                "id": 1,
                "is_active": "0",
                "link_picture": "http://localhost:9000/inisadev/1645669425488311900.svg",
                "name": "Dealer",
                "name_en": "",
                "updated_at": "2022-06-07T11:18:21+07:00"
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "color": "#6859dd",
            "created_at": "2022-01-18T08:50:58+07:00",
            "deleted_at": null,
            "icon": "1645669425488311900.svg",
            "id": 1,
            "is_active": "0",
            "link_picture": "http://localhost:9000/inisadev/1645669425488311900.svg",
            "name": "Dealer",
            "name_en": "",
            "updated_at": "2022-06-07T11:18:21+07:00"
        }
    }]
}

export const VALIDATE_GETKATEGORILOKASI_MOBILE_SCHEMA = {
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
                                    "#307aec",
                                    "#ff495c",
                                    "#fc1a04",
                                    "#ba68c8",
                                    "#5632a8",
                                    "#194d21",
                                    "#f54242",
                                    "#43194d",
                                    "#dc68c8"
                                ]
                            },
                            "created_at": {
                                "type": "string",
                                "title": "The created_at Schema",
                                "examples": [
                                    "2022-01-18T08:52:06+07:00",
                                    "2022-01-18T08:52:20+07:00",
                                    "2022-03-30T15:52:42+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-04-21T15:22:59+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-06-13T14:36:49+07:00",
                                    "2022-07-07T14:02:57+07:00",
                                    "2022-10-06T14:21:52+07:00",
                                    "2022-10-06T14:24:38+07:00",
                                    "2022-10-06T14:33:43+07:00",
                                    "2022-10-06T14:38:03+07:00",
                                    "2022-10-06T14:38:43+07:00",
                                    "2022-10-06T15:23:58+07:00",
                                    "2022-10-06T15:38:53+07:00",
                                    "2022-10-06T16:33:02+07:00",
                                    "2022-10-06T16:33:27+07:00",
                                    "2022-10-06T16:33:51+07:00",
                                    "2022-10-06T16:36:19+07:00",
                                    "2022-10-06T16:47:13+07:00",
                                    "2022-10-06T18:01:17+07:00"
                                ]
                            },
                            "extention": {
                                "type": "string",
                                "title": "The extention Schema",
                                "examples": [
                                    "png",
                                    "svg",
                                    "",
                                    "jpg"
                                ]
                            },
                            "icon": {
                                "type": "string",
                                "title": "The icon Schema",
                                "examples": [
                                    "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                                    "https://s3.loyalto.id/inisadev/public/noimage.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                                    "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                                    "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png"
                                ]
                            },
                            "id": {
                                "type": "integer",
                                "title": "The id Schema",
                                "examples": [
                                    5,
                                    6,
                                    260,
                                    268,
                                    269,
                                    270,
                                    271,
                                    272,
                                    273,
                                    274,
                                    275,
                                    276,
                                    277,
                                    278,
                                    279,
                                    280,
                                    281,
                                    282,
                                    283,
                                    284,
                                    285,
                                    286,
                                    287,
                                    288,
                                    289,
                                    290,
                                    291,
                                    292,
                                    293,
                                    294,
                                    295,
                                    296,
                                    297,
                                    300,
                                    301,
                                    305,
                                    307,
                                    308,
                                    309,
                                    310,
                                    314,
                                    316,
                                    317,
                                    318,
                                    319,
                                    323,
                                    324,
                                    325,
                                    326,
                                    327,
                                    328,
                                    329,
                                    330,
                                    331,
                                    332,
                                    333,
                                    334,
                                    335
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
                                    "Terminal Bus",
                                    "Pendidikan",
                                    "Restoran",
                                    "",
                                    "Bengkel",
                                    "Cat alon",
                                    "Pesawat",
                                    "Mobil",
                                    "Sekolah",
                                    "Bengkel 1",
                                    "RS. Bakti Permai",
                                    "Rumah Sakit Brawijaya",
                                    "Ruko"
                                ]
                            },
                            "name_en": {
                                "type": "string",
                                "title": "The name_en Schema",
                                "examples": [
                                    "Bus Station",
                                    "Education",
                                    "Restaurant",
                                    "",
                                    "Test Cat alon",
                                    "Car",
                                    "School",
                                    "Test - Edit",
                                    "Hospital",
                                    "Brawijaya Hospital",
                                    "Test",
                                    "Caffe6"
                                ]
                            },
                            "updated_at": {
                                "type": "string",
                                "title": "The updated_at Schema",
                                "examples": [
                                    "2022-03-28T12:41:39+07:00",
                                    "2022-03-28T12:41:28+07:00",
                                    "2022-04-01T09:30:25+07:00",
                                    "2022-04-21T14:55:50+07:00",
                                    "2022-04-21T14:56:01+07:00",
                                    "2022-04-21T14:56:13+07:00",
                                    "2022-04-21T15:04:09+07:00",
                                    "2022-04-21T15:04:21+07:00",
                                    "2022-04-21T15:04:31+07:00",
                                    "2022-04-21T15:04:43+07:00",
                                    "2022-04-21T15:07:00+07:00",
                                    "2022-04-21T15:07:11+07:00",
                                    "2022-04-21T15:07:22+07:00",
                                    "2022-04-21T15:07:33+07:00",
                                    "2022-04-21T15:07:44+07:00",
                                    "2022-04-21T15:07:54+07:00",
                                    "2022-04-21T15:08:06+07:00",
                                    "2022-04-21T15:08:17+07:00",
                                    "2022-04-21T15:08:29+07:00",
                                    "2022-04-21T15:08:39+07:00",
                                    "2022-04-21T15:08:49+07:00",
                                    "2022-04-21T15:09:01+07:00",
                                    "2022-04-21T15:09:13+07:00",
                                    "2022-04-21T15:09:24+07:00",
                                    "2022-04-21T15:09:35+07:00",
                                    "2022-04-21T15:09:46+07:00",
                                    "2022-04-21T15:14:04+07:00",
                                    "2022-04-21T15:14:15+07:00",
                                    "2022-04-21T15:14:26+07:00",
                                    "2022-04-21T15:14:37+07:00",
                                    "2022-04-21T15:17:17+07:00",
                                    "2022-04-21T15:18:02+07:00",
                                    "2022-04-21T15:18:13+07:00",
                                    "2022-04-21T15:22:28+07:00",
                                    "2022-05-19T16:57:25+07:00",
                                    "2022-06-09T14:02:03+07:00",
                                    "2022-06-09T16:46:50+07:00",
                                    "2022-06-09T16:47:51+07:00",
                                    "2022-06-09T16:48:31+07:00",
                                    "2022-06-09T16:49:53+07:00",
                                    "2022-06-10T15:23:01+07:00",
                                    "2022-06-13T10:39:16+07:00",
                                    "2022-06-13T13:47:32+07:00",
                                    "2022-07-07T12:37:01+07:00",
                                    "2022-07-07T14:02:57+07:00",
                                    "2022-10-06T14:21:52+07:00",
                                    "2022-10-06T14:24:38+07:00",
                                    "2022-10-06T14:33:43+07:00",
                                    "2022-10-06T14:38:03+07:00",
                                    "2022-10-06T14:38:43+07:00",
                                    "2022-10-06T15:23:58+07:00",
                                    "2022-10-06T15:38:53+07:00",
                                    "2022-10-06T16:33:02+07:00",
                                    "2022-10-06T16:33:27+07:00",
                                    "2022-10-06T16:33:51+07:00",
                                    "2022-10-06T16:36:19+07:00",
                                    "2022-10-06T16:47:13+07:00",
                                    "2022-10-06T18:01:17+07:00"
                                ]
                            }
                        },
                        "examples": [{
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "svg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:21:52+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 323,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:21:52+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:24:38+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 324,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:24:38+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:33:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 325,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:33:43+07:00"
                        },
                        {
                            "color": "#dc68c8",
                            "created_at": "2022-10-06T14:38:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 326,
                            "is_active": "1",
                            "name": "Ruko",
                            "name_en": "Caffe6",
                            "updated_at": "2022-10-06T14:38:03+07:00"
                        },
                        {
                            "color": "#dc68c8",
                            "created_at": "2022-10-06T14:38:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 327,
                            "is_active": "1",
                            "name": "Ruko",
                            "name_en": "Caffe6",
                            "updated_at": "2022-10-06T14:38:43+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T15:23:58+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 328,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T15:23:58+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T15:38:53+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 329,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T15:38:53+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 330,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:02+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:27+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 331,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:27+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:51+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 332,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:36:19+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 333,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:36:19+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:47:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 334,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:47:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T18:01:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 335,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T18:01:17+07:00"
                        }]
                    },
                    "examples": [
                        [{
                            "color": "#307aec",
                            "created_at": "2022-01-18T08:52:06+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                            "id": 5,
                            "is_active": "1",
                            "name": "Terminal Bus",
                            "name_en": "Bus Station",
                            "updated_at": "2022-03-28T12:41:39+07:00"
                        },
                        {
                            "color": "#ff495c",
                            "created_at": "2022-01-18T08:52:20+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                            "id": 6,
                            "is_active": "1",
                            "name": "Pendidikan",
                            "name_en": "Education",
                            "updated_at": "2022-03-28T12:41:28+07:00"
                        },
                        {
                            "color": "#fc1a04",
                            "created_at": "2022-03-30T15:52:42+07:00",
                            "extention": "svg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                            "id": 260,
                            "is_active": "1",
                            "name": "Restoran",
                            "name_en": "Restaurant",
                            "updated_at": "2022-04-01T09:30:25+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:55:50+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 268,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:55:50+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 269,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T14:56:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 270,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T14:56:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:09+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 271,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:09+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:21+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 272,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:21+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:31+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 273,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:31+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:04:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 274,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:04:43+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:00+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 275,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:00+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:11+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 276,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:11+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:22+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 277,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:22+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:33+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 278,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:33+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:44+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 279,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:44+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:07:54+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 280,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:07:54+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:06+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 281,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:06+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 282,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:29+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 283,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:29+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:39+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 284,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:39+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:08:49+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 285,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:08:49+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:01+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 286,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:01+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 287,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:13+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:24+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 288,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:24+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:35+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 289,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:35+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:09:46+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 290,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:09:46+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:04+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 291,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:04+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:15+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 292,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:15+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:26+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 293,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:26+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:14:37+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 294,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:14:37+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:17:17+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 295,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:17:17+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 296,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:02+07:00"
                        },
                        {
                            "created_at": "2022-04-21T15:18:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 297,
                            "is_active": "1",
                            "name": "",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:18:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:28+07:00",
                            "extention": "jpg",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                            "id": 300,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-04-21T15:22:28+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-04-21T15:22:59+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 301,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "",
                            "updated_at": "2022-05-19T16:57:25+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T14:02:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 305,
                            "is_active": "1",
                            "name": "Cat alon",
                            "name_en": "Test Cat alon",
                            "updated_at": "2022-06-09T14:02:03+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:46:50+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 307,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:46:50+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:47:51+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 308,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:47:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:48:31+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 309,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:48:31+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-09T16:49:53+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                            "id": 310,
                            "is_active": "1",
                            "name": "Pesawat",
                            "name_en": "",
                            "updated_at": "2022-06-09T16:49:53+07:00"
                        },
                        {
                            "color": "#5632a8",
                            "created_at": "2022-06-10T15:23:01+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                            "id": 314,
                            "is_active": "1",
                            "name": "Mobil",
                            "name_en": "Car",
                            "updated_at": "2022-06-10T15:23:01+07:00"
                        },
                        {
                            "color": "#194d21",
                            "created_at": "2022-06-13T10:39:16+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 316,
                            "is_active": "1",
                            "name": "Sekolah",
                            "name_en": "School",
                            "updated_at": "2022-06-13T10:39:16+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-06-13T13:47:32+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 317,
                            "is_active": "1",
                            "name": "Bengkel 1",
                            "name_en": "Test - Edit",
                            "updated_at": "2022-06-13T13:47:32+07:00"
                        },
                        {
                            "color": "#f54242",
                            "created_at": "2022-06-13T14:36:49+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                            "id": 318,
                            "is_active": "1",
                            "name": "RS. Bakti Permai",
                            "name_en": "Hospital",
                            "updated_at": "2022-07-07T12:37:01+07:00"
                        },
                        {
                            "color": "#43194d",
                            "created_at": "2022-07-07T14:02:57+07:00",
                            "extention": "png",
                            "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                            "id": 319,
                            "is_active": "1",
                            "name": "Rumah Sakit Brawijaya",
                            "name_en": "Brawijaya Hospital",
                            "updated_at": "2022-07-07T14:02:57+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:21:52+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 323,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:21:52+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:24:38+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 324,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:24:38+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T14:33:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 325,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T14:33:43+07:00"
                        },
                        {
                            "color": "#dc68c8",
                            "created_at": "2022-10-06T14:38:03+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 326,
                            "is_active": "1",
                            "name": "Ruko",
                            "name_en": "Caffe6",
                            "updated_at": "2022-10-06T14:38:03+07:00"
                        },
                        {
                            "color": "#dc68c8",
                            "created_at": "2022-10-06T14:38:43+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 327,
                            "is_active": "1",
                            "name": "Ruko",
                            "name_en": "Caffe6",
                            "updated_at": "2022-10-06T14:38:43+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T15:23:58+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 328,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T15:23:58+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T15:38:53+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 329,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T15:38:53+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:02+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 330,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:02+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:27+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 331,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:27+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:33:51+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 332,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:33:51+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:36:19+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 333,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:36:19+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T16:47:13+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 334,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T16:47:13+07:00"
                        },
                        {
                            "color": "#ba68c8",
                            "created_at": "2022-10-06T18:01:17+07:00",
                            "extention": "",
                            "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                            "id": 335,
                            "is_active": "1",
                            "name": "Bengkel",
                            "name_en": "Test",
                            "updated_at": "2022-10-06T18:01:17+07:00"
                        }]
                    ]
                },
                "total_item": {
                    "type": "integer",
                    "default": 0,
                    "title": "The total_item Schema",
                    "examples": [
                        58
                    ]
                }
            },
            "examples": [{
                "list": [{
                    "color": "#307aec",
                    "created_at": "2022-01-18T08:52:06+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                    "id": 5,
                    "is_active": "1",
                    "name": "Terminal Bus",
                    "name_en": "Bus Station",
                    "updated_at": "2022-03-28T12:41:39+07:00"
                },
                {
                    "color": "#ff495c",
                    "created_at": "2022-01-18T08:52:20+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                    "id": 6,
                    "is_active": "1",
                    "name": "Pendidikan",
                    "name_en": "Education",
                    "updated_at": "2022-03-28T12:41:28+07:00"
                },
                {
                    "color": "#fc1a04",
                    "created_at": "2022-03-30T15:52:42+07:00",
                    "extention": "svg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                    "id": 260,
                    "is_active": "1",
                    "name": "Restoran",
                    "name_en": "Restaurant",
                    "updated_at": "2022-04-01T09:30:25+07:00"
                },
                {
                    "created_at": "2022-04-21T14:55:50+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 268,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:55:50+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 269,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:01+07:00"
                },
                {
                    "created_at": "2022-04-21T14:56:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 270,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T14:56:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:09+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 271,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:09+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:21+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 272,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:21+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:31+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 273,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:31+07:00"
                },
                {
                    "created_at": "2022-04-21T15:04:43+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 274,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:04:43+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:00+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 275,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:00+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:11+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 276,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:11+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:22+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 277,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:22+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:33+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 278,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:33+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:44+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 279,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:44+07:00"
                },
                {
                    "created_at": "2022-04-21T15:07:54+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 280,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:07:54+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:06+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 281,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:06+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:17+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 282,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:29+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 283,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:29+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:39+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 284,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:39+07:00"
                },
                {
                    "created_at": "2022-04-21T15:08:49+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 285,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:08:49+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:01+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 286,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:01+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 287,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:13+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:24+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 288,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:24+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:35+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 289,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:35+07:00"
                },
                {
                    "created_at": "2022-04-21T15:09:46+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 290,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:09:46+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:04+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 291,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:04+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:15+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 292,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:15+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:26+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 293,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:26+07:00"
                },
                {
                    "created_at": "2022-04-21T15:14:37+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 294,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:14:37+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:17:17+07:00",
                    "extention": "jpg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 295,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:17:17+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:02+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 296,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:02+07:00"
                },
                {
                    "created_at": "2022-04-21T15:18:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 297,
                    "is_active": "1",
                    "name": "",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:18:13+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:28+07:00",
                    "extention": "jpg",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                    "id": 300,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-04-21T15:22:28+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-04-21T15:22:59+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 301,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "",
                    "updated_at": "2022-05-19T16:57:25+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T14:02:03+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 305,
                    "is_active": "1",
                    "name": "Cat alon",
                    "name_en": "Test Cat alon",
                    "updated_at": "2022-06-09T14:02:03+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:46:50+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 307,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:46:50+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:47:51+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 308,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:47:51+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:48:31+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 309,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:48:31+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-09T16:49:53+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                    "id": 310,
                    "is_active": "1",
                    "name": "Pesawat",
                    "name_en": "",
                    "updated_at": "2022-06-09T16:49:53+07:00"
                },
                {
                    "color": "#5632a8",
                    "created_at": "2022-06-10T15:23:01+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                    "id": 314,
                    "is_active": "1",
                    "name": "Mobil",
                    "name_en": "Car",
                    "updated_at": "2022-06-10T15:23:01+07:00"
                },
                {
                    "color": "#194d21",
                    "created_at": "2022-06-13T10:39:16+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 316,
                    "is_active": "1",
                    "name": "Sekolah",
                    "name_en": "School",
                    "updated_at": "2022-06-13T10:39:16+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-06-13T13:47:32+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 317,
                    "is_active": "1",
                    "name": "Bengkel 1",
                    "name_en": "Test - Edit",
                    "updated_at": "2022-06-13T13:47:32+07:00"
                },
                {
                    "color": "#f54242",
                    "created_at": "2022-06-13T14:36:49+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                    "id": 318,
                    "is_active": "1",
                    "name": "RS. Bakti Permai",
                    "name_en": "Hospital",
                    "updated_at": "2022-07-07T12:37:01+07:00"
                },
                {
                    "color": "#43194d",
                    "created_at": "2022-07-07T14:02:57+07:00",
                    "extention": "png",
                    "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                    "id": 319,
                    "is_active": "1",
                    "name": "Rumah Sakit Brawijaya",
                    "name_en": "Brawijaya Hospital",
                    "updated_at": "2022-07-07T14:02:57+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T14:21:52+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 323,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T14:21:52+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T14:24:38+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 324,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T14:24:38+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T14:33:43+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 325,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T14:33:43+07:00"
                },
                {
                    "color": "#dc68c8",
                    "created_at": "2022-10-06T14:38:03+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 326,
                    "is_active": "1",
                    "name": "Ruko",
                    "name_en": "Caffe6",
                    "updated_at": "2022-10-06T14:38:03+07:00"
                },
                {
                    "color": "#dc68c8",
                    "created_at": "2022-10-06T14:38:43+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 327,
                    "is_active": "1",
                    "name": "Ruko",
                    "name_en": "Caffe6",
                    "updated_at": "2022-10-06T14:38:43+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T15:23:58+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 328,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T15:23:58+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T15:38:53+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 329,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T15:38:53+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T16:33:02+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 330,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T16:33:02+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T16:33:27+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 331,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T16:33:27+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T16:33:51+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 332,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T16:33:51+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T16:36:19+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 333,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T16:36:19+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T16:47:13+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 334,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T16:47:13+07:00"
                },
                {
                    "color": "#ba68c8",
                    "created_at": "2022-10-06T18:01:17+07:00",
                    "extention": "",
                    "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                    "id": 335,
                    "is_active": "1",
                    "name": "Bengkel",
                    "name_en": "Test",
                    "updated_at": "2022-10-06T18:01:17+07:00"
                }],
                "total_item": 58
            }]
        }
    },
    "examples": [{
        "status_code": 200,
        "message": "Success",
        "data": {
            "list": [{
                "color": "#307aec",
                "created_at": "2022-01-18T08:52:06+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/xRk5v8aR1648446099-489f388997d8661201daa7e505e6faab.png",
                "id": 5,
                "is_active": "1",
                "name": "Terminal Bus",
                "name_en": "Bus Station",
                "updated_at": "2022-03-28T12:41:39+07:00"
            },
            {
                "color": "#ff495c",
                "created_at": "2022-01-18T08:52:20+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/dmw0oebv1648446088-eefe16e30dcfb7d9eaaa66f77539ac9c.png",
                "id": 6,
                "is_active": "1",
                "name": "Pendidikan",
                "name_en": "Education",
                "updated_at": "2022-03-28T12:41:28+07:00"
            },
            {
                "color": "#fc1a04",
                "created_at": "2022-03-30T15:52:42+07:00",
                "extention": "svg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AtDDpUoF1648630362-769a658929845d0a5caa4422fcb5bb7d.svg",
                "id": 260,
                "is_active": "1",
                "name": "Restoran",
                "name_en": "Restaurant",
                "updated_at": "2022-04-01T09:30:25+07:00"
            },
            {
                "created_at": "2022-04-21T14:55:50+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 268,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:55:50+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 269,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:01+07:00"
            },
            {
                "created_at": "2022-04-21T14:56:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 270,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T14:56:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:09+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 271,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:09+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:21+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 272,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:21+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:31+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 273,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:31+07:00"
            },
            {
                "created_at": "2022-04-21T15:04:43+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 274,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:04:43+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:00+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 275,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:00+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:11+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 276,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:11+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:22+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 277,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:22+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:33+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 278,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:33+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:44+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 279,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:44+07:00"
            },
            {
                "created_at": "2022-04-21T15:07:54+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 280,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:07:54+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:06+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 281,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:06+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:17+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 282,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:29+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 283,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:29+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:39+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 284,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:39+07:00"
            },
            {
                "created_at": "2022-04-21T15:08:49+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 285,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:08:49+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:01+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 286,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:01+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 287,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:13+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:24+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 288,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:24+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:35+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 289,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:35+07:00"
            },
            {
                "created_at": "2022-04-21T15:09:46+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 290,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:09:46+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:04+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 291,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:04+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:15+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 292,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:15+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:26+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 293,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:26+07:00"
            },
            {
                "created_at": "2022-04-21T15:14:37+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 294,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:14:37+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:17:17+07:00",
                "extention": "jpg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6RvV1XqY1650529036-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 295,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:17:17+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:02+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 296,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:02+07:00"
            },
            {
                "created_at": "2022-04-21T15:18:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 297,
                "is_active": "1",
                "name": "",
                "name_en": "",
                "updated_at": "2022-04-21T15:18:13+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:28+07:00",
                "extention": "jpg",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/1Ii2VTPS1650529348-90e4eaff5610bdfa16eb3f2d42f8bb76.jpg",
                "id": 300,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-04-21T15:22:28+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-04-21T15:22:59+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 301,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "",
                "updated_at": "2022-05-19T16:57:25+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T14:02:03+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 305,
                "is_active": "1",
                "name": "Cat alon",
                "name_en": "Test Cat alon",
                "updated_at": "2022-06-09T14:02:03+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:46:50+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/ATzsod9F1654768010-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 307,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:46:50+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:47:51+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IPR0858m1654768070-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 308,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:47:51+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:48:31+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/LRuEx7k11654768111-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 309,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:48:31+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-09T16:49:53+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/zNIeeWxW1654768193-c829ee98aa884ec488c0b8d21f0bb361.png",
                "id": 310,
                "is_active": "1",
                "name": "Pesawat",
                "name_en": "",
                "updated_at": "2022-06-09T16:49:53+07:00"
            },
            {
                "color": "#5632a8",
                "created_at": "2022-06-10T15:23:01+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/WNB9vWVO1654849380-a89bb038c485a3af1038b045cb9b70ff.png",
                "id": 314,
                "is_active": "1",
                "name": "Mobil",
                "name_en": "Car",
                "updated_at": "2022-06-10T15:23:01+07:00"
            },
            {
                "color": "#194d21",
                "created_at": "2022-06-13T10:39:16+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/AFvCedvI1655091556-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 316,
                "is_active": "1",
                "name": "Sekolah",
                "name_en": "School",
                "updated_at": "2022-06-13T10:39:16+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-06-13T13:47:32+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 317,
                "is_active": "1",
                "name": "Bengkel 1",
                "name_en": "Test - Edit",
                "updated_at": "2022-06-13T13:47:32+07:00"
            },
            {
                "color": "#f54242",
                "created_at": "2022-06-13T14:36:49+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/6geyiZj01655105808-d35a02ac608097e4ae7f14b3e4e0c09c.png",
                "id": 318,
                "is_active": "1",
                "name": "RS. Bakti Permai",
                "name_en": "Hospital",
                "updated_at": "2022-07-07T12:37:01+07:00"
            },
            {
                "color": "#43194d",
                "created_at": "2022-07-07T14:02:57+07:00",
                "extention": "png",
                "icon": "https://s3.loyalto.id/inisadev/imagepublic/IyUbn7s41657177377-e3087cddfdf4c788b41bcdfe9b612cdd.png",
                "id": 319,
                "is_active": "1",
                "name": "Rumah Sakit Brawijaya",
                "name_en": "Brawijaya Hospital",
                "updated_at": "2022-07-07T14:02:57+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T14:21:52+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 323,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T14:21:52+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T14:24:38+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 324,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T14:24:38+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T14:33:43+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 325,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T14:33:43+07:00"
            },
            {
                "color": "#dc68c8",
                "created_at": "2022-10-06T14:38:03+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 326,
                "is_active": "1",
                "name": "Ruko",
                "name_en": "Caffe6",
                "updated_at": "2022-10-06T14:38:03+07:00"
            },
            {
                "color": "#dc68c8",
                "created_at": "2022-10-06T14:38:43+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 327,
                "is_active": "1",
                "name": "Ruko",
                "name_en": "Caffe6",
                "updated_at": "2022-10-06T14:38:43+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T15:23:58+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 328,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T15:23:58+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T15:38:53+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 329,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T15:38:53+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T16:33:02+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 330,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T16:33:02+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T16:33:27+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 331,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T16:33:27+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T16:33:51+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 332,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T16:33:51+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T16:36:19+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 333,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T16:36:19+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T16:47:13+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 334,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T16:47:13+07:00"
            },
            {
                "color": "#ba68c8",
                "created_at": "2022-10-06T18:01:17+07:00",
                "extention": "",
                "icon": "https://s3.loyalto.id/inisadev/public/noimage.png",
                "id": 335,
                "is_active": "1",
                "name": "Bengkel",
                "name_en": "Test",
                "updated_at": "2022-10-06T18:01:17+07:00"
            }],
            "total_item": 58
        }
    }]
}