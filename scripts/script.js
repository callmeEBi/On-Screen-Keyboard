let $ = document;
let typedText = $.querySelector(".typed_text");
let key = Array.from($.querySelectorAll(".key"));
typedText.addEventListener("keydown", function (event) {
  let x = key.findIndex(function (item) {
    return item.dataset.key === event.code;
  });
  key[x].style.transform = "scale(0.9)";
  setTimeout(() => {
    key[x].style.transform = "scale(1)";
  }, 50);
});

$.body.addEventListener("click", function (e) {
  typedText.focus();
});

$.addEventListener("DOMContentLoaded", function () {
  typedText.focus();
});
