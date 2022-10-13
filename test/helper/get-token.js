import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import QoinAPI2 from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params
import * as input from '$root/data/SentraLokasi_Lokasi.data'

export async function Token_mobile(){
    const response = await QoinAPI2.loginMobile(input.VALID_LOGIN_MOBILE)
    let IDrespons = response.data.data.Token
    return IDrespons
}

export default async function Get_token(){
    const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
    let IDrespons = response.data.data.Token
    return IDrespons 
}
