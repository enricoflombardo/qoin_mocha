import QoinAPI from '$root/pages/SentraKependudukan_KTP.api'; //import endpoint API
import Get_token from '$root/helper/get-token'

const token = await Get_token();

async function Getid(){

    const response = await QoinAPI.getid(token) //hit API
    let IDrespons = "3"
    
    if (response.data.data.list[0].id == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
    }
    
    return IDrespons 
}
 
export default Getid