import QoinAPI from '$root/pages/SentraKependudukan_Akta.api'; //import endpoint API

async function Getid(){

    const response = await QoinAPI.get_id() //hit API

    let IDrespons = "3"
    
    if (response.data.data.total_items == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons 
}
 
export default Getid