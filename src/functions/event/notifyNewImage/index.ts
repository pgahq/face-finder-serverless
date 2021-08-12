import type {EventFunction} from '@google-cloud/functions-framework';

import {request,gql} from 'graphql-request'

export const notifyNewImage: EventFunction= (req, res) => {
  return request()
};
