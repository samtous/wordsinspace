import React, {useState, useEffect} from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
    uri: process.env.NODE_ENV === `development`
        ? `http://localhost:8888/test/graphql`
        : `https://importiv.wordsinspace.net/graphql`
});

const client = new ApolloClient({
    fetch,
    link: httpLink,
    cache: new InMemoryCache(),
});

function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  
  console.log('has mounted')
  
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export const wrapPageElement = ({ element }) => (
	<ClientOnly>
	  <ApolloProvider client={client}>{element}</ApolloProvider>
  </ClientOnly>
);