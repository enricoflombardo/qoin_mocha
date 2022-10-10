import chai,{ assert,expect } from 'chai';
<<<<<<< HEAD
import chaiExclude from 'chai-exclude';
=======
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '$root/pages/SentraLokasi_Lokasi.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Lokasi.data'; //import data
import * as schema from '$root/schema/SentaLokasi_Lokasi.schema'; //import schema
import Getid_Lokasi from '$root/helper/helper-sentraLokasi'; //import id
<<<<<<< HEAD
import GetID_Lokasi from '$root/helper/get-id-lokasi';

chai.use(jsonSchema)
chai.use(chaiExclude)
=======

chai.use(jsonSchema)
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a

describe('Web lokasi', () => {

    // Engineer mas sase

<<<<<<< HEAD
    it.only('Add lokasi', async() => {
=======
    it('Add lokasi', async() => {
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a
        const response = await QoinAPI.addLokasi(data.VALID_ADDLOKASI)

        //result
        assert.equal(response.status, 200)

        //schema belum nyoba ga brani
<<<<<<< HEAD
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADDLOKASI_SCHEMA)

        let resultObject = {};
        Object.keys(response.data.data).map((key) => {
            resultObject = {
                ...resultObject,
                ['data']:{...response.data.data['latitude'], ...response.data.data['longitude'], ...response.data.data['m_lokasi_kategori_id'], ...response.data.data['bahasa'],
                ...response.data.data['name'], ...response.data.data['description']}
            }
            return
        });

        const data_res = Object.fromEntries(
            Object.entries(resultObject.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
        );

        const data_in = Object.fromEntries(
            Object.entries(data.VALID_ADDLOKASI).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
        );

        assert.deepEqualExcluding(data_res, data_in ['id'])

        expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADDLOKASI_SCHEMA);
=======
        //expect(response.data).to.be.jsonSchema(schema)
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a
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

    it('Get Fasilitas Lokasi', async() => {
        const response = await QoinAPI.getFasilitaslokasi()

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