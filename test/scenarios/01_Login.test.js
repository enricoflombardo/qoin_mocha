import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';
import getUserToken from '$root/helper/get-login-token.api';
import * as schema from '$root/schema/login.schema';

chai.use(jsonSchema)

describe('1. As a guest, I want to login', (done) => {
    it('Should succesfully login using valid account', async () => {
        const response = await ReqresAPI.login(data.VALID_LOGIN)
        
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOGIN_SCHEMA)

        // console.log(response.data)
    });
});

describe('2. As a logged user, I should get dashboard page', () => {
    it('Should succesfully open menu and dashboard', async () => {
        const userToken = await getUserToken();

        const response = await ReqresAPI.profile(userToken)
        
        assert.equal(response.status, 200);
        // expect(response.data).to.be.jsonSchema(schema.VALIDATE_LOGIN_SCHEMA)
        
    });
});