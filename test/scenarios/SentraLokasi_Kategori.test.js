import chai,{ assert,expect } from 'chai';
import chaiExclude from 'chai-exclude';
import jsonSchema from 'chai-json-schema'; 
import QoinAPI from '$root/pages/SentraKependudukan_Akta.api';
import * as data from '$root/data/SentraKependudukan_Akta.data';
import * as schema from '../schema/SentraKependudukan_Akta.schema';
import Getid from '$root/helper/get-id-akta';

chai.use(jsonSchema)
chai.use(chaiExclude)

describe('Mobile', () => {
    it('')
});