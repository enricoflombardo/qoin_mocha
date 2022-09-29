import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/qoin.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params
import * as schema from '$root/schema/SentraKependudukan_KTP.schema'; //import schema
import Getid from '$root/helper/get-id-ktp'; //import id

chai.use(jsonSchema)

describe('Mobile', () => {
    it('Berhasil membuat ktp melalui mobile', async () => {
        const response = await QoinAPI.addKTP(data.VALID_ADDKTP) //hit API
        
        //result
        assert.equal(response.status, 200); //Check Respons
        assert.equal(response.data.data.name, data.VALID_ADDKTP.nama); //Check Respons

        //schema
        expect(response.data).to.be.jsonSchema(schema.ValidateAddktpSchema) //Call JSON Schema

    });
});
describe('Web', () => {
    it('Index by id', async () => {
        const response = await QoinAPI.getid() //hit API
        
        expect(response.data).to.be.jsonSchema(schema.ValidateGetAllDocumentSchema) //Call JSON Schema

    });

    it('update data KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatektp(id, data.VALID_UPDATEKTP) //hit API
    
        expect(response.data).to.be.jsonSchema(schema.ValidateUpdateKTPSchema) //Call JSON Schema
       
    });

    it('Update Status Verifikasi KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatestatusverif(id, data.VALID_STATUSVERIFKTP)
    
        expect(response.data).to.be.jsonSchema(schema.ValidateUpdateStatusVerifSchema) //Call JSON Schema
        
    });

    it.only('Update jadwal KTP', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KTP) //hit API
    
        expect(response.data).to.be.jsonSchema(schema.ValidateKtpJadwalSchema) //Call JSON Schema

    });

    it('Update Status KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatestatus(id, data.VALID_STATUSKTP)
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS) //Call JSON Schema

    });

    it('Update Status konfirmasi KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatekonfirmasi(id, data.VALID_STATUSKONFIRKTP)

    });
});