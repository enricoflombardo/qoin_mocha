import QoinAPI from '$root/pages/SentraLokasi_Kategori.api'; //import endpoint API
import QoinAPI2 from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API

export default async function Getid(){
    const response = await QoinAPI.get_lokasi() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
}

export async function Getid_Lokasi(){
    const response = await QoinAPI2.get_lokasi() //hit API
    let IDrespons = response.data.data.list[0].id
    return IDrespons 
}

 
// export default Getid