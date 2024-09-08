import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROTOCOL_HOST } from '../../constent/url';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: PROTOCOL_HOST}),
  tagTypes: [''],
  endpoints: () => ({}),
});