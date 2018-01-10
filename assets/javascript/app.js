const gifkey = "JFlbvY7o0WgDcLH8D9vc7jlFL5hMW2Dl";
const imdataKey = "c6TNwjpz";
const imdataSKey = "J8adbvz3Bs5KLJ2nTeFRXSAwKNUanpar";
var imdataProduct = "";
var runI = 0;

const edamAppID = "c1724022";
const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";

var edamIng = [];  //Spaces need to be translated to %20. required 
edamIng.push('chicken');
var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var testResponse = {};

let recipes = [];


$(document).ready(function() {
  

    // var edamIng = 'chicken';  //Spaces need to be translated to %20. required 
    // var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
    // $('form').submit(function(e){
    //   e.preventDefault();
    //   var button = $('<button>');
    //   var text1 = $('#search').val();
    //   var edamIng = text1;
    //   button.text(text1);
    //   $('.placeholder').append(button)
    //   $('#search').val(null);
    // })
    // $.ajax({
    //   url: edamURL,
    //   method: 'GET'
    // }).done(function(response) {
    //   testResponse = response;
    //   var ingLoop = response.hits[0].recipe.ingredients;
    //   console.log(response)
    //   console.log(response.hits[0].recipe.image)
    //   console.log(response.hits[0].recipe.label)
    //   for (i = 0; i < ingLoop.length; i++) {
    //   console.log(ingLoop[i].text)}
    //   console.log(response.hits[0].recipe.source)
    //   console.log(response.hits[0].recipe.url)
    //   console.log(response.hits[0].recipe.yield)
    //   console.log(testResponse)
    // });
});




   // var imdataProduct = "product_identifier=014100044208";
    // var imURL = "https://www.iamdata.co/v1/products?"+imdataProduct+"&page=1&per_page=10&full_resp=false&client_id=" + imdataKey + "&client_secret=" + imdataSKey;
    // $.ajax({
    //   url: imURL,
    //   method: 'GET'
    // }).done(function(response) {
    //   console.log(response)
    // });

