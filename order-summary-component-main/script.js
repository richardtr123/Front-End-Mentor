const darktoggle = document.querySelector(".button");
let darkMode = sessionStorage.getItem("darkmode");

const enabledark = () => {
  document.body.classList.add("darkmode");
  sessionStorage.setItem("darkmode", "enabled");
};

const disabledark = () => {
  document.body.classList.remove("darkmode");
  sessionStorage.setItem("darkmode", null);
};

if (darkMode === "enabled") {
  enabledark();
}

darktoggle.addEventListener("click", () => {
  console.log(darkMode);
  darkMode = sessionStorage.getItem("darkmode");
  console.log(darkMode);
  if (darkMode === "enabled") {
    disabledark();
  } else {
    enabledark();
  }
});
