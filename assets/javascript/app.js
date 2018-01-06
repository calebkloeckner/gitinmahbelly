const gifkey = "JFlbvY7o0WgDcLH8D9vc7jlFL5hMW2Dl";
const imdataKey = "c6TNwjpz";
const imdataSKey = "J8adbvz3Bs5KLJ2nTeFRXSAwKNUanpar";
var imdataProduct = "";

const edamAppID = "c1724022";
const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";



$(document).ready(function() {
    var edamIng = 'chicken';  //Spaces need to be translated to %20. required 
    var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
    $.ajax({
      url: edamURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response)
    });

    $.ajax({
        url: edamURL,
        method: 'GET'
      }).done(function(response) {
        console.log(response.hits[0].recipe)
      });

      $.ajax({
        url: edamURL,
        method: 'GET'
      }).done(function(response) {
        console.log(response.hits[0].recipe.image)
        console.log(response.hits[0].recipe.label)
        console.log(response.hits[0].recipe.ingredients)
        console.log(response.hits[0].recipe.label)

      });  
});




   // var imdataProduct = "product_identifier=014100044208";
    // var imURL = "https://www.iamdata.co/v1/products?"+imdataProduct+"&page=1&per_page=10&full_resp=false&client_id=" + imdataKey + "&client_secret=" + imdataSKey;
    // $.ajax({
    //   url: imURL,
    //   method: 'GET'
    // }).done(function(response) {
    //   console.log(response)
    // });

