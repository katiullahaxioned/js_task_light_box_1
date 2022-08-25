var html = document.querySelector("html");
var card = document.querySelectorAll(".card");
var closeButtton = document.querySelector(".close-button");
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
var modalImage = document.querySelector(".modal-content img");
var modalTitle = document.querySelector(".modal-content .card-title");

card.forEach(function (list) {
  list.addEventListener("click", function () {
    var cardImageSrc = list.querySelector(".card img").getAttribute("src");
    var cardTitleText = list.querySelector(".card .card-title").innerText;

    modalTitle.innerHTML = cardTitleText;
    modalImage.setAttribute("src", cardImageSrc);

    html.classList.add("overflow");
    modal.classList.add("active");
    closeButtton.classList.add("active");

    closeButtton.addEventListener("click", function () {
      modalTitle.innerHTML = "";
      modalImage.setAttribute("src", "");
      html.classList.remove("overflow");
      modal.classList.remove("active");
      closeButtton.classList.remove("active");
    });

    modal.addEventListener("click", function () {
      modalTitle.innerHTML = "";
      modalImage.setAttribute("src", "");
      html.classList.remove("overflow");
      modal.classList.remove("active");
      closeButtton.classList.remove("active");
    });
  });
});