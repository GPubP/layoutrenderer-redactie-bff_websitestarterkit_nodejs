import { RESTDataSource } from 'apollo-datasource-rest';
import { homePageReducer } from '../reducers/home.reducer';

const { WCMV4_URL, API_KEY, WCMV4_SITE_ID } = process.env;

class RedactieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = WCMV4_URL;
    this.initialize({});
  }

  willSendRequest(request) {
    request.headers.set('apikey', API_KEY);
  }

  async getContent({ slug }) {
    return this.get(
      `content/v1/sites/${WCMV4_SITE_ID}/content`,
      {
        slug,
        lang: 'nl'
      }
      // { cacheOptions: { ttl: 2 } }
    );
  }

  async getHomePage() {
    const data = await this.getContent({
      slug: 'home'
    });
    return { ...homePageReducer(data) };
  }
}

export default RedactieAPI;
