let gitRepoName = require('git-repo-name');
let repoName = gitRepoName.sync("../../");
module.exports = {
  app: {
    name: repoName,
    apiEndpoint: (process.env.PORT) ? `/${process.env.PORT}` : '/api',
  },
  database: {
    url: `mongodb+srv://mxsilentwar:103117Dp!@teaching.sll1f.mongodb.net/testerson?retryWrites=true&w=majority`,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwt-secret',
    tokenLife: '7d',
  },
}
