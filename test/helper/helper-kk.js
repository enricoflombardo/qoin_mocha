import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API
import Get_token from '$root/helper/get-token';


const id = await QoinAPI.getid()
const token = await Get_token();

export default async function Getid(){
    const response = await QoinAPI.getid(token) //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data.list[0].id == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons 
}

export async function Getid_anggota(){
    const response = await QoinAPI.getid_anggota(id, token) //hit API
    let IDrespons = "3"
    
    // validate api
    if (response.data.data.list[0].id == "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons
}
 
// export default Getid