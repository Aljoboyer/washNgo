import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';
import {REHYDRATE} from 'redux-persist';
import { PROTOCOL_HOST } from '../../constent/url';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: PROTOCOL_HOST,
  //   prepareHeaders: (headers, {getState}) => {
  //     // console.log('getState from api.js', getState());
  //     const token = getState().auth?.profile?.accessToken;
  //     console.log('token', token);

  //     // If we have a token set in state, let's assume that we should be passing it.

  //     if (token) {
  //       //   console.log('calling header set');
  //       //   headers.set('authorization', `Bearer ${token}`);
  //       console.log(headers.set('authorization', `Bearer ${token}`));
  //     }

  //     return headers;
  //   },
});

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3});

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  reducerPath: 'api',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: baseQueryWithRetry,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    'UserProfile',
    'UserClaims',
    'UserLeave',
    'UserTasks',
    'ApprovalRequests',
    'Content',
    'TrainerCourses',
    'Skills',
    'Rewards',
    'BankStatements',
    'OutletReports',
    'CashFloat',
    'AllOutlets',
    'notifications',
    'InvoicesByVendor',
    'AllCreditInvoicesForCEO',
    'SalesTarget',
    'FoodCostTarget',
    'Home',
  ],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  //   extractRehydrationInfo(action, {reducerPath}) {
  //     if (action.type === REHYDRATE) {
  //       return action.payload[reducerPath];
  //     }
  //   },
  endpoints: () => ({}),
});
