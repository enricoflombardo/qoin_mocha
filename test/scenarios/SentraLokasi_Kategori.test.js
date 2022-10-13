import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '../pages/SentraLokasi_Kategori.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Kategori.data'; //import data
import * as schema from '$root/schema/SentraLokasi_Kategori.schema'; //import schema
import Getid, { Getid_Lokasi } from '$root/helper/helper-sentraLokasi'; //import id
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token' 

chai.use(jsonSchema)

// Token dan id
const token_mobile = Token_mobile();
const token = Get_token();
const id = Getid_Lokasi();

// Website
describe('Web kategori lokasi', () => {

    it('Add kategori lokasi', async() => {
        const response = await QoinAPI.createkategoriLokasi(data.VALID_ADDKATEGORI, token)

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KATEGORILOKASI_SCHEMA)
    });

    it('Get detail kategori lokasi', async() => {
        const response = await QoinAPI.getdetailkategoriLokasi(id, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETDETAILKATEGORILOKASI)
    });

    it('Update kategori lokasi', async() => {
        const response = await QoinAPI.updatekategoriLokasi(id, data.VALID_UPDATEKATEGORI, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KATEGORILOKASI_SCHEMA)

        // console.log(response.data.data)
    });
    
    //belum bisa

    // it('Read kategori lokasi', async() => {
    //     const response = await QoinAPI.readkategoriLokasi(id)

    //     // result
    //     assert.equal(response.status, 200)

    //     //schema
    //     expect(response.data).to.be.jsonSchema(schema.VALIDATE_READKATEGORILOKASI)
    // });

    it('Delete kategori lokasi', async() => {
        const response = await QoinAPI.deletekategoriLokasi(id, token)

        //result
        assert.equal(response.status, 200)
    });
});

// Mobile


describe('Mobile kategori lokasi', (done) => {


    it('Get kategori lokasi', async ()=> {
        const response = await QoinAPI.get_lokasi(token_mobile);
    
        assert.equal(response.status, 200)
        // console.log(response.data.data)

        //schema belum nyoba
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOKASI_SCHEMA)
    });
});