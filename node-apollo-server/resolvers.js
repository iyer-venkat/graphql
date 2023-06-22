export const resolvers = {
  Query: {
    checkApiStatus: () => {
      return { status: "The Server is currently up & running!" };
    },
  },
};
