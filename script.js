// JavaScript for toggling the mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(
    "[aria-controls='mobile-menu']"
  );
  const mobileMenu = document.getElementById("mobile-menu");

  // Collapse the mobile menu by default
  mobileMenu.classList.add("hidden");

  mobileMenuButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    mobileMenu.classList.toggle("hidden");
  });

  // Close the mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isMobileMenuButton = mobileMenuButton.contains(event.target);
    const isMobileMenu = mobileMenu.contains(event.target);

    if (!isMobileMenuButton && !isMobileMenu) {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.remove("hidden");
  dots[slideIndex - 1].classList.add("active");
}

var modal = document.getElementById("modal");

var img = document.getElementById("modal-image");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on an image, open the modal
function openModal(imageSrc) {
  modal.style.display = "flex";
  img.src = imageSrc;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const ingredients = [
  "assets/images/flour.png",
  "assets/images/flour.png",
  "assets/images/sugar.png",
  "assets/images/sugar.png",
  "assets/images/milk.png",
  "assets/images/milk.png",
  "assets/images/egg.png",
  "assets/images/egg.png",
  "assets/images/cheese.png",
  "assets/images/cheese.png",
];
var shuf_ingredients = ingredients.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (var i = 0; i < ingredients.length; i++) {
  let gameBox = document.createElement("div");
  gameBox.className =
    "game-item md:m-3 m-2 bg-white p-4 rounded-xl item-content relative overflow-hidden shadow-xl";
  gameBox.innerHTML =
    "<img src='" + shuf_ingredients[i] + "' class='w-16 h-16 '> ";

  gameBox.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (
            document.querySelectorAll(".boxMatch").length == ingredients.length
          ) {
            setTimeout(
              (document
                .getElementById("game-win")
                .classList.add("win-transition"),
              document.getElementById("game-win").classList.remove("hidden")),
              2000
            );
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(gameBox);
}
document.querySelectorAll("game-item").style.position = "relative";
