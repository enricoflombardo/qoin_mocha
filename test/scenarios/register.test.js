import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import ReqresAPI from '$root/pages/reqres.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params
import * as schema from '$root/schema/register.schema'; //import schema

chai.use(jsonSchema)
describe('Membuat user baru dalam aplikasi', () => {
    it('Berhasil mendaftarkan akun', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER) //hit API
        
        assert.equal(response.status, 200); //Check Respons
        expect(response.data).to.be.jsonSchema(schema.ValidateRegisterSchema) //Call JSON Schema
    });

    it('Should failed to register when password not filled', async () => {
        const response = await ReqresAPI.register(data.INVALID_REGISTER)
        
        //expect(response.data).to.be.jsonSchema(schema.ValidateRegisterSchema) //This code in comment because negative case, schema json get respon 200 
        
        assert.equal(response.status, 400);
        
    });
});