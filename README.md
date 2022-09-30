# Hasura Nested Action Joins

## Overview

This project showcases how nested action joins can be acheived within Hasura. The project defines an action that returns a nested field. Users can augment the json metadata of their projects to add action response to DB relationships on nested fields. Please look through the metadata.json and the apiCall.json files to view examples of how this is done.

## Project Setup

### <u>Hasura</u>

Ensure you have the Hasura CLI downloaded:
<https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/>

1. `docker-compose up -d`
2. `cd /hasura`
3. `hasura metadata apply`
4. `hasura migrate apply`

### <u>Node</u>

1. `cd /handlers`
2. `npm install`
3. `npm start`
