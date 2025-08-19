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
srtop.reveal(".blog", {
  interval: 200,
  opacity: 0,
  scale: 0.98,
  distance: "60px",
  origin: "bottom",
  easing: "ease-in-out",
});

// Hiệu ứng cho gallery và certifications
srtop.reveal(".daily-life .photo-gallery img", {
  interval: 120,
  origin: "bottom",
  distance: "40px",
  scale: 0.95,
});
srtop.reveal(".skills .bar img", {
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

srtop.reveal(".education .box", {
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

// Hiệu ứng nút Play Music
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("play-music-btn");
  const audio = document.getElementById("bg-music");
  const btnText = document.getElementById("music-btn-text");

  // Tạo sóng nhạc động
  const wave = document.createElement("span");
  wave.className = "music-wave";
  for (let i = 0; i < 3; i++) {
    const bar = document.createElement("span");
    wave.appendChild(bar);
  }
  btn.querySelector(".music-icon").appendChild(wave);

  let isPlaying = false;

  btn.onclick = function () {
    if (audio.paused) {
      audio.play();
      btn.classList.add("playing");
      btnText.textContent = "Pause Music";
      isPlaying = true;
    } else {
      audio.pause();
      btn.classList.remove("playing");
      btnText.textContent = "Play Music";
      isPlaying = false;
    }
  };

  // Nếu nhạc tự dừng (hết file, không lặp), cập nhật lại nút
  audio.onpause = function () {
    btn.classList.remove("playing");
    btnText.textContent = "Play Music";
    isPlaying = false;
  };
  audio.onplay = function () {
    btn.classList.add("playing");
    btnText.textContent = "Pause Music";
    isPlaying = true;
  };
});

// BLOG SECTION: Load blog files, render cards, carousel flow, and popup
document.addEventListener("DOMContentLoaded", function () {
  // 1) Danh sách blog
  const blogs = [
    { file: "devops_role.txt",      title: "The Importance of DevOps in Modern Businesses", desc: "DevOps is no longer just a buzzword." },
    { file: "devops_cloud_sre.txt", title: "DevOps, Cloud và SRE: Góc nhìn cá nhân về sự khác biệt", desc: "Kỹ Sư Đám Mây, DevOps Với SRE Mấy Ông Này Khác Gì Nhau?" },
    { file: "network_devops.txt",   title: "Networking trong Docker chuyên sâu", desc: "Networking trong Docker chuyên sâu." }
  ];

  // 2) Phần tử render
  const track = document.getElementById("blogCarousel");       // <div id="blogCarousel">
  const outer = document.getElementById("blogTrackOuter");     // <div id="blogTrackOuter">
  const gridFallback = document.querySelector(".blog-container");

  if (!track && !gridFallback) return;

  // 3) Tạo 1 card (không gắn listener trực tiếp!)
  function createCard(blog, idx) {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.style.setProperty("--delay", `${0.12 * (idx % 10)}s`);
    card.innerHTML = `
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-desc">${blog.desc}</p>
      <a class="blog-link" href="#" data-index="${idx}">Read more →</a>
    `;
    return card;
  }

  // 4) Render
  if (track) {
    track.innerHTML = "";
    blogs.forEach((b, i) => track.appendChild(createCard(b, i)));

    // Clone dãy để chạy loop mượt (A..X + A..X)
    const originals = Array.from(track.children);
    originals.forEach(el => track.appendChild(el.cloneNode(true)));

    // Tốc độ marquee dựa vào bề rộng thực
    function setSpeed() {
      const SPEED_PX_PER_SEC = 80;
      const duration = track.scrollWidth / SPEED_PX_PER_SEC;
      track.style.animationDuration = duration + "s";
    }
    setSpeed();
    window.addEventListener("resize", setSpeed);

    // Pause khi tab ẩn
    document.addEventListener("visibilitychange", () => {
      track.style.animationPlayState = document.hidden ? "paused" : "running";
    });

    // 5) EVENT DELEGATION: bắt click trên mọi .blog-link (kể cả bản clone)
    track.addEventListener("click", (e) => {
      const a = e.target.closest(".blog-link");
      if (!a) return;
      e.preventDefault();

      // Tìm index bài gốc tương ứng
      const card = a.closest(".blog-card");
      const allCards = Array.from(track.querySelectorAll(".blog-card"));
      const idxInTrack = allCards.indexOf(card);
      const originalIdx = ((idxInTrack % blogs.length) + blogs.length) % blogs.length;

      const b = blogs[originalIdx];
      showBlogPopup(b.title, `./assets/blogs/${b.file}`);
      track.style.animationPlayState = "paused"; // dừng dòng chảy khi đọc
    });

  } else if (gridFallback) {
    // Fallback không clone → có thể dùng delegation hoặc gắn trực tiếp
    gridFallback.innerHTML = "";
    blogs.forEach((b, i) => gridFallback.appendChild(createCard(b, i)));

    gridFallback.addEventListener("click", (e) => {
      const a = e.target.closest(".blog-link");
      if (!a) return;
      e.preventDefault();
      const idx = Number(a.getAttribute("data-index"));
      const b = blogs[idx];
      showBlogPopup(b.title, `./assets/blogs/${b.file}`);
    });
  }

  // 6) Popup
  const overlay  = document.getElementById("blogOverlay");
  const closeBtn = document.getElementById("closeBlogPopup");

  function showBlogPopup(title, fileUrl) {
    if (!overlay) return;
    const popupTitle   = overlay.querySelector(".popup-title");
    const popupContent = overlay.querySelector(".popup-content");
    if (!popupTitle || !popupContent) return;

    popupTitle.textContent = title;
    popupContent.textContent = "Loading...";
    overlay.classList.add("active");

    fetch(fileUrl)
      .then(res => {
        if (!res.ok) throw new Error("Không thể tải nội dung blog.");
        return res.text();
      })
      .then(text => { popupContent.textContent = text; })
      .catch(() => { popupContent.textContent = "Không thể tải nội dung blog."; });
  }

  // Đóng popup
  if (overlay && closeBtn) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        if (track) track.style.animationPlayState = "running";
      }
    });
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      if (track) track.style.animationPlayState = "running";
    });
  }
});
