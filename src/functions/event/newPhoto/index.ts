import type { Context } from '@google-cloud/functions-framework'
import { gql, request } from 'graphql-request';

const NewPhoto = gql`
  mutation NewPhoto($filename: String!) {
    newPhoto(filename: $filename)
  }
`


export const newPhoto = (file: {name: string}, ctx: Context): Promise<any> => {
  const endpoint = process.env.GRAPHQL_ENDPOINT ?? 'https://facefinder.dev.pga.com/graphql'

  return request(endpoint, NewPhoto, {
    filename: file.name,
  })
};
