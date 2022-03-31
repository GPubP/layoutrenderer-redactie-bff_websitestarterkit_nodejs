const resolvers = {
  Query: {
    homePage: async (_a, _b, { dataSources }) => {
      return dataSources.redactieAPI.getHomePage();
    }
  }
};

export default resolvers;
