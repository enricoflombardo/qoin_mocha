import chai, {assert, expect} from "chai";
import jsonSchema from "chai-json-schema";
import qoinAPI from "$root/pages/SentraLokasi_Haversin_Circle_Mobile.api";
import * as schema from "$root/schema/SentraLokasi_Haversin_Circle_Mobile.chema";

chai.use(jsonSchema)

describe('Havers in Circle', (done) => {
    it('Havers in Circle ditemukan', async () => {
        const response = await qoinAPI.get_haversin_circle();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_SCHEMA)
    })
})

describe('Havers in Circle by Kategori', (done) => {
    it('Havers in Circle by Kategori ditemukan', async () => {
        const response = await qoinAPI.get_haversin_circle_bykategori();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_HAVERSINCIRCLE_BYKATEGORI_SCHEMA)
    })
})

describe('Lokasi by ID', (done) => {
    it('Lokasi by ID ditemukan', async () => {
        const response = await qoinAPI.get_lokasi_byid();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_KATEGORIBYID_SCHEMA)
    })
})