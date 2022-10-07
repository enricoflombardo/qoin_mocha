import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API

export default async function Getid(){
    const response = await QoinAPI.getid() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getissuer_code(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = response.data.data.IssuerCode
    return IDrespons 
};

export async function Getissuer_name(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = response.data.data.IssuerName
    return IDrespons 
};

export async function Getid_voucher(){
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = response.data.data.id
    return IDrespons 
};

export async function Getprefix_code(){
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = response.data.data.PrefixCode
    return IDrespons 
};

export async function Getid_program(){
    const response = await QoinAPI.listbansos() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_user(){
    const response = await QoinAPI.listbansospenerima() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_penerima(){
    const response = await QoinAPI.listbansospenerima() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_bansos(){
    const response = await QoinAPI.bansosuser() //hit API
    let IDrespons = response.data.data.vouchers[0].m_bansos_id
    return IDrespons 
};

export async function kode_voucher(){
    const response = await QoinAPI.bansosuser() //hit API
    let IDrespons = response.data.data.vouchers[0].kode_voucher
    return IDrespons 
};

// export default Getid