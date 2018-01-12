console.log("working");
// $(toggle-class)

$(document).ready(function () {

  // do not remove. this allows ingredient buttons to be created removed, and data stored from responses.
  // without this function, interaction with the search bar causes the whole page to re-load
  // and removes all searched ingredient buttons, as well as breaks the ingredients append.
    $('form').submit(function(e){
        e.preventDefault();
    });

  let recipes = [];
  function topRecipes() {
    console.log(recipes);
    $("#top-recipes").empty();
    for (var i = 0; i < recipes.length; i++) {
      console.log(recipes[i]);
      $("#top-recipes").prepend(`
        <div class='card content foodtag' id='test'>
          <div class='card-image'>
            <img class='content-image' src='${recipes[i].image}'>
            <div class='content-overlay'>
            </div>
          </div>
          <div class='card-content content-details fadeIn'>
            <p class='content-text foodish' alt='${JSON.stringify(recipes[i])}' data-id='${i}'>${recipes[i].title}</p>
          </div>
        </div>`);

      console.log(recipes[i].image)
    }};
    
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
        });

      testResponse = response;
      var ingLoop = response.hits[0].recipe.ingredients;
    });

    // modal display
    $('.modal').modal();
      // on click function to open the modal
      $(document).on('click', ".foodish", function () {
        console.log(this)
        let clicky = JSON.parse($(this).attr("alt"));
        let clickedId = $(this).attr("data-id");
        console.log(clicky);
        $('#modal1').modal('open');
          // displays the object insie the modal
          let recipeTitle = recipes[clickedId].title;
          let recipeBody = recipes[clickedId].ingredients;
          let recipeImage = recipes[clickedId].image;
          let recipeUrl = recipes[clickedId].link;
          console.log(recipeTitle);
          console.log(clicky.ingredients);
          // for loop to add each ingredient to its own line with a <p> tag
          let i;
          for (i = 0; i < clicky.ingredients.length; i++) {
            let item = $('<p>').html(clicky.ingredients[i]);
            $("#recipe-body").append(item);
          }
          $("#recipe-name").html(recipeTitle).append("<img src='#' id='recipe-image'>");
          $("#recipe-image").attr("src", recipeImage);
          $("#recipe-url").attr("href", recipeUrl);
          console.log(recipeUrl);
          console.log("boogers");
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
          console.log(response.hits[i].recipe.image);
          }
          topRecipes();
      });
});
