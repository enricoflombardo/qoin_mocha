import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API
import * as data from '$root/data/SentraKependudukan_KK.data'; //import data params
import * as schema from '../schema/SentraKependudukan_KK.schema'; //import schema
import Getid from '$root/helper/helper-kk'; //import id
import Getid_anggota from '$root/helper/helper-kk'; //import id
import Get_token from '$root/helper/get-token'
import Token_mobile from '$root/helper/get-token'

chai.use(jsonSchema)

// Token dan id
const token_mobile = await Token_mobile();
const token = await Get_token();
const id = await Getid();
const id_anggota = await Getid_anggota();

describe('Mobile', () => {
    it('Berhasil membuat kk melalui mobile', async () => {
        const response = await QoinAPI.addKk(token_mobile, data.VALID_ADDKK) //hit API
        
            //result
            assert.equal(response.status, 200);
            assert.equal(response.data.data.rincian_pemohon.nama_pemohon.toLowerCase(), data.VALID_ADDKK.data.nama_pemohon.toLowerCase());
            assert.equal(response.data.data.rincian_pemohon.nik_pemohon, data.VALID_ADDKK.data.nik_pemohon);
            assert.equal(response.data.data.rincian_pemohon.jumlah_anggota, data.VALID_ADDKK.data.jumlah_anggota);
            assert.equal(response.data.data.rincian_alamat.alamat.toLowerCase(), data.VALID_ADDKK.data.alamat.toLowerCase());
            assert.equal(response.data.data.rincian_alamat.kota_pemohon.toLowerCase(), data.VALID_ADDKK.data.kota_pemohon.toLowerCase());

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});
describe('Web', () => {
    it('Index by id', async () => {
        const response = await QoinAPI.index_by_id(id, token) //hit API
        
            //result
            assert.equal(response.status, 200);
            // assert.equal(response.data.list[0].id, id.id);

            // console.log(response.data.data.list);

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID_SCHEMA)
    });

    it('update data KK', async () => {
        const response = await QoinAPI.updatekk(id, data.VALID_UPDATEKK, token) //hit API

        assert.equal(response.status, 200);
        // assert.equal(response.data.data.nama_pemohon.toLowerCase(), data.VALID_UPDATEKK.data.nama_pemohon.toLowerCase());
        // assert.equal(response.data.data.kecamatan_domisili, data.VALID_UPDATEKK.data.kecamatan_domisili);
        // assert.equal(response.data.data.kota_domisili_id, data.VALID_UPDATEKK.data.kota_domisili_id);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KK_SCHEMA) //Call JSON Schema
    });

    it('Update Status Verifikasi KK', async () => {
        const response = await QoinAPI.updatestatusverif(id, data.VALID_STATUSVERIFKK, token)
        
        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSVERIF_SCHEMA) //Call JSON Schema
    });

    it('Update Status KK', async () => {
        const response = await QoinAPI.updatestatus(id, data.VALID_STATUSKK, token)

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS_SCHEMA) //Call JSON Schema
    });

    it('Update jadwal KK', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KK, token) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_JADWAL_SCHEMA) //Call JSON Schema
    });

    it('Update anggota KK', async () => {
        const response = await QoinAPI.updateanggota(id, id_anggota, data.VALID_UPDATE_ANGGOTA, token) //hit API

        assert.equal(response.status, 200);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_ANGGOTA_SCHEMA) //Call JSON Schema
    });

    it('Update Status konfirmasi KK', async () => {
        const response = await QoinAPI.updatekonfirmasi(id, data.VALID_STATUSKONFIRKK, token)

        assert.equal(response.status, 200);
        
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSKONFIR_SCHEMA) //Call JSON Schema
    });
});