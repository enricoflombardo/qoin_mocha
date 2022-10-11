import QoinAPI from '$root/pages/qoin.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params

async function GettokenAPI(){

    const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
    let IDrespons = "3"
    
    if (response.data.data.total_items == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].Token
        // IDrespons = ""
    }
    
    return IDrespons 
}
 
export default GettokenAPI