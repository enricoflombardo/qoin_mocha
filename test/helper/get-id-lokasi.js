import QoinAPI from "$root/pages/SentraLokasi_Lokasi.api";

async function GetID_Lokasi(){

    const response = await QoinAPI.getLokasibyid();

    let IDrespons = "3"
    
    if (response.data.data.id == 0) {
        IDrespons = "3"
    }else{
        IDrespons = response.data.data.list[0].id
        // IDrespons = ""
    }
    
    return IDrespons 

}

export default GetID_Lokasi