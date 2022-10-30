/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAssettable = /* GraphQL */ `
  subscription OnCreateAssettable(
    $filter: ModelSubscriptionAssettableFilterInput
    $owner: String
  ) {
    onCreateAssettable(filter: $filter, owner: $owner) {
      id
      PrimaryKey
      Date
      AssetType
      Facility
      ReportBy
      Storage
      owner
      type
    }
  }
`;
export const onUpdateAssettable = /* GraphQL */ `
  subscription OnUpdateAssettable(
    $filter: ModelSubscriptionAssettableFilterInput
    $owner: String
  ) {
    onUpdateAssettable(filter: $filter, owner: $owner) {
      id
      PrimaryKey
      Date
      AssetType
      Facility
      ReportBy
      Storage
      owner
      type
    }
  }
`;
export const onDeleteAssettable = /* GraphQL */ `
  subscription OnDeleteAssettable(
    $filter: ModelSubscriptionAssettableFilterInput
    $owner: String
  ) {
    onDeleteAssettable(filter: $filter, owner: $owner) {
      id
      PrimaryKey
      Date
      AssetType
      Facility
      ReportBy
      Storage
      owner
      type
    }
  }
`;
