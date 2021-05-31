const GET_REPOS = `query{
    viewer {
        repositories(first: 20) {
        totalCount
        pageInfo {
            endCursor
            hasNextPage
        }
        nodes{
            id
            name
            owner {
                login
            }
            pullRequests(first:100,states:OPEN){
                totalCount
            }
            }
        }
    }
}`;