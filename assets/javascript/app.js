const gifkey = "JFlbvY7o0WgDcLH8D9vc7jlFL5hMW2Dl";
const imdataKey = "c6TNwjpz";
const imdataSKey = "J8adbvz3Bs5KLJ2nTeFRXSAwKNUanpar";
var imdataProduct = "";

const edamAppID = "c1724022";
const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";



$(document).ready(function() {
    var edamIng = 'Margarita';  //Spaces need to be translated to %20. required  
    var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
    $.ajax({
      url: edamURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response)
    });

    
    // var imdataProduct = "product_identifier=014100044208";
    // var imURL = "https://www.iamdata.co/v1/products?"+imdataProduct+"&page=1&per_page=10&full_resp=false&client_id=" + imdataKey + "&client_secret=" + imdataSKey;
    // $.ajax({
    //   url: imURL,
    //   method: 'GET'
    // }).done(function(response) {
    //   console.log(response)
    // });


});


    // curl "https://api.edamam.com/search?q=chicken&app_id=$"+edamAppID+"&app_key=$"+edamAppKey+"&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free";

  