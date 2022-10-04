import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/csr-penerbit.api'; //import endpoint API
import * as data from '$root/data/csr-penerbit.data'; //import data params
// import * as schema from '../schema/csr-penerbit.schema'; //import schema
// import Getid from '$root/helper/get-id-kk'; //import id
// import Getid_anggota from '$root/helper/get-idanggota-kk'; //import id

chai.use(jsonSchema)

describe('Mobile', () => {
    it('Login web', async () => {
        const response = await QoinAPI.login(data.VALID_LOGIN) //hit API
        
            //result
            assert.equal(response.status, 200);

            //schema
            // expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});
describe('Web', () => {
    it('Index by id', async () => {
        const id = await Getid();//Get ID
        const response = await QoinAPI.index_by_id(id) //hit API
        
            //result
            assert.equal(response.status, 200);
            // assert.equal(response.data.list[0].id, id.id);

            // console.log(response.data.data.list);

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID_SCHEMA)
    });

    it('update data KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatekk(id, data.VALID_UPDATEKK) //hit API

        assert.equal(response.status, 200);
        // assert.equal(response.data.data.nama_pemohon.toLowerCase(), data.VALID_UPDATEKK.data.nama_pemohon.toLowerCase());
        // assert.equal(response.data.data.kecamatan_domisili, data.VALID_UPDATEKK.data.kecamatan_domisili);
        // assert.equal(response.data.data.kota_domisili_id, data.VALID_UPDATEKK.data.kota_domisili_id);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KK_SCHEMA) //Call JSON Schema
    });

    it('Update Status Verifikasi KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatestatusverif(id, data.VALID_STATUSVERIFKK)
        
        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSVERIF_SCHEMA) //Call JSON Schema
    });

    it('Update Status KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatestatus(id, data.VALID_STATUSKK)

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS_SCHEMA) //Call JSON Schema
    });

    it('Update jadwal KK', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KK) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_JADWAL_SCHEMA) //Call JSON Schema
    });

    it('Update anggota KK', async () => {
        const id = await Getid();
        const id_anggota = await Getid_anggota();
        const response = await QoinAPI.updateanggota(id, id_anggota, data.VALID_UPDATE_ANGGOTA) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_ANGGOTA_SCHEMA) //Call JSON Schema
    });

    it('Update Status konfirmasi KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatekonfirmasi(id, data.VALID_STATUSKONFIRKK)

        assert.equal(response.status, 200);
        
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSKONFIR_SCHEMA) //Call JSON Schema
    });
});