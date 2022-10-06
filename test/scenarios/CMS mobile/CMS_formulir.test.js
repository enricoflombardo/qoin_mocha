/*import chai, {assert, expect} from "chai";
import jsonSchema from "chai-json-schema";
import qoinAPI from "$root/pages/CMS_Formulir_mobile.api";
import * as data from "$root/data/CMS_AddFormulir_mobile.data";
import * as schema from "$root/schema/CMS_Formulir_mobile.schema";

chai.use(jsonSchema)

describe('CMS Formulir', (done) => {
    it('CMS Formulir ditemukan', async ()=> {
        const response = await qoinAPI.get_formulir();

        assert.equal(response.status, 200)
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_FORMULIR_SCHEMA)
        console.log(response.data)
    })
})

//Tidak ada di dalam DOCUMENT API - QOIN google spreadsheet
describe('CMS list Formulir', (done) => {
    it('CMS list Formulir ditemukan', async () => {
        const response = await qoinAPI.get_list_formulir();

        assert.equal(response.status, 200)
        //expect(response.data).to.be.jsonSchema(schema.VALIDATE_LIST_FORMULIR_SCHEMA)  //Schema error
    })
})

describe('CMS list Document', (done) => {
    it('CMS list Document ditemukan', async () => {
        const response = await qoinAPI.get_list_document();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_LIST_DOCUMENT)
    })
})

describe('CMS detail Document by ID', (done) => {
    it.only('CMS detail Document by ID ditemukan', async () => {
        const response = await qoinAPI.get_detaildocument_byid();

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_DETAILDOCUMENT_BYID)
    })
})

describe('CMS Add Formulir', (done) => {
    it.only('CMS Add Formulir ditemukan', async () => {
        const response = await qoinAPI.post_add_fromulir(data.VALID_ADDFORMULIR);

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_ADDFORMULIR_SCHEMA)
    })
})*/