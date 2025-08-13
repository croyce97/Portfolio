$(document).ready(function () {
  // Menu toggle cho mobile
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Đóng menu khi cuộn
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Hiện nút scroll-top khi cuộn xuống
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });

  // Smooth scroll khi click menu
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// Hiệu ứng chuyển động cho các section chính
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

var typed = new Typed(".typing-text", {
  strings: ["Devops Engineer", "Tech enthusiast", "Loving Naruto"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// Reveal từng section khi cuộn tới
srtop.reveal(".home", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});
srtop.reveal(".about", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});
srtop.reveal(".skills", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});
srtop.reveal(".education", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});
srtop.reveal(".certifications", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});
srtop.reveal(".daily-life", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  easing: "ease-in-out",
});

// Hiệu ứng cho gallery và certifications
srtop.reveal(".daily-life .photo-gallery img", {
  interval: 120,
  origin: "bottom",
  distance: "40px",
  scale: 0.95,
});
srtop.reveal(".certifications .box", {
  interval: 180,
  origin: "bottom",
  distance: "60px",
  scale: 0.97,
});

// Hiệu ứng tilt cho ảnh
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

document.getElementById("play-music-btn").onclick = function () {
  var audio = document.getElementById("bg-music");
  audio.play();
  this.style.display = "none";
};
