import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/qoin.api'; //import endpoint API
import * as data from '$root/data/user.data'; //import data params
import * as schema from '$root/schema/addktp.schema.js'; //import schema
import Getid from '$root/helper/getid'; //import token

chai.use(jsonSchema)

describe('Membuat ktp baru dalam aplikasi', () => {
    it.only('Berhasil membuat ktp melalui mobile', async () => {
        // const token = await GettokenAPI();
        const response = await QoinAPI.addKTP(data.VALID_ADDKTP) //hit API
        
        assert.equal(response.status, 200); //Check Respons
        expect(response.data).to.be.jsonSchema(schema.ValidateAddktpSchema) //Call JSON Schema

        console.log(response)
    });
    it.only('Berhasil mendapatkan data KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.getid() //hit API
        
    
        expect(response.data).to.be.jsonSchema(schema.ValidateGetAllDocumentSchema) //Call JSON Schema

        console.log(id)
    });

    it.only('Berhasil mendapatkan data KTP di Mobile', async () => {
        const id = await Getid();
        const response = await QoinAPI.riwayatweb(id) //hit API
        
    
        //expect(response.data).to.be.jsonSchema(schema.ValidateGetAllDocumentSchema) //Call JSON Schema
        expect(response.data).to.be.jsonSchema(schema.ValidateGetRiwayatWebSchema)
        console.log(response.data.data)
    });

    it.only('Berhasil edit data KTP', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatektp(id, data.VALID_UPDATEKTP) //hit API
        const responsestatus = await QoinAPI.updatestatus(id, data.VALID_STATUSVERIFKTP)
    
        expect(response.data).to.be.jsonSchema(schema.ValidateUpdateKTPSchema) //Call JSON Schema
        //expect(responsestatus.data).to.be.jsonSchema(schema.ValidateUpdateStatusSchema) //Call JSON Schema

        console.log(response.data.data)
        console.log(responsestatus)
    });
});