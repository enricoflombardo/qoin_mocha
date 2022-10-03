import chai,{ assert,expect } from 'chai';
import chaiExclude from 'chai-exclude';
import jsonSchema from 'chai-json-schema'; 
import QoinAPI from '$root/pages/SentraKependudukan_Akta.api';
import * as data from '$root/data/SentraKependudukan_Akta.data';
import * as schema from '../schema/SentraKependudukan_Akta.schema';
import Getid from '$root/helper/get-id-akta';

chai.use(jsonSchema);
chai.use(chaiExclude);

describe.only('Mobile', () => {
    it('Berhasil membuat akta melalui mobile', async () => {
        const response = await QoinAPI.add_akta(data.VALID_ADD_AKTA) //hit API
        
        //result
        assert.equal(response.status, 200);

        //check object Rincian Ayah
        // assert.deepEqualExcludingEvery(response.data.data.rincian_ayah, data.VALID_ADD_AKTA, ['id', 'updatebyid', 'updated_at'])

        //check object Pemohon
        // assert.equal(response.data.data.rincian_pemohon.nama_pelapor.toLowerCase(), data.VALID_ADD_AKTA.nama_pelapor.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_ADD_AKTA_SCHEMA)

    });
});

describe.only('Web', () => {
    it('Get Index by ID', async () => {
        const id = await Getid()
        const response = await QoinAPI.index_by_id(id) //hit API
        
        //response status
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.list[0].nama_pelapor.toLowerCase(), data.VALID_ADD_AKTA.nama_pelapor.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_INDEX_BY_ID_SCHEMA)

    });
    
    it('Update Akta', async () => {
        const id = await Getid()
        const response = await QoinAPI.update_akta(id, data.VALID_UPDATE_AKTA) //hit API
        
        //result
        assert.equal(response.status, 200);

        //check object Rincian Ayah
        assert.equal(response.data.data.rincian_ayah.nama_ayah.toLowerCase(), data.VALID_UPDATE_AKTA.nama_ayah.toLowerCase());

        //check object Pemohon
        assert.equal(response.data.data.rincian_pemohon.nama_pelapor.toLowerCase(), data.VALID_UPDATE_AKTA.nama_pelapor.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_AKTA_SCHEMA)

    });
    
    it('Update Status Verifikasi', async () => {
        const id = await Getid()
        const response = await QoinAPI.update_status_verif(id, data.VALID_UPDATE_STATUS_VERIFIKASI) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.notes.toLowerCase(), data.VALID_UPDATE_STATUS_VERIFIKASI.notes.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_VERIFIKASI_SCHEMA)

    });
    
    it('Update Status', async () => {
        const id = await Getid()
        const response = await QoinAPI.update_status(id, data.VALID_UPDATE_STATUS) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.status.toLowerCase(), data.VALID_UPDATE_STATUS.status.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_SCHEMA)

    });
    
    it('Update Jadwal', async () => {
        const id = await Getid()
        const response = await QoinAPI.update_jadwal(data.VALID_UPDATE_JADWAL) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.tanggal_kedatangan, data.VALID_UPDATE_JADWAL.tanggal_kedatangan);

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_JADWAL_SCHEMA)

    });
    
    it('Update Status Konfirmasi', async () => {
        const id = await Getid()
        const response = await QoinAPI.update_status_konfirmasi(id, data.VALID_UPDATE_STATUS_KONFIRMASI) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.deepEqualExcluding(response.data.data, data.VALID_UPDATE_STATUS_KONFIRMASI, ['id', 'updatebyid', 'updated_at'])

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_KONFIRMASI_SCHEMA)

    });
});