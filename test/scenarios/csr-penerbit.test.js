import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params
//
import * as schema from '../schema/csr-penerbit.schema'; //import schema
import Get_token, {Getid, Getid_voucher, Getid_program, Getid_bansos, Getid_user, Getid_penerima} from '$root/helper/helper-csr'; //import id
// import Get_token from '$root/helper/csr-token'; //import token

chai.use(jsonSchema)

describe.only('Web', () => {
    it('Login', async () => {
        const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
        
            //result
            assert.equal(response.status, 202) 
            
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

        // console.log(response.headers);
        // console.log(response.body);
        // console.log(response.data);

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_PENERBIT_SCHEMA) //Call JSON Schema
        // IssuerCode = response.data.data.list[0].id
    });


    
    
    it('Read Penerbit', async () => {
        const token = await Get_token();
        const id = await Getid();
        const response = await QoinAPI.getpenerbit(id, token)

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETPENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Update Penerbit', async () => {
        const token = await Get_token();
        const id = await Getid();
        const response = await QoinAPI.updatepenerbit(id, data.VALID_UPDATEPENERBIT, token) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATEPENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Create Voucher', async () => {
        const token = await Get_token();
        const response = await QoinAPI.penerbit(data.VALID_VOUCHER, token) //hit API

        assert.equal(response.status, 200);
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_PENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Update Voucher', async () => {
        const id_voucher = await Getid_voucher();
        const token = await Get_token();
        const response = await QoinAPI.penerbit(id_voucher, data.VALID_UPDATEVOUCHER, token) //hit API

        assert.equal(response.status, 200);
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_PENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Create Program Bantuan', async () => {
        const token = await Get_token();
        const response = await QoinAPI.penerbit(data.VALID_BANSOS, token) //hit API

        assert.equal(response.status, 200);
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_PENERBIT_SCHEMA) //Call JSON Schema
    });

    it('Get Program Bantuan', async() => {x
        const token = await Get_token();
        const response = await QoinAPI.listbansos(token)

        assert.equal(response.status, 200);

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Read Daftar Program Bantuan', async() => {
        const token = await Get_token();
        const response = await QoinAPI.listbansos(token);

        assert.equal(response.status, 200);

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Read List Penerima', async() => {
        const id_program = await Getid_program();
        const token = await Get_token();
        const response = await QoinAPI.listpenerimabansos(id_program, token);

        assert.equal(response.status, 200)

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Read Voucher Bantuan', async() => {
        const id_program = await Getid_program();
        const token = await Get_token();
        const response = await QoinAPI.listvoucherbansos(id_program, token);

        assert.equal(response.status, 200);

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Find Penerima Bansos Berdasarkan Nama', async() => {
        const token = await Get_token();
        const response = await QoinAPI.listbansospenerima(token);

        assert.equal(response.status, 200)

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Read Detail Data Penerima Bansos', async() => {
        const id_penerima = await Getid_penerima()
        const token = await Get_token()
        const response = await QoinAPI.bansosuser(id_penerima, token)

        assert.equal(response.status, 200)

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Read List Program Bantuan Yang Diterima', async() => {
        const id_bansos = await Getid_bansos()
        const id_user = await Getid_user()
        const token = await Get_token()
        const response = await QoinAPI.listvoucheruser(id_bansos, id_user, token)

        assert.equal(response.status, 200)

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });

    it('Reedem Voucher Bansos', async() => {
        const token = await Get_token()
        const response = await QoinAPI.redeemvoucher(token)

        assert.equal(response.status, 200)

        //expect(response.data).to.be.jsonSchema(schema.) // call JSON Schema
    });
});
// export default IssuerCode 
