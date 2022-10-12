import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Lokasi.data'; //import data
import * as schema from '$root/schema/SentaLokasi_Lokasi.schema'; //import schema
import Getid_Lokasi from '$root/helper/helper-sentraLokasi'; //import id
import Get_token from '$root/helper/csr-token' //import token

chai.use(jsonSchema)
// Token and id
const token = await Get_token();
const id = await Getid_Lokasi();

describe('Web lokasi', () => {


    // Engineer mas sase

    it('Add lokasi', async() => {
        const response = await QoinAPI.addLokasi(data.VALID_ADDLOKASI, token)

        //result
        assert.equal(response.status, 200)
        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_LOKASI_SCHEMA)
    });

    it('Add multi lokasi', async() => {
        const response = await QoinAPI.addMultilokasi(data.VALID_ADDMULTILOKASI, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADDSENTRAMULTILOKASI_WEBADMIN_SCHEMA)
    });

    it('Get dan Cek Data Multi Lokasi', async() => {
        const response = await QoinAPI.getLokasi(token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETSENTRALOKASI_WEBADMIN_SCHEMA)
    });

    it('Edit lokasi', async() => {
        const response = await QoinAPI.updateLokasi(id, data.VALID_PUTLOKASI, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_EDIT_LOKASI_SCHEMA)
    });

    it('Hapus lokasi', async() => {
        const response = await QoinAPI.deleteLokasi(3, token)
        //result
        assert.equal(response.status, 200)

        //schema BELUM NYOBA JUGA
        //expect(response.data).to.be.jsonSchema(schema)
    });

    //BELUM BISA
    // it('Add lokasi image', async() => {
    //     const response = await QoinAPI.addImagelokasi(data.VALID_ADDLOCATIONIMAGE, token)

    //     //result
    //     assert.equal(response.status, 200)

    //     //schema BELUM NYOBA JUGA
    //     //expect(response.data).to.be.jsonSchema(schema)
    // });

    it('Get dan Cek Image Lokasi', async() => {
        const response = await QoinAPI.getImagelokasi(id, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    });

    it('Get Fasilitas Lokasi', async() => {
        const response = await QoinAPI.getFasilitaslokasi(id, token)

        //result
        assert.equal(response.status, 200)
        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETFASILITASLOKASI_SCHEMA)
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
        
        const response = await QoinAPI.getLokasibyid(id, token)

        //result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETLOKASIBYID_SCHEMA)
    });

    //BELUM BISA
    // it('Hapus Image Lokasi', async() => {
    //     const response = await QoinAPI.deleteImagelokasi(id, token)

    //     //result
    //     assert.equal(response.status, 200)

    //     //schema belum nyoba
    //     //expect(response.data).to.be.jsonSchema(schema.VALIDATE_GETIMAGELOKASI_SCHEMA)
    // });


});

describe('Mobile lokasi', async() => {

    it('Get haversin circle', async () => {
        const response = await QoinAPI.get_haversin_circle(token);
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_SCHEMA)
    });
    
    it('Get haversin circle by kategori', async () => {
        const response = await QoinAPI.get_haversin_circle_bykategori(token);
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_BYKATEGORI_SCHEMA)
    });
    
    it('Get haversin lokasi by id', async () => {
        const response = await QoinAPI.get_lokasi_byid(token);
    
        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_KATEGORIBYID_SCHEMA)
    });
});