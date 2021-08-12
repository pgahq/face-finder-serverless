import type {EventFunction} from '@google-cloud/functions-framework';

import {request,gql} from 'graphql-request'

export const newImageNotify: EventFunction= (req, res) => {
  return request()
};
