import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API
import * as data from '$root/data/SentraKependudukan_KK.data'; //import data params
import * as schema from '../schema/SentraKependudukan_KK.schema'; //import schema
import Getid from '$root/helper/get-id-kk'; //import id

chai.use(jsonSchema)

describe('Mobile', () => {
    it('Berhasil membuat kk melalui mobile', async () => {
        const response = await QoinAPI.addKk(data.VALID_ADDKK) //hit API
        
        if (response.status == 200) {
            //result
            assert.equal(response.status, 200);
            assert.equal(response.data.data.rincian_pemohon.nama_pemohon.toLowerCase(), data.VALID_ADDKK.data.nama_pemohon.toLowerCase());

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)

        } else{
            console.log(response.status)
            console.log(response.config)
        }
        

    });
});
describe('Web', () => {
    it('Index by id', async () => {
        const id = await Getid();//Get ID
        const response = await QoinAPI.index_by_id(id) //hit API
        
        if (response.status == 200) {
            //result
            assert.equal(response.status, 200);

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID)

        } else{
            console.log(response.status)
            console.log(response.config)
        }

    });

    it('update data KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatekk(data.VALID_UPDATEKK) //hit API
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateUpdateKTPSchema) //Call JSON Schema
       
    });

    it('Update Status Verifikasi KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatestatusverif(data.VALID_STATUSVERIFKK)
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateUpdateStatusVerifSchema) //Call JSON Schema
        
    });

    it('Update jadwal KK', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KK) //hit API
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateKtpJadwalSchema) //Call JSON Schema

    });

    it('Update Status KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatestatus(data.VALID_STATUSKK)
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS) //Call JSON Schema

    });

    it('Update Status konfirmasi KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatekonfirmasi(data.VALID_STATUSKONFIRKK)

    });
});