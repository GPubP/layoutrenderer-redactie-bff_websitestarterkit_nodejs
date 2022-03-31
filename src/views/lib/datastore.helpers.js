import { print } from 'graphql';

const DEFAULT_STORE_NAME = 'gql';
const DEFAULT_STORE_REFERENCE = 'gqlData';

export function datastoreBuilder(gqlQuery, variables = {}, policies = {}) {
  return {
    ...(gqlQuery
      ? {
          gqlData: {
            $config: {
              type: 'graphql',
              name: DEFAULT_STORE_REFERENCE,
              baseUrl: '/graphql',
              [DEFAULT_STORE_NAME]: [print(gqlQuery)],
              variables,
              policies
            }
          }
        }
      : {})
  };
}

export function defaultDatastoreSelector(selectors = {}, name = DEFAULT_STORE_NAME, ref = DEFAULT_STORE_REFERENCE) {
  const state = {};
  Object.keys(selectors).forEach(
    (k) => (state[k] = { datastore: name, selector: ['result', ...selectors[k].split('.')] })
  );
  return {
    datastores: {
      [name]: {
        $ref: ref
      }
    },
    state
  };
}
