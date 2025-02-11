import { graphqlclient } from "@/clients/api";
import { getCurrentUserQuery, getUserByIdQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";
export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["curent-user"],
    queryFn: () => graphqlclient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};
  

export const useGetUserById = (userId: string) => {
  const query = useQuery({
    queryKey: ['getUserById', userId],
    queryFn: () =>
      graphqlclient.request(getUserByIdQuery, { getUserByIdId: userId }), // Pass variables here
  });

  return { ...query, user: query.data?.getUserById };
};
  