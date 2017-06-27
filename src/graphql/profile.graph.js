import { gql } from 'react-apollo'

export const addProfile = gql`
  mutation addProfile (
    $name: String!
    $phoneNumber: String!
    $weight: Int!
    $weightType: PROFILE_WEIGHT_TYPE!
    $trainingProgram: String!
  ) {
    createProfile (
      name: $name
      phoneNumber: $phoneNumber
      weight: $weight
      weightType: $weightType
      trainingProgram: $trainingProgram
    ) {
      id
      name
    }
  }
`