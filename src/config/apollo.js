import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
    uri: "https://thawing-peak-39577.herokuapp.com/",
});

const client = new ApolloClient({
    connectToDevTools: false,
    cache: new InMemoryCache(),
    link,
});

export default client; 