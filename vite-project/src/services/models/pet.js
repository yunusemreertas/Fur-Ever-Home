const url = '"https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0", requestOptions';

fetch("https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=47374&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0", requestOptions)
.then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    console.log(data); // Example: Logging the data to the console
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });

fetch()