import chai, {assert, expect} from "chai";
import jsonSchema from "chai-json-schema";
import qoinAPI from "$root/pages/SentraLokasi_Mobile.api";
import * as schema from "$root/schema/SentraLokasi_Mobile.schema";

chai.use(jsonSchema)

describe('Lokasi terdeteksi', (done) => {
    it('Lokasi ditemukan', async ()=> {
        const response = await qoinAPI.get_lokasi();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOKASI_SCHEMA);
    })
})