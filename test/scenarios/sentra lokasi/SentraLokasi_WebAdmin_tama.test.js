import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '$root/pages/SentraLokasi_WebAdmin_tama.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_WebAdmin_tama.data'; //import data
import * as schema from '$root/schema/SentaLokasi_WebAdmin_tama.schema';

chai.use(jsonSchema)

describe('Web', () => {
    it('Add lokasi', async() => {
        const response = await QoinAPI.addLokasi(data.VALID_ADDLOKASI)

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba ga brani
        //expect(response.data).to.be.jsonSchema(schema)
    });

    it('Add multi lokasi', async() => {
        const response = await QoinAPI.addMultilokasi(data.VALID_ADDMULTILOKASI)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_SENTRALOKASI_WEBADMIN_SCHEMA)
    });

    it('Get dan Cek Data Multi Lokasi', async() => {
        const response = await QoinAPI.getLokasi()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETSENTRALOKASI_WEBADMIN_SCHEMA)
    });

    it('Edit lokasi', async() => {
        const response = await QoinAPI.updateLokasi(data.VALID_PUTLOKASI)

        //result
        assert.equal(response.status, 200)

        //schema BELUM NYOBA JUGA
        //expect(response.data).to.be.jsonSchema(schema)
    });

    it('Hapus lokasi', async() => {
        const response = await QoinAPI.deleteLokasi()

        //result
        assert.equal(response.status, 200)

        //schema BELUM NYOBA JUGA
        //expect(response.data).to.be.jsonSchema(schema)
    });

    it('Add lokasi image', async() => {
        const response = await QoinAPI.addImagelokasi(data.VALID_ADDLOCATIONIMAGE)

        //result
        assert.equal(response.status, 200)

        //schema BELUM NYOBA JUGA
        //expect(response.data).to.be.jsonSchema(schema)
    });

    it('Get dan Cek Image Lokasi', async() => {
        const response = await QoinAPI.getImagelokasi()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    });

    it('Delete Image Lokasi', async() => {
        const response = await QoinAPI.deleteImagelokasi()

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    });

    it('Get Fasilitas Lokasi', async() => {
        const response = await QoinAPI.getFasilitaslokasi()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETFASILITASLOKASI_SCHEMA)
    });

    /*it('Get Template Excel', async() => {
        const response = await QoinAPI.getTemplateexcel()

        //result
        assert.equal(response.status, 200)
                                                                            //LOKAL MAS SASE
        //schema
        expect(response.data).to.be.jsonSchema(schema)
    });*/

    it.only('Get Lokasi By Id', async() => {
        const response = await QoinAPI.getLokasibyid()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETLOKASIBYID_SCHEMA)
    });
});