import { graphql } from "@/gql";

export const getAllTweetsQuery=graphql(`
    #graphql
    query GetAllTweets {
    getAllTweets {
        id
        content
        imageUrl
        author {
        id
            firstName
            lastName
            profileImageUrl
      
    }
  }
}
    `)


export const getSignedUrlForTweetQuery= graphql(`

  query getSignedUrl($imageType: String!, $imageName: String) {
  getSignedUrlForTweet(imageType: $imageType, imageName: $imageName)
}
  `)