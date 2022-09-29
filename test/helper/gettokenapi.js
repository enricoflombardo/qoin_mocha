import QoinAPI from '$root/pages/qoin.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params

async function GettokenAPI(){

    const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
    let Tokenrespons = response.data.data.Token
    return Tokenrespons 
}
 
export default GettokenAPI