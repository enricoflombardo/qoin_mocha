import QoinAPI from '$root/pages/SentraLokasi_Kategori.api'; //import endpoint API
import QoinAPI2 from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token'

const token = await Get_token();
const token_mob = await Token_mobile();
let IDrespons = "3"

export default async function Getid_Kategori(){
    const response = await QoinAPI.get_lokasi(token_mob) //hit API
    
    // validate api
    if (response.data.id == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.id
        // IDrespons = ""
    }
    
    return IDrespons
}

export async function Getid_Lokasi(){
    const response = await QoinAPI2.getLokasi(token) //hit API
    if (response.data.data.list[0].id == 0) {
       IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = "3"
        
    }
    
    return IDrespons 
}
