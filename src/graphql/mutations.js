/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAssettable = /* GraphQL */ `
  mutation CreateAssettable(
    $input: CreateAssettableInput!
    $condition: ModelAssettableConditionInput
  ) {
    createAssettable(input: $input, condition: $condition) {
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
export const updateAssettable = /* GraphQL */ `
  mutation UpdateAssettable(
    $input: UpdateAssettableInput!
    $condition: ModelAssettableConditionInput
  ) {
    updateAssettable(input: $input, condition: $condition) {
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
export const deleteAssettable = /* GraphQL */ `
  mutation DeleteAssettable(
    $input: DeleteAssettableInput!
    $condition: ModelAssettableConditionInput
  ) {
    deleteAssettable(input: $input, condition: $condition) {
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
