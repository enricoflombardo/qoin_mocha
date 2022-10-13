import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_KTP.api'; //import endpoint API
import * as data from '$root/data/SentraKependudukan_KTP.data'; //import data params
import * as schema from '../schema/SentraKependudukan_KTP.schema'; //import schema
import Getid from '$root/helper/get-id-ktp'; //import id
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token'

chai.use(jsonSchema)

// Token dan id
const token_mobile = Token_mobile();
const token = Get_token()
const id = Getid();

for (let index = 0; index < 1; index++) {
describe('Mobile', () => {
        
    it('Berhasil membuat ktp melalui mobile', async () => {
        const response = await QoinAPI.addKTP(token_mobile, data.VALID_ADDKTP) //hit API
        
        if (response.status == 200) {
            //result
            assert.equal(response.status, 200);
            assert.equal(response.data.data.nama, data.VALID_ADDKTP.nama);
    
            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_CREATE_KTP_SCHEMA)
        
        } else{
            console.log(response.status)
            console.log(response.config)
        }

    });
});

describe('Web', () => {
    it('Index by id', async () => {
        const response = await QoinAPI.get_index_by_id(id, token)
        
        //result
        assert.equal(response.status, 200);
        
        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID_SCHEMA)

    });

    it('update data KTP', async () => {
        const response = await QoinAPI.updatektp(id, data.VALID_UPDATEKTP, token) 
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KTP_SCHEMA)
       
    });

    it('Update Status Verifikasi KTP', async () => {
        const response = await QoinAPI.updatestatusverif(id, data.VALID_STATUSVERIFKTP, token)
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS_VERIFIKASI_SCHEMA)
        
    });

    it('Update jadwal KTP', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KTP, token)
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_JADWAL_SCHEMA)

    });

    it('Update Status KTP', async () => {
        const response = await QoinAPI.updatestatus(id, data.VALID_STATUSKTP, token)
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS)

    });

    it('Update Status konfirmasi KTP', async () => {
        const response = await QoinAPI.updatekonfirmasi(id, data.VALID_STATUSKONFIRKTP, token)

    });
});
}