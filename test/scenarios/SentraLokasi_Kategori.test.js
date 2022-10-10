import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema
import QoinAPI from '../pages/SentraLokasi_Kategori.api'; //import endpoint API
import * as data from '$root/data/SentraLokasi_Kategori.data'; //import data
import * as schema from '$root/schema/SentraLokasi_Kategori.schema'; //import schema
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Getid from '$root/helper/helper-sentraLokasi'; //import id
>>>>>>> 675ff4b4d91557b61d21d142e1563caa6bd392ff
=======
import Getid from '$root/helper/helper-sentraLokasi'; //import id
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a

chai.use(jsonSchema)

// Website

describe('Web kategori lokasi', () => {
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
<<<<<<< HEAD
<<<<<<< HEAD
        const response = await QoinAPI.updatekategoriLokasi(data.VALID_UPDATEKATEGORI)
=======
        const id = await Getid()
        const response = await QoinAPI.updatekategoriLokasi(id, data.VALID_UPDATEKATEGORI)
>>>>>>> 675ff4b4d91557b61d21d142e1563caa6bd392ff
=======
        const id = await Getid()
        const response = await QoinAPI.updatekategoriLokasi(id, data.VALID_UPDATEKATEGORI)
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a

        //result
        assert.equal(response.status, 200)

        //schema
<<<<<<< HEAD
<<<<<<< HEAD
        //expect(response.data).to.be.jsonSchema(schema.)
    });

    it('Read kategori lokasi', async() => {
        const response = await QoinAPI.readkategoriLokasi()

        // result
        assert.equal(response.status, 200)

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_READKATEGORILOKASI)
    });

    it('Delete kategori lokasi', async() => {
        const response = await QoinAPI.deletekategoriLokasi()
=======
=======
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a
        // expect(response.data).to.be.jsonSchema(schema.)

        // console.log(response.data.data)
    });

    // it('Read kategori lokasi', async() => {
    //     const id = await Getid()
    //     const response = await QoinAPI.readkategoriLokasi(id)

    //     // result
    //     assert.equal(response.status, 200)

    //     //schema
    //     expect(response.data).to.be.jsonSchema(schema.VALIDATE_READKATEGORILOKASI)
    // });

    it('Delete kategori lokasi', async() => {
        const id = await Getid()
        const response = await QoinAPI.deletekategoriLokasi(id)
<<<<<<< HEAD
>>>>>>> 675ff4b4d91557b61d21d142e1563caa6bd392ff
=======
>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a

        //result
        assert.equal(response.status, 200)
    });
});

// Mobile

describe('Mobile kategori lokasi', (done) => {

    it('Get kategori lokasi', async ()=> {
        const response = await QoinAPI.get_lokasi();
    
        assert.equal(response.status, 200)
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // console.log(response.data.data)

>>>>>>> 675ff4b4d91557b61d21d142e1563caa6bd392ff
=======
        // console.log(response.data.data)

>>>>>>> 81c7e05e77500a5fbe7ed9b1390ae4245090184a
        //schema
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOKASI_SCHEMA)
    });
});