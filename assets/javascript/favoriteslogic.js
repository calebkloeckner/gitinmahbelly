console.log("working");
// $(toggle-class)




$(document).ready(function () {
    
    firebase.database().ref().on("child_added", function(childSnapshot, prevChildKey){
      savedRecipe = childSnapshot.val();
      console.log('do something')
      console.log(savedRecipe);
      $("#my-recipes").empty();
          for (j = 0; j < savedRecipe.length; j++) {
            console.log(savedRecipe[j]);
            $("#my-recipes").prepend(`
              <div class='card content foodtag' id='test'>
                <div class='card-image'>
                  <img class='content-image' src='${savedRecipe[j].image}'>
                  <div class='content-overlay'>
                  </div>
                </div>
                <div class='card-content content-details fadeIn'>
                  <p class='content-text foodish' data-button='${JSON.stringify(savedRecipe[j])}' data-id='${j}'>${savedRecipe[j].title}</p>
                </div>
              </div>`);
        }
   
    });
    favoriteFunctionLoad(favorites, indexOfRecipeToCheck);
});