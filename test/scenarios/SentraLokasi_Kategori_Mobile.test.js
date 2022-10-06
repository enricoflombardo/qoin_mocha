import chai, {assert, expect} from "chai";
import jsonSchema from "chai-json-schema";
import qoinAPI from "$root/pages/SentraLokasi_Kategori_Mobile.api";
import * as schema from "$root/schema/SentraLokasi_Kategori_Mobile.schema";

chai.use(jsonSchema)

describe('Kategori Lokasi', (done) => {
    it('Kategori Lokasi ditemukan', async ()=> {
        const response = await qoinAPI.get_lokasi();

        assert.equal(response.status, 200)
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOKASI_SCHEMA)
        //console.log(response.data)
    });
});