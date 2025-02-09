import { graphql } from "../../gql";

export const verifyUserGoogleToken=graphql(`#graphql
 query VerifyUserGoogleToken($token:String!){
 verifyGoogleToken(token:$token)
 }
`)
export const getCurrentUserQuery=graphql(`query GetCurrentUser {
  getCurrentUser {
    id,
    profileImageUrl,
    email
    lastName
    firstName
  }
}`)