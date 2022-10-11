import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_Umum.api'; //import endpoint API
// import * as schema from '../schema/SentraKependudukan_KK.schema'; //import schema

chai.use(jsonSchema)

describe('Web Admin', () => {
    it('Get Dashboard', async () => {
        const response = await QoinAPI.get_dashboard() //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Get All Document', async () => {
        const response = await QoinAPI.get_allDoc() //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});

describe('Mobile', () => {
    it('Riwayat All', async () => {
        const response = await QoinAPI.get_riwayatAll() //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Riwayat', async () => {
        const response = await QoinAPI.get_riwayat() //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Detail Riwayat', async () => {
        const response = await QoinAPI.get_detailRiwayat() //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});