import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API

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
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.IssuerCode
        // IDrespons = ""
    }
    
    return IDrespons
};

export async function Getissuer_name(){
    const response = await QoinAPI.penerbit() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.IssuerName
        // IDrespons = ""
    }
    
    return IDrespons 
};

export async function Getid_voucher(){
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = "3"

    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.id
        // IDrespons = ""
    }
    
    return IDrespons 
};

export async function Getprefix_code(){
    const response = await QoinAPI.voucher() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.PrefixCode
        // IDrespons = ""
    }
    
    return IDrespons 
};

export async function Getid_program(){
    const response = await QoinAPI.listbansos() //hit API
    let IDrespons = "3"
    
    //validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons 
};

export async function Getid_user(){
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

export async function Getid_penerima(){
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
    
    return IDrespons 
};

export async function kode_voucher(){
    const response = await QoinAPI.bansosuser() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data == "undefined") {
        IDrespons = "3"
    }else{
        //IDrespons = response.data.data.vouchers.kode_voucher
        // IDrespons = ""
    }
    
    return IDrespons 
};

// export default Getid