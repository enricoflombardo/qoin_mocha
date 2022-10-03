import chai,{ assert,expect } from 'chai';
import jsonSchema from 'chai-json-schema';//import json schema 
import QoinAPI from '$root/pages/SentraKependudukan_KK.api'; //import endpoint API
import * as data from '$root/data/SentraKependudukan_KK.data'; //import data params
import * as schema from '../schema/SentraKependudukan_KK.schema'; //import schema
import Getid from '$root/helper/helper_kk'; //import id
import Getid_anggota from '$root/helper/helper_kk'; //import id

chai.use(jsonSchema)

describe('Mobile', () => {
    it('Berhasil membuat kk melalui mobile', async () => {
        const response = await QoinAPI.addKk(data.VALID_ADDKK) //hit API
        
        // if (response.status == 200) {
            //result
            assert.equal(response.status, 200);
            assert.equal(response.data.data.rincian_pemohon.nama_pemohon.toLowerCase(), data.VALID_ADDKK.data.nama_pemohon.toLowerCase());
            assert.equal(response.data.data.rincian_pemohon.nik_pemohon, data.VALID_ADDKK.data.nik_pemohon);
            assert.equal(response.data.data.rincian_pemohon.jumlah_anggota, data.VALID_ADDKK.data.jumlah_anggota);
            assert.equal(response.data.data.rincian_alamat.alamat.toLowerCase(), data.VALID_ADDKK.data.alamat.toLowerCase());
            assert.equal(response.data.data.rincian_alamat.kota_pemohon.toLowerCase(), data.VALID_ADDKK.data.kota_pemohon.toLowerCase());

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADD_KK_SCHEMA)

        // } else{
        //     console.log(response.status)
        //     console.log(response.config)
        // }   
    });
});
describe('Web', () => {
    it.only('Index by id', async () => {
        const id = await Getid();//Get ID
        const response = await QoinAPI.index_by_id(id) //hit API
        
            //result
            assert.equal(response.status, 200);
            assert.equal(response.data.id, id.id);

            console.log(response.data.data.list);

            //schema
            expect(response.data).to.be.jsonSchema(schema.VALIDATE_GET_INDEX_BY_ID)
    });

    it('update data KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatekk(data.VALID_UPDATEKK) //hit API

        assert.equal(response.status, 200);
        assert.equal(response.data.data.nama_pemohon.toLowerCase(), data.VALID_UPDATEKK.data.nama_pemohon.toLowerCase());
        assert.equal(response.data.data.kecamatan_domisili, data.VALID_UPDATEKK.data.kecamatan_domisili);
        assert.equal(response.data.data.kota_domisili_id, data.VALID_UPDATEKK.data.kota_domisili_id);
    
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_KK_SCHEMA) //Call JSON Schema
       
    });

    it('Update Status Verifikasi KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatestatusverif(data.VALID_STATUSVERIFKK)
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateUpdateStatusVerifSchema) //Call JSON Schema
        
    });

    it('Update Status KK', async () => {
        // const id = await Getid();
        const response = await QoinAPI.updatestatus(data.VALID_STATUSKK)
    
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_UPDATE_STATUS) //Call JSON Schema

    });

    it('Update jadwal KK', async () => {
        const response = await QoinAPI.updatejadwal(data.VALID_UPDATE_JADWAL_KK) //hit API
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateKtpJadwalSchema) //Call JSON Schema

    });

    it.only('Update anggota KK', async () => {
        const id = await Getid();
        const id_anggota = await Getid_anggota();
        const response = await QoinAPI.updateanggota(data.VALID_UPDATE_ANGGOTA) //hit API
    
        // expect(response.data).to.be.jsonSchema(schema.ValidateKtpJadwalSchema) //Call JSON Schema

    });

    it('Update Status konfirmasi KK', async () => {
        const id = await Getid();
        const response = await QoinAPI.updatekonfirmasi(data.VALID_STATUSKONFIRKK)

    });
});