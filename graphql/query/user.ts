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