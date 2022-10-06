import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '$root/pages/SentraLokasi_Kategori_WebAdmin.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Kategori_WebAdmin.data'; //import data
import * as schema from '$root/schema/SentraLokasi_Kategori_WebAdmin.shema'; //import schema

chai.use(jsonSchema)

describe('Web', () => {
    it('Add kategori lokasi', async() => {
        const response = await QoinAPI.createkategoriLokasi(data.VALID_ADDKATEGORI)

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba
        //expect(response.data).to.be.jsonSchema(schema.)
    });

    it('Get detail kategori lokasi', async() => {
        const response = await QoinAPI.getdetailkategoriLokasi()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETDETAILKATEGORILOKASI)
    });

    it('Update kategori lokasi', async() => {
        const response = await QoinAPI.updatekategoriLokasi(data.VALID_UPDATEKATEGORI)

        //result
        assert.equal(response.status, 200)

        //schema
        //expect(response.data).to.be.jsonSchema(schema.)
    });

    it('Delete kategori lokasi', async() => {
        const response = await QoinAPI.deletekategoriLokasi()

        //result
        assert.equal(response.status, 200)
    });

    it('Read kategori lokasi', async() => {
        const response = await QoinAPI.readkategoriLokasi()

        // result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_READKATEGORILOKASI)
    });
});