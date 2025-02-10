import {graphql} from "@/gql"

export const createTweetMuatation=graphql(`
    #graphql

    mutation CreateTweet($payload: CreateTweetData!) {
  createTweet(payload: $payload) {
  id
    
  }
}
    `)