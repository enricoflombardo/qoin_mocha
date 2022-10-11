import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API
import Getid from '$root/helper/helper-kk'; //import id

async function Getid_anggota(){
    const id = await Getid()
    const response = await QoinAPI.getid_anggota(id) //hit API
    let IDrespons = "3"
    
    if (response.data.data.total_items == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons 
}
 
export default Getid_anggota