"use client";
import { BASE_GQL_URL } from "@/utils/network/network";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export function makeClient() {
  const httpLink = new HttpLink({
    uri: BASE_GQL_URL,
    fetchOptions: { cache: "no-store" },
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

