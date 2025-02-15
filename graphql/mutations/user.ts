import { graphql } from "@/gql";

export const followUserMutation=graphql(`#garphql   
    mutation FollowUser($to: ID!) {
  followUser(to: $to)
}
    
    `)


    export const UnfollowUserMutation=graphql(`#garphql   
       mutation UnFollowUser($to: ID!) {
  unFollowUser(to: $to)
}
        
        `)