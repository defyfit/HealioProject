import { gql } from 'react-apollo'

export const query = gql`  
  query {
    allTrainerProfiles {
      id
      businessName
      credentials
      bodyRegions {
        name
      }
    }
  }
`
gql`
  query {
    TrainerProfile {
      id
      businessName
      credentials
      bodyRegions {
        id
        name
      }
      results {
        id
      }
    }
  } 
`