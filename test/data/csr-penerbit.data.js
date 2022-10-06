import Getid, {Getissuer_code, Getissuer_name, Getprefix_code} from '$root/helper/helper-csr';

const id = await Getid()
const IssuerCode = await Getissuer_code()
const IssuerName = await Getissuer_name()
const PrefixCode = await Getprefix_code()
const KodeVoucher = await kode_voucher()

export const VALID_LOGIN = {
    'Email': 'ilyas@loyalto.id',
    'Password': '123123',
    'Source': 'web'
};

export const VALID_PENERBIT = {
    'IssuerName': 'PT FILMA JAYA',
    'IssuerCode': 'PFJ3',
    'IssuerStatus': '1'
};

export const VALID_MULTIPENERBIT = [
    {
        "IssuerCode": "PTP1",
        "IssuerName": "PT PERSERO 1",
        "IssuerStatus": "1",
        "is_duplicate": 0
    },
    {
        "IssuerCode": "PTP 2",
        "IssuerName": "PT PERSERO 2",
        "IssuerStatus": "1",
        "is_duplicate": 0
    }
];

export const VALID_UPDATEPENERBIT = {
    'IssuerName': 'PT FILMA JAYA PERMATA',
    'IssuerCode': 'PFJ',
    'IssuerStatus': '1'
};

export const VALID_MULTIVOUCHER = {
    "nama_program": "Voucher Mocha",
    "tanggal_mulai": "2022-01-01",
    "tanggal_selesai": "2022-12-01",
    "excel": "",
    "penyelenggara": "Venturo",
    "kode_penyelenggara": "VNTR",
    "validasi_kk": "0",
    "m_issuer_id": "1",
    "voucher": "ALE, VTR",
    "validasi_id": "0"
};

export const VALID_VOUCHER = {
    "IssuerId": id,
    "MerchantCode": IssuerCode,
    "PrefixCode": "VCH12",
    "Start": "0",
    "End": "20",
    "VoucherName": "VOUCHER BERAS 10 KG",
    "VoucherType": "1",
    "AmountValue": "10000",
    "VoucherDesc": "Ini voucher beras",
    "VoucherTC": "S&K berlaku",
    "StartDate": "2022-01-01",
    "EndDate": "2022-12-30",
    "Status": "2",
    "Distributed": "20"
};

export const  VALID_UPDATEVOUCHER = {
    "IssuerId": id,
    "MerchantCode": IssuerCode,
    "PrefixCode": PrefixCode,
    "Start": "0",
    "End": "20",
    "VoucherName": "VOUCHER BERAS 10 KG",
    "VoucherType": "1",
    "AmountValue": "10000",
    "VoucherDesc": "Ini voucher beras",
    "VoucherTC": "S&K berlaku",
    "StartDate": "2022-01-01",
    "EndDate": "2022-12-30",
    "Status": "2",
    "Distributed": "20"
};

export const VALID_BANSOS = {
    "nama_program": "BANSOS BERAS",
    "tanggal_mulai": "2022-01-01",
    "tanggal_selesai": "2022-12-31",
    "excel": "C:\Users\USER\Downloads\tmp_bansos.xlsx",
    "penyelenggara": IssuerName,
    "kode_penyelenggara": IssuerCode,
    "validasi_kk": 0,
    "status": 1,
    "m_issuer_id": id,
    "voucher": [PrefixCode],
    "validasi_id": 0
}

export const VALID_REDEEMVOUCHER = {
    "expired_date": 1662536112333,
    "install_id": "-",
    "is_qrcode": "0",
    "kode_voucher": KodeVoucher,
    "prefix_code": PrefixCode
};