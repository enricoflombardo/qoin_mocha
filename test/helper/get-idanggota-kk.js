import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API

async function Getid_anggota(){
    const id = await Getid()
    const response = await QoinAPI.getid_anggota(id) //hit API
    let IDrespons = response.data.data[2].id
    return IDrespons
}
 
export default Getid_anggota