// Storage KEY
const DASIFY_KEY = "DASIFY_KEY";

// Element
const hr = document.getElementById("hr");
const setting = document.querySelector(".setting");
const lessThans = document.querySelectorAll(".less-than");
const dropSides = document.querySelectorAll(".dropdown-sidebar");
const dropNavs = document.querySelectorAll(".drop-nav");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("#main");
const notif = document.querySelector(".notif");
const containerNotif = document.querySelector(".container-notif");
const profile = document.querySelector(".profile");
const containerprofile = document.querySelector(".container-profile");
const search = document.querySelector(".search-img");
const searchField = document.querySelector(".search-field");
const btnTheme = document.querySelector(".button-theme");
const imgIcons = document.querySelectorAll(".icon-img");
const navBtn = document.querySelectorAll(".nav-btn");

function lightTheme() {
  main.classList.toggle("light-theme");
  imgIcons.forEach((e) => {
    e.classList.toggle("light-img");
  });
  searchField.classList.toggle("s-theme");
  hr.classList.toggle("hr-theme");
  containerNotif.classList.toggle("notif-light");
  containerprofile.classList.toggle("notif-light");
}
btnTheme.addEventListener("click", function () {
  let data = {
    isDark: true,
  };
  if (main.classList.contains("light-theme")) {
    data.isDark = false;
  }
  localStorage.setItem(DASIFY_KEY, JSON.stringify(data));
  lightTheme();
});

function checkTheme() {
  if (localStorage.getItem(DASIFY_KEY) != null) {
    let dataFromStorage = JSON.parse(localStorage.getItem(DASIFY_KEY));
    if (dataFromStorage.isDark == true) {
      lightTheme();
    }
  }
}
checkTheme();

dropNavs.forEach((dropNav, index) => {
  dropNav.addEventListener("click", function () {
    // setting.classList.toggle("col-active");
    lessThans[index].classList.toggle("i-active");
    dropNav.classList.toggle("d-side-active");
    if (dropNav.classList.contains("d-side-active")) {
      dropNav.style.height =
        dropSides[index].offsetHeight + dropNav.offsetHeight + 20 + "px";
    } else {
      dropNav.style.height = "47.99px";
    }
    // dropSide.classList.toggle("d-active");
  });
});

hamburgerIcon.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-active");
  main.classList.toggle("main-active");
});

notif.addEventListener("click", function () {
  containerNotif.classList.toggle("n-active");
});
profile.addEventListener("click", function () {
  containerprofile.classList.toggle("n-active");
});
search.addEventListener("click", function () {
  searchField.classList.toggle("s-active");
});

// Mendeteksi lebar maksimum window
var maxWidth = 670; // Gantilah dengan nilai lebar maksimum yang Anda inginkan

function cekLebarWindow() {
  // Mendapatkan lebar window saat ini
  var lebarWindow =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Memeriksa apakah lebar window melebihi maksimum
  if (lebarWindow <= maxWidth) {
    sidebar.classList.add("sidebar-active");
    main.classList.add("main-active");
  } else {
    sidebar.classList.remove("sidebar-active");
    main.classList.remove("main-active");
  }
}

// Panggil fungsi saat window diubah ukurannya
window.addEventListener("resize", cekLebarWindow);

// Panggil fungsi sekali pada awal untuk inisialisasi
cekLebarWindow();
