/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAssettable = /* GraphQL */ `
  query GetAssettable($id: ID!) {
    getAssettable(id: $id) {
      id
      PrimaryKey
      Date
      AssetType
      Facility
      ReportBy
      Storage
      createdAt
      updatedAt
    }
  }
`;
export const listAssettables = /* GraphQL */ `
  query ListAssettables(
    $filter: ModelAssettableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssettables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PrimaryKey
        Date
        AssetType
        Facility
        ReportBy
        Storage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
