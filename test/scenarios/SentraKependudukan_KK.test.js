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

            //Check Data

            let resultObject = {};
            Object.keys(response.data.data).map((key) => { // iterate over the keys
            resultObject = {
                ...resultObject,
                ['data']: {...response.data.data['rincian_alamat'], ...response.data.data['rincian_domisili'], ...response.data.data['rincian_kedatangan'], ...response.data.data['rincian_pemohon']} // merge two or more objects 
            }
            return;
            });
            
            const data_res = Object.fromEntries(
                Object.entries(resultObject.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
              );
    
            const data_in = Object.fromEntries(
                Object.entries(data.VALID_ADDKK.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
              );
            
            //check Data
            assert.deepEqualExcluding(data_in, data_res, ['id', 'updatebyid', 'updated_at', 'client_id', 'created_by', "jenis_permohonan", 
            "jumlah_anggota", 
            "jam_kedatangan", 
            "jumlah_anggota", 
            "kecamatan_domisili_id", 
            "kecamatan_id", 
            "kelurahan_domisili_id", 
            "kelurahan_id", 
            "kota_domisili_id", 
            "kota_id", 
            "lokasi_id", 
            "m_user_id", 
            "no_registrasi", 
            "provinsi_domisili_id", 
            "provinsi_id", 
            "rt", 
            "rw", 
            "rt", 
            "rw", 
            "status", 
            "tanggal_kedatangan", 
            "tanggal_permohonan"])

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)
    });
});
describe('Web', () => {
    it('Index by id', async () => {
        const response = await QoinAPI.index_by_id(id, token) //hit API
        
            //result
            assert.equal(response.status, 200);

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID_SCHEMA)
    });

    it('update data KK', async () => {
        const response = await QoinAPI.updatekk(id, data.VALID_UPDATEKK, token) //hit API

        assert.equal(response.status, 200);

        // console.log(response.data)

        //Check Data
        
        const data_res = Object.fromEntries(
            Object.entries(response.data.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        const data_in = Object.fromEntries(
            Object.entries(data.VALID_UPDATEKK).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );
        
        //check Data
        assert.deepEqualExcluding(data_in, data_res, ['id', 'updatebyid', 'updated_at', 'client_id', 'created_by', "jenis_permohonan", 
        "jumlah_anggota", 
        "jam_kedatangan", 
        "jumlah_anggota", 
        "kecamatan_domisili_id", 
        "kecamatan_id", 
        "kelurahan_domisili_id", 
        "kelurahan_id", 
        "kota_domisili_id", 
        "kota_id", 
        "lokasi_id", 
        "m_user_id", 
        "no_registrasi", 
        "provinsi_domisili_id", 
        "provinsi_id", 
        "rt", 
        "rw", 
        "rt", 
        "rw", 
        "status", 
        "tanggal_kedatangan", 
        "tanggal_permohonan"])
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KK_SCHEMA) //Call JSON Schema
    });

    it('Update Status Verifikasi KK', async () => {
        const response = await QoinAPI.updatestatusverif(id, data.VALID_STATUSVERIFKK, token)
        
        assert.equal(response.status, 200);

        assert.equal(response.data.data.notes.toLowerCase(), data.VALID_STATUSVERIFKK.notes.toLocaleLowerCase());
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSVERIF_SCHEMA) //Call JSON Schema
    });

    it('Update Status KK', async () => {
        const response = await QoinAPI.updatestatus(id, data.VALID_STATUSKK, token)

        assert.equal(response.status, 200);

        assert.equal(response.data.data.status.toLowerCase(), data.VALID_STATUSKK.status.toLowerCase());
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS_SCHEMA) //Call JSON Schema
    });

    it('Update jadwal KK', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KK, token) //hit API

        assert.equal(response.status, 200);

        assert.equal(response.data.data.tanggal_kedatangan, data.VALID_UPDATE_JADWAL_KK.tanggal_kedatangan);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_JADWAL_SCHEMA) //Call JSON Schema
    });

    it('Update anggota KK', async () => {
        const response = await QoinAPI.updateanggota(id, id_anggota, data.VALID_UPDATE_ANGGOTA, token) //hit API

        assert.equal(response.status, 200);

        //Check Data
        const data_res = Object.fromEntries(
            Object.entries(response.data.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        const data_in = Object.fromEntries(
            Object.entries(data.VALID_UPDATE_ANGGOTA).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        assert.deepEqualExcluding(data_in, data_res, ['id'])
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_ANGGOTA_SCHEMA) //Call JSON Schema
    });

    it('Update Status konfirmasi KK', async () => {
        const response = await QoinAPI.updatekonfirmasi(id, data.VALID_STATUSKONFIRKK, token)

        assert.equal(response.status, 200);

        //Check Data
        const data_res = Object.fromEntries(
            Object.entries(response.data.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        const data_in = Object.fromEntries(
            Object.entries(data.VALID_STATUSKONFIRKK).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        assert.deepEqualExcluding(data_in, data_res, ['id', 'updatebyid', 'updated_at'])
        
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUSKONFIR_SCHEMA) //Call JSON Schema
    });
});