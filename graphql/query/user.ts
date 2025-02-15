import { graphql } from "../../gql";

export const verifyUserGoogleToken=graphql(`#graphql
 query VerifyUserGoogleToken($token:String!){
 verifyGoogleToken(token:$token)
 }
`)
export const getCurrentUserQuery=graphql(`query GetCurrentUser {
  getCurrentUser {
    id
    profileImageUrl
    email
    lastName
    firstName
    recommendedUsers {
      id
      firstName
      lastName
      profileImageUrl
      email
    }
    followers{
    id
    firstName
    lastName
    profileImageUrl
    }

    following{
    id
    firstName
    lastName
    profileImageUrl
    }

    tweets{
    id
    content
    imageUrl
    author{
    firstName
    lastName
    profileImageUrl

    }
    }
  }
}`)

export const getUserByIdQuery=graphql(`
    
    query GetUserById($getUserByIdId: ID!) {
  getUserById(id: $getUserByIdId) {
    id
    firstName
    lastName
    email
    profileImageUrl
     followers{
    firstName
    lastName
    profileImageUrl
    }

    following{
    firstName
    lastName
    profileImageUrl
    }
    tweets {
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
}

   
    `)