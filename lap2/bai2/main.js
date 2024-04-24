const inputUsername = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".btn");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
      alert("Đăng Nhập Thành Công");
      window.location.href = "home.html";
  }
});