import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_Umum.api'; //import endpoint API
import Getid from '../helper/get-id-akta';
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token'
// import * as schema from '../schema/SentraKependudukan_KK.schema'; //import schema

chai.use(jsonSchema)

// Token dan id
const token_mobile = await Token_mobile();
const token = await Get_token();
const id = await Getid();

describe('Web Admin', () => {
    it('Get Dashboard', async () => {
        const response = await QoinAPI.get_dashboard(token) //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Get All Document', async () => {
        const response = await QoinAPI.get_allDoc(token) //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});

describe('Mobile', () => {
    it('Riwayat All', async () => {
        const response = await QoinAPI.get_riwayatAll(token_mobile) //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Riwayat', async () => {
        const response = await QoinAPI.get_riwayat(id, token_mobile) //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
    
    it('Detail Riwayat', async () => {
        const response = await QoinAPI.get_detailRiwayat(token_mobile) //hit API
        
            //status
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});