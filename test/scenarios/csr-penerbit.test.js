import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params
// import * as schema from '../schema/csr-penerbit.schema'; //import schema
import Getid from '$root/helper/get-id-csr-penerbit'; //import id
import Get_token from '$root/helper/csr-token'; //import id

chai.use(jsonSchema)

describe('Web', () => {
    it('Login', async () => {
        const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
        
            //result
            assert.equal(response.status, 202);
            

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOGIN_SCHEMA)
    });

    it('Create Multi Penerbit', async () => {
        const token = await Get_token()
        const response = await QoinAPI.multipenerbit(data.VALID_MULTIPENERBIT, token)
        
        assert.equal(response.status, 200);
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_MULTIPENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Create Penerbit', async () => {
        const token = await Get_token();
        const response = await QoinAPI.penerbit(data.VALID_PENERBIT, token) //hit API

        console.log(response.headers);
        console.log(response.body);
        console.log(response.data);

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_PENERBIT_SCHEMA) //Call JSON Schema
        // IssuerCode = response.data.data.list[0].id
    });
    
    it('Read Penerbit', async () => {
        const id = await Getid();
        const response = await QoinAPI.getpenerbit(id)

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETPENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Update Penerbit', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatepenerbit(id, data.VALID_UPDATEPENERBIT) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATEPENERBIT_SCHEMA) //Call JSON Schema
    });
});

// export default IssuerCode 