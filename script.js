// Delete join btn on click
var join_btn = document.querySelector(".header__join-btn");
join_btn.onclick = function() {
    this.remove();
}

// Increase likes on heart click
var heart_icons = document.querySelectorAll(".recipe-card__heart");
for(var i = 0; i < heart_icons.length; ++i) {
    heart_icons[i].onclick = function() {
        var sibling = this.nextElementSibling;
        var num_likes = parseInt(sibling.innerHTML);
        num_likes++;
        sibling.innerHTML = num_likes;
    }
}

// Show search text in alert on go click
var search_btn = document.querySelector(".search__btn");
search_btn.onclick = function() {
    var search_text = this.previousElementSibling.value;
    if(search_text) {
        window.alert("You are searching for:\n" + search_text);
    }
    else {
        window.alert("You didn't input anything!!");
    }
}

// Display full recipe on click
var see_full_rec = document.querySelector(".rotd__link");
var full_recipe = document.querySelector(".rotd__full-recipe");
see_full_rec.onclick = function() {
    console.log(full_recipe.style.display);
    if(full_recipe.style.display != "block") {
        this.innerHTML = "Hide Full Recipe";
        full_recipe.style.display = "block";
    }
    else {
        this.innerHTML = "See Full Recipe";
        full_recipe.style.display = "none";
    }

    // NOTE: Must return false so browser doesn't reload
    return false;
}