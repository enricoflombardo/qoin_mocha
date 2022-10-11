import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params

async function Get_token(){
    const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
    let IDrespons = response.data.data.Token
    
    return IDrespons 
}
 
export default Get_token    