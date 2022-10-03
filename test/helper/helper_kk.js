import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API

async function Getid(){

    const response = await QoinAPI.getid() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
}

async function Getid_anggota(){
    const id = await Getid()
    const response = await QoinAPI.getid_anggota(id) //hit API
    let IDrespons = response.data.data[2].id
    return IDrespons
}
 
export default Getid && Getid_anggota