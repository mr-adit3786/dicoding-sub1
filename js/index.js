// Fungsi tombol Up
tombolUp = document.getElementById("tombolUp");

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      tombolUp.style.display = "block";
   } else {
      tombolUp.style.display = "none";
   }
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
