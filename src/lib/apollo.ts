import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ng6ts402sv01xycg6w1sa6/master?query=query%20%7B%0A%20%20lessons%20%7B%0A%20%20%20%20id%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%20%20teacher%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20bio%0A%20%20%20%20%20%20avatarURL%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D",
  cache: new InMemoryCache(),
});
