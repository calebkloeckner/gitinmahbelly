function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const gifkey = "JFlbvY7o0WgDcLH8D9vc7jlFL5hMW2Dl";
const imdataKey = "c6TNwjpz";
const imdataSKey = "J8adbvz3Bs5KLJ2nTeFRXSAwKNUanpar";
var imdataProduct = "";
var runI = 0;

// const edamAppID = "c1724022";
// const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
//local test key
const edamAppID = "926110ce";
const edamAppKey = "c284b239fa0287a8009b4ce59afed42c";

var edamIng = [];  //Spaces need to be translated to %20. required 
var edamIngRandom = ['beef', 'pork', 'chicken', 'ramen', 'apple%20cherry', 'milk%20corn', 'curry']
edamIng.push(edamIngRandom[getRandomInt(edamIngRandom.length)]);
var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;

var testResponse = {};
let recipes = [];
let clicky;

let database = firebase.database();

$(document).ready(function(){
    
    $('.content').mouseenter(function() {
        $(".content-overlay").css({"opacity": "1"});
            
        $(".content-details").css({"top": "50%", "left": "50%", "opacity": "1"});
    });
    $('.content').mouseleave(function() {
        $(".content-overlay").css({"opacity": "0"});
            
        $(".content-details").css({"top": "0", "left": "0", "opacity": "0"});
    });

    
});

