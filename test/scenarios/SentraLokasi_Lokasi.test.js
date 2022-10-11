import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Lokasi.data'; //import data
import * as schema from '$root/schema/SentaLokasi_Lokasi.schema'; //import schema
import Getid_Lokasi from '$root/helper/helper-sentraLokasi'; //import id
import Get_token from '$root/helper/csr-token'

chai.use(jsonSchema)

describe('Web lokasi', () => {


    // Engineer mas sase

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
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADDSENTRAMULTILOKASI_WEBADMIN_SCHEMA)
    });

    it('Get dan Cek Data Multi Lokasi', async() => {
        const response = await QoinAPI.getLokasi()

        //result
        assert.equal(response.status, 200)

        //schema
        //expect(response.data).to.be.jsonSchema(schema.)
    });

    it('Edit lokasi', async() => {
        const id = await Getid_Lokasi()
        const response = await QoinAPI.updateLokasi(id, data.VALID_PUTLOKASI)

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
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    });

    it.only('Get Fasilitas Lokasi', async() => {
        const get_id = await Getid_Lokasi()
        const GettokenAPI = await Get_token()
        const response = await QoinAPI.getFasilitaslokasi(get_id, GettokenAPI)

        //result
         assert.equal(response.status, 200)

        // //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETFASILITASLOKASI_SCHEMA)
        console.log(response.headers)
        console.log(response.data)
    });

    // Endpoint lokal mas sase
    /*it('Get Template Excel', async() => {
        const response = await QoinAPI.getTemplateexcel()

        //result
        assert.equal(response.status, 200)
        
        //schema
        expect(response.data).to.be.jsonSchema(schema)
    });*/

    it('Get Lokasi By Id', async() => {
        const response = await QoinAPI.getLokasibyid()

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETLOKASIBYID_SCHEMA)
    });

    it('Hapus Image Lokasi', async() => {
        const response = await QoinAPI.deleteImagelokasi()

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    });

    it('Hapus lokasi', async() => {
        const id = await Getid_Lokasi()
        const response = await QoinAPI.deleteLokasi(id)

        //result
        assert.equal(response.status, 200)

        //schema BELUM NYOBA JUGA
        //expect(response.data).to.be.jsonSchema(schema)
    });
});

describe('Mobile lokasi', async() => {

    it('Get haversin circle', async () => {
        const response = await QoinAPI.get_haversin_circle();
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_SCHEMA)
    });
    
    it('Get haversin circle by kategori', async () => {
        const response = await QoinAPI.get_haversin_circle_bykategori();
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_BYKATEGORI_SCHEMA)
    });
    
    it('Get haversin lokasi by id', async () => {
        const response = await QoinAPI.get_lokasi_byid();
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_KATEGORIBYID_SCHEMA)
    });
});