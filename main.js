const err = document.querySelector(".error");
const btn = document.querySelector(".btn");
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#pass-conf");
err.style.display = "none";
btn.addEventListener("click", (e) => {
  if (pass1.value !== pass2.value) {
    err.textContent = "Password didn`t match";
    err.style.display = "block";
  } else {
    err.style.display = "none";
  }
});
