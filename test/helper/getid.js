import QoinAPI from '$root/pages/qoin.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params

async function Getid(){

    const response = await QoinAPI.getid() //hit API
    let IDrespons = response.data.data.list[1].id
    return IDrespons 
}
 
export default Getid