import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params

<<<<<<< HEAD

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
=======
export default async function Getid(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = "3"
    
    // validate api
    if (typeof response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.id
        // IDrespons = ""
    }
    
    return IDrespons
};

export async function Getissuer_code(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.IssuerCode == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.IssuerCode
        // IDrespons = ""
    }
    
    return IDrespons
};

export async function Getissuer_name(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.IssuerName == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.IssuerName
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function Getid_voucher(){
<<<<<<< HEAD
    const token = await Get_token()
    const id = await QoinAPI.getid()
    const response = await QoinAPI.voucher(id, token) //hit API
    let IDrespons = response.data.data.id
=======
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = "3"

    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.id
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function Getprefix_code(){
<<<<<<< HEAD
    const token = await Get_token()
    const id = await QoinAPI.getid()
    const response = await QoinAPI.voucher(id,token) //hit API
    let IDrespons = response.data.data.PrefixCode
=======
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.PrefixCode
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function Getid_program(){
<<<<<<< HEAD
    const token = await Get_token()
    const response = await QoinAPI.listbansos(token) //hit API
    let IDrespons = response.data.data.list[0].id
=======
    const response = await QoinAPI.listbansos() //hit API
    let IDrespons = "3"
    
    //validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function Getid_user(){
<<<<<<< HEAD
    const token = await Get_token()
    const response = await QoinAPI.listbansospenerima(token) //hit API
    let IDrespons = response.data.data.list[0].id
=======
    const response = await QoinAPI.listbansospenerima() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function Getid_penerima(){
<<<<<<< HEAD
    const token = await Get_token()
    const response = await QoinAPI.listbansospenerima(token) //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
};

export async function Getid_bansos(){
    const token = await Get_token()
    const response = await QoinAPI.bansosuser(token) //hit API
    let IDrespons = response.data.data.vouchers[0].m_bansos_id
=======
    const response = await QoinAPI.listbansospenerima() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons
};

export async function Getid_bansos(){
    const response = await QoinAPI.bansosuser() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.m_bansos_id
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

export async function kode_voucher(){
<<<<<<< HEAD
    const token = await Get_token()
    const response = await QoinAPI.bansosuser(token) //hit API
    let IDrespons = response.data.data.vouchers[0].kode_voucher
=======
    const response = await QoinAPI.bansosuser() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.vouchers.kode_voucher
        // IDrespons = ""
    }
    
>>>>>>> 123b496b452a021bfaa7c04d8f18807df1dbb65a
    return IDrespons 
};

// export default Getid