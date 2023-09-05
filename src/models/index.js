// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Media } = initSchema(schema);

export {
  Media
};