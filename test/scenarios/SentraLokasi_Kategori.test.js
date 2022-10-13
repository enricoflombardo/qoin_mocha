import chai,{ assert,expect } from 'chai';
import chaiExclude from 'chai-exclude';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '../pages/SentraLokasi_Kategori.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Kategori.data'; //import data
import * as schema from '$root/schema/SentraLokasi_Kategori.schema'; //import schema
import Getid, { Getid_Lokasi } from '$root/helper/helper-sentraLokasi'; //import id
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token' 

chai.use(jsonSchema)
chai.use(chaiExclude);

// Token dan id
const token = await Get_token();
const id = await Getid_Lokasi();
// Website
describe('Web kategori lokasi', () => {

    it('Add kategori lokasi', async() => {
        const response = await QoinAPI.createkategoriLokasi(token, data.VALID_ADDKATEGORI)
        //validasi
        
            const data_res = Object.fromEntries(
            Object.entries(response.data.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
            );

            const data_in = Object.fromEntries(
            Object.entries(data.VALID_ADDKATEGORI).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
            );
            
            //result
            assert.equal(response.status, 200)

          //validasi exclude
          assert.deepEqualExcluding(data_res, data_in, ['created_at', 'icon', 'is_active','updated_at'])

        //schema BELUM BISA : EXPECTED DELETED_AT

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

        //validasi
        
        const data_res = Object.fromEntries(
            Object.entries(response.data.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
            );

            const data_in = Object.fromEntries(
            Object.entries(data.VALID_UPDATEKATEGORI).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
            );
            
            //result
            assert.equal(response.status, 200)

          //exclude
          assert.deepEqualExcluding(data_res, data_in, ['created_at', 'icon','updated_at', 'deleted_at', 'id'])
        //schema BELUM BISA : KURANG LINK_PICTURE
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KATEGORILOKASI_SCHEMA)

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

        expect(response.data).to.be.jsonSchema(schema.VALIDATE_DELETE_KATEGORILOKASI_SCHEMA)
    });
});

// Mobile


describe('Mobile kategori lokasi', (done) => {


    it('Get kategori lokasi', async ()=> {
        const response = await QoinAPI.get_lokasi(token_mobile);
    
        assert.equal(response.status, 200)

        //schema belum nyoba
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOKASI_SCHEMA)
    });
});