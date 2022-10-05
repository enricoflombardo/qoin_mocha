import QoinAPI from '$root/pages/SentraKependudukan_KTP.api'; //import endpoint API

async function Getid(){

    const response = await QoinAPI.getid() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
}
 
export default Getid //