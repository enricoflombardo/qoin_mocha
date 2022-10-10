import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params


export default async function Get_token(){
    const response = await QoinAPI.login() //hit API
    let IDrespons = response.data.data.Token
    return IDrespons 
}

export async function Getid(){
    const token = await Get_token()
    const response = await QoinAPI.getid(token) //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getissuer_code(){
    const token = await Get_token()
    const response = await QoinAPI.getid(token) //hit API
    let IDrespons = response.data.data.list[0].IssuerCode
    return IDrespons 
};

export async function Getissuer_name(){
    const token = await Get_token()
    const response = await QoinAPI.getid(token) //hit API
    let IDrespons = response.data.data.list[0].IssuerName
    return IDrespons 
};

export async function Getid_voucher(){
    const token = await Get_token()
    const id = await QoinAPI.getid()
    const response = await QoinAPI.voucher(id, token) //hit API
    let IDrespons = response.data.data.id
    return IDrespons 
};

export async function Getprefix_code(){
    const token = await Get_token()
    const id = await QoinAPI.getid()
    const response = await QoinAPI.voucher(id,token) //hit API
    let IDrespons = response.data.data.PrefixCode
    return IDrespons 
};

export async function Getid_program(){
    const token = await Get_token()
    const response = await QoinAPI.listbansos(token) //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_user(){
    const token = await Get_token()
    const response = await QoinAPI.listbansospenerima(token) //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_penerima(){
    const token = await Get_token()
    const response = await QoinAPI.listbansospenerima(token) //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_bansos(){
    const token = await Get_token()
    const response = await QoinAPI.bansosuser(token) //hit API
    let IDrespons = response.data.data.vouchers[0].m_bansos_id
    return IDrespons 
};

export async function kode_voucher(){
    const token = await Get_token()
    const response = await QoinAPI.bansosuser(token) //hit API
    let IDrespons = response.data.data.vouchers[0].kode_voucher
    return IDrespons 
};

// export default Getid