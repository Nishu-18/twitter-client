import { GraphQLClient } from "graphql-request";

export const graphqlclient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string, {
  headers: {
    Authorization:
      typeof window !== "undefined"
        ? `Bearer ${window.localStorage.getItem("twitter_token") || ""}`
        : "",
  },
});
