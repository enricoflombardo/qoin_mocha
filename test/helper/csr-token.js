import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params

async function Get_token(){
    const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
    
    let IDrespons = "3"
    
    if (typeof response.data.data === "undefined") {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data
        // IDrespons = ""
    }
    
    return IDrespons 
}
 
export default Get_token    