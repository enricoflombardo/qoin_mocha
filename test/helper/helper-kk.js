import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API

export default async function Getid(){
    const response = await QoinAPI.getid() //hit API
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

export async function Getid_anggota(){
    const id = await QoinAPI.getid()
    const response = await QoinAPI.getid_anggota(id) //hit API
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
 
// export default Getid