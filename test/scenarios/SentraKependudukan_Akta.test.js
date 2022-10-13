import chai,{ assert,expect } from 'chai';
import chaiExclude from 'chai-exclude';
import jsonSchema from 'chai-json-schema'; 
import QoinAPI from '$root/pages/SentraKependudukan_Akta.api';
import * as data from '$root/data/SentraKependudukan_Akta.data';
import * as schema from '../schema/SentraKependudukan_Akta.schema';
import Getid from '$root/helper/get-id-akta';
import Get_token from '$root/helper/get-token'

chai.use(jsonSchema);
chai.use(chaiExclude);

const id = await Getid();
const token = await Get_token();


describe('Mobile', () => {
    it('Berhasil membuat akta melalui mobile', async () => {
        const response = await QoinAPI.add_akta(token, data.VALID_ADD_AKTA) //hit API
        
        //result
        assert.equal(response.status, 200);

        let resultObject = {};
        Object.keys(response.data.data).map((key) => { // iterate over the keys
        resultObject = {
            ...resultObject,
            ['data']: {...response.data.data['rincian_pemohon'], ...response.data.data['rincian_pelapor'], ...response.data.data['rincian_kk'], ...response.data.data['rincian_biodata_anak'], ...response.data.data['rincian_ibu'], ...response.data.data['rincian_ayah'], ...response.data.data['rincian_kedatangan']} // merge two or more objects 
        }
        return;
        });
        
        const data_res = Object.fromEntries(
            Object.entries(resultObject.data).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );

        const data_in = Object.fromEntries(
            Object.entries(data.VALID_ADD_AKTA).map(([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])
          );
          //console.log(resultObject);
        
        //check object Rincian Ayah
        assert.deepEqualExcluding(data_in, data_res, ['id', 'updatebyid', 'updated_at', 'client_id', 'created_by','alamat_pelapor',
        'berat',
        'is_dengan_ortu',
        'berat_bayi',
        'dengan_orang_tua',
        'jam_kedatangan',
        'jenis_kelamin_anak',
        'jenis_kelamin_pelapor',
        'jenis_permohonan',
        'jenis_kelamin',
        'kecamatan_ayah_id',
        'kecamatan_ibu_id',
        'kecamatan_id',
        'kecamatan_pelapor_id',
        'kelahiran_ke_spell_en',
        'kelahiran_ke_spell_id',
        'kelurahan_ayah_id',
        'kelurahan_ibu_id',
        'kelurahan_id',
        'kelurahan_pelapor_id',
        'kota_ayah_id',
        'kota_ibu_id',
        'kota_id',
        'kota_pelapor_id',
        'lokasi_id',
        'm_user_id',
        'nama_anak',
        'nama_lengkap',
        'nik_ayah',
        'nik_ibu',
        'no_nik_ayah',
        'no_nik_ibu',
        'panjang',
        'pekerjaan_ayah',
        'pekerjaan_ayah_lainnya',
        'no_registrasi',
        'panjang_bayi',
        'pekerjaan_ayah',
        'provinsi_ayah_id',
        'provinsi_ibu_id',
        'provinsi_id',
        'provinsi_pelapor_id',
        'pukul_kelahiran',
        'tanggal_lahir',
        'tanggal_lahir_ayah',
        'tanggal_lahir_ibu',
        'tanggal_pernikahan_ibu',
        'pukul_kelahiran',
        'status',
        'tahun_spell_en',
        'tahun_spell_id',
        'tanggal_kedatangan',
        'tanggal_lahir',
        'tanggal_lahir_spell_en',
        'tanggal_lahir_spell_id',
        'tanggal_permohonan',
        'tanggal_pernikahan_ibu',
        'umur_pelapor',
        'tgl_lahir_ayah',
        'tgl_lahir_ibu',
        'umur'])

        assert.equal(data_in.berat, data_res.berat_bayi);
        assert.equal(data_in.dengan_orang_tua, data_res.is_dengan_ortu);

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_ADD_AKTA_SCHEMA)
        //console.log(response)
    });
});

describe('Web', () => {
    it('Get Index by ID', async () => {
        const response = await QoinAPI.index_by_id(id, token) //hit API
        
        //response status
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.list[0].nama_pelapor.toLowerCase(), data.VALID_ADD_AKTA.nama_pelapor.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_INDEX_BY_ID_SCHEMA)

    });
    
    it('Update Akta', async () => {
        const response = await QoinAPI.update_akta(id, data.VALID_UPDATE_AKTA, token) //hit API
        //result
        assert.equal(response.status, 200);
        

        //schema
        //expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_AKTA_SCHEMA)

    });
    
    it('Update Status Verifikasi', async () => {
        const response = await QoinAPI.update_status_verif(id, data.VALID_UPDATE_STATUS_VERIFIKASI, token) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.notes.toLowerCase(), data.VALID_UPDATE_STATUS_VERIFIKASI.notes.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_VERIFIKASI_SCHEMA)

    });
    
    it('Update Status', async () => {
        const response = await QoinAPI.update_status(id, data.VALID_UPDATE_STATUS, token) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.status.toLowerCase(), data.VALID_UPDATE_STATUS.status.toLowerCase());

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_SCHEMA)

    });
    
    it('Update Jadwal', async () => {
        const response = await QoinAPI.update_jadwal(id, data.VALID_UPDATE_JADWAL, token) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.equal(response.data.data.tanggal_kedatangan, data.VALID_UPDATE_JADWAL.tanggal_kedatangan);

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_JADWAL_SCHEMA)

    });
    
    it('Update Status Konfirmasi', async () => {
        const response = await QoinAPI.update_status_konfirmasi(id, data.VALID_UPDATE_STATUS_KONFIRMASI, token) //hit API
        
        //result
        assert.equal(response.status, 200);

        //response data
        assert.deepEqualExcluding(response.data.data, data.VALID_UPDATE_STATUS_KONFIRMASI, ['id', 'updatebyid', 'updated_at'])

        //schema
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_STATUS_KONFIRMASI_SCHEMA)

    });
});