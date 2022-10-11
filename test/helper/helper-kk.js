import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API

export default async function Getid(){
    const response = await QoinAPI.getid() //hit API
    //validate api
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
}

export async function Getid_anggota(){
    const id = await QoinAPI.getid()
    const response = await QoinAPI.getid_anggota(id) //hit API
    //validate api
    let IDrespons = response.data.data[0].id //sesuaikan list yang ingin diubah
    return IDrespons
}
 
// export default Getid