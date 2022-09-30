# hasura-nested-action-joins

## Project Setup

### <u>Hasura</u>

Ensure you have the Hasura CLI downloaded:
<https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/>

1. `docker-compose up -d`
2. `cd /hasura`
3. `hasura metadata apply`
4. `hasura migrate apply`
5. `hasura metadata clear`
6. `hasura metadata apply`

### <u>Node</u>

- `cd /handlers`
- `npm install`
- `npm start`
