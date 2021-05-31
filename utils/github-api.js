let graphql = require('@octokit/graphql');

graphql = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
});

