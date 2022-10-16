import QoinAPI from '$root/pages/SentraLokasi_Kategori.api'; //import endpoint API
import QoinAPI2 from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API

export default async function Getid_Kategori(){
    const response = await QoinAPI.get_lokasi() //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.id == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.id
        // IDrespons = ""
    }
    
    return IDrespons
}

export async function Getid_Lokasi(){
    const response = await QoinAPI2.getLokasi() //hit API
    if (typeof response.data.id == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.id
        // IDrespons = ""
    }
    
    return IDrespons
}


 
// export default Getid