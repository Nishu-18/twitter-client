/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    #graphql\n\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n  id\n    \n  }\n}\n    ": typeof types.CreateTweetDocument,
    "#garphql   \n    mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n    \n    ": typeof types.FollowUserDocument,
    "#garphql   \n       mutation UnFollowUser($to: ID!) {\n  unFollowUser(to: $to)\n}\n        \n        ": typeof types.UnFollowUserDocument,
    "\n    #graphql\n    query GetAllTweets {\n    getAllTweets {\n        id\n        content\n        imageUrl\n        author {\n        id\n            firstName\n            lastName\n            profileImageUrl\n      \n    }\n  }\n}\n    ": typeof types.GetAllTweetsDocument,
    "\n\n  query getSignedUrl($imageType: String!, $imageName: String) {\n  getSignedUrlForTweet(imageType: $imageType, imageName: $imageName)\n}\n  ": typeof types.GetSignedUrlDocument,
    "#graphql\n query VerifyUserGoogleToken($token:String!){\n verifyGoogleToken(token:$token)\n }\n": typeof types.VerifyUserGoogleTokenDocument,
    "query GetCurrentUser {\n  getCurrentUser {\n    id\n    profileImageUrl\n    email\n    lastName\n    firstName\n    recommendedUsers {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n    }\n    followers{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    tweets{\n    id\n    content\n    imageUrl\n    author{\n    firstName\n    lastName\n    profileImageUrl\n\n    }\n    }\n  }\n}": typeof types.GetCurrentUserDocument,
    "\n    \n    query GetUserById($getUserByIdId: ID!) {\n  getUserById(id: $getUserByIdId) {\n    id\n    firstName\n    lastName\n    email\n    profileImageUrl\n     followers{\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    firstName\n    lastName\n    profileImageUrl\n    }\n    tweets {\n    id\n    content\n      imageUrl\n    \n      author {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n}\n\n   \n    ": typeof types.GetUserByIdDocument,
};
const documents: Documents = {
    "\n    #graphql\n\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n  id\n    \n  }\n}\n    ": types.CreateTweetDocument,
    "#garphql   \n    mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n    \n    ": types.FollowUserDocument,
    "#garphql   \n       mutation UnFollowUser($to: ID!) {\n  unFollowUser(to: $to)\n}\n        \n        ": types.UnFollowUserDocument,
    "\n    #graphql\n    query GetAllTweets {\n    getAllTweets {\n        id\n        content\n        imageUrl\n        author {\n        id\n            firstName\n            lastName\n            profileImageUrl\n      \n    }\n  }\n}\n    ": types.GetAllTweetsDocument,
    "\n\n  query getSignedUrl($imageType: String!, $imageName: String) {\n  getSignedUrlForTweet(imageType: $imageType, imageName: $imageName)\n}\n  ": types.GetSignedUrlDocument,
    "#graphql\n query VerifyUserGoogleToken($token:String!){\n verifyGoogleToken(token:$token)\n }\n": types.VerifyUserGoogleTokenDocument,
    "query GetCurrentUser {\n  getCurrentUser {\n    id\n    profileImageUrl\n    email\n    lastName\n    firstName\n    recommendedUsers {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n    }\n    followers{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    tweets{\n    id\n    content\n    imageUrl\n    author{\n    firstName\n    lastName\n    profileImageUrl\n\n    }\n    }\n  }\n}": types.GetCurrentUserDocument,
    "\n    \n    query GetUserById($getUserByIdId: ID!) {\n  getUserById(id: $getUserByIdId) {\n    id\n    firstName\n    lastName\n    email\n    profileImageUrl\n     followers{\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    firstName\n    lastName\n    profileImageUrl\n    }\n    tweets {\n    id\n    content\n      imageUrl\n    \n      author {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n}\n\n   \n    ": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    #graphql\n\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n  id\n    \n  }\n}\n    "): (typeof documents)["\n    #graphql\n\n    mutation CreateTweet($payload: CreateTweetData!) {\n  createTweet(payload: $payload) {\n  id\n    \n  }\n}\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#garphql   \n    mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n    \n    "): (typeof documents)["#garphql   \n    mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n    \n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#garphql   \n       mutation UnFollowUser($to: ID!) {\n  unFollowUser(to: $to)\n}\n        \n        "): (typeof documents)["#garphql   \n       mutation UnFollowUser($to: ID!) {\n  unFollowUser(to: $to)\n}\n        \n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    #graphql\n    query GetAllTweets {\n    getAllTweets {\n        id\n        content\n        imageUrl\n        author {\n        id\n            firstName\n            lastName\n            profileImageUrl\n      \n    }\n  }\n}\n    "): (typeof documents)["\n    #graphql\n    query GetAllTweets {\n    getAllTweets {\n        id\n        content\n        imageUrl\n        author {\n        id\n            firstName\n            lastName\n            profileImageUrl\n      \n    }\n  }\n}\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\n  query getSignedUrl($imageType: String!, $imageName: String) {\n  getSignedUrlForTweet(imageType: $imageType, imageName: $imageName)\n}\n  "): (typeof documents)["\n\n  query getSignedUrl($imageType: String!, $imageName: String) {\n  getSignedUrlForTweet(imageType: $imageType, imageName: $imageName)\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n query VerifyUserGoogleToken($token:String!){\n verifyGoogleToken(token:$token)\n }\n"): (typeof documents)["#graphql\n query VerifyUserGoogleToken($token:String!){\n verifyGoogleToken(token:$token)\n }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCurrentUser {\n  getCurrentUser {\n    id\n    profileImageUrl\n    email\n    lastName\n    firstName\n    recommendedUsers {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n    }\n    followers{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    tweets{\n    id\n    content\n    imageUrl\n    author{\n    firstName\n    lastName\n    profileImageUrl\n\n    }\n    }\n  }\n}"): (typeof documents)["query GetCurrentUser {\n  getCurrentUser {\n    id\n    profileImageUrl\n    email\n    lastName\n    firstName\n    recommendedUsers {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n    }\n    followers{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    id\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    tweets{\n    id\n    content\n    imageUrl\n    author{\n    firstName\n    lastName\n    profileImageUrl\n\n    }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query GetUserById($getUserByIdId: ID!) {\n  getUserById(id: $getUserByIdId) {\n    id\n    firstName\n    lastName\n    email\n    profileImageUrl\n     followers{\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    firstName\n    lastName\n    profileImageUrl\n    }\n    tweets {\n    id\n    content\n      imageUrl\n    \n      author {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n}\n\n   \n    "): (typeof documents)["\n    \n    query GetUserById($getUserByIdId: ID!) {\n  getUserById(id: $getUserByIdId) {\n    id\n    firstName\n    lastName\n    email\n    profileImageUrl\n     followers{\n    firstName\n    lastName\n    profileImageUrl\n    }\n\n    following{\n    firstName\n    lastName\n    profileImageUrl\n    }\n    tweets {\n    id\n    content\n      imageUrl\n    \n      author {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n}\n\n   \n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;