import { request, gql } from 'graphql-request';

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw5c9anj02jv07utgn2o8wuj/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        images {
          url
        }
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching slider data:", error);
    throw error;
  }
};

export default {
  getSlider
}
