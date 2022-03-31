import { gql } from '@apollo/client';
import { datastoreBuilder, defaultDatastoreSelector } from '../lib/datastore.helpers';

export const homePageQuery = gql`
  query {
    homePage {
      title
    }
  }
`;

export const homeLayout = {
  datastores: datastoreBuilder(homePageQuery),
  widgets: [
    {
      id: 'home-wrapper',
      component: 'WrapperWidget',
      attributes: {
        background: 'light-grey'
      },
      children: [
        {
          id: 'warning-alert',
          component: 'AlertWidget',
          attributes: {
            description: 'Ik ben een AlertWidget in een WrapperWidget gerenderd met de Layout Renderer.',
            showCloseButton: true
          },
          ...defaultDatastoreSelector({ title: 'homePage.title' })
        }
      ]
    }
  ]
};
