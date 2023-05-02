var button = document.querySelector(".show-cat");
//console.log(button);

var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("Yes");
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    //console.log("No");
    button.innerText = "The cat needs alone time.";
    button.classList.remove("disapear");
  }
});
