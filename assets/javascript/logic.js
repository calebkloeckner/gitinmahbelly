console.log("working");
// $(toggle-class)

$(document).ready(function () {

  // do not remove. this allows ingredient buttons to be created removed, and data stored from responses.
  // without this function, interaction with the search bar causes the whole page to re-load
  // and removes all searched ingredient buttons, as well as breaks the ingredients append.
  $('form').submit(function(e){
    e.preventDefault();
  });

  function topRecipes() {
    console.log(recipes);
    $("#top-recipes").empty();
    for (var i = 0; i < recipes.length; i++) {
<<<<<<< HEAD
      // console.log(recipes[i]);
=======
>>>>>>> d662c59bf0c6adcd498ebe8f608493655b110431
      $("#top-recipes").prepend(`
        <div class='card content foodtag' id='test'>
          <div class='card-image'>
            <img class='content-image' src='${recipes[i].image}'>
            <div class='content-overlay'>
            </div>
          </div>
          <div class='card-content content-details fadeIn'>
            <p class='content-text foodish' data-button='${JSON.stringify(recipes[i])}' data-id='${i}'>${recipes[i].title}</p>
          </div>
        </div>`);
    }
  };
    
  topRecipes();
  //Search Bar Functionality 
  // creates ingredient buttons
  // ---> Ends with call to $('.search-button').click();
  $.ajax({
    url: edamURL,
    method: 'GET'
  }).done(function(response) {        
      edamIng=[];
      $('form').submit(function(e){
        if ($('#search-bar').val() > ""){
          var buttonV = $('<button>');
          var text1 = $('#search-bar').val();
            
          buttonV.text(text1);
          buttonV.attr('class', 'ingredient-button');
          buttonV.attr('type', 'button');
          $('.searched-ingredients').append(buttonV);
          $('#search-bar').val(null);
          text1 = text1.trim();
          text1 = text1.replace(" ", "%20");
          text1 = text1.replace(" ", "%20");
          text1 = text1.replace(" ", "%20");
          text1 = text1.replace(" ", "%20");
          text1 = text1.replace(" ", "%20");
          buttonV.attr('id', `ing-${text1}`);
          buttonV.attr('data-button', text1);
          edamIng.push(text1);
          console.log('initiate search');
          console.log(edamIng);
        }
        else {
          $('.search-button').click();
        }
      });

      // removes buttons created by the search bar
      $(document).on('click', ".ingredient-button", function () {
        let removeAct = $(this).attr("data-button");
        let removeActId = $(this).attr("id");
        var indexInArrayToRemove = edamIng.indexOf($(this).attr("data-button"));
        delete edamIng[indexInArrayToRemove];
        $(this).remove(); 
        edamIng.splice(indexInArrayToRemove, 1);
      });
        
      // runs API call
      $('.search-button').on('click', function () {
        for (let i = 0; i < edamIng.length; i++) {
          edamIng = edamIng.toString().replace(",", "%20");
        };
        var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
        console.log("search executing");
        $.ajax({
          url: edamURL,
          method: 'GET'
        }).done(function (response) {
            if (response.count >=8) {
              for (let i = 0; i < 8; i++) 
                recipes.push({
                  title: response.hits[i].recipe.label,
                  ingredients: response.hits[i].recipe.ingredientLines,
                  image: response.hits[i].recipe.image,
                  link: response.hits[i].recipe.url
                })
            }
            else {
              for (let i = 0; i < response.count; i++) {
                recipes.push({
                  title: response.hits[i].recipe.label,
                  ingredients: response.hits[i].recipe.ingredientLines,
                  image: response.hits[i].recipe.image,
                  link: response.hits[i].recipe.url
                })
              };
            }
            topRecipes();
        });
<<<<<<< HEAD
      });
=======

        // removes buttons created by the search bar
        $(document).on('click', ".ingredient-button", function () {
          let removeAct = $(this).attr("data-button");
          let removeActId = $(this).attr("id");
          var indexInArrayToRemove = edamIng.indexOf($(this).attr("data-button"));
          delete edamIng[indexInArrayToRemove];
          $(this).remove(); 
          edamIng.splice(indexInArrayToRemove, 1);
        });
        
        // runs API call
        $('.search-button').on('click', function () {
          console.log(edamIng);
          for (let i = 0; i < edamIng.length; i++) {
            edamIng = edamIng.toString().replace(",", "%20");
          };
          var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
            console.log("search executing");
            $.ajax({
              url: edamURL,
              method: 'GET'
            }).done(function (response) {
                if (response.count >=8) {
                  for (let i = 0; i < 8; i++) 
                    recipes.push({
                      title: response.hits[i].recipe.label,
                      ingredients: response.hits[i].recipe.ingredientLines,
                      image: response.hits[i].recipe.image,
                      link: response.hits[i].recipe.url
                    })
                  }
                else {
                  for (let i = 0; i < response.count; i++) {
                    recipes.push({
                      title: response.hits[i].recipe.label,
                      ingredients: response.hits[i].recipe.ingredientLines,
                      image: response.hits[i].recipe.image,
                      link: response.hits[i].recipe.url
                    })
                  };
                }
                topRecipes();
            });
        });
>>>>>>> d662c59bf0c6adcd498ebe8f608493655b110431

      testResponse = response;
      var ingLoop = response.hits[0].recipe.ingredients;
  });
      
  $.ajax({
    url: edamURL,
    method: 'GET'
  }).done(function (response) {
      console.log(response);
      for (let i = 0; i < 8; i++) {
        recipes.push({
          title: response.hits[i].recipe.label,
          ingredients: response.hits[i].recipe.ingredientLines,
          image: response.hits[i].recipe.image,
          link: response.hits[i].recipe.url
        });
      }
      topRecipes();
  });

  //     // save button to save to firebase      
  //   $(".save-button").on("click", function(event) {
  //     console.log(clicky);
  //     event.preventDefault();
  //     firebase.database().ref().push(favorites);
  // });
  firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey){
    let savedRecipe = childSnapshot.val();
    console.log('do something');
    console.log(savedRecipe);
    console.log(savedRecipe[0].ingredients);
    for (j = 0; j < savedRecipe.length; j++) {
      $(".my-recipes-title").append(savedRecipe[j].title).append("<img src='#' id='my-recipe-image'>");
      let i;
      for (i = 0; i < savedRecipe[j].ingredients.length; i++) {
        let item = $('<p>').html(savedRecipe[j].ingredients[i]);
        $(".my-recipe-instruction").append(item);
      }
      $(".my-recipes-image").append(savedRecipe[j].image);
      $(".my-recipes-link").append(savedRecipe[j].link);
    };
  });
});
