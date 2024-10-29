import axios from 'axios';

// Function to search dogs from the API based on zip code
const searchDogs = (zipCode) => {
  return axios.get(
    `https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=${zipCode}&geo_range=150&species=dog&age=young&start_number=1&end_number=8`
  );
};

export default searchDogs;
