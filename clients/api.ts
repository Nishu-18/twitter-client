import { GraphQLClient } from "graphql-request";

export const graphqlclient = new GraphQLClient("http://localhost:8000/graphql", {
  headers: {
    Authorization:
      typeof window !== "undefined"
        ? `Bearer ${window.localStorage.getItem("twitter_token") || ""}`
        : "",
  },
});
